import React from 'react'
import { Col, Modal, ModalBody, ModalHeader, Row } from 'reactstrap'

const FormDocumentOrigin = ({
    modal, toggle, handleSubmit, register, submit, toggleActualizacion, errors
}) => {
    return (
        <Modal isOpen={modal} toggle={toggle || toggleActualizacion} size='lg'>
            <ModalHeader>
                Registrar Tipo de Proveido
            </ModalHeader>
            <ModalBody>
                <form onSubmit={handleSubmit(submit)}>
                    <Row>
                        <Col>
                            <div className='form-group'>
                                <label htmlFor="origin">Atención del documento</label>
                                <input
                                    className="form-control"
                                    type="text"
                                    placeholder='Ingrese el proveido de documento'
                                    {...register('origin')}
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

export default FormDocumentOrigin