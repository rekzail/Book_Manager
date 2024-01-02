import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import {
  MDBValidation,
  MDBValidationItem,
  MDBInput,
  MDBInputGroup,
} from 'mdb-react-ui-kit';

//COmponents
import ResetPass from './ResetPass';

export default function User() {
  const [formValue, setFormValue] = useState({
    fname: 'Mark',
    lname: 'Otto',
    email: '',
    city: '',
    state: '',
    zip: '',
  });

  const onChange = (e) => {
    setFormValue({ ...formValue, [e.target.name]: e.target.value });
  };

  return (

    <>
    <h3 className="titulo-2">Actualizar Datos</h3>
    <hr className="hr" />
    <MDBValidation className='row g-3 p-5'>
      <MDBValidationItem className='col-md-4'>
        <MDBInput
          value={formValue.fname}
          name='fname'
          onChange={onChange}
          id='validationCustom01'
          required
          label='Primer Nombre'
        />
      </MDBValidationItem>
      <MDBValidationItem className='col-md-4'>
        <MDBInput
          value={formValue.lname}
          name='lname'
          onChange={onChange}
          id='validationCustom02'
          required
          label='Apellido'
        />
      </MDBValidationItem>
      <MDBValidationItem feedback='Elija un nombre de usuario' invalid className='col-md-4'>
        <MDBInputGroup textBefore='@'>
          <input
            type='text'
            className='form-control'
            id='validationCustomUsername'
            placeholder='Usuario'
            required
          />
        </MDBInputGroup>
      </MDBValidationItem>
      <MDBValidationItem className='col-md-6' feedback='Please provide a valid city.' invalid>
        <MDBInput
          value={formValue.city}
          name='city'
          onChange={onChange}
          id='validationCustom03'
          required
          label='Ciudad'
        />
      </MDBValidationItem>
      <MDBValidationItem className='col-md-6' feedback='Please provide a valid zip.' invalid>
        <MDBInput
          value={formValue.zip}
          name='zip'
          onChange={onChange}
          id='validationCustom05'
          required
          label='Zip'
        />
      </MDBValidationItem>
     
      <div className='col-12'>
      <Button variant="success" type='submit' className='mx-3'>
        Actualizar
      </Button>
      <Button variant="danger" type='reset'>
        Reset
      </Button>
        
      </div>
    </MDBValidation>
 
    <h3 className="titulo-2 mt-3">Cambiar contraseña</h3>
    <hr  className='hr'/>
    <ResetPass></ResetPass>
    
    </>
  );
}