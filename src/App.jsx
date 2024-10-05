import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Explanation from './pages/Explanation';
import NumberCalculation from './pages/NumberCalculation';
import NumberHowCalculate from './pages/NumberHowCalculate';
import NumberExplanation from './pages/NumberExplanation';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <h1>Números do Destino</h1>
      <Header />
      <Routes>
        <Route path="/" element={<Explanation />} />
        <Route path="/calculation" element={<NumberCalculation />} />
        <Route path="/how-calculate" element={<NumberHowCalculate />} />
        <Route path="/number/:num" element={<NumberExplanation />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
