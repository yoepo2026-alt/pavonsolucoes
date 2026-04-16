import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { nome, email, telefone, empresa, servico, descricao, orcamento, data, recaptchaToken } = body;

    // Validação básica
    if (!nome || !email || !telefone || !servico || !descricao) {
      return NextResponse.json(
        { error: 'Campos obrigatórios faltando' },
        { status: 400 }
      );
    }

    // Validar reCAPTCHA
    if (recaptchaToken) {
      const recaptchaSecretKey = process.env.RECAPTCHA_SECRET_KEY;
      if (recaptchaSecretKey) {
        try {
          const recaptchaResponse = await fetch('https://www.google.com/recaptcha/api/siteverify', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: `secret=${recaptchaSecretKey}&response=${recaptchaToken}`,
          });

          const recaptchaData = await recaptchaResponse.json();

          if (!recaptchaData.success || recaptchaData.score < 0.5) {
            return NextResponse.json(
              { error: 'Validação de segurança falhou. Tente novamente.' },
              { status: 400 }
            );
          }
        } catch (recaptchaError) {
          console.error('Erro ao validar reCAPTCHA:', recaptchaError);
          // Continua mesmo se falhar (fallback)
        }
      }
    }

    const businessEmail = process.env.NEXT_PUBLIC_BUSINESS_EMAIL;
    const resendApiKey = process.env.RESEND_API_KEY;

    // Se não tiver a chave Resend, usar alternativa (console.log para teste)
    if (!resendApiKey) {
      console.log('Orçamento recebido:', {
        nome,
        email,
        telefone,
        empresa,
        servico,
        descricao,
        orcamento,
        data,
      });

      return NextResponse.json(
        { 
          success: true,
          message: 'Orçamento recebido com sucesso! (Modo teste - configure RESEND_API_KEY para enviar emails)',
        },
        { status: 200 }
      );
    }

    // Usar Resend para enviar emails
    const emailContent = `
    <h2>Novo Orçamento Solicitado</h2>
    <p><strong>Nome:</strong> ${nome}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Telefone:</strong> ${telefone}</p>
    <p><strong>Empresa:</strong> ${empresa || 'Não informado'}</p>
    <p><strong>Serviço:</strong> ${servico}</p>
    <p><strong>Orçamento Aproximado:</strong> ${orcamento || 'Não especificado'}</p>
    <p><strong>Data Desejada:</strong> ${data || 'Não informado'}</p>
    <hr />
    <p><strong>Descrição do Projeto:</strong></p>
    <p>${descricao.replace(/\n/g, '<br>')}</p>
    `;

    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${resendApiKey}`,
      },
      body: JSON.stringify({
        from: 'noreply@pavonsolucoes.com.br',
        to: businessEmail,
        replyTo: email,
        subject: `Novo Orçamento - ${nome}`,
        html: emailContent,
      }),
    });

    if (!response.ok) {
      console.error('Erro ao enviar email:', await response.text());
      return NextResponse.json(
        { error: 'Erro ao enviar orçamento' },
        { status: 500 }
      );
    }

    // Enviar também um email de confirmação para o cliente
    await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${resendApiKey}`,
      },
      body: JSON.stringify({
        from: 'noreply@pavonsolucoes.com.br',
        to: email,
        subject: 'Orçamento Recebido - Pavón Soluções',
        html: `
          <h2>Obrigado, ${nome}!</h2>
          <p>Recebemos sua solicitação de orçamento.</p>
          <p>Nossa equipe analisará seu projeto e entrará em contato em até 48 horas com uma proposta personalizada.</p>
          <hr />
          <p><strong>Resumo da sua solicitação:</strong></p>
          <ul>
            <li>Serviço: ${servico}</li>
            <li>Orçamento Aproximado: ${orcamento || 'A definir'}</li>
            <li>Data Desejada: ${data || 'A definir'}</li>
          </ul>
          <p>Atenciosamente,<br/>Pavón Soluções</p>
        `,
      }),
    }).catch(err => console.error('Erro ao enviar confirmação:', err));

    return NextResponse.json(
      { 
        success: true,
        message: 'Orçamento enviado com sucesso!',
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Erro no servidor:', error);
    return NextResponse.json(
      { error: 'Erro ao processar a solicitação' },
      { status: 500 }
    );
  }
}
