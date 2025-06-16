import { Col, Modal, ModalBody, ModalHeader, Row } from 'reactstrap'

const FormProcessState = ({
  modal, toggle, handleSubmit, register, submit, toggleActualizacion, errors
}) => {
  return (
    <Modal isOpen={modal} toggle={toggle || toggleActualizacion} size='lg'>
      <ModalHeader>
        Registrar Estado de Procedimiento
      </ModalHeader>
      <ModalBody>
        <form onSubmit={handleSubmit(submit)}>
          <Row>
            <Col>
              <div className='form-group'>
                <label htmlFor="condition">Estado de Procedimiento</label>
                <input
                  className="form-control"
                  type="text"
                  placeholder='Ingrese el estado de procedimiento'
                  {...register('condition')}
                  required
                />
              </div>

            </Col>
          </Row>
          <button className='btn btn-primary my-2'>Enviar</button>
        </form>
      </ModalBody>
    </Modal>
  )
}

export default FormProcessState