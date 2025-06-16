import { Col, Modal, ModalBody, ModalHeader, Row } from 'reactstrap'

const FormUsers = ({
    modal, toggle, handleSubmit, register, submit, toggleActualizacion, errors, documentDetails
}) => {
    return (
        <Modal isOpen={modal} toggle={toggle || toggleActualizacion} size='lg'>
            <ModalHeader>
                Registrar Tipo de Documento
            </ModalHeader>
            <ModalBody>
                <form onSubmit={handleSubmit(submit)}>
                    <Row className="mb-1">
                        <Col>
                            <div className='form-group'>
                                <label htmlFor="nombre_completo">Tipo de Entidad</label>
                                <select className='form-select' id='detail_document_type_id' {...register("detail_document_type_id")}>
                                    {
                                        documentDetails?.map(detail => (
                                            <option key={detail?.id} value={detail?.id}>{detail?.detail}</option>
                                        ))
                                    }
                                </select>
                            </div>
                        </Col>
                        <Col>
                            <div className='form-group'>
                                <label htmlFor="firstName">Número de DNI</label>
                                <input
                                    className="form-control"
                                    type="text"
                                    placeholder='Ingrese el DNI'
                                    {...register('dni')}
                                    required
                                />
                            </div>
                        </Col>
                    </Row>
                    <Row className="mb-1">
                        <Col>
                            <div className='form-group'>
                                <label htmlFor="firstName">Entidad</label>
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
                                <label htmlFor="lastName">Entidad</label>
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
                                <label htmlFor="phone">Telefono</label>
                                <input
                                    className="form-control"
                                    type="text"
                                    placeholder='Ingrese el telefono o celular'
                                    {...register('phone')}
                                    required
                                />
                            </div>
                        </Col>
                        <Col>
                            <div className='form-group'>
                                <label htmlFor="email">Email</label>
                                <input
                                    className="form-control"
                                    type="text"
                                    placeholder='Ingrese el email'
                                    {...register('email')}
                                    required
                                />
                            </div>
                        </Col>
                    </Row>
                    <Row className="mb-1">
                        <Col>
                            <div className='form-group'>
                                <label htmlFor="direction">Dirección</label>
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

export default FormUsers