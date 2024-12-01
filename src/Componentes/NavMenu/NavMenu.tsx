import './NavMenu.css'; // Importando o CSS específico para o NavBar
import { useNavigate } from 'react-router-dom'; // Importando o hook useNavigate

const NavBar = () => {
    const navigate = useNavigate(); // Hook para navegação programática

    // Função para redirecionar para a página de login
    const handleBackToLogin = () => {
        navigate('/'); // Redireciona para a página de login
    }

    return (
        <>
            <nav className="navbar bg-body-tertiary fixed-navbar">
                <div className="container-fluid">
                    {/* Botão para voltar à página de login */}
                    <button 
                        className="btn btn-primary" 
                        onClick={handleBackToLogin} 
                        style={{ marginLeft: 'auto', marginRight: '10px' }}
                    >
                        Voltar ao Login
                    </button>
                </div>
            </nav> 
        </>
    );
}

export default NavBar;

