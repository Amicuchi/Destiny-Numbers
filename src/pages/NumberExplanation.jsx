import { useParams } from 'react-router-dom';
import numberExplanations from '../numberExplanations';

const NumberExplanation = () => {
  const { num } = useParams();
  const number = parseInt(num);
  
  // Encontrando a explicação para o número passado na URL
  const explanation = numberExplanations.find(item => item.number === number);

  return (
    <div className="container">
      <h2>Seu número é {number}: {explanation.name}</h2>

      {explanation ? (
        <div>
          <h3>Sobre:</h3>
          <ul>
            {explanation.about.map((about, index) => (
              <li key={index}>{about}</li>
            ))}
          </ul>

          <h3>Prós:</h3>
          <ul>
            {explanation.pros.map((pro, index) => (
              <li key={index}>{pro}</li>
            ))}
          </ul>

          <h3>Contras:</h3>
          <ul>
            {explanation.cons.map((con, index) => (
              <li key={index}>{con}</li>
            ))}
          </ul>

          <h3>Outras informações:</h3>
          <ul>
            {explanation.other.map((info, index) => (
              <li key={index}>{info}</li>
            ))}
          </ul>
        </div>
      ) : (
        <p>Número não encontrado.</p>
      )}
    </div>
  );
};

export default NumberExplanation;