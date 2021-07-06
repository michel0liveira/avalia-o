import { useState } from "react";
import { useHistory } from "react-router-dom";

export function Home() {
  const history = useHistory()

  const [login, setLogin] = useState()

  const [pass, setPass] = useState('')
  const [email, setEmail] = useState('')

  function handelLogin(event) {
    event.preventDefault();   

    if (email.trim() === '') {
      alert('plaese enter email')
    }

    if (pass.trim() === '') {
      alert('plaese password')
    }

    

    console.log(pass, email);
  }

  return (
    <div>
      <h1>Login page</h1>
      <form onSubmit={handelLogin}>
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
  );
}
