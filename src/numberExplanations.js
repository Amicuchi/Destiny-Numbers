const numberExplanations = [
    {
        number: 1,
        name: [
            "O Pioneiro",
        ],
        about: [
            "Representa liderança, independência e iniciativa. As pessoas com o número 1 tendem a ser inovadoras e buscar estar na frente, assumindo o controle das situações.",
        ],
        pros: [
            "Autoconfiança e iniciativa, sempre buscando novas oportunidades.",
            "Excelente capacidade de liderança e de tomar decisões rápidas.",
            "Grande força de vontade e independência, se destacando em qualquer ambiente."
        ],
        cons: [
            "Pode ser muito teimoso e insistir em fazer tudo do seu jeito.",
            "Tendência a ser impaciente, especialmente quando outras pessoas não acompanham seu ritmo.",
            "Pode se tornar egocêntrico, focando mais em si mesmo e esquecendo os outros."
        ],
        other: [
            "Pessoas com o número 1 são frequentemente inovadoras, com espírito empreendedor.",
            "Eles podem se sentir solitários, já que tendem a fazer as coisas por conta própria, sem depender dos outros."
        ]
    },
    {
        number: 2,
        name: [
            "O Cooperador",
        ],
        about: [
            "Simboliza sensibilidade, diplomacia e trabalho em equipe. Os que têm o número 2 são geralmente pacificadores, buscando sempre a harmonia nas relações.",
        ],
        pros: [
            "Diplomático e sensível, capaz de mediar conflitos com facilidade.",
            "Valoriza o trabalho em equipe, sendo um ótimo colaborador.",
            "Empático e carinhoso, se conecta emocionalmente com as pessoas ao seu redor."
        ],
        cons: [
            "Pode ser muito sensível às críticas, levando tudo para o lado pessoal.",
            "Tendência a ser indeciso, sempre buscando a aprovação dos outros antes de agir.",
            "Pode se sacrificar em excesso pelos outros, negligenciando suas próprias necessidades."
        ],
        other: [
            "O número 2 está sempre em busca de equilíbrio e harmonia nas relações.",
            "Eles precisam de ambientes calmos e harmoniosos para prosperar, sendo avessos a confrontos."
        ]
    },
    {
        number: 3,
        name: [
            "O Comunicador",
        ],
        about: [
            "Associado à criatividade, expressão e otimismo. Quem tem o número 3 é carismático e comunicativo, com uma visão de vida leve e artística.",
        ],
        pros: [
            "Criativo e expressivo, possui grande facilidade em se comunicar e socializar.",
            "Extrovertido e otimista, traz energia e alegria para quem está ao seu redor.",
            "Habilidade natural para as artes, seja música, teatro, escrita ou qualquer forma de expressão."
        ],
        cons: [
            "Pode ser superficial, focando muito na aparência e não se aprofundando nas questões importantes.",
            "Às vezes falta foco e disciplina, já que está sempre buscando novas aventuras.",
            "Tendência a procrastinar, especialmente em tarefas que exijam mais esforço e concentração."
        ],
        other: [
            "O número 3 adora estar no centro das atenções, mas pode se sentir vulnerável quando não recebe reconhecimento.",
            "Eles são movidos por emoções e precisam de estímulos constantes para manter o entusiasmo."
        ]
    },
    {
        number: 4,
        name: [
            "O Construtor",
        ],
        about: [
            "Este número está relacionado à praticidade, organização e disciplina. Pessoas com o número 4 são trabalhadoras e focadas em criar bases sólidas e seguras.",
        ],
        pros: [
            "Extremamente organizado e disciplinado, com uma capacidade natural para construir estruturas sólidas.",
            "Trabalhador e focado, sempre busca completar o que começa com eficiência.",
            "Leal e confiável, é uma pessoa em quem os outros sempre podem confiar."
        ],
        cons: [
            "Pode ser muito rígido e inflexível, resistindo a mudanças e novas ideias.",
            "Foca demais no trabalho, podendo se tornar um 'workaholic' e negligenciar a vida pessoal.",
            "Tendência a ser pessimista, sempre esperando o pior."
        ],
        other: [
            "Pessoas com o número 4 preferem estabilidade e segurança, buscando sempre criar uma base sólida para si e para os outros.",
            "Eles prosperam em ambientes bem organizados e estruturados, com rotinas definidas."
        ]
    },
    {
        number: 5,
        name: [
            "O Aventureiro",
        ],
        about: [
            "Simboliza liberdade, versatilidade e amor por novas experiências. Os que têm o número 5 adoram mudanças e se adaptam facilmente a novas situações.",
        ],
        pros: [
            "Adaptável e versátil, adora mudanças e novas experiências.",
            "Possui um espírito livre e independente, sempre em busca de aventura.",
            "Curioso e explorador, está sempre aprendendo coisas novas e se desafiando."
        ],
        cons: [
            "Pode ser irresponsável, especialmente em relação a compromissos de longo prazo.",
            "Fica entediado facilmente, o que pode levá-lo a abandonar projetos antes de terminá-los.",
            "Impulsivo, tende a agir sem pensar, o que pode gerar problemas."
        ],
        other: [
            "O número 5 adora a liberdade e odeia a sensação de estar preso a rotinas ou restrições.",
            "Eles precisam de um ambiente dinâmico e de constante mudança para se sentirem realizados."
        ]
    },
    {
        number: 6,
        name: [
            "O Protetor",
        ],
        about: [
            "Está ligado à responsabilidade, cuidado com os outros e à busca pela harmonia. O número 6 é visto em pessoas que gostam de cuidar da família e criar ambientes equilibrados.",
        ],
        pros: [
            "Muito responsável e dedicado à família e à comunidade.",
            "Possui uma forte necessidade de cuidar e proteger os outros, sendo uma presença estável.",
            "Extremamente generoso, com um grande coração, sempre pronto para ajudar."
        ],
        cons: [
            "Pode ser muito controlador, especialmente com aqueles que ama, querendo fazer tudo do seu jeito.",
            "Às vezes se sacrifica demais, ignorando suas próprias necessidades para atender as dos outros.",
            "Tendência a ser emocionalmente dependente da aprovação e amor dos outros."
        ],
        other: [
            "O número 6 é um símbolo de harmonia e responsabilidade. Eles são os pilares de suas famílias e comunidades.",
            "Precisam aprender a estabelecer limites e a equilibrar sua necessidade de cuidar dos outros com suas próprias necessidades pessoais."
        ]
    },
    {
        number: 7,
        name: [
            "O Intelectual",
        ],
        about: [
            "Representa introspecção, análise e sabedoria. Pessoas com o número 7 são geralmente pensadoras profundas, sempre em busca de conhecimento espiritual e intelectual.",
        ],
        pros: [
            "Altamente analítico e introspectivo, com uma busca constante por conhecimento e compreensão profunda.",
            "Possui uma mente brilhante e afiada, sempre em busca da verdade.",
            "Espiritualmente conectado, busca o autoconhecimento e respostas filosóficas."
        ],
        cons: [
            "Pode ser reservado demais, isolando-se dos outros e evitando interações sociais.",
            "Tendência a ser cético e desconfiado, o que pode dificultar a criação de vínculos emocionais.",
            "Pode ser muito crítico e perfeccionista, tanto com os outros quanto consigo mesmo."
        ],
        other: [
            "O número 7 precisa de tempo sozinho para refletir e recarregar suas energias, preferindo ambientes calmos e introspectivos.",
            "Eles se destacam em campos de estudo que exigem análise e raciocínio lógico, como ciência, filosofia ou tecnologia."
        ]
    },
    {
        number: 8,
        name: [
            "O Poderoso",
        ],
        about: [
            "Relacionado a sucesso material, poder e ambição. Quem tem o número 8 é orientado para metas e resultados, com uma habilidade natural para a gestão e liderança.",
        ],
        pros: [
            "Naturalmente ambicioso e orientado para o sucesso, com grande habilidade para liderança.",
            "Excelente gestor de recursos e finanças, sabe como transformar ideias em realidade.",
            "Determinado e resiliente, sempre busca o topo e não desiste facilmente."
        ],
        cons: [
            "Pode ser autoritário e dominador, buscando sempre controlar as situações e as pessoas ao seu redor.",
            "Focado demais em resultados materiais, pode negligenciar aspectos emocionais e espirituais da vida.",
            "Tendência a ser impaciente e intolerante com falhas ou ineficiências."
        ],
        other: [
            "O número 8 é visto como um símbolo de poder e sucesso, mas precisa equilibrar essa busca com um senso de ética e compaixão.",
            "Eles prosperam em ambientes que oferecem desafios e oportunidades de crescimento pessoal e profissional."
        ]
    },
    {
        number: 9,
        name: [
            "O Humanitário",
        ],
        about: [
            "Simboliza altruísmo, compaixão e serviço ao próximo. Pessoas com o número 9 têm um desejo profundo de ajudar os outros e deixar um impacto positivo no mundo.",
        ],
        pros: [
            "Altruísta e compassivo, sempre em busca de melhorar o mundo ao seu redor.",
            "Generoso e tolerante, com uma capacidade natural de aceitar as diferenças nos outros.",
            "Possui uma visão global e idealista, sempre pensando no bem maior."
        ],
        cons: [
            "Pode se sobrecarregar emocionalmente com os problemas dos outros, absorvendo a dor alheia.",
            "Tende a ser disperso e idealista demais, deixando de lado questões práticas.",
            "Pode ter dificuldade em estabelecer limites, sempre querendo ajudar a todos."
        ],
        other: [
            "O número 9 é movido por uma forte missão de servir e melhorar o mundo, frequentemente se envolvendo em causas humanitárias.",
            "Eles precisam aprender a equilibrar sua compaixão com o cuidado consigo mesmos, para evitar o esgotamento emocional."
        ]
    },
    {
        number: 11,
        name: [
            "O Inspirador",
        ],
        about: [
            "Representa intuição, idealismo e iluminação espiritual. Pessoas com o número 11 têm uma capacidade inata de inspirar e motivar os outros.",
        ],
        pros: [
            "Altamente intuitivo, com uma conexão profunda com a espiritualidade.",
            "Capacidade de inspirar os outros através de ideias e visões idealistas.",
            "Grande potencial para a iluminação espiritual e o desenvolvimento pessoal."
        ],
        cons: [
            "Pode ser emocionalmente instável, devido à intensidade de suas visões e sentimentos.",
            "Tendência a sentir ansiedade e estresse, especialmente se não encontrar equilíbrio.",
            "Dificuldade em lidar com a pressão de viver de acordo com suas próprias expectativas elevadas."
        ],
        other: [
            "Pessoas com o número 11 têm uma missão especial, que envolve o despertar espiritual e a inspiração dos outros.",
            "Eles precisam aprender a confiar em sua intuição e encontrar maneiras saudáveis de lidar com a tensão emocional."
        ]
    },

    // Número Mestre 22
    {
        number: 22,
        name: [
            "O Mestre Construtor",
        ],
        about: [
            "Este é o número da realização em grande escala. Os que têm o número 22 têm o potencial de transformar sonhos em realidade, com uma habilidade prática incomparável.",
        ],
        pros: [
            "Extremamente prático, com a habilidade de transformar grandes sonhos em realidade.",
            "Naturalmente ambicioso e visionário, sempre pensando em realizações em larga escala.",
            "Capacidade de gerenciar projetos complexos e liderar grandes empreendimentos."
        ],
        cons: [
            "Pode ser sobrecarregado pela responsabilidade de suas grandes visões.",
            "Tendência a ser perfeccionista e controlador, esperando que tudo saia conforme o planejado.",
            "Pode sentir medo de falhar, o que o impede de atingir seu pleno potencial."
        ],
        other: [
            "O número 22 é considerado o 'Mestre Construtor' e tem a capacidade de criar algo duradouro e impactante.",
            "É importante que essas pessoas encontrem equilíbrio entre a ambição e o bem-estar emocional."
        ]
    },

    // Número Mestre 33
    {
        number: 33,
        name: [
            "O Mestre Curador",
        ],
        about: [
            "O número 33 está ligado ao serviço altruísta e ao amor incondicional. É o número da compaixão e do desejo de servir à humanidade.",
        ],
        pros: [
            "Profundamente compassivo e altruísta, sempre disposto a servir aos outros.",
            "Capacidade de oferecer cura emocional e espiritual através do amor incondicional.",
            "Grande potencial para a liderança espiritual e para ajudar a humanidade em grande escala."
        ],
        cons: [
            "Pode se sacrificar excessivamente pelos outros, negligenciando suas próprias necessidades.",
            "Tendência a assumir responsabilidades demais, o que pode levar à exaustão emocional.",
            "Pode sentir que nunca faz o suficiente, o que gera frustração e culpa."
        ],
        other: [
            "O número 33 é conhecido como o 'Mestre Curador', com um forte desejo de trazer paz e harmonia ao mundo.",
            "Essas pessoas precisam aprender a equilibrar suas responsabilidades com o autocuidado, para evitar o esgotamento."
        ]
    }
];


export default numberExplanations;