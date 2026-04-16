// ALTERNATIVA: Use este arquivo se preferir usar Gmail + Nodemailer ao invés de Resend
// Renomeie para "route.ts" e comentarie o arquivo anterior

import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { nome, email, telefone, empresa, servico, descricao, orcamento, data } = body;

    if (!nome || !email || !telefone || !servico || !descricao) {
      return NextResponse.json(
        { error: 'Campos obrigatórios faltando' },
        { status: 400 }
      );
    }

    const businessEmail = process.env.NEXT_PUBLIC_BUSINESS_EMAIL;
    const emailUser = process.env.EMAIL_USER;
    const emailPassword = process.env.EMAIL_PASSWORD;

    if (!emailUser || !emailPassword) {
      console.log('Orçamento recebido (modo teste):', { nome, email, telefone });
      return NextResponse.json(
        { 
          success: true,
          message: 'Configure EMAIL_USER e EMAIL_PASSWORD para ativar emails',
        },
        { status: 200 }
      );
    }

    // Configurar transporte do Nodemailer
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: emailUser,
        pass: emailPassword,
      },
    });

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

    // Enviar email para o negócio
    await transporter.sendMail({
      from: emailUser,
      to: businessEmail,
      replyTo: email,
      subject: `Novo Orçamento - ${nome}`,
      html: emailContent,
    });

    // Enviar confirmação para o cliente
    await transporter.sendMail({
      from: emailUser,
      to: email,
      subject: 'Orçamento Recebido - Pavón Soluções',
      html: `
        <h2>Obrigado, ${nome}!</h2>
        <p>Recebemos sua solicitação de orçamento.</p>
        <p>Nossa equipe analisará seu projeto e entrará em contato em até 24 horas com uma proposta personalizada.</p>
        <hr />
        <p><strong>Resumo da sua solicitação:</strong></p>
        <ul>
          <li>Serviço: ${servico}</li>
          <li>Orçamento Aproximado: ${orcamento || 'A definir'}</li>
          <li>Data Desejada: ${data || 'A definir'}</li>
        </ul>
        <p>Atenciosamente,<br/>Pavón Soluções</p>
      `,
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
