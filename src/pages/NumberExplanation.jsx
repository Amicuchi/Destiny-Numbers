import { useParams } from 'react-router-dom';

const NumberExplanation = () => {
  const { num } = useParams();

  const explanations = {

    1: 'O Pioneiro: Representa liderança, independência e iniciativa. As pessoas com o número 1 tendem a ser inovadoras e buscar estar na frente, assumindo o controle das situações.',

    2: 'O Cooperador: Simboliza sensibilidade, diplomacia e trabalho em equipe. Os que têm o número 2 são geralmente pacificadores, buscando sempre a harmonia nas relações.',

    3: 'O Comunicador: Associado à criatividade, expressão e otimismo. Quem tem o número 3 é carismático e comunicativo, com uma visão de vida leve e artística.',

    4: 'O Construtor: Este número está relacionado à praticidade, organização e disciplina. Pessoas com o número 4 são trabalhadoras e focadas em criar bases sólidas e seguras.',

    5: 'O Aventureiro: Simboliza liberdade, versatilidade e amor por novas experiências. Os que têm o número 5 adoram mudanças e se adaptam facilmente a novas situações.',

    6: 'O Protetor: Está ligado à responsabilidade, cuidado com os outros e à busca pela harmonia. O número 6 é visto em pessoas que gostam de cuidar da família e criar ambientes equilibrados.',

    7: 'O Intelectual: Representa introspecção, análise e sabedoria. Pessoas com o número 7 são geralmente pensadoras profundas, sempre em busca de conhecimento espiritual e intelectual.',

    8: 'O Poderoso: Relacionado a sucesso material, poder e ambição. Quem tem o número 8 é orientado para metas e resultados, com uma habilidade natural para a gestão e liderança.',

    9: 'O Humanitário: Simboliza altruísmo, compaixão e serviço ao próximo. Pessoas com o número 9 têm um desejo profundo de ajudar os outros e deixar um impacto positivo no mundo.',

    11: 'O Inspirador: Representa intuição, idealismo e iluminação espiritual. Pessoas com o número 11 têm uma capacidade inata de inspirar e motivar os outros.',

    22: 'O Mestre Construtor: Este é o número da realização em grande escala. Os que têm o número 22 têm o potencial de transformar sonhos em realidade, com uma habilidade prática incomparável.',

    33: 'O Mestre Curador: O número 33 está ligado ao serviço altruísta e ao amor incondicional. É o número da compaixão e do desejo de servir à humanidade.'

  };

  return (
    <div className="container">
      <h2>Seu número é {num}</h2>
      <p>{explanations[num] || 'Número não encontrado.'}</p>
    </div>
  );
};

export default NumberExplanation;
