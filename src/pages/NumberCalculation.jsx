import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const NumberCalculation = () => {
  const [date, setDate] = useState('');
  const navigate = useNavigate();

  const calculateNumber = (birthDate) => {
    const numbers = birthDate.replace(/-/g, '').split('').map(Number);
    const sum = numbers.reduce((acc, num) => acc + num, 0);
    let result = sum;
    while (result > 9 && result !== 11 && result !== 22 && result !== 33) {
      result = result.toString().split('').reduce((acc, num) => acc + parseInt(num), 0);
    }
    return result;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const number = calculateNumber(date);
    navigate(`/number/${number}`);
  };

  return (
    <div className="container">
      <h2>Calcule seu Número</h2>
      <form onSubmit={handleSubmit}>
        <span>Data de Nascimento:</span>
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
        />
        <button type="submit">Calcular</button>
      </form>
    </div>
  );
};

export default NumberCalculation;
