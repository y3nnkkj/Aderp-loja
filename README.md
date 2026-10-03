# ADERP — Loja demonstrativa

Site de apresentação/venda do **ADERP — Armazenamento de Energia Residencial Portátil**.

## O que já está pronto

- Página de venda moderna e responsiva.
- Preço de referência: **R$ 300,00**.
- Imagem do ADERP incluída em `public/aderp.png`.
- Descrição comercial do produto.
- Comparação entre nobreak, mini UPS e ADERP.
- Botão "Comprar" que **não realiza uma compra real**.
- Ao clicar, o servidor registra o interesse e a página mostra uma mensagem de compra indisponível.
- Painel `/admin` para o dono acompanhar a quantidade de cliques.
- Contador salvo no arquivo `data/clicks.json`.

## Como abrir no Visual Studio Code

1. Instale o Node.js (versão LTS).
2. Abra esta pasta no VS Code.
3. Abra o terminal do VS Code.
4. Rode:
   ```bash
   npm install
   ```
5. Depois:
   ```bash
   npm start
   ```
6. Abra:
   `http://localhost:3000`

## Painel do dono

O painel fica em:

`http://localhost:3000/admin?key=aderp-demo`

Para um site publicado de verdade, troque `aderp-demo` por uma senha/chave forte usando a variável de ambiente `ADMIN_KEY`.

Exemplo no Windows PowerShell:

```powershell
$env:ADMIN_KEY="uma-chave-forte"
npm start
```

Depois acesse:

`http://localhost:3000/admin?key=uma-chave-forte`

## Importante sobre o contador

O contador registra **cliques no botão de compra**, não "pessoas únicas". Se a mesma pessoa clicar várias vezes, cada clique é contabilizado. Para contar visitantes únicos, seria necessário adicionar um sistema de identificação/analytics adequado.

## Publicação

O projeto pode ser publicado em serviços que suportem Node.js. Para produção, recomenda-se usar um banco de dados em vez do arquivo JSON, proteger o painel de administrador e usar HTTPS.
