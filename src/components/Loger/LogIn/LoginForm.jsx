import React, { useEffect, useState } from "react";
import "./LoginForm.css";
import {
  FormGroup,
  Input,
  Label,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  Button,
} from "reactstrap";
import { useAuth } from "../../../hooks/useAuth";
import { validation } from "../../../utils/Loger/Validation";
const LoginForm = ({ state, dispatch }) => {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [fail, setFail] = useState(null);
  const { login, users } = useAuth();

  const handleSubmit = (e, formData) => {
    e.preventDefault();
    const result = validation(users, formData);
   
    result
      ? (login(formData), dispatch({ type: "Close Form" }))
      : setFail("fail");
  };
  const handleClick = () => {
    dispatch({ type: "Close Form" });
  };

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setFail("Default");
    }, 1000);
    return () => clearTimeout(timeoutId);
  }, [fail]);

  return (
    <Modal isOpen={state.logInVisible} className="modal">
      <ModalHeader>Inicia sesion</ModalHeader>
      <form onSubmit={(e) => handleSubmit(e, { user, password })}>
        <ModalBody>
          <FormGroup
            className={`form-container ${fail}`}
            onSubmit={handleSubmit}
          >
            <Label for="user">Usuario o email</Label>
            <Input
              type="text"
              id="user"
              placeholder="Nombre de usuario o email"
              value={user}
              onChange={(e) => setUser(e.target.value)}
              required
              autoComplete="current-user"
            />
            <Label for="password">Contraseña</Label>
            <Input
              type="password"
              placeholder="Contraseña"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              autoComplete="current-password"
            />{fail === 'fail' && <>Usuario no encontrado</>}
          </FormGroup>
        </ModalBody>{" "}
        <ModalFooter>
          <Button type="submit">Iniciar sesion</Button>
          <Button onClick={handleClick}>Cerrar</Button>
        </ModalFooter>
      </form>
    </Modal>
  );
};

export default LoginForm;
