import React from "react";
import ListagemClientes from "../components/Listagem";
import CadastroCliente from "../components/CadastroCliente";
import { 
    BrowserRouter,
     Route,
     Routes
} from "react-router-dom";
import CadastroServico from "../components/CadastroServico";
import ListagemServicos from "../components/ListagemServico";
import CadastroProfssional from "../components/CadastroProfissional";
import ListagemProfissionais from "../components/ListagemProfissional";
import EditarCliente from "../components/EditarCliente";
import EditarProfissional from "../components/EditarProfissional";
import EditarServico from "../components/EditarServico";

import ListagemAgenda from "../components/ListagemAgenda";

const AppRouter = () => {
    return (
        <BrowserRouter>
        <Routes>
            <Route path="cadastro" element={<CadastroCliente/>}/>
            <Route path="listagem" element={<ListagemClientes/>}/>
            <Route path="/editar/:id" element={<EditarCliente/>}/>

            <Route path="cadastroServico" element={<CadastroServico/>}/>
            <Route path="listagemServico" element={<ListagemServicos/>}/>
            <Route path="/editarServico/:id" element={<EditarServico/>}/>

            <Route path="CadastroProfissional" element={<CadastroProfssional/>}/>
            <Route path="/profissional/listagem" element={<ListagemProfissionais/>}/>
            <Route path="/profissional/editar/:id" element={<EditarProfissional/>}/>

        </Routes>
        </BrowserRouter>
    );
}
export default AppRouter