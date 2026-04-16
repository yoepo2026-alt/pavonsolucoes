# 🔧 Solução: Erro de reCAPTCHA "Invalid site key"

## ❌ Problema

O erro `Invalid site key or not loaded in api.js` significa que:
- O site key está inválido ou expirado
- O domínio não está registrado no reCAPTCHA
- Há um problema de configuração

## ✅ Solução

### Opção 1: Corrigir a Configuração (Recomendado)

#### Passo 1: Gerar Novas Chaves
1. Acesse: https://www.google.com/recaptcha/admin
2. Clique no projeto anterior ou crie um novo
3. Delete o projeto antigo se necessário
4. **Crie um NOVO projeto** com estas configurações:
   - **Rótulo**: "Pavón Soluções"
   - **reCAPTCHA version**: v3
   - **Domínios**: 
     ```
     localhost
     127.0.0.1
     seu-dominio.com (quando em produção)
     ```

#### Passo 2: Copiar as NOVAS Chaves
Depois de criar, você receberá:
- Site Key (pública)
- Secret Key (secreta)

#### Passo 3: Atualizar `.env.local`
```env
NEXT_PUBLIC_RECAPTCHA_SITE_KEY=sua_nova_site_key_aqui
RECAPTCHA_SECRET_KEY=sua_nova_secret_key_aqui
```

#### Passo 4: Reiniciar o Servidor
```bash
# Ctrl+C para parar o servidor
npm run dev
```

---

### Opção 2: Desabilitar reCAPTCHA Temporariamente

Se quiser continuar testando SEM reCAPTCHA:

Edite `.env.local` e remova as linhas:
```env
# Comente ou remova:
# NEXT_PUBLIC_RECAPTCHA_SITE_KEY=...
# RECAPTCHA_SECRET_KEY=...
```

O sistema continuará funcionando normalmente, mas SEM proteção contra bots.

---

## 🛠️ Checklist de Verificação

- [ ] Site key foi criado no console Google reCAPTCHA
- [ ] Domínio `localhost` está adicionado
- [ ] Chaves foram copiadas corretamente
- [ ] Não há espaços em branco nas chaves do `.env.local`
- [ ] Servidor foi reiniciado após atualizar `.env.local`
- [ ] Browser foi atualizado (Ctrl+F5 ou Cmd+Shift+R)

---

## 📋 Passos Detalhados para Criar Novo Projeto

1. **Acesse o console:**
   - https://www.google.com/recaptcha/admin
   - Faça login com conta Google

2. **Crie um novo projeto:**
   - Clique no `+` (Create)
   - Nome: `Pavón Soluções - Orçamentos`
   - reCAPTCHA version: **v3** (marque isso!)

3. **Adicione domínios:**
   ```
   localhost
   127.0.0.1
   ```

4. **Clique em Create**

5. **Você verá:**
   ```
   Site Key: 6La...
   Secret Key: 6La...
   ```

6. **Copie exatamente as chaves** (sem espaços)

7. **Cole no `.env.local`**

8. **Restart do servidor**

---

## ⚠️ Coisas Importantes

- **Nunca compartilhe a Secret Key**
- **Site Key é pública** (pode aparecer no código)
- **Sempre use https em produção** (localhost funciona sem)
- **Cada projeto pode ter múltiplos domínios**

---

## ✅ Como Testar se Está Funcionando

1. Abra o Formulário: `http://localhost:3000/orcamento`
2. Abra DevTools: `F12`
3. Vá para **Console**
4. Você deve VER:
   ```
   [reCAPTCHA] Loaded successfully
   ```
   OU não deve ver erro de site key inválido

5. Preencha e envie o formulário
6. Se funcionar = ✓ Sucesso!

---

## 🚨 Se Ainda Não Funcionar

Tente:
1. **Limpar cache**: Ctrl+Shift+Delete (ou Cmd+Shift+Delete)
2. **Reiniciar servidor**: `npm run dev`
3. **Hard refresh**: Ctrl+F5
4. **Usar modo incógnito**: Ctrl+Shift+N (ou Cmd+Shift+N)
5. **Verificar DevTools** por outros erros

---

## 📚 Referências

- Documentação reCAPTCHA v3: https://developers.google.com/recaptcha/docs/v3
- Console reCAPTCHA: https://www.google.com/recaptcha/admin
- Guia de Domínios: https://developers.google.com/recaptcha/docs/domain_validation
