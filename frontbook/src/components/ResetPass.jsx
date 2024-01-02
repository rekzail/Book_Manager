import React,{useState} from 'react'
import Button from 'react-bootstrap/Button';
import {
  MDBValidation,
  MDBValidationItem,
  MDBInput,
} from 'mdb-react-ui-kit';

export default function ResetPass() {

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
    <div>
        <MDBValidation className='row g-3 p-5'>
      <MDBValidationItem className='col-md-4'>
        <MDBInput
          value={formValue.fname}
          type='password'
          name='fname'
          onChange={onChange}
          id='validationCustom01'
          required
          label='Contraseña'
        />
      </MDBValidationItem>
      <MDBValidationItem className='col-md-4'>
        <MDBInput
          value={formValue.lname}
          type='password'
          name='lname'
          onChange={onChange}
          id='validationCustom02'
          required
          label='Repite Contraseña'
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
    </div>
  )
}
