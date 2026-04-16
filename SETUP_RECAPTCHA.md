# Configuração do reCAPTCHA v3

## O que é reCAPTCHA v3?
reCAPTCHA v3 é um sistema de proteção contra bots desenvolvido pelo Google. Funciona silenciosamente sem incomodar o usuário com CAPTCHAs tradicionais.

## Como Configurar

### Passo 1: Criar Chaves do reCAPTCHA

1. Acesse: https://www.google.com/recaptcha/admin
2. Faça login com sua conta Google
3. Clique em **"Criar"** (+ botão no topo esquerdo)
4. Preencha as informações:
   - **Rótulo**: Pavón Soluções - Orçamentos
   - **reCAPTCHA version**: v3
   - **Domínios**: 
     - `localhost` (desenvolvimento)
     - `seu-dominio.com` (produção)

### Passo 2: Copiar as Chaves

Após criar, você receberá:
- **Site Key** (Chave do site)
- **Secret Key** (Chave secreta)

### Passo 3: Configurar Variáveis de Ambiente

Edite o arquivo `.env.local` na raiz do projeto:

```env
# reCAPTCHA v3 Configuration
NEXT_PUBLIC_RECAPTCHA_SITE_KEY=sua_site_key_aqui
RECAPTCHA_SECRET_KEY=sua_secret_key_aqui
```

### Passo 4: Reiniciar o Servidor

```bash
npm run dev
```

## ✅ Pronto!

O reCAPTCHA agora está ativo e protegendo seus formulários.

---

## Como Funciona

1. **Usuário preenche o formulário** - Sem ver nada do reCAPTCHA
2. **Google analisa o comportamento** - Atribui um score de 0.0 a 1.0
3. **Score > 0.5** - É considerado humano ✓
4. **Score < 0.5** - Pode ser bot ✗

---

## Testar

Para testar se está funcionando:

1. Abra o formulário em: `http://localhost:3000/orcamento`
2. Abra o **DevTools** (F12)
3. Vá para a aba **Console**
4. Você verá logs do reCAPTCHA

---

## Mais Informações

- Documentação oficial: https://developers.google.com/recaptcha/docs/v3
- Dashboard de análise: https://www.google.com/recaptcha/admin

---

## Notas Importantes

- ⚠️ **NUNCA** compartilhe sua Secret Key
- 🔒 A Secret Key deve ficar apenas no `.env.local` (não commitar)
- 🌐 O Site Key é pública (aparece no código frontend)
- 📊 Acesse o dashboard para ver estatísticas de uso
