import React from 'react';
import './Card2.css';

const Card2: React.FC = () => {
    return (
        <div className="card2-details-container">
            <h1 className="card2-title">Coca-Cola</h1>
            <p className="card2-description">
                A Coca-Cola é uma das maiores empresas de bebidas do mundo. Conhecida pelo seu refrigerante mundialmente famoso, a empresa continua inovando com novos produtos e mantendo sua liderança no mercado global.
            </p>

            <div className="card2-price-info">
                <div className="card2-price-title">Preço atual:</div>
                <div className="card2-price-value">63,28 BRL</div>
            </div>

            <div className="card2-company-history">
                <div className="card2-history-title">História da Empresa</div>
                <div className="card2-history-text">
                    Fundada em 1892, a Coca-Cola é uma das marcas mais reconhecidas globalmente. Sua história está repleta de marcos e inovações, consolidando a marca como líder no mercado de bebidas não alcoólicas.
                </div>
            </div>
        </div>
    );
}

export default Card2;
