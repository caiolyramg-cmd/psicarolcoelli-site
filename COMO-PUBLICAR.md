# Como publicar o site novo

Hospedagem: **Netlify** (plano gratuito, com HTTPS automático).
Domínio: `psicarolcoelli.com`, registrado na **Squarespace Domains** (antigo Google Domains).

> Antes de publicar, salve as imagens que faltam (lista no LEIA-ME.md), principalmente a foto da Carol. Depois gere o zip de novo (passo 0).

## 0. Gerar o pacote (só se você mudou algo)
Compacte só `index.html`, `sobre.html`, `servicos.html`, `produtos.html`, `blog.html` e as pastas `css`, `js` e `img`.
O arquivo `site-para-publicar.zip` já está pronto com a versão atual.

## 1. Subir o site no Netlify (cerca de 5 min)
1. Acesse https://app.netlify.com/signup e crie a conta (dá para entrar com o Google da Carol).
2. No painel, vá em **Add new project → Deploy manually**.
3. Arraste o `site-para-publicar.zip` (ou uma pasta com os arquivos) para a área indicada.
4. O Netlify gera um endereço provisório, tipo `nome-aleatorio.netlify.app`. Abra e confira o site.
5. Em **Project configuration → Change project name**, troque para algo como `psicarolcoelli` (o endereço fica `psicarolcoelli.netlify.app`).

## 2. Ligar o domínio
1. No Netlify: **Domain management → Add a domain** → digite `psicarolcoelli.com` → confirme.
   O Netlify vai dizer que o domínio está em outro provedor. Escolha a opção de configurar o DNS externo e anote os valores que ele mostrar.
2. Na Squarespace: https://account.squarespace.com/domains → `psicarolcoelli.com` → **DNS** (DNS Settings).
3. **Remova** o que liga o domínio ao Google Sites:
   - registro **CNAME** `www` → `ghs.googlehosted.com`
   - qualquer **encaminhamento/forwarding** do domínio raiz (ou o preset "Google Sites", se aparecer)
4. **Adicione** os registros:
   | Tipo | Host | Valor |
   |---|---|---|
   | A | @ | `75.2.60.5` |
   | CNAME | www | `psicarolcoelli.netlify.app` (o nome do passo 1.5) |

   Se o Netlify mostrar valores diferentes no passo 2.1, use os do Netlify.
5. Espere a propagação, que leva de alguns minutos a algumas horas. O Netlify emite o certificado HTTPS sozinho. Se não emitir, vá em **Domain management → HTTPS → Verify DNS configuration**.

## 3. Depois de publicar
- Ao desligar o site antigo do domínio, o Google Sites continua existindo, só que sem o endereço. Dá para deixá-lo como backup.
- Para atualizar o site no futuro: Netlify → **Deploys** → arraste a pasta ou o zip novo.
- Opcional: no Google Search Console, adicione o domínio para acompanhar a indexação.
