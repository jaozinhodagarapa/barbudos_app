import React,{Component, useState, ChangeEvent, FormEvent, useEffect} from "react";

import styles from '../App.module.css';
import Footer from "./Footer"
import Header from "./Header"
import axios from "axios";


const CadastroCliente = () => {
    const [nome, setNome] = useState<string>("");
    const [celular,setCelular] = useState<string>("");
    const [email,setEmail] = useState<string>("");
    const [cpf,setCpf] = useState<string>("");
    const [nascimento,setNascimento] = useState<string>("");
    const [cidade,setCidade] = useState<string>("");
    const [estado,setEstado] = useState<string>("");
    const [pais,setPais] = useState<string>("");
    const [rua,setRua] = useState<string>("");
    const [numero,setNumero] = useState<string>("");
    const [bairro,setBairro] = useState<string>("");
    const [cep,setCep] = useState<string>("");
    const [complemento,setComplemento] = useState<string>("");
    const [password,setPassword] = useState<string>("");
    const [uf, setUf] = useState<string>("");
    const [erro, setErro] = useState<string>("");
    const [nomeErro, setNomeErro] = useState<string>("");
    const [celularErro,setCelularErro] = useState<string>("");
    const [emailErro,setEmailErro] = useState<string>("");
    const [cpfErro,setCpfErro] = useState<string>("");
    const [nascimentoErro,setNascimentoErro] = useState<string>("");
    const [cidadeErro,setCidadeErro] = useState<string>("");
    const [estadoErro,setEstadoErro] = useState<string>("");
    const [paisErro,setPaisErro] = useState<string>("");
    const [ruaErro,setRuaErro] = useState<string>("");
    const [numeroErro,setNumeroErro] = useState<string>("");
    const [bairroErro,setBairroErro] = useState<string>("");
    const [cepErro,setCepErro] = useState<string>("");
    const [complementoErro,setComplementoErro] = useState<string>("");
    const [passwordErro,setPasswordErro] = useState<string>("");
    
    const cadastrarCliente = (e: FormEvent) => {
         setNomeErro("")
        setCelularErro("")
        setEmailErro("")
        setCpfErro("")
        setNascimentoErro("")
        setCidadeErro("")
        setEstadoErro("")
        setPaisErro("")
        setRuaErro("")
        setNumeroErro("")
        setBairroErro("")
        setCepErro("")
        setComplementoErro("")
        setPasswordErro("")

        e.preventDefault();

        const dados = {
            nome: nome,
            celular: celular,
            email: email,
            cpf: cpf,
            nascimento: nascimento,
            cidade: cidade,
            estado: estado,
            pais: pais,
            rua: rua,
            numero: numero,
            bairro: bairro,
            cep: cep,
            complemento: complemento,
            password: password
        }

        console.log(dados)

        axios.post('http://127.0.0.1:8000/api/criarCliente',
        dados,
        {
            headers:{
                "Accept": "aplication/json",
                "Content-Type": "aplication/json"
            }
        }
        ).then(function (response) {
            if (response.data.success === false) {
                if ('nome' in response.data.error) {
                    setNomeErro(response.data.error.nome[0])
                }
                if ('celular' in response.data.error) {
                    setCelularErro(response.data.error.celular[0])
                }
                if ('email' in response.data.error) {
                    setEmailErro(response.data.error.email[0])
                }
                if ('cpf' in response.data.error) {
                    setCpfErro(response.data.error.cpf[0])
                }
                if ('nascimento' in response.data.error) {
                    setNascimentoErro(response.data.error.nascimento[0])
                }
                if ('cidade' in response.data.error) {
                    setCidadeErro(response.data.error.cidade[0])
                }
                if ('estado' in response.data.error) {
                    setEstadoErro(response.data.error.estado[0])
                }
                if ('pais' in response.data.error) {
                    setPaisErro(response.data.error.pais[0])
                }
                if ('rua' in response.data.error) {
                    setRuaErro(response.data.error.rua[0])
                }
                if ('numero' in response.data.error) {
                    setNumeroErro(response.data.error.numero[0])
                }
                if ('bairro' in response.data.error) {
                    setBairroErro(response.data.error.bairro[0])
                }
                if ('cep' in response.data.error) {
                    setCepErro(response.data.error.cep[0])
                }
                if ('complemento' in response.data.error) {
                    setComplementoErro(response.data.error.complemento[0])
                }
                if ('password' in response.data.error) {
                    setPasswordErro(response.data.error.password[0])
                }
            } else {
                window.location.href = "/cliente/listagem"
            }
        }).catch(function (error) {
            console.log(error)
        })
    }

    const handleState = (e: ChangeEvent<HTMLInputElement>)=>{
        if(e.target.name === "nome"){
            setNome(e.target.value)
        }
        if(e.target.name === "celular"){
            setCelular(e.target.value)
        }
        if(e.target.name === "email"){
            setEmail(e.target.value)
        }
        if(e.target.name === "cpf"){
            setCpf(e.target.value)
        }
        if(e.target.name === "nascimento"){
            setNascimento(e.target.value)
        }
        if(e.target.name === "cidade"){
            setCidade(e.target.value)
        }
        if(e.target.name === "estado"){
            setEstado(e.target.value)
        }
        if(e.target.name === "pais"){
            setPais(e.target.value)
        }
        if(e.target.name === "rua"){
            setRua(e.target.value)
        }
        if(e.target.name === "numero"){
            setNumero(e.target.value)
        }
        if(e.target.name === "bairro"){
            setBairro(e.target.value)
        }
        if(e.target.name === "cep"){
            setCep(e.target.value)
        }
        if(e.target.name === "complemento"){
            setComplemento(e.target.value)
        }
        if(e.target.name === "password"){
            setPassword(e.target.value)
        } 
    }

    return (
        <div>
            <Header />
            <main className={styles.main}>
                <div className="container">
                    <div className='card'>
                        <div className='card-body'>
                            <h5 className='card-tittle'>Cadastrar Cliente</h5>
                            <form onSubmit={cadastrarCliente} className='row g-3'>
                                <div className='col-6'>
                                    <label htmlFor="nome" className='from-label'>Nome</label>
                                    <input 
                                    type="text" 
                                    name='nome' 
                                    className='form-control'
                                    required 
                                    onChange={handleState}
                                    />                                    
                                </div>
                                <div className='col-6'>
                                    <label htmlFor="celular" className='from-label'>Celular</label>
                                    <input 
                                    type="text" 
                                    name='celular' 
                                    className='form-control'
                                    required 
                                    onChange={handleState}
                                    />                                    
                                </div>
                                <div className='col-4'>
                                    <label htmlFor="email" className='from-label'>Email</label>
                                    <input 
                                    type="text" 
                                    name='email' 
                                    className='form-control'
                                    required 
                                    onChange={handleState}
                                    />                                    
                                </div>
                                <div className='col-4'>
                                    <label htmlFor="cpf" className='from-label'>CPF</label>
                                    <input 
                                    type="text" 
                                    name='cpf' 
                                    className='form-control'
                                    required 
                                    onChange={handleState}
                                    />                                    
                                </div>
                                <div className='col-4'>
                                    <label htmlFor="nascimento" className='from-label'>Nascimento</label>
                                    <input 
                                    type="date" 
                                    name='nascimento' 
                                    className='form-control'
                                    required 
                                    onChange={handleState}
                                    />                                    
                                </div>
                                <div className='col-4'>
                                    <label htmlFor="cidade" className='from-label'>Cep</label>
                                    <input 
                                    type="text" 
                                    name='cep' 
                                    className='form-control'
                                    required 
                                    onChange={handleState}
                                    />                                    
                                </div>
                                <div className='col-4'>
                                    <label htmlFor="estado" className='from-label'>Estado</label>
                                    <input 
                                    type="text" 
                                    name='estado' 
                                    className='form-control'
                                    required 
                                    onChange={handleState}
                                    />                                    
                                </div>
                                <div className='col-4'>
                                    <label htmlFor="pais" className='from-label'>País</label>
                                    <input 
                                    type="text" 
                                    name='pais' 
                                    className='form-control'
                                    required 
                                    onChange={handleState}
                                    />                                    
                                </div>
                                <div className='col-4'>
                                    <label htmlFor="rua" className='from-label'>Rua</label>
                                    <input 
                                    type="text" 
                                    name='rua' 
                                    className='form-control'
                                    required 
                                    onChange={handleState}
                                    />                                    
                                </div>
                                <div className='col-4'>
                                    <label htmlFor="numero" className='from-label'>Numero</label>
                                    <input 
                                    type="text" 
                                    name='numero' 
                                    className='form-control'
                                    required 
                                    onChange={handleState}
                                    />                                    
                                </div>
                                <div className='col-4'>
                                    <label htmlFor="bairro" className='from-label'>Bairro</label>
                                    <input 
                                    type="text" 
                                    name='bairro' 
                                    className='form-control'
                                    required 
                                    onChange={handleState}
                                    />                                    
                                </div>
                                <div className='col-4'>
                                    <label htmlFor="cep" className='from-label'>Cidade</label>
                                    <input 
                                    type="text" 
                                    name='cidade' 
                                    className='form-control'
                                    required 
                                    onChange={handleState}
                                    />                                    
                                </div>
                                <div className='col-4'>
                                    <label htmlFor="complemento" className='from-label'>Complemento</label>
                                    <input 
                                    type="text" 
                                    name='complemento' 
                                    className='form-control'
                                    required 
                                    onChange={handleState}
                                    />                                    
                                </div>
                                <div className='col-4'>
                                    <label htmlFor="password" className='from-label'>Senha</label>
                                    <input 
                                    type="password" 
                                    name='password' 
                                    className='form-control'
                                    required 
                                    onChange={handleState}
                                    />                                    
                                </div>
                                
                               
                                <div className='col-12'>
                                    <button type='submit' className='btn btn-success btn-sm'>Cadastrar</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
export default CadastroCliente;