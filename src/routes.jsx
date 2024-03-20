import {BrowserRouter, Routes, Route} from 'react-router-dom'

import Header from './pages/Header';
import Header from './pages/Home';
import Header from './pages/Usuario';

function RoutesApp() {
    return (
        <BrowserRouter>
            <Header>
                <Routes>
                    <Route path="/" element={<Home/>} />
                    <Route path="/Usuario" element={<Home/>} />
                    <Route path="/Usuario" element={<Home/>} />
                </Routes>
            </Header>
        </BrowserRouter>
    )
}

export default RoutesApp;