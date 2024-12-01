import React from 'react';
import './Card5.css';

const Card5: React.FC = () => {
    return (
        <div className="card5-details-container">
            <h1 className="card5-title">Hoffmann–La Roche</h1>
            <p className="card5-description">
                A Hoffmann-La Roche é uma das maiores empresas de biotecnologia e farmacêutica do mundo, especializada em medicamentos inovadores, diagnósticos e terapias. A empresa tem se destacado pela sua contribuição significativa à saúde global, com foco na inovação científica e terapias de ponta.
            </p>

            <div className="card5-price-info">
                <div className="card5-price-title">Preço atual:</div>
                <div className="card5-price-value">255,50 CHF</div>
            </div>

            <div className="card5-company-history">
                <div className="card5-history-title">História da Empresa</div>
                <div className="card5-history-text">
                    Fundada em 1896, a Hoffmann-La Roche é uma pioneira no campo das ciências da saúde. Ao longo de sua história, a empresa tem se concentrado em tratamentos para doenças graves e tem sido uma líder global em inovações farmacêuticas.
                </div>
            </div>
        </div>
    );
}

export default Card5;
