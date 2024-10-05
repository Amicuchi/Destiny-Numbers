import { Link } from 'react-router-dom';

const Header = () => (
  <header>
    <nav>
      <ul>
        <li><Link to="/">Explicação</Link></li>
        <li><Link to="/how-calculate">Como Calcular</Link></li>
        <li><Link to="/calculation">Calcular Número</Link></li>
        <li><Link to="/contact">Contato</Link></li>
      </ul>
    </nav>
  </header>
);

export default Header;
