import React from 'react';
import './Card3.css';

const Card3: React.FC = () => {
    return (
        <div className="card3-details-container">
            <h1 className="card3-title">PepsiCo</h1>
            <p className="card3-description">
                A PepsiCo é uma das maiores empresas do setor de bebidas e alimentos do mundo, sendo dona de marcas mundialmente conhecidas, como Pepsi, Gatorade, Tropicana e Frito-Lay. A empresa continua a expandir sua presença no mercado global com inovações e aquisições.
            </p>

            <div className="card3-price-info">
                <div className="card3-price-title">Preço atual:</div>
                <div className="card3-price-value">64,56 BRL</div>
            </div>

            <div className="card3-company-history">
                <div className="card3-history-title">História da Empresa</div>
                <div className="card3-history-text">
                    Fundada em 1965, a PepsiCo se tornou uma das líderes no setor de alimentos e bebidas. Sua trajetória é marcada pela expansão global, inovação contínua e compromisso com a sustentabilidade.
                </div>
            </div>
        </div>
    );
}

export default Card3;
