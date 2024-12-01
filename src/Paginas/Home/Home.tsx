import NavBar from '../../Componentes/NavBar/NavBar';
import Propaganda from '../../Componentes/Propaganda/Propaganda';

import './Home.css';
const Home = () => {
    return(
        <>
            <div className='background'>
                <NavBar/>
                <Propaganda/>

            </div>
        </>        
    );
}
export default Home