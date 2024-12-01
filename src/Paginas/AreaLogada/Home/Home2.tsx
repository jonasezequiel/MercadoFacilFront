import PagedList from '../../../Componentes/PagedList/PagedList';
import NavMenu from '../../../Componentes/NavMenu/NavMenu';
import './Home.css';

const HomeLogado = () => {
    return (
        <>
            <div className='background'>
                <h1 className='page-title'>Lista de Ações</h1> {/* Título da página */}
                <PagedList />
                <NavMenu />
            </div>
        </>
    );
}

export default HomeLogado;
