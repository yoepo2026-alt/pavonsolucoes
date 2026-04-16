# Sistema de Orçamentos - Guia Completo

## O Que Foi Implementado

✅ **Formulário de Orçamento** com validação  
✅ **Envio de Emails** (para seu negócio e confirmação para o cliente)  
✅ **reCAPTCHA v3** para proteção contra bots  
✅ **Feedback Visual** com mensagens de sucesso e erro  
✅ **Responsivo** e otimizado para mobile  

---

## Como Funciona para o Usuário

1. **Usuário acessa** `/orcamento`
2. **Preenche o formulário** com seus dados
3. **reCAPTCHA** valida silenciosamente (sem aparecer popup)
4. **Clica em Enviar**
5. **Recebe:**
   - ✓ Mensagem de sucesso na tela
   - ✓ Email de confirmação
   - **Você recebe:** Email com todos os dados do orçamento

---

## Como Funciona Nos Bastidores

### 1. Frontend (`/app/orcamento/page.tsx`)
- Coleta dados do formulário
- Obtém token do reCAPTCHA v3
- Envia tudo para a API

### 2. Backend (`/app/api/send/route.ts`)
- Valida o token do reCAPTCHA
- Envia email para seu negócio com `reply-to` do cliente
- Envia email de confirmação para o cliente
- Retorna sucesso/erro

### 3. Emails
- **Para o cliente:** Confirmação + resumo da solicitação
- **Para você:** Dados completos do orçamento + email para responder

---

## Configuração Necessária

### 1️⃣ Resend (Para enviar emails)
- Acesse: https://resend.com
- Configure a chave em `.env.local`
- Ver: [SETUP_EMAILS.md](SETUP_EMAILS.md)

### 2️⃣ reCAPTCHA v3 (Para proteção)
- Acesse: https://www.google.com/recaptcha/admin
- Configure as chaves em `.env.local`
- Ver: [SETUP_RECAPTCHA.md](SETUP_RECAPTCHA.md)

---

## Arquivos Importantes

```
app/
├── orcamento/page.tsx          # Página do formulário
├── api/send/route.ts           # API que envia emails e valida reCAPTCHA
└── components/
    └── PricingPlans.tsx        # (Bonus) Carrossel de preços com swipe
    └── ImageCarousel.tsx       # (Bonus) Carrossel de imagens com swipe

.env.local                       # Variáveis de ambiente (não commitar!)
SETUP_EMAILS.md                  # Guia de configuração de emails
SETUP_RECAPTCHA.md               # Guia de configuração do reCAPTCHA
```

---

## Variáveis de Ambiente Necessárias

```env
# Email Configuration
RESEND_API_KEY=sua_chave_aqui

# Seu email
NEXT_PUBLIC_BUSINESS_EMAIL=seu@email.com

# reCAPTCHA
NEXT_PUBLIC_RECAPTCHA_SITE_KEY=sua_site_key_aqui
RECAPTCHA_SECRET_KEY=sua_secret_key_aqui
```

---

## Testas Sem Configuração

Se não configurar nada, o sistema funciona em **modo teste**:
- ✓ Dados salvos no console do servidor
- ✓ Mensagem de sucesso aparece na tela
- ✓ Configure depois para ativar emails reais

---

## Fluxo Completo do Usuário

```
┌─────────────────────────┐
│ Usuário acessa /orcamento
└───────────┬─────────────┘
            │
            ▼
┌─────────────────────────┐
│ Preenche formulário
└───────────┬─────────────┘
            │
            ▼
┌─────────────────────────┐
│ reCAPTCHA valida (silencioso)
└───────────┬─────────────┘
            │
            ▼
┌─────────────────────────┐
│ Clica "Enviar"
└───────────┬─────────────┘
            │
            ▼
┌─────────────────────────────────┐
│ Servidor valida dados + reCAPTCHA
└───────────┬─────────────────────┘
            │
            ├──► Envia email para VOCÊ
            │
            ├──► Envia email para cliente (confirmação)
            │
            └──► Retorna sucesso
                    │
                    ▼
        ┌──────────────────────────┐
        │ Mostra mensagem de sucesso
        │ com animação
        └──────────────────────────┘
```

---

## Customizações Futuras

Você pode:
- ✏️ Alterar o intervalo de rePAPTCHA (0.0 a 1.0)
- 📧 Adicionar mais campos ao formulário
- 🎨 Customizar o template de email
- 📱 Adicionar notificação via WhatsApp
- 💾 Salvar orçamentos em banco de dados

---

## Suporte

- **Resend**: https://resend.com/docs
- **reCAPTCHA v3**: https://developers.google.com/recaptcha/docs/v3
- **Next.js API Routes**: https://nextjs.org/docs/app/building-your-application/routing/route-handlers
