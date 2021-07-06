import { useEffect, useState } from "react"
import {db} from "../services/firebase"
import '../styles/register.scss'


export function Register() {

    const [regit, setRegist] = useState([])

    const getRegister = () => {
        db.collection("newRegister").onSnapshot((querySnapshot) => {
            const docs = [];
            querySnapshot.forEach((doc) => {
                docs.push({...doc.data(), id: doc.id})
            })
            setRegist(docs)
        })
    }


    useEffect(() => {
        getRegister();
    }, [])

    
    //replica os dados do database em tela
    return(
    <div id="register">
        {/* <button onClick={getRegister}>Rescaregar</button> */}
        <div >
          {regit.map(res => {
             return (
                <div className="card" key={res.id} >
                    <h2>{`Colaborador ${res.name}`}</h2>
                <div >
                    <p>{`Nome: ${res.name}`}</p>
                    <p>{`Email: ${res.email}`}</p>
                    <p>{`Contratação: ${res.hiring}`}</p>
                    <p>{`CPF: ${res.cpf}`}</p>                    
                </div>
                <h3>Enderço</h3>
                <div>
                <p>{`Bairro: ${res.district}`}</p>
                    <p>{`Rua: ${res.street}`}</p>
                    <p>{`CEP: ${res.cep}`}</p>
                    <p>{`Estado ${res.state}`}</p>
                    <p>{`Cidades ${res.city}`}</p>
                </div>
              </div>
             )
             
          })}
        </div>
    </div>
       
    )
    

}