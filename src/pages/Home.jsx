import { useState } from "react";
import { useHistory } from "react-router-dom";
import {  firebase } from '../services/firebase'
import '../styles/home.scss'

export function Home() {
  const history = useHistory()  

  const [pass, setPass] = useState('')
  const [email, setEmail] = useState('')


  
  function signInWithGoogle() {
  const provider = new firebase.auth.GoogleAuthProvider();
   
    firebase.auth().signInWithPopup(provider).then((result) => {
      const user = result.user;
      if (user !== '') {
        history.push('/page/register');
      }
    })

  }
       
  // faz a autenticaçao com senha e email porem nao consegui pegar os dados do db

  function sign(event) {  

    firebase.auth().signInWithEmailAndPassword(email, pass).then((result) => {
      event.preventDefault(); 

      const user = result.user;
      
      if (user) {
        history.push('/page/register');
      } else {
        alert('user nao exite')
        history.push('/');        
      }        
    }) 
  }
    // firebase.auth().createUserWithEmailAndPassword(email, pass).then((result) => {
    //   const user = result.user;
    //   alert('usuario criado ')
    // })

  // if (email.trim() === '') {
    //   alert('plaese enter email')
    // }

    // if (pass.trim() === '') {
    //   alert('plaese password')
    // }

    // db.collection('usersign').add({email, pass}).then(() => {
    //   alert('pass registed')
    // })

  

  return (
    <div id="page-auth">
      <h1>Login page</h1>
      <div className="card">
      <form onSubmit={sign}>
        <input
          name="email"
          placeholder="exemplo@gmail.com"
          type="email"
          value={email}
          onChange={( event) => setEmail(event.target.value)}
        />

        <input
          name="pass"
          placeholder="Digite sua senha"
          type="password"
          value={pass}
          onChange={( event) => setPass(event.target.value)}
        />
        <button type="submit">Login</button> 
      </form>
      </div>
     
      <button className="btn-google" onClick={signInWithGoogle}>Login com Google</button>
    </div>
  )
}
