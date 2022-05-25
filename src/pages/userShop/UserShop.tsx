import React, { useContext } from "react";
import { Context } from "../../context/UserContext";
import { Container } from "./styled-user";

const UserShop: React.FC = (): JSX.Element => {
  const [state, setState] = useContext(Context);
  return (
    <Container>
      <h1>{state.nome}</h1>
      <h1>{state.idade}</h1>
      <h1>{state.trabalho}</h1>
    </Container>
  );
};

export { UserShop };
