import React, { Component, useState, ChangeEvent, FormEvent,useEffect} from 'react';

import Footer from "./Footer"
import Header from "./Header"
import axios from "axios"

const CadastroCliente = () => {
    const[nome,setNome] = useState<string>("");
    const[celular,setCelular] = useState<string>("");
    const[email,setEmail] = useState<string>("");
    const[cpf,setCpf] = useState<string>("");
    const[nascimento,setNascimeto] = useState<string>("");
    const[cidade,setCidade] = useState<string>("");
    const[estado,setEstado] = useState<string>("");
    const[rua,setRua] = useState<string>("");
    const[numero,setNumero] = useState<string>("");
    const[bairro,setBairro] = useState<string>("");
    const[cep,setCep] = useState<string>("");
    const[complemeto,setComplemeto] = useState<string>("");
    const[password,setPassword] = useState<string>("");
    
    const cadastrarCliente = (e:FormEvent) =>{
        e.preventDefault()

        const dados = {
            nome: nome,
            celular: celular,
            email: email,
            cpf: cpf,
            nascimento: nascimento,
            cidade: cidade,
            estado: estado,
            rua: rua,
            numero: numero,
            bairro: bairro,
            cep: cep,
            complemeto: complemeto,
            password: password,
        }
        console.log(dados)

        axios.post('http://127.0.0.1:8000/api/criarCliente',
        dados,
        {
            headers:{
                "Accept": "aplication/json",
                "Content-type": "aplication/json"
            }
        }
        ).then(function(response){
            window.location.href = "/listagemClientes"
        }).catch(function(error){
            console.log(error)
        })
    }    
    
    const handleState = (e: ChangeEvent<HTMLInputElement>)=>{
        if(e.target.name === "nome"){
            setNome(e.target.value)
        }
        if(e.target.name === "celular"){
            setNome(e.target.value)
        }
        if(e.target.name === "email"){
            setNome(e.target.value)
        }
        if(e.target.name === "cpf"){
            setNome(e.target.value)
        }
        if(e.target.name === "nascimento"){
            setNome(e.target.value)
        }
        if(e.target.name === "cidade"){
            setNome(e.target.value)
        }
        if(e.target.name === "estado"){
            setNome(e.target.value)
        }
        if(e.target.name === "rua"){
            setNome(e.target.value)
        }
        if(e.target.name === "numero"){
            setNome(e.target.value)
        }
        if(e.target.name === "bairro"){
            setNome(e.target.value)
        }
        if(e.target.name === "cep"){
            setNome(e.target.value)
        }
        if(e.target.name === "complemento"){
            setNome(e.target.value)
        }
        if(e.target.name === "password"){
            setNome(e.target.value)
        }
    }
    return(
        <div>
           <Header />
               <main>
                  <div className='container'>
                    <div className='card'>
                        <div className='card-body'>
                            <h5 className='card-title'>Cadastrar Cliente</h5>
                            <form onSubmit={cadastrarCliente} className='row g-3'>
                                <div className='col-6'>
                                    <label htmlFor="nome" className='form-label'>Nome</label>
                                    <input type="text" name='nome' className='form-control' required  onChange={handleState}/>
                                    {nome}
                                </div>
                                <div className='col-6'>
                                    <label htmlFor="email" className='form-label'>Celular</label>
                                    <input type="text" name='celular' className='form-control' required onChange={handleState}/>
                                    {celular}
                                </div>
                                <div className='col-6'>
                                    <label htmlFor="cpf" className='form-label'>E-mail</label>
                                    <input type="text" name="email" className='form-control' required onChange={handleState} />
                                    {email}
                                </div>
                                <div className='col-6'>
                                    <label htmlFor="password" className='form-label'>CPF</label>
                                    <input type="text" name='cpf' className='form-control' required onChange={handleState}/>
                                    {cpf}
                                </div>
                                <div className='col-6'>
                                    <label htmlFor="password" className='form-label'>Nascimeto</label>
                                    <input type="text" name='nascimento' className='form-control' required onChange={handleState}/>
                                    {nascimento}
                                </div> 
                                <div className='col-6'>
                                    <label htmlFor="password" className='form-label'>Cidade</label>
                                    <input type="text" name='cidade' className='form-control' required onChange={handleState}/>
                                    {cidade}
                                </div> 
                                <div className='col-6'>
                                    <label htmlFor="password" className='form-label'>Estado</label>
                                    <input type="text" name='estado' className='form-control' required onChange={handleState}/>
                                    {estado}
                                </div> 
                                <div className='col-6'>
                                    <label htmlFor="password" className='form-label'>Rua</label>
                                    <input type="text" name='rua' className='form-control' required onChange={handleState}/>
                                    {rua}
                                </div> 
                                <div className='col-6'>
                                    <label htmlFor="password" className='form-label'>Número</label>
                                    <input type="text" name='numero' className='form-control' required onChange={handleState}/>
                                    {numero}
                                </div>  
                                <div className='col-6'>
                                    <label htmlFor="password" className='form-label'>Bairro</label>
                                    <input type="text" name='bairro' className='form-control' required onChange={handleState}/>
                                    {bairro}
                                </div> 
                                <div className='col-6'>
                                    <label htmlFor="password" className='form-label'>CEP</label>
                                    <input type="text" name='cep' className='form-control' required onChange={handleState}/>
                                    {cep}
                                </div>
                                <div className='col-6'>
                                    <label htmlFor="password" className='form-label'>Complemento</label>
                                    <input type="text" name='complemento' className='form-control' required onChange={handleState}/>
                                    {complemeto}
                                </div> 
                                <div className='col-6'>
                                    <label htmlFor="password" className='form-label'>Senha</label>
                                    <input type="text" name='password' className='form-control' required onChange={handleState}/>
                                    {password}
                                </div>  
                                  
                                <div className='col-12'>
                                    <button type='submit' className='btn btn-success btn-sm'>Cadastrar</button>
                                </div>            
                            </form>
                        </div>
                    </div>
                  </div>
               </main>
           <Footer/>
        </div>
    ); 
}
export default CadastroCliente;