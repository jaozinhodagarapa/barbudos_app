import React from "react";
import ListagemClientes from "../components/Listagem";
import CadastroCliente from "../components/CadastroCliente";
import { 
    BrowserRouter,
     Route,
     Routes
} from "react-router-dom";
import CadastroServicos from "../components/CadastroServico";
import ListagemServicos from "../components/ListagemServico";

const AppRouter = () => {
    return (
        <BrowserRouter>
        <Routes>
            <Route path="cadastro" element={<CadastroCliente/>}/>
            <Route path="listagem" element={<ListagemClientes/>}/>
            <Route path="cadastroServico" element={<CadastroServicos/>}/>
            <Route path="listagemServico" element={<ListagemServicos/>}/>
        </Routes>
        </BrowserRouter>
    );
}
export default AppRouter