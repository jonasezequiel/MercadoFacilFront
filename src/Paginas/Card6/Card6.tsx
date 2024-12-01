
import React from 'react';
import './Card6.css';

const Card6: React.FC = () => {
    return (
        <div className="card6-details-container">
            <h1 className="card6-title">Samsung Electronics Co Ltd</h1>
            <p className="card6-description">
                A Samsung Electronics é uma das principais empresas de tecnologia do mundo, com uma vasta gama de produtos, desde smartphones a televisores e dispositivos de tecnologia avançada. Reconhecida globalmente pela sua inovação e qualidade, a Samsung é líder em muitos setores de tecnologia.
            </p>

            <div className="card6-price-info">
                <div className="card6-price-title">Preço atual:</div>
                <div className="card6-price-value">54.200 KRW</div>
            </div>

            <div className="card6-company-history">
                <div className="card6-history-title">História da Empresa</div>
                <div className="card6-history-text">
                    Fundada em 1938, a Samsung Electronics tem sido uma das pioneiras na revolução tecnológica, com contribuições significativas para a indústria de eletrônicos, incluindo o desenvolvimento de smartphones, televisores e semicondutores.
                </div>
            </div>
        </div>
    );
}

export default Card6;
