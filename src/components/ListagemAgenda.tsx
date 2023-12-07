import axios from "axios";
import React, {
    Component, useState, ChangeEvent, FormEvent, useEffect
} from "react";
import { Link } from "react-router-dom";
import styles from '../App.module.css';
import { CadastroAgendaInterface } from "../Interfaces/CadastroAgendaInterface";
import { CadastroProfissionalInterface } from "../Interfaces/CadastroProfissionalInterface";

const ListagemAgenda = () => {
    const [agenda, setAgenda] = useState<CadastroAgendaInterface[]>([]);
    const [pesquisa, setPesquisa] = useState<string>("")
    const [error, setError] = useState("");


    const handleState = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.name === "pesquisaAgenda") {
            setPesquisa(e.target.value);
        }
    }
    const buscar = (e: FormEvent) => {
        e.preventDefault();

        async function fetchData() {
            try {
                console.log(pesquisa);
                const response = await axios.post('http://127.0.0.1:8000/api/agenda/pesquisaDataHora',
                    {  dataHora: pesquisa },
                    {
                        headers: {
                            "Accept": "application/json",
                            "Content-Type": "application/json"
                        }
                    }

                ).then(function (response) {
                    
                    console.log(response.data)
                    if (true === response.data.status) {
                        console.log(response.data)
                        setAgenda(response.data.data)
                    } else {

                        setAgenda([])
                    }
                }).catch(function (error) {
                    console.log(error)
                });



            } catch (error) {
                console.log(error);
            }
        }

        fetchData();

    }
    function handleDelete(id: number) {
        const confirm = window.confirm('Você tem certeza que deseja excluir?');
        if (confirm)
            axios.delete('http://127.0.0.1:8000/api/agenda/delete/' + id)
                .then(function (response) {
                    window.location.href = "/agenda/listagem"
                }).catch(function (error) {
                    console.log('Ocorreu um erro ao excluir');
                })
    }
    useEffect(() => {
        async function fetchData() {
            try {
                const response = await axios.get('http://127.0.0.1:8000/api/agenda/retornaTodos');
                if(response.data.status === true){
                    setAgenda(response.data.data);
                }
                else{
                    console.log("Erro");
                    
                }
                console.log(response);
               
            } catch (error) {
                setError("Ocorreu um erro");
                console.log(error)
            }
        }

        fetchData();
    }, []);
    return (
        <div>
            <main className={styles.main}>
                <div className='container'>
                    <div className='col-md mb-3'>
                        <div className='card'>
                            <div className='card-body'>
                                <h5 className='card-title'>Pesquisar</h5>
                                <form onSubmit={buscar} className='row'>
                                    <div className='col-10'>
                                        <input type="text" name='pesquisaAgenda' className='form-control'
                                            onChange={handleState} />

                                    </div>
                                    <div className='col-1'>
                                        <button type='submit' className='btn btn-success'>Pesquisar</button>
                                    </div>

                                </form>
                            </div>
                        </div>
                    </div>

                    <div className='container'>
                        <div className='card'>
                            <div className='card-body '>
                                <h5 className='card-title'>
                                    Listagem das Agenda
                                </h5>
                                <table className='table table-hover '>
                                    <thead>
                                        <tr>
                                            <th>ID</th>
                                            <th>profissional Id</th>
                                            <th>dataHora</th>
                                            <th>Ações</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {agenda.map(agenda => (
                                            <tr key={agenda.id}>
                                                <td>{agenda.id}</td>
                                                <td>{agenda.profissionalId}</td>
                                                <td>{agenda.dataHora}</td>
                                                
                                                <td>
                                                <a onClick={e => handleDelete(agenda.id)} className='btn m-1 btn-danger btn-sm'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-trash3-fill" viewBox="0 0 16 16">
  <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5m-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5M4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06Zm6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528ZM8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5"/>
</svg></a>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
export default ListagemAgenda;