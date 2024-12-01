import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from './Paginas/Home/Home';
import HomeLogado from './Paginas/AreaLogada/Home/Home2';
import './App.css';
import CadastroUsuario from "./Paginas/CadastroUsuario/CadastroUsuario";
import Card1 from './Paginas/Card1/Card1';
import Card2 from './Paginas/Card2/Card2';
import Card3 from './Paginas/Card3/Card3';
import Card4 from './Paginas/Card4/Card4';
import Card5 from './Paginas/Card5/Card5';
import Card6 from './Paginas/Card6/Card6';

const App = () => {
  return(
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/CadastroUsuarios" element={<CadastroUsuario/>}/>
        <Route path="/Home" element={<HomeLogado/>}/>
        <Route path="/card1" element={<Card1 />} />
        <Route path="/card2" element={<Card2 />} />
        <Route path="/card3" element={<Card3 />} />
        <Route path="/card4" element={<Card4 />} />
        <Route path="/card5" element={<Card5 />} />
        <Route path="/card6" element={<Card6 />} />
      </Routes>
    </Router>
  );
}

export default App
