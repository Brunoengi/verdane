export interface ServicoItem {
  nome: string;
  descricao: string;
}

export interface ServicoCategoria {
  slug: string;
  titulo: string;
  descricao: string;
  icone: string;
  itens: ServicoItem[];
}

export const servicos: ServicoCategoria[] = [
  {
    slug: 'licenciamento-ambiental',
    titulo: 'Licenciamento Ambiental',
    descricao:
      'Regularizamos seu empreendimento e acompanhamos todas as etapas do processo junto aos órgãos ambientais.',
    icone: 'FileCheck',
    itens: [
      {
        nome: 'Licenciamento Municipal, Estadual e Federal',
        descricao:
          'Assessoria completa em todas as esferas do licenciamento ambiental.',
      },
      {
        nome: 'Licença Prévia (LP)',
        descricao:
          'Atesta a viabilidade ambiental do empreendimento na fase preliminar.',
      },
      {
        nome: 'Licença de Instalação (LI)',
        descricao:
          'Autoriza a instalação do empreendimento conforme projetos aprovados.',
      },
      {
        nome: 'Licença de Operação (LO)',
        descricao:
          'Autoriza a operação da atividade após verificação do cumprimento das exigências.',
      },
      {
        nome: 'Renovação de Licenças',
        descricao:
          'Manutenção da regularidade com renovações dentro dos prazos legais.',
      },
      {
        nome: 'Atendimento de Condicionantes',
        descricao:
          'Suporte completo no cumprimento das exigências estabelecidas nas licenças.',
      },
      {
        nome: 'Relatórios Técnicos',
        descricao:
          'Elaboração de documentação técnica para instrução de processos.',
      },
      {
        nome: 'Relatórios de Conformidade Ambiental',
        descricao:
          'Comprovação periódica do atendimento às normas e condicionantes.',
      },
      {
        nome: 'Acompanhamento Ambiental de Empreendimentos',
        descricao:
          'Monitoramento contínuo durante todas as fases do empreendimento.',
      },
      {
        nome: 'Declaração de Isenção ou Não Incidência de Licenciamento',
        descricao:
          'Documento técnico que atesta a dispensa de licenciamento ambiental.',
      },
      {
        nome: 'Cadastro Técnico Federal (CTF/IBAMA)',
        descricao:
          'Regularização junto ao IBAMA para atividades potencialmente poluidoras.',
      },
    ],
  },
  {
    slug: 'estudos-projetos-ambientais',
    titulo: 'Estudos e Projetos Ambientais',
    descricao:
      'Elaboramos estudos e projetos técnicos para garantir a viabilidade ambiental e atender às exigências legais.',
    icone: 'FileText',
    itens: [
      {
        nome: 'Plano de Controle Ambiental (PCA)',
        descricao:
          'Define medidas mitigadoras e programas de monitoramento ambiental.',
      },
      {
        nome: 'Programa de Educação Ambiental (PEA)',
        descricao:
          'Projetos educativos voltados à comunidade e trabalhadores.',
      },
      {
        nome: 'Estudo de Impacto de Vizinhança (EIV)',
        descricao:
          'Avaliação dos impactos do empreendimento no entorno urbano.',
      },
      {
        nome: 'Estudo de Impacto Ambiental (EIA/RIMA)',
        descricao:
          'Estudo completo para empreendimentos de significativo impacto ambiental.',
      },
      {
        nome: 'Plano de Recuperação de Áreas Degradadas (PRAD)',
        descricao:
          'Projeto técnico para restauração ecológica de áreas impactadas.',
      },
      {
        nome: 'Plano de Monitoramento de Fauna',
        descricao:
          'Programas de acompanhamento e proteção da fauna local.',
      },
      {
        nome: 'Levantamento de Fauna e Flora',
        descricao:
          'Inventário detalhado da biodiversidade para estudos ambientais.',
      },
      {
        nome: 'Projetos de Compensação Ambiental',
        descricao:
          'Propostas para mitigar impactos inevitáveis ao meio ambiente.',
      },
      {
        nome: 'Inventário Florestal',
        descricao:
          'Levantamento quantitativo e qualitativo da vegetação.',
      },
      {
        nome: 'Inventário de Arborização',
        descricao:
          'Cadastro e diagnóstico de árvores em áreas urbanas e rurais.',
      },
      {
        nome: 'Compensação Ambiental',
        descricao:
          'Apoio na definição e execução de medidas compensatórias exigidas.',
      },
      {
        nome: 'Supressão de Vegetação',
        descricao:
          'Assessoria técnica para autorização de supressão vegetal.',
      },
      {
        nome: 'Projetos Paisagísticos',
        descricao:
          'Elaboração de projetos integrando estética e funcionalidade ecológica.',
      },
      {
        nome: 'Execução de Plantio',
        descricao:
          'Implementação de projetos de revegetação e paisagismo.',
      },
    ],
  },
  {
    slug: 'gestao-residuos',
    titulo: 'Gestão de Resíduos',
    descricao:
      'Desenvolvemos soluções para o gerenciamento ambientalmente adequado dos resíduos gerados por sua atividade.',
    icone: 'Recycle',
    itens: [
      {
        nome: 'Plano de Gerenciamento de Resíduos Sólidos (PGRS)',
        descricao:
          'Documento que estabelece as diretrizes para manejo adequado dos resíduos.',
      },
      {
        nome: 'Plano de Gerenciamento de Resíduos da Construção Civil (PGRCC)',
        descricao:
          'Gestão específica para resíduos gerados em obras e construções.',
      },
      {
        nome: 'Plano de Gerenciamento de Resíduos de Serviços de Saúde (PGRSS)',
        descricao:
          'Protocolo de manejo para resíduos hospitalares e de saúde.',
      },
      {
        nome: 'Plano de Gerenciamento de Efluentes',
        descricao:
          'Estratégias para tratamento e destinação de efluentes líquidos.',
      },
      {
        nome: 'Inventário de Resíduos',
        descricao:
          'Levantamento e classificação detalhada dos resíduos gerados.',
      },
      {
        nome: 'Projetos de Compostagem',
        descricao:
          'Soluções para transformar resíduos orgânicos em adubo de qualidade.',
      },
      {
        nome: 'Manifesto de Transporte de Resíduos (MTR)',
        descricao:
          'Documento obrigatório para controle do transporte de resíduos.',
      },
      {
        nome: 'Declaração de Movimentação de Resíduos (DMR)',
        descricao:
          'Declaração periódica da destinação dos resíduos gerados.',
      },
      {
        nome: 'Assessoria para Destinação de Resíduos',
        descricao:
          'Indicação de empresas licenciadas para transporte e destinação adequada.',
      },
    ],
  },
  {
    slug: 'consultoria-ambiental',
    titulo: 'Consultoria Ambiental',
    descricao:
      'Suporte técnico contínuo para manter seu empreendimento em conformidade com a legislação ambiental.',
    icone: 'Briefcase',
    itens: [
      {
        nome: 'Assessoria Ambiental para Empresas',
        descricao:
          'Acompanhamento técnico permanente para gestão ambiental empresarial.',
      },
      {
        nome: 'Atendimento a Notificações e Fiscalizações',
        descricao:
          'Suporte na resposta a autuações e exigências dos órgãos fiscalizadores.',
      },
      {
        nome: 'Regularização Ambiental',
        descricao:
          'Diagnóstico e adequação de pendências para conformidade legal.',
      },
      {
        nome: 'Monitoramento Ambiental',
        descricao:
          'Acompanhamento de indicadores ambientais e atendimento a condicionantes.',
      },
      {
        nome: 'Plano de Emergência Ambiental',
        descricao:
          'Protocolos de resposta a incidentes e acidentes ambientais.',
      },
      {
        nome: 'Apoio Técnico para Empreendimentos',
        descricao:
          'Suporte especializado em todas as fases do projeto.',
      },
      {
        nome: 'Adequação à Legislação Ambiental',
        descricao:
          'Análise e adequação de processos às normas ambientais vigentes.',
      },
    ],
  },
  {
    slug: 'recursos-hidricos-areas-rurais',
    titulo: 'Recursos Hídricos e Áreas Rurais',
    descricao:
      'Auxiliamos na regularização e gestão do uso dos recursos hídricos e áreas rurais.',
    icone: 'Droplets',
    itens: [
      {
        nome: 'Outorga de Uso da Água',
        descricao:
          'Regularização do direito de uso de recursos hídricos para captação.',
      },
      {
        nome: 'Regularização de Captação',
        descricao:
          'Adequação de captações existentes às normas legais.',
      },
      {
        nome: 'Assessoria em Recursos Hídricos',
        descricao:
          'Consultoria especializada em gestão de recursos hídricos.',
      },
      {
        nome: 'Cadastro Ambiental Rural (CAR)',
        descricao:
          'Registro obrigatório para imóveis rurais junto ao órgão ambiental.',
      },
      {
        nome: 'Regularização de Áreas Rurais',
        descricao:
          'Adequação ambiental de propriedades rurais à legislação.',
      },
    ],
  },
  {
    slug: 'diagnostico-regularizacao-ambiental',
    titulo: 'Diagnóstico e Regularização Ambiental',
    descricao:
      'Identificamos riscos ambientais e auxiliamos na tomada de decisões com segurança técnica.',
    icone: 'Search',
    itens: [
      {
        nome: 'Due Diligence Ambiental',
        descricao:
          'Avaliação de passivos e riscos ambientais em transações e aquisições.',
      },
      {
        nome: 'Gerenciamento de Passivos Ambientais',
        descricao:
          'Estratégias para identificação e mitigação de passivos.',
      },
      {
        nome: 'Diagnóstico Ambiental',
        descricao:
          'Análise completa da situação ambiental do empreendimento ou área.',
      },
      {
        nome: 'Auditorias Ambientais',
        descricao:
          'Verificação sistemática da conformidade ambiental das operações.',
      },
      {
        nome: 'Avaliação Ambiental para Aquisição de Imóveis',
        descricao:
          'Análise técnica prévia à compra de imóveis e empreendimentos.',
      },
    ],
  },
  {
    slug: 'sustentabilidade-esg',
    titulo: 'Sustentabilidade e ESG',
    descricao:
      'Estratégias e projetos que aliam responsabilidade ambiental ao valor do seu negócio.',
    icone: 'Leaf',
    itens: [
      {
        nome: 'Inventário de Emissões de Gases de Efeito Estufa',
        descricao:
          'Quantificação e relatório das emissões de GEE da sua atividade.',
      },
      {
        nome: 'Projetos de Sustentabilidade',
        descricao:
          'Desenvolvimento de iniciativas sustentáveis para sua empresa.',
      },
      {
        nome: 'Estratégias ESG',
        descricao:
          'Consultoria para integração de critérios ambientais, sociais e de governança.',
      },
      {
        nome: 'Programas de Compensação Ambiental',
        descricao:
          'Estruturação de programas que neutralizam impactos ambientais.',
      },
    ],
  },
  {
    slug: 'educacao-ambiental-capacitacao',
    titulo: 'Educação Ambiental e Capacitação',
    descricao:
      'Promovemos conhecimento e conscientização por meio de ações educativas e treinamentos personalizados.',
    icone: 'GraduationCap',
    itens: [
      {
        nome: 'Programas de Educação Ambiental',
        descricao:
          'Projetos educativos contínuos para empresas, escolas e comunidades.',
      },
      {
        nome: 'Treinamentos Corporativos',
        descricao:
          'Capacitação de equipes em boas práticas ambientais e conformidade.',
      },
      {
        nome: 'Workshops',
        descricao:
          'Oficinas temáticas com foco prático em questões ambientais.',
      },
      {
        nome: 'Palestras',
        descricao:
          'Eventos educativos com especialistas em temas ambientais.',
      },
      {
        nome: 'Capacitações Técnicas',
        descricao:
          'Treinamentos específicos em ferramentas e metodologias ambientais.',
      },
      {
        nome: 'Projetos em Escolas e Comunidades',
        descricao:
          'Iniciativas de sensibilização e educação ambiental para a sociedade.',
      },
    ],
  },
];
