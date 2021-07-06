import { useState } from "react";
import { useHistory } from "react-router-dom";

export function Copi() {
  const history = useHistory()

  const [login, setLogin] = useState({ })

  const handleDataChange = (event) => {
      const {name, value } = event.target
      setLogin({...login, [name]: value})
  } 


  function submited(event) {
      event.preventDefault();   

      const formData = new FormData(event.target)
      const data = Object.fromEntries(formData) 
      console.log(data )

      }

 

console.log(login.name);

  return (
    <div>
      <h1>Login page</h1>
      <form onSubmit={submited}>
        <input
          name="email"
          placeholder="exemplo@gmail.com"
          type="email"                
          onChange={ handleDataChange}
          
        />

        <input
          name="pass"
          placeholder="Digite sua senha"
          type="password"                  
          onChange={ handleDataChange}
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}
