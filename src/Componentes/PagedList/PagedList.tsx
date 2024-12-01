import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';  // Importa o Link para navegação
import Share from "../ShareCards/Share";
import { FetchShareListPaged } from "../../Servicos/MercadoFacilAPI";
import './PagedList.css';

const PagedList: React.FC = () => {
    const [shares, setShares] = useState<any[]>([]);
    const [page, setPage] = useState(1);
    const [resultsPerPage] = useState(6); // 6 resultados por página

    const handleNext = () => {
        setPage(prevPage => prevPage + 1);
    };

    const handlePrev = () => {
        setPage(prevPage => Math.max(prevPage - 1, 1));
    };

    useEffect(() => {
        // Dados fictícios das ações
        const manualShares = [
            {
                logoUrl: 'https://gsobmidia.com.br/uploads/lojas/949/magalu-logo-0-2048x2048_1705432673.png', 
                longName: 'Magazine',  
                regularMarketPrice: '9,03 BRL',
                link: '/card1'
            },
            {
                logoUrl: 'https://www.logotipo.pt/wp-content/uploads/2016/09/coca-cola-classic-1.jpg', 
                longName: 'Coca-Cola',  
                regularMarketPrice: '63,28 BRL',
                link: '/card2'
            },
            {
                logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Pepsi_logo_%282014%29.svg/800px-Pepsi_logo_%282014%29.svg.png', 
                longName: 'PepsiCo', 
                regularMarketPrice: '64,56 BRL',
                link: '/card3'
            },
            {
                logoUrl: 'https://i.pinimg.com/736x/69/e3/48/69e3486264fdad281d5f34c0ae4143de.jpg', 
                longName: 'Nestle SA', 
                regularMarketPrice: '76,48 CHF',
                link: '/card4'
            },
            {
                logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Hoffmann-La_Roche_logo.svg/250px-Hoffmann-La_Roche_logo.svg.png', 
                longName: 'Hoffmann–La Roche',  
                regularMarketPrice: '255,50 CHF',
                link: '/card5'
            },
            {
                logoUrl: 'https://www.itau.com.br/media/dam/m/551032091fb2eb71/original/image_text_carteira_digital_logo_samsung_pay.jpg', 
                longName: 'Samsung Electronics Co Ltd', 
                regularMarketPrice: '54.200 KRW',
                link: '/card6'
            }
        ];

        setShares(manualShares); // Atualiza o estado com os dados fictícios

    }, [page, resultsPerPage]);

    return (
        <>
            <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    {shares.length > 0 ? (
                        <div className="carousel-item active" data-bs-interval="10000">
                            <div className="row">
                                {shares.map((share, index) => (
                                    <div className="col-4 card-spacing" key={index}>
                                        <Share 
                                            logoUrl={share.logoUrl} 
                                            longName={share.longName} 
                                            regularMarketPrice={share.regularMarketPrice} 
                                        />
                                        {/* Botão de navegação para a página de detalhes */}
                                        <Link to={share.link}>
                                            <button className="btn btn-primary mt-2">
                                                Ver Detalhes
                                            </button>
                                        </Link>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ) : (
                        <p>Carregando ações...</p>
                    )}
                </div>

                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev" onClick={handlePrev}>
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next" onClick={handleNext}>
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </>
    );
}

export default PagedList;
