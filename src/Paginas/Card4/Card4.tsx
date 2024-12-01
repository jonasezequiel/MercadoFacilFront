import React from 'react';
import './Card4.css';

const Card4: React.FC = () => {
    return (
        <div className="card4-details-container">
            <h1 className="card4-title">Nestlé SA</h1>
            <p className="card4-description">
                A Nestlé é uma das maiores empresas alimentícias do mundo, oferecendo uma vasta gama de produtos que incluem alimentos, bebidas, saúde e nutrição. A empresa está comprometida com a inovação e sustentabilidade, buscando oferecer produtos de alta qualidade e promover o bem-estar.
            </p>

            <div className="card4-price-info">
                <div className="card4-price-title">Preço atual:</div>
                <div className="card4-price-value">76,48 CHF</div>
            </div>

            <div className="card4-company-history">
                <div className="card4-history-title">História da Empresa</div>
                <div className="card4-history-text">
                    Fundada em 1867, a Nestlé tem uma história rica em inovação e compromisso com a saúde e nutrição. Sua missão sempre foi melhorar a qualidade de vida das pessoas, com um portfólio diversificado de produtos alimentícios e bebidas.
                </div>
            </div>
        </div>
    );
}

export default Card4;
