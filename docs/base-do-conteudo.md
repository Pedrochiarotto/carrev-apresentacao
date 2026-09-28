# Base da revisão de conteúdo

A apresentação conecta o material acadêmico ao código local do produto CarRev, consultado em 24/09/2026. Foram preservados os dez slides e a síntese PESTEL + Porter + SWOT + pensamento estratégico no slide 8.

## Evidências consultadas

Repositórios locais: `TCC/car-agent-backend` (HEAD `dc6990d`) e `TCC/car-agent-frontend` (HEAD `c2add8b`). A revisão considera os arquivos locais consultados; não representa auditoria de produção nem execução dos testes do produto.

| Evidência | Uso na apresentação |
| --- | --- |
| Backend: `README.md`, `app/api/v1/router.py` | API FastAPI e módulos de autenticação, estoque, pátios, mercado, preços, alertas e dashboard. |
| Backend: `scraping/README.md`, `scraping/pipelines.py` | Scrapy, execução assíncrona com Celery, normalização e histórico dos anúncios. |
| Backend: `app/services/pricing_service.py` | Estimativa via Random Forest quando disponível, alternativa com comparáveis e resposta para dados insuficientes; exposição do método e quantidade de comparáveis. |
| Backend: `app/models/inventory.py` | Registro de compra, venda, status e data de venda. |
| Backend: `app/api/deps.py`; frontend: `README.md` | Perfis de usuário e acesso autenticado. Não foi afirmada certificação de segurança ou conformidade. |
| Frontend: `README.md`, estrutura de `src/components` e `src/services` | Angular, comparação com FIPE, oportunidades, negociações, pátios e interface da operação. |

## Limites das afirmações

- **Implementação:** existência no código do MVP; não equivale a disponibilidade comprovada em produção ou integração externa operante.
- **Estimativa:** apoio à decisão humana. Preços de anúncios e referência FIPE não comprovam o valor de venda realizado. A faixa retornada pelo estimador não foi tratada como garantia de precisão.
- **Resultados:** redução de tempo, aumento de margem e giro são hipóteses de impacto a medir em pilotos. Margem após custos é uma métrica proposta, não uma funcionalidade financeira auditada.
- **Negócio:** assinatura, preço, aquisição, retenção e parcerias são hipóteses a validar. Não há alegação de receita, contratos ou clientes já conquistados.
- **Evolução:** agente com maior autonomia e novas integrações permanecem próximos passos, sujeitos ao uso e à validação.
- **SWOT e Porter:** pesos e intensidades são avaliações do exercício acadêmico; não são pesquisa competitiva atualizada ou métricas operacionais. Os totais SWOT originais foram mantidos, com síntese qualitativa revisada.
- **Persona e equipe:** Gustavo é a persona de referência do material; os papéis são frentes propostas, sem afirmar departamentos já constituídos.

## Valor por público

- Dono e gestor: comparar oportunidades, apoiar preço e acompanhar capital no estoque.
- Vendedor: registrar negociações e usar referências consistentes na conversa comercial.
- Equipe técnica: manter dados, serviços, estimadores e interface observáveis e verificáveis.
- Comprador final: compreender as referências de preço e discutir características do veículo; a ferramenta não substitui vistoria ou avaliação profissional.

## Validação desta entrega

Compilação da apresentação, navegação e renderização em desktop/tablet/celular; conferência de impressão com dez páginas. O PDF do repositório acompanha o texto revisado. O site público só recebe esta revisão após merge do pull request na branch `main`.
