import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBIcon,
  MDBCheckbox
} from 'mdb-react-ui-kit';


function FormLogin() {
  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  return (
    <MDBContainer fluid>
       <Button variant="success" onClick={handleShow}>
        Login
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Iniciar Sesion</Modal.Title>
        </Modal.Header>

        <MDBRow className='d-flex justify-content-center align-items-center h-80'>
          <MDBCol col='12 '>
            <MDBCard className='bg-white my-1  mx-auto form' style={{ borderRadius: '1rem', maxWidth: '500px'}}>
              <MDBCardBody className='p-5 w-100 d-flex flex-column'>
                <h2 className="fw-bold mb-2 text-center">Iniciar Sesion</h2>
                <p className=" mb-3 ">Por favor ingrese Email y contraseña. </p>

                <MDBInput wrapperClass='mb-4 w-100' label='Email' id='formControlLg' type='email' size="lg" />
                <MDBInput wrapperClass='mb-4 w-100' label='Contraseña' id='formControlLg' type='password' size="lg" />

                <MDBCheckbox name='flexCheck' id='flexCheckDefault' className='mb-4' label='Recordar contraseña' />

                <MDBBtn size='lg'>
                  Login
                </MDBBtn>

                <hr className="my-4" />
                  
                <div className="text-center">
                <p>No tienes cuenta? <Link to='/register' onHide={handleClose}>Registrate</Link></p>
                <p>o registrate con:</p>
                </div>

                <MDBBtn className="mb-2 w-100" size="lg" style={{ backgroundColor: '#dd4b39' }}>
                  <MDBIcon fab icon="google" className="mx-2" />
                  Iniciar con google
                </MDBBtn>

                <MDBBtn className="mb-4 w-100" size="lg" style={{ backgroundColor: '#3b5998' }}>
                  <MDBIcon fab icon="facebook-f" className="mx-2" />
                  Iniciar con facebook
                </MDBBtn>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </Modal>
    </MDBContainer>
  );
}

export default FormLogin;
