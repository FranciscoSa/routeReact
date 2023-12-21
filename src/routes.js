import {BrowserRouter, Routes, Route} from  'react-router-dom';
import Home from './pages/Home/Home';
import Sobre from './pages/Sobre/Sobre';
import Contatos from './pages/Contatos/Contatos';
import Header from './components/Header/Header'
import Erro from './pages/Erro/Erro';
import Produto from './pages/Produto/Produto';

function RouteAPP(){
    return(
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={ <Home/> } />
                <Route path="/sobre" element={ <Sobre/> } />
                <Route path='/contatos' element={ <Contatos/> } />.
                <Route path= '/produto/:id' element={ <Produto/> } />
                
                <Route path='*' element = { <Erro /> } />
            </Routes>
        </BrowserRouter>
    );
}

export default RouteAPP;