const NumberHowCalculate = () => (
    <div className="container">
        <h2>Como calcular seu Número do Destino?</h2>
        <p>Para descobrir o seu número pessoal, basta somar todos os dígitos da sua data de nascimento (dia, mês e ano).
            O objetivo é reduzir a soma a um único dígito entre 1 e 9 ou um número mestre (11, 22 ou 33).
            Esses números mestres têm significados especiais e não devem ser reduzidos.
        </p>

        <hr />

        <p>Exemplo de Cálculo:</p>

        <p>Se você nasceu no dia 15 de agosto de 1990:</p>
        <ul>
            <li>Some o dia: 1 + 5 = 6</li>
            <li>Some o mês: 0 + 8 = 8</li>
            <li>Some o ano: 1+9+9+0 = 19 → 1+9 = 10 → 1+0 = 1</li>
            <li>Some todos os resultados: 6+8+1 = 15 → 1+5 = 6</li>
        </ul>
        <p>Nesse caso, o Número do Destino é 6.</p>
    </div >
);

export default NumberHowCalculate;