const SliderData = [
  {
    source: "/API1.gif",
    name: "Assistência Técnica Escolar",
    description:
      "No 1º semestre da FATEC, o desafio proposto era criar uma solução para centralizar o gerenciamento de chamados de suporte técnico em ambientes escolares, um problema real enfrentado pela própria instituição. Fui responsável pelo desenvolvimento fullstack, criando um sistema web que analisa o estado das máquinas, dispara notificações automáticas ao técnico responsável e permite abertura de chamados. Implementei também uma interface de drag and drop para reorganização visual dos computadores por sala, gerando um mapa interativo de suporte. O produto entregue ao final do semestre demonstrou um fluxo de atendimento técnico mais ágil e organizado, com visibilidade clara do estado de cada equipamento.",
    technologies: "Html, Css, Javascript, Flask, Python, MySQL, Bootstrap",
    gitLink: "https://github.com/gustavohpereira/API_MirageGroup",
  },
  {
    source: "/API2.gif",
    name: "Gerenciamento de Turmas",
    description:
      "No 2º semestre da FATEC, uma professora parceira trouxe o desafio de criar uma ferramenta para organizar aulas, avaliações, atividades e notas de alunos sem depender de conexão com a internet. Assumi o desenvolvimento de uma aplicação desktop completa, projetando a arquitetura do banco de dados local e a interface gráfica com JavaFX. A aplicação permite gerenciar turmas, registrar avaliações e notas e acompanhar atividades, tudo de forma offline via SQLite. O produto final foi apresentado à professora ao término do semestre, demonstrando uma gestão acadêmica prática e independente de infraestrutura externa.",
    technologies: "Java, JavaFX, SQLite",
    gitLink: "https://github.com/MirageGroup/API_MirageGroup_2sem",
  },
  {
    source: "/API3.png",
    name: "Gerenciamento de Projetos - Shorts",
    description:
      "No 3º semestre da FATEC, a Ionic Health propôs o desafio de criar uma ferramenta para organizar equipes, projetos e evidências de forma estruturada, substituindo processos manuais e descentralizados. Atuei no desenvolvimento frontend e na integração com a API, construindo uma aplicação React TypeScript com Node.js que centraliza o gerenciamento de pessoas, projetos e documentos. Implementei o quadro kanban para acompanhamento de tarefas e o módulo de armazenamento de evidências com controle por perfil de acesso. O produto foi apresentado à empresa ao final do semestre, com visibilidade em tempo real do progresso dos projetos e rastreabilidade de todas as evidências registradas.",
    technologies: "TypeScript, React, Node.js, TypeORM, SQL",
    gitLink: "https://github.com/MirageGroup/API_MirageGroup_3sem",
  },
  {
    source: "/Portfolio.png",
    name: "Portfólio Pessoal",
    description:
      "Precisava de um espaço próprio para apresentar minha trajetória, projetos e habilidades de forma profissional e acessível a recrutadores e colaboradores. Projetei e desenvolvi do zero um portfólio pessoal com foco em performance e experiência visual, utilizando Next.js, TypeScript e Tailwind CSS. Apliquei boas práticas de SEO, design responsivo e animações para tornar a navegação fluida e memorável. O resultado é um site rápido, moderno e que centraliza toda a minha identidade profissional em um único lugar.",
    technologies: "TypeScript, Next.js, Tailwind CSS",
    gitLink: "https://github.com/gustavohpereira/portfolio",
  },
  {
    source: "/capybara organizer.mp4",
    name: "Capybara Organizer",
    description:
      "Desenvolvi uma aplicação full stack para permitir que usuários organizem tarefas em diferentes quadros, acompanhem o andamento por status, adicionem membros às boards e recebam atualizações em tempo real quando tarefas são movimentadas. O projeto foi dividido em dois serviços principais: uma aplicação web em Next.js e uma API REST em Node.js com Express, usando PostgreSQL via Docker Compose. No backend, separei responsabilidades entre controllers, services, routes, entities, middlewares e testes, mantendo a regra de negócio isolada da camada HTTP. Usei TypeScript no front e no back, Express com TypeORM para modelar usuários, boards, membros, administradores e tarefas, JWT com bcrypt para autenticação, middleware de proteção de rotas e Socket.IO para refletir mudanças nos boards conectados. No frontend, construí uma interface em React com Tailwind CSS, Axios, Context API e drag and drop para tornar o gerenciamento das tarefas mais fluido. Também adicionei testes com Jest na camada de serviços para validar regras de usuário, board e tarefa sem depender diretamente da interface.",
    technologies:
      "TypeScript, Node.js, Express, Next.js, React, PostgreSQL, TypeORM, Docker, Socket.IO, JWT, bcrypt, Tailwind CSS, Axios, Jest",
    gitLink: "https://github.com/gustavohpereira/capybara-organizer",
  },
  {
    source: "/API4.jpeg",
    name: "Gerenciamento de Salas e Reuniões - ORCA",
    description:
      "No 4º semestre da FATEC, a SIATT apresentou o desafio de criar um sistema para mapear, reservar e gerenciar salas de reuniões presenciais, híbridas e virtuais, centralizando um processo que era fragmentado e manual. Contribuí no desenvolvimento fullstack, integrando o frontend React com o backend Node.js e conectando à API do Zoom para ingresso direto nas reuniões pela plataforma. Implementei também o módulo de criação de atas, gestão de pautas e controle de permissões de usuários, com deploy na AWS. O produto entregue à empresa ao final do semestre apresentou um fluxo de reuniões centralizado, com agendamento, rastreabilidade e integração com videoconferência em um único lugar.",
    technologies: "React, TypeScript, Tailwind, Node.js, TypeORM, Zoom API, AWS",
    gitLink: "https://github.com/MirageGroup/API_MirageGroup_4sem",
  },
  {
    source: "/API5.png",
    name: "Monitoramento Climático para Produtores Rurais - Kersys",
    description:
      "No 5º semestre da FATEC, a Kersys — empresa brasileira de gestão para o agronegócio e áreas florestais — propôs o desafio de criar um aplicativo mobile para produtores rurais acompanharem o histórico climático de suas lavouras, já que a falta de dados consolidados dificultava a tomada de decisão no campo. Atuei no desenvolvimento do aplicativo, construindo as telas de cadastro de pontos geográficos e os dashboards com gráficos de variação de pluviometria e temperatura ao longo do tempo. Implementei também a visualização de dados consolidados por mês e ano, além do sistema de notificações e alertas para situações climáticas críticas. O produto entregue ao final do semestre demonstrou uma ferramenta mobile funcional que centraliza o monitoramento climático de lavouras, permitindo ao produtor rural tomar decisões mais embasadas com base no histórico de dados do seu ponto.",
    technologies: "React Native, Node.js",
    gitLink: "https://github.com/MirageGroup/API_MirageGroup_5sem",
  },
  {
    source: "/API6.png",
    name: "Assistente IA para Cuidadores de Alzheimer",
    description:
      "No 6º semestre da FATEC, o desafio proposto era construir uma solução com IA generativa para um problema social real: cuidadores de pacientes com Alzheimer frequentemente não têm acesso fácil a informações confiáveis e contextualizadas sobre a doença. Fui responsável pela arquitetura e desenvolvimento da API de IA, integrando modelos LLM de alto desempenho via Groq (Qwen e DeepSeek) com a técnica de RAG (Retrieval-Augmented Generation) para enriquecer as respostas com dados recuperados de uma base vetorial no ChromaDB. Desenvolvi a API com FastAPI e LangChain, expondo um endpoint que recebe perguntas em linguagem natural e retorna respostas contextualizadas. O produto final demonstrou um assistente inteligente capaz de orientar cuidadores com informações embasadas, tornando o acesso ao conhecimento sobre Alzheimer mais acessível e eficiente.",
    technologies: "Python, FastAPI, LangChain, ChromaDB, MongoDB, Groq, Uvicorn",
    gitLink: "https://github.com/MirageGroup/API_MirageGroup_6_Semestre_LLM",
  },
];

export default SliderData;
