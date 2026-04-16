# Configuração de Envio de Emails - Orçamentos

## Opção 1: Usando Resend (Recomendado) ⭐

### Passo 1: Criar conta no Resend
1. Acesse https://resend.com
2. Crie uma conta gratuitamente
3. Copie sua API Key na seção de configurações

### Passo 2: Configurar variáveis de ambiente
Edite o arquivo `.env.local` na raiz do projeto:

```env
RESEND_API_KEY=seu_api_key_do_resend_aqui
NEXT_PUBLIC_BUSINESS_EMAIL=seu_email@empresa.com
```

### Passo 3: Instalar Resend (Opcional)
Se quiser a melhor experiência:
```bash
npm install resend
```

### ✅ Pronto!
Os orçamentos serão enviados para seu email automaticamente!

---

## Opção 2: Usando Gmail + Nodemailer

### Passo 1: Configurar Gmail
1. Ative a autenticação de 2 fatores na sua conta Google
2. Gere uma "Senha de App" em https://myaccount.google.com/apppasswords
3. Copie a senha gerada

### Passo 2: Instalar dependência
```bash
npm install nodemailer
```

### Passo 3: Configurar .env.local
```env
EMAIL_USER=seu_email@gmail.com
EMAIL_PASSWORD=sua_senha_de_app_do_gmail
NEXT_PUBLIC_BUSINESS_EMAIL=seu_email@empresa.com
```

### Passo 4: Atualizar API route
Veja o arquivo `app/api/send-gmail/route.ts` (arquivo alternativo fornecido)

---

## Teste sem configuração

Se não configurar nada, o sistema continuará funcionando em **modo teste**:
- Os dados serão salvos no console
- Você verá uma mensagem de sucesso
- Configure depois quando quiser ativar emails reais

---

## Suporte

- **Resend**: https://resend.com/docs
- **Nodemailer**: https://nodemailer.com
- **Gmail App Passwords**: https://support.google.com/accounts/answer/185833
