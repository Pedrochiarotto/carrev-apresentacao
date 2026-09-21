# CarRev — Jornada Estratégica

Apresentação interativa em Angular 21, TypeScript e CSS, com 10 slides em português e identidade visual em azul escuro.

## Executar

Requer Node.js 24 (ou versão compatível com Angular 21) e npm.

```bash
npm ci
npm start
```

Abra http://localhost:4200. Se a porta estiver ocupada, use `npm start -- --port 4300` e abra http://localhost:4300. Para gerar a versão de produção:

```bash
npm run build
```

Os arquivos para hospedagem estática ficam em `dist/carrev/browser`. Para publicar em uma subpasta, use `npm run build -- --base-href /nome-da-pasta/`.

## Apresentar

- Setas esquerda/direita ou Page Up/Page Down: navegar.
- Home/End: primeiro/último slide.
- M: abrir o mapa; Escape: fechar.
- F: alternar tela cheia.
- Botão PDF: abrir impressão, com opção de salvar em PDF pelo navegador.
- Os pontos no rodapé e o mapa permitem escolher uma etapa.
- O endereço `#slide-4`, por exemplo, abre diretamente a persona.

## Editar

- `src/app/app.html`: conteúdo e estrutura dos slides.
- `src/app/app.ts`: navegação, atalhos e títulos do mapa.
- `src/styles.css`: layout responsivo, impressão e paleta.
- `public/assets`: logotipo e foto extraídos do PowerPoint fornecido.

Cores principais: azul escuro `#071a36`, azul `#2878ef`, azul claro `#6bbcfb` e superfície `#f9fbff`. Sem fontes ou imagens externas em tempo de execução.

## Referências e conteúdo

O HTML original e `styles.css` foram preservados na raiz como referência; a aplicação Angular utiliza os arquivos em `src/`.

O PowerPoint `CarRev_Avaliacao_Curso_Canvas_Editavel_CORRIGIDO.pptx` orientou os ajustes: persona Gustavo Henrique Leal, quatro anos de experiência, pontuações negativas nas fraquezas e ameaças da SWOT, identificação acadêmica e itens complementares do Canvas. O dashboard ausente no HTML foi substituído por uma composição com o logotipo original. A matriz BCG mantém seu caráter ilustrativo.

Não há conexão com o backend do software CarRev; este projeto é a apresentação do negócio.

## Validação realizada

Build de produção concluído. Testes em Chromium verificaram os 10 slides em 1440×900, 1366×768, 768×1024 e 390×844, navegação, atalhos, mapa, links por slide, carregamento das imagens e ausência de erros de JavaScript. A impressão foi conferida com 10 páginas. Uma exportação está em `exports/CarRev-Jornada-Estrategica.pdf`.

## GitHub e publicação

- Repositório: https://github.com/Pedrochiarotto/carrev-apresentacao
- Apresentação: https://pedrochiarotto.github.io/carrev-apresentacao/

O workflow `.github/workflows/deploy-pages.yml` instala as dependências, compila o Angular com o caminho correto e publica pelo GitHub Pages a cada push na branch `main`. É possível acompanhar ou executar a publicação manualmente pela aba **Actions**. A origem do Pages deve estar configurada como **GitHub Actions** em Settings → Pages.

Os links por slide funcionam no site publicado, por exemplo: `https://pedrochiarotto.github.io/carrev-apresentacao/#slide-5`.
