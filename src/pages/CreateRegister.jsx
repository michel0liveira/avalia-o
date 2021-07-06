import { useState } from "react";
import { useHistory } from "react-router-dom";

import { db } from '../services/firebase'
import '../styles/createRegister.scss'


export function CreateRegister() {
   const history = useHistory()

    const [newRegister, setNewResginter] = useState({ })

    const handleRegister = (event) => {
        const {name, value} = event.target
        setNewResginter({...newRegister, [name]: value})
    }
    
    
    
    function handleCreateRegister(event) {
        event.preventDefault();
        const formData = new FormData(event.target)
        const data = Object.fromEntries(formData) 
        db.collection('newRegister').add(data).then(() => {
            alert('add sucsussed')
        })

        history.push('/Register')
        // console.log(data)
    }  

    return(
        <div id="create-resgister">
            <header className="header">
            <h1> Dados do colaborador </h1>
              <div>
                {/* a foto esta fixa pois nao consegui fazer a logica de armazenamento seu eu tem o input file */}
              <img className="photo" src="https://images.unsplash.com/photo-1495539406979-bf61750d38ad?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fGZyZWV8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="Foto do colaborador" />
                <label htmlFor="active">Colaborador ativo</label>
                <input name="active" type="checkbox" />
              </div>
            </header>
            <div>
                <form onSubmit={handleCreateRegister}>
                  <div className="data-personal ">
                    <input onChange={handleRegister}name="name" placeholder="Nome" type="text" />
                    <input onChange={handleRegister}name="email" placeholder="Email" type="text" />
                    <input onChange={handleRegister}name="hiring" placeholder="Data de contratação" type="date" />
                    <input onChange={handleRegister}name="cpf" placeholder="Cpf" type="text" />
                  </div>
                  <h2>Enderço</h2>
                   <div className="data-location">
                    <input onChange={handleRegister}name="district" placeholder="Bairro" type="text" />
                    <input onChange={handleRegister}name="street" placeholder="Rua" type="text" />
                    <input onChange={handleRegister}name="cep" placeholder="CEP" type="text" />
                    <input onChange={handleRegister}name="state" placeholder="Estado" type="text" />
                    <input onChange={handleRegister}name="city" placeholder="Cidade" type="text" />
                   </div>
                    <button className="button" type="submit">Enviar</button>
                </form>
            </div>
        </div>
    )
}