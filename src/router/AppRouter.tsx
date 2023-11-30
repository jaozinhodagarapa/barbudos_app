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
            <Route path="/cliente/cadastro" element={<CadastroCliente/>}/>
            <Route path="/cliente/listagem" element={<ListagemClientes/>}/>
            <Route path="/cliente/editar/:id" element={<EditarCliente/>}/>

            <Route path="/servico/cadastro" element={<CadastroServico/>}/>
            <Route path="/servico/listagem" element={<ListagemServicos/>}/>
            <Route path="/servico/editar/:id" element={<EditarServico/>}/>

            <Route path="profissional/cadastro" element={<CadastroProfssional/>}/>
            <Route path="/profissional/listagem" element={<ListagemProfissionais/>}/>
            <Route path="/profissional/editar/:id" element={<EditarProfissional/>}/>

            <Route path="agenda/listagem" element={<ListagemAgenda/>}/>

            

        </Routes>
        </BrowserRouter>
    );
}
export default AppRouter