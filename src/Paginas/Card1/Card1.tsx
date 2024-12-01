import React from 'react';
import './Card1.css';

const Card1: React.FC = () => {
    return (
        <div className="card1-details-container">
            <h1 className="card1-title">Magazine</h1>
            <p className="card1-description">
            Magazine Luiza é uma das maiores redes de varejo do Brasil. Fundada em 1957, a empresa é reconhecida pela
                qualidade de seus produtos e serviços, além de ter se destacado na transição para o comércio eletrônico. 
                A ação da Magazine Luiza é uma das mais negociadas na B3, refletindo a confiança do mercado na empresa.
            </p>

            <div className="card1-price-info">
                <div className="card1-price-title">Preço atual:</div>
                <div className="card1-price-value">9,03 BRL</div>
            </div>

            <div className="card1-company-history">
                <div className="card1-history-title">História da Empresa</div>
                <div className="card1-history-text">
                A Magazine Luiza começou suas operações como uma pequena loja de móveis em Franca, interior de São Paulo. 
                    Com o tempo, a empresa foi se expandindo e se modernizando, integrando sua operação de vendas físicas com o 
                    comércio online. Nos últimos anos, a Magazine Luiza tem se destacado pelo seu uso inovador de tecnologia para
                    transformar a experiência de compra dos consumidores.
                </div>
            </div>
        </div>
    );
}

export default Card1;
