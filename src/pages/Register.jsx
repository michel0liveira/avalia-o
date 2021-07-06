import { useState } from "react";


export function Register() {

    const [newRegister, setNewResginter] = useState({ })

    const handleRegister = (event) => {
        const {name, value} = event.target
        setNewResginter({...newRegister, [name]: value})
    }
    
    
    
    function handleCreateRegister(event) {
        event.preventDefault()
        const formData = new FormData(event.target)
        const data = Object.fromEntries(formData) 

    }
    
   
    

    return(
        <div>
            <header className="header">
                <h1> Dados do colaborador </h1>
                <img className="photo" src="#" alt="Foto do colaborador" />
                <p> Colaborador esta ativo <input name="active" type="checkbox" /></p>
            </header>
            <div>
                <form onSubmit={handleCreateRegister}>
                    <input onChange={handleRegister}name="name" placeholder="Nome" type="text" />
                    <input onChange={handleRegister}name="email" placeholder="Email" type="text" />
                    <input onChange={handleRegister}name="hiring" placeholder="Data de contratação" type="text" />
                    <input onChange={handleRegister}name="cpf" placeholder="Cpf" type="text" />
                    <p>Enderço</p>
                    <input onChange={handleRegister}name="district" placeholder="Bairro" type="text" />
                    <input onChange={handleRegister}name="street" placeholder="Rua" type="text" />
                    <input onChange={handleRegister}name="cep" placeholder="CEP" type="text" />
                    <input onChange={handleRegister}name="state" placeholder="Estado" type="text" />
                    <input onChange={handleRegister}name="city" placeholder="Cidade" type="text" />

                    <button type="submit">Enviar</button>
                </form>
            </div>
        </div>
    )
}