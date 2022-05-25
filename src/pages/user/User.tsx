import React, { Fragment, useContext, useState } from "react";
import { Context } from "../../context/UserContext";
import { Container, Input, SubmitButton } from "./styled-user";

const User: React.FC = (): JSX.Element => {
  const [contextState, dispatch] = useContext(Context);
  const [nome, setNome] = useState("");
  const [idade, setIdade] = useState("");
  const [trabalho, setTrabalho] = useState("");

  const submitNome = () => {
    dispatch({ type: "UPDATE_NOME", value: nome });
  };

  const submitIdade = () => {
    dispatch({ type: "UPDATE_IDADE", value: idade });
  };

  const submitTrabalho = () => {
    dispatch({ type: "UPDATE_TRABALHO", value: trabalho });
  };

  return (
    <Container>
      <Fragment>
        <h1>{contextState.nome}</h1>
        <Input value={nome} onChange={(e) => setNome(e.target.value)} />
        <SubmitButton onClick={submitNome}>Alterar nome</SubmitButton>
      </Fragment>
      <Fragment>
        <h1>{contextState.idade}</h1>
        <Input value={idade} onChange={(e) => setIdade(e.target.value)} />
        <SubmitButton onClick={submitIdade}>Alterar idade</SubmitButton>
      </Fragment>
      <Fragment>
        <h1>{contextState.trabalho}</h1>
        <Input value={trabalho} onChange={(e) => setTrabalho(e.target.value)} />
        <SubmitButton onClick={submitTrabalho}>Alterar trabalho</SubmitButton>
      </Fragment>
    </Container>
  );
};

export { User };
