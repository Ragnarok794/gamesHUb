import React, { useState } from 'react';
import './SignUpForm.css'
import { FormGroup, Input, Label, Modal, ModalBody, ModalFooter, ModalHeader, Button } from 'reactstrap'
import { useAuth } from '../../../hooks/useAuth';
const SignUpForm = ({ state,dispatch }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
const [name, setName]=useState('')
const {register} = useAuth()
const handleSubmit = (e, formData) => {
  e.preventDefault()
  register(formData)
  dispatch({type: 'Close Form'})
}
  const handleClick =()=>{
    dispatch({type: 'Close Form'})
  }
 

  return ( <Modal isOpen={state.signUpvisible} className='modal'>
  <ModalHeader>
   Registrarse 
  </ModalHeader>
  <form onSubmit={(e) => handleSubmit(e, { name, email, password })}>
  <ModalBody>
    <FormGroup className='form-container Default ' onSubmit={handleSubmit} >
      <Label for='name'>Usuario</Label>
      <Input type='text'id='name' placeholder="Nombre de usuario"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
        autoComplete="current-user"/>
      <Label for='email'>Email</Label>
      <Input type="email"
        placeholder="Correo electrónico"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        autoComplete="current-email"/>
      <Label for='password'>Contraseña</Label>
      <Input  type="password"
        placeholder="Contraseña"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
        autoComplete="current-password"/>
    </FormGroup>
  </ModalBody> <ModalFooter>
    <Button type="submit">Registrarse</Button>
    <Button onClick={handleClick}>Cerrar</Button>
  </ModalFooter>
  </form>
 
</Modal>

  )
}

export default SignUpForm;
