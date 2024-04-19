import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { doSignInWithEmailAndPassword } from "../../config/Firebase/auth";
import { useAuth } from "../../config/context/authContext";
import "./css";
import ErrorMessage from "../../components/globalCss/mensagemErro";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const router = useRouter();
  const [errorMessage, setErrorMessage] = useState("");

  //função que deve ser executada ao interagir com o botao login
  const signIn = async () => {
    try {
      //cadastrar usuario
      await doSignInWithEmailAndPassword(email, senha);

      //direcionar para lista
      navigate("/");
    } catch (error) {
      console.error("Erro ao criar usuario", error);
      setErrorMessage(
        "Erro ao criar usuario, este usuario provavelmente já possui um cadastro."
      );
    }
  };

  //encerra mensagem de error
  const singInCloseError = () => {
    setErrorMessage("");
  };

  //retorna a pagina login
  return (
    <div>
      {errorMessage && (
        <ErrorMessage message={errorMessage} onClose={singInCloseError} />
      )}
      <div>
        <h2>Login</h2>
        <input
          type="email"
          placeholder="Informe seu e-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Informe sua senha"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
        />
        <button onClick={signIn}>Entrar</button>
      </div>
    </div>
  );
}

//exporta a função login
export default Login;
