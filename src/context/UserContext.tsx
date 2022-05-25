import React, {
  createContext,
  ReactNode,
  useCallback,
  useEffect,
  useReducer,
  useState,
} from "react";

const initialState = {
  nome: "Victor",
  idade: "25",
  trabalho: "Analista de software",
};

export const userReducer = (state: any, action: any) => {
  switch (action.type) {
    case "UPDATE_NOME":
      return { key: "nome", value: action.value };
    case "UPDATE_IDADE":
      return { key: "idade", value: action.value };
    case "UPDATE_TRABALHO":
      return { key: "trabalho", value: action.value };
    default:
      return state;
  }
};

export const Context = createContext<any>(initialState);

interface ContextProps {
  children: ReactNode;
}

interface IKey {
  key: string;
  value: any;
}

const ContextProvider: React.FC<ContextProps> = ({ children }) => {
  const [contextState, setState] = useState(initialState);
  const [userState, dispatch] = useReducer(userReducer, contextState);

  const updateState = useCallback(
    ({ key, value }: IKey) => {
      setState({
        ...contextState,
        [key]: value,
      });
    },
    [contextState]
  );

  useEffect(() => {
    updateState({ ...userState });
  }, [updateState, userState]);

  return (
    <Context.Provider value={[contextState, dispatch]}>
      {children}
    </Context.Provider>
  );
};
export { ContextProvider };
