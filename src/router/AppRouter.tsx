import React from "react";

import {
    BrowserRouter,
    Route,
    Routes,
} from "react-router-dom";
import  CadastroCliente from "../components/CadastroCliente";
import ListagemClientes from "../components/Listagem";

const AppRouter = () => {
    return (
        <BrowserRouter>
        <Routes>
            <Route path="cadastro" element={<CadastroCliente/>}/>
            <Route path="listagem" element={<ListagemClientes/>}/>
        </Routes>
        </BrowserRouter>
    )
}
export default AppRouter