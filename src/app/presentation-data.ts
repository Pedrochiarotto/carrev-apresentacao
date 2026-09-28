// Conteúdo revisado com base no código local do produto e no material acadêmico.
export const presentationData = {
  "pillars": [
    {
      "title": "Clientes",
      "actions": [
        "Observar compra, preço e negociação.",
        "Testar o fluxo com gestores e vendedores.",
        "Entender dúvidas do comprador final.",
        "Reduzir consultas e retrabalho."
      ],
      "tools": [
        "Estoque e negociações.",
        "Comparativo com FIPE e mercado.",
        "Entrevistas com revendas piloto.",
        "Testes de tarefas no dashboard."
      ],
      "metrics": [
        "Tempo para avaliar um veículo.",
        "Conclusão das tarefas-chave.",
        "Uso recorrente por perfil.",
        "Clareza percebida na negociação."
      ]
    },
    {
      "title": "Competição",
      "actions": [
        "Comparar a rotina com planilhas e portais.",
        "Conectar análise à decisão de compra.",
        "Diferenciar pela explicação dos preços.",
        "Validar disposição a pagar."
      ],
      "tools": [
        "Anúncios e referências FIPE.",
        "Análise de funcionalidades.",
        "Demonstrações com casos reais.",
        "Pesquisa com lojas multimarcas."
      ],
      "metrics": [
        "Conversão de piloto em contrato.",
        "Retenção por revenda.",
        "Uso da análise de veículos.",
        "Motivos de perda e cancelamento."
      ]
    },
    {
      "title": "Dados",
      "actions": [
        "Coletar e normalizar anúncios.",
        "Preservar histórico de preços.",
        "Comparar modelo, ano, km e região.",
        "Informar método e limite da estimativa."
      ],
      "tools": [
        "Scrapy / PostgreSQL.",
        "Celery e Redis: tarefas assíncronas.",
        "FastAPI / interface Angular.",
        "ML ou comparáveis de mercado."
      ],
      "metrics": [
        "Atualidade e cobertura da base.",
        "Anúncios válidos e comparáveis.",
        "Erro do modelo em validação.",
        "Falhas e duração das coletas."
      ]
    },
    {
      "title": "Inovação",
      "actions": [
        "Validar uma jornada completa no MVP.",
        "Confrontar estimativa e avaliação humana.",
        "Testar alertas úteis à rotina.",
        "Evoluir o agente a partir do uso."
      ],
      "tools": [
        "Estoque, pátios e oportunidades.",
        "Estimador com alternativa estatística.",
        "Alertas e parâmetros da revenda.",
        "Testes, versões e feedback."
      ],
      "metrics": [
        "Hipóteses validadas no piloto.",
        "Ações tomadas a partir de alertas.",
        "Estimativas úteis ao gestor.",
        "Tempo entre feedback e melhoria."
      ]
    },
    {
      "title": "Valor",
      "actions": [
        "Apoiar compra e preço com evidências.",
        "Acompanhar capital parado no estoque.",
        "Registrar negociação e venda.",
        "Explicar referências ao comprador."
      ],
      "tools": [
        "Preço de compra e de venda.",
        "Data de venda e status de estoque.",
        "FIPE, anúncios e preço estimado.",
        "Dashboard e indicadores."
      ],
      "metrics": [
        "Dias em estoque por veículo.",
        "Margem realizada após custos.",
        "Tempo gasto em pesquisa.",
        "Satisfação da loja e do comprador."
      ]
    }
  ],
  "drivers": [
    {
      "title": "Pessoas no centro",
      "text": "Gestor decide; vendedor negocia; comprador entende a proposta."
    },
    {
      "title": "Tecnologia habilitadora",
      "text": "A coleta alimenta análises que chegam à rotina da loja."
    },
    {
      "title": "Colaboração e ecossistema",
      "text": "Compartilhar informação conforme o perfil de acesso."
    },
    {
      "title": "Agilidade e adaptabilidade",
      "text": "Pilotar, medir e ajustar antes de ampliar a operação."
    },
    {
      "title": "Decisões baseadas em dados",
      "text": "Preço anunciado é referência; venda realizada é resultado."
    }
  ],
  "principles": [
    {
      "title": "Foque o usuário",
      "fields": [
        {
          "label": "Insights do usuário",
          "text": "Entender como o lojista escolhe, avalia e negocia cada veículo."
        },
        {
          "label": "Ações / iniciativas",
          "text": "Testar pesquisa / análise / negociação / estoque."
        },
        {
          "label": "Métricas de sucesso",
          "text": "Tempo por tarefa, clareza e uso recorrente."
        }
      ]
    },
    {
      "title": "Compartilhe tudo",
      "fields": [
        {
          "label": "Insights / oportunidades",
          "text": "Gestor e vendedor precisam de referências consistentes."
        },
        {
          "label": "Ações / iniciativas",
          "text": "Centralizar informações com acesso por perfil."
        },
        {
          "label": "Métricas de sucesso",
          "text": "Menos retrabalho e divergências de informação."
        }
      ]
    },
    {
      "title": "Procure ideias por toda parte",
      "fields": [
        {
          "label": "Fontes de inspiração",
          "text": "Ouvir lojas, compradores e quem opera a coleta."
        },
        {
          "label": "Ações / iniciativas",
          "text": "Cruzar feedback, falhas e análise de concorrentes."
        },
        {
          "label": "Métricas de sucesso",
          "text": "Problemas recorrentes resolvidos e ideias testadas."
        }
      ]
    },
    {
      "title": "Pense grande, mas comece pequeno",
      "fields": [
        {
          "label": "Grandes objetivos",
          "text": "Conectar inteligência de mercado à operação da revenda."
        },
        {
          "label": "Primeiros passos (pequenos)",
          "text": "Validar o fluxo completo com poucas lojas e modelos."
        },
        {
          "label": "Métricas de sucesso",
          "text": "Uso semanal, conclusão das tarefas e retenção."
        }
      ]
    },
    {
      "title": "Nunca deixe de fracassar",
      "fields": [
        {
          "label": "Hipóteses / experimentos",
          "text": "Uma estimativa pode falhar por poucos dados ou viés."
        },
        {
          "label": "Lições aprendidas",
          "text": "Comparar métodos e investigar erros por segmento."
        },
        {
          "label": "Como vamos ajustar",
          "text": "Ajustar modelo, amostra e interface com evidências."
        }
      ]
    },
    {
      "title": "Desencadeie com imaginação, alimente com dados",
      "fields": [
        {
          "label": "Ideias criativas",
          "text": "Sugerir oportunidades sem esconder a incerteza."
        },
        {
          "label": "Dados para validar",
          "text": "Usar anúncios, FIPE, região, km e vendas registradas."
        },
        {
          "label": "Decisões orientadas a dados",
          "text": "Mostrar comparáveis, método e limites da estimativa."
        }
      ]
    },
    {
      "title": "Seja uma plataforma",
      "fields": [
        {
          "label": "Valor para outros",
          "text": "Unir estoque, pátios, negociações e análise de mercado."
        },
        {
          "label": "Ações / iniciativas",
          "text": "Evoluir Angular e API FastAPI por módulos."
        },
        {
          "label": "Ecossistema / parcerias",
          "text": "Validar integrações e parceiros antes de prometer cobertura."
        }
      ]
    },
    {
      "title": "Tenha uma missão significativa",
      "fields": [
        {
          "label": "Nosso propósito",
          "text": "Ajudar a loja a decidir e o comprador a entender o preço."
        },
        {
          "label": "Como geramos impacto",
          "text": "Reduzir pesquisa manual e tornar referências claras."
        },
        {
          "label": "Métricas de impacto",
          "text": "Medir tempo, giro e margem; não prometer lucro garantido."
        }
      ]
    }
  ],
  "roles": [
    {
      "title": "Diretor visionário",
      "owner": "Pedro Chiarotto / Equipe CarRev",
      "actions": [
        "Definir o público e a prioridade do MVP.",
        "Validar problemas com revendas piloto.",
        "Decidir entregas por valor e evidência.",
        "Alinhar produto, negócio e propósito."
      ],
      "skills": "Estratégia B2B, priorização, entrevistas e conhecimento da operação automotiva.",
      "impact": "Prioriza decisões reais da loja antes de ampliar o escopo."
    },
    {
      "title": "Designer de experiência do usuário",
      "owner": "Equipe de Produto e Dados CarRev",
      "actions": [
        "Mapear gestor, vendedor e comprador.",
        "Explicar FIPE, mercado e estimativa.",
        "Testar tarefas e estados sem dados.",
        "Transformar feedback em melhorias."
      ],
      "skills": "UX/UI, pesquisa, acessibilidade e comunicação de dados e incertezas.",
      "impact": "Torna análises compreensíveis para quem compra, precifica e vende."
    },
    {
      "title": "Programador / Engenheiro",
      "owner": "Equipe Técnica CarRev",
      "actions": [
        "Manter Angular, FastAPI e PostgreSQL.",
        "Operar Scrapy, Celery e Redis.",
        "Testar acesso, qualidade e estimadores.",
        "Monitorar falhas e versionar entregas."
      ],
      "skills": "Python, TypeScript, API, banco de dados, coleta, ML e testes.",
      "impact": "Entrega uma base técnica verificável para decisões assistidas."
    },
    {
      "title": "Gestor de finanças e negócios",
      "owner": "Equipe de Negócios CarRev",
      "actions": [
        "Testar assinatura e disposição a pagar.",
        "Medir aquisição, suporte e infraestrutura.",
        "Estruturar pilotos e parcerias.",
        "Comparar retenção e custo por revenda."
      ],
      "skills": "Modelo SaaS, custos, vendas consultivas, retenção e negociação B2B.",
      "impact": "Valida um negócio sustentável, sem confundir projeções com receita."
    }
  ],
  "marketing": [
    {
      "title": "Pesquisa",
      "actions": [
        "Entrevistar donos, gestores e vendedores.",
        "Mapear pesquisa, compra e estoque parado.",
        "Ouvir dúvidas do comprador final.",
        "Comparar planilhas, portais e softwares."
      ]
    },
    {
      "title": "Planejamento",
      "actions": [
        "Focar pequenas e médias multimarcas.",
        "Posicionar apoio à decisão e à operação.",
        "Definir piloto e critérios de sucesso.",
        "Testar preço da assinatura e retenção."
      ]
    },
    {
      "title": "Produção",
      "actions": [
        "Demonstrar análise, negociação e estoque.",
        "Explicar FIPE, comparáveis e estimador.",
        "Criar guias por perfil de usuário.",
        "Mostrar quando faltam dados confiáveis."
      ]
    },
    {
      "title": "Publicação",
      "actions": [
        "Publicar demonstrações do produto.",
        "Explicar preço anunciado versus venda.",
        "Usar casos de piloto autorizados.",
        "Apresentar resultados com método e período."
      ]
    },
    {
      "title": "Promoção",
      "actions": [
        "Prospectar revendas com perfil aderente.",
        "Usar LinkedIn, contato direto e parceiros.",
        "Oferecer demonstração ou piloto a validar.",
        "Medir custo por lead e por loja ativada."
      ]
    },
    {
      "title": "Propagação",
      "actions": [
        "Pedir indicação após valor percebido.",
        "Compartilhar casos com consentimento.",
        "Testar programa de indicação entre lojas.",
        "Proteger informações comerciais da revenda."
      ]
    },
    {
      "title": "Personalização",
      "actions": [
        "Adaptar a conversa ao papel do usuário.",
        "Demonstrar modelos e região da loja.",
        "Configurar margens e alertas úteis.",
        "Orientar o uso com acompanhamento inicial."
      ]
    },
    {
      "title": "Precisão",
      "actions": [
        "Medir demonstração / ativação / retenção.",
        "Acompanhar uso das tarefas principais.",
        "Separar erro de preço de conversão comercial.",
        "Ajustar campanhas pelo custo e valor gerado."
      ]
    }
  ],
  "purpose": [
    {
      "title": "O que me importa profundamente?",
      "text": "Dar às revendas acesso a evidências para comprar e precificar melhor, com informações mais claras para o comprador final."
    },
    {
      "title": "Que problema quero resolver?",
      "text": "Pesquisa dispersa, preços pouco comparáveis e estoque parado dificultam decisões e comprometem tempo e capital da loja."
    },
    {
      "title": "Que coisa incrível quero criar?",
      "text": "Uma plataforma que conecta oportunidades, FIPE, estimativa de preço, negociações e estoque por pátio em uma mesma jornada."
    },
    {
      "title": "Qual é o meu propósito?",
      "text": "Transformar dados automotivos em decisões explicáveis, com mais controle para a revenda e transparência na negociação."
    },
    {
      "title": "Do que teria mais orgulho?",
      "text": "Ver lojas usando dados de forma recorrente e compradores entendendo as referências de preço apresentadas."
    },
    {
      "title": "O que faria se nunca pudesse falhar?",
      "text": "Construir uma referência em inteligência automotiva B2B, crescendo a partir de resultados validados com revendas."
    },
    {
      "title": "Um bilhão de dólares para um mundo melhor?",
      "text": "Ampliar o acesso das pequenas lojas a dados e tecnologia, capacitando equipes e reduzindo decisões de estoque mal informadas."
    }
  ]
} as const;
