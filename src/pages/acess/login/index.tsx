import { useState } from "react"
import "./index.css"
import { Button, Card } from "react-bootstrap";

function LoginPage() {
    const [email, setEmail] = useState("");

  return (
    <Card>
      <div className="loginContainer">
        <div className="loginTitle">
            <h1>Log In to ifHick</h1>
        </div>
        <div className="loginField">
            <label>email</label>
            <input name="email" value={email}  onChange={(e) => {setEmail(e?.target.value)}}></input>
            <button className="submitButton">Entrar</button>
        </div>
        <div>
            <Button onClick={() => console.log(email)}>Cadastrar</Button>
            <button>Esqueci a senha</button>
        </div>
      </div>
    </Card>
  )
}

export default LoginPage
