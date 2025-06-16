import { Col, Modal, ModalBody, ModalHeader, Row } from 'reactstrap'

const FormProcedureState = ({
    modal, toggle, handleSubmit, register, submit, toggleActualizacion, errors
}) => {
    return (
        <Modal isOpen={modal} toggle={toggle || toggleActualizacion} size='lg'>
            <ModalHeader>
                Registrar Estado de Tramite
            </ModalHeader>
            <ModalBody>
                <form onSubmit={handleSubmit(submit)}>
                    <Row>
                        <Col>
                            <div className='form-group'>
                                <label htmlFor="state">Estado de Tramite</label>
                                <input
                                    className="form-control"
                                    type="text"
                                    placeholder='Ingrese el proveido de documento'
                                    {...register('state')}
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

export default FormProcedureState