import { Col, Modal, ModalBody, ModalHeader, Row } from 'reactstrap'


const FormAsigmentUser = ({
    modal, toggle, handleSubmit, register, submit
}) => {
    return (
        <Modal isOpen={modal} toggle={toggle || toggleActualizacion} size='lg'>
            <ModalHeader>
                Asignar Cargo
            </ModalHeader>
            <ModalBody>
                <form onSubmit={handleSubmit(submit)}>
                    <Row className="mb-1">
                        <Col>
                            <div className='form-group'>
                                <label htmlFor="nombre_completo">Asignar Dependencia</label>
                            
                            </div>
                        </Col>
                        <Col>
                            <div className='form-group'>
                                <label htmlFor="firstName">Asignar Cargo</label>
                                <input
                                    className="form-control"
                                    type="text"
                                    placeholder='Ingrese el Cargo'
                                    {...register('dni')}
                                    required
                                />
                            </div>
                        </Col>
                    </Row>
                    <Row className="mb-1">
                        <Col>
                            <div className='form-group'>
                                <label htmlFor="firstName">Documento sustentario</label>
                                <input
                                    className="form-control"
                                    type="text"
                                    placeholder='Nombre de la persona'
                                    {...register('firstName')}
                                    required
                                />
                            </div>
                        </Col>
                        <Col>
                            <div className='form-group'>
                                <label htmlFor="lastName">Fecha de Inicio de Contrato</label>
                                <input
                                    className="form-control"
                                    type="text"
                                    placeholder='Apellidos de la Persona'
                                    {...register('lastName')}
                                    required
                                />
                            </div>
                        </Col>
                    </Row>
                    <Row className="mb-1">
                        <Col>
                            <div className='form-group'>
                                <label htmlFor="phone">Fecha de Fin de Contrato</label>
                                <input
                                    className="form-control"
                                    type="text"
                                    placeholder='Ingrese el telefono o celular'
                                    {...register('phone')}

                                />
                            </div>
                        </Col>
                        <Col>
                            <div className='form-group'>
                                <label htmlFor="email">Rol</label>
                                <input
                                    className="form-control"
                                    type="text"
                                    placeholder='Ingrese el email'
                                    {...register('email')}
                                    required
                                />
                            </div>
                        </Col>

                        <Col>
                            <div className='form-group'>
                                <label htmlFor="direction">Estado</label>
                                <input
                                    className="form-control"
                                    type="text"
                                    placeholder='Ingrese la dirección'
                                    {...register('direction')}
                                    required
                                />
                            </div>
                        </Col>
                    </Row>
                    <button className='btn btn-primary my-2'>Enviar</button>
                </form>
            </ModalBody>
        </Modal >
    )
}

export default FormAsigmentUser