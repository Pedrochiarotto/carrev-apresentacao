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
- O endereço `#slide-6`, por exemplo, abre diretamente a persona.

## Editar

- `src/app/app.html`: conteúdo e estrutura dos slides.
- `src/app/app.ts`: navegação, atalhos e títulos do mapa.
- `src/app/presentation-data.ts`: conteúdo dos novos canvas, equipe e marketing.
- `src/styles.css`: layout responsivo, impressão e paleta.
- `public/assets`: logotipo e foto extraídos do PowerPoint fornecido.

Cores principais: azul escuro `#071a36`, azul `#2878ef`, azul claro `#6bbcfb` e superfície `#f9fbff`. Sem fontes ou imagens externas em tempo de execução.

## Referências e conteúdo

O HTML original e `styles.css` foram preservados na raiz como referência; a aplicação Angular utiliza os arquivos em `src/`.

A revisão de 24/09/2026 usa o novo `CarRev_Avaliacao_Curso_Canvas_Editavel_CORRIGIDO.pptx` fornecido pelo usuário. Os 12 slides do arquivo foram adaptados para 10 slides web, com PESTEL, Porter e SWOT reunidos em uma síntese com pensamento estratégico. As pontuações da SWOT foram preservadas (+22, −17, +22, −17); as prioridades são uma síntese editorial das análises, identificada no slide.

Sequência atual:

1. CarRev — capa e identificação acadêmica.
2. Cinco pilares da transformação digital.
3. Propósito Transformador Massivo (PTM) e proposta de valor.
4. Oito princípios de inovação da Google aplicados à CarRev.
5. Papéis da equipe fundadora.
6. Persona: Gustavo Henrique Leal.
7. Diretrizes estratégicas: missão, visão, valores e PTM.
8. Síntese: PESTEL, Porter, SWOT e pensamento estratégico.
9. Business Model Canvas.
10. Os 8 Ps do marketing digital.

O mapa de empatia e a matriz BCG da versão anterior não fazem parte do novo arquivo e foram substituídos pela sequência revisada. O logotipo e a foto da persona continuam sendo os do material fornecido. O canvas de marketing preserva a data de 17/09/2026 indicada no PowerPoint.

Não há conexão com o backend do software CarRev; este projeto é a apresentação do negócio.

## Validação realizada

Revisão de 24/09/2026: build de produção concluído. Testes em Chromium verificaram os 10 slides em 1440×900, 1366×768, 768×1024 e 390×844, navegação, atalhos, mapa, links por slide, carregamento das imagens e ausência de erros de JavaScript. A impressão foi conferida com 10 páginas. Uma exportação está em `exports/CarRev-Jornada-Estrategica.pdf`.

## GitHub e publicação

- Repositório: https://github.com/Pedrochiarotto/carrev-apresentacao
- Apresentação: https://pedrochiarotto.github.io/carrev-apresentacao/

O workflow `.github/workflows/deploy-pages.yml` instala as dependências, compila o Angular com o caminho correto e publica pelo GitHub Pages a cada push na branch `main`. É possível acompanhar ou executar a publicação manualmente pela aba **Actions**. A origem do Pages deve estar configurada como **GitHub Actions** em Settings → Pages.

Os links por slide funcionam no site publicado, por exemplo, a síntese estratégica: `https://pedrochiarotto.github.io/carrev-apresentacao/#slide-8`.
