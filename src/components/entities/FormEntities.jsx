import React from 'react'
import { Col, Modal, ModalBody, ModalHeader, Row } from 'reactstrap'
const FormEntities = ({
    modal, toggle, handleSubmit, register, submit, toggleActualizacion, errors, typesEntities
}) => {
    console.log(typesEntities, "As")
    return (

        <Modal isOpen={modal} toggle={toggle || toggleActualizacion} size='lg'>
            <ModalHeader>
                Registrar Entidad
            </ModalHeader>
            <ModalBody>
                <form onSubmit={handleSubmit(submit)}>
                    <Row>
                        <Col>
                            <div className='form-group'>
                                <label htmlFor="nombre_completo">Tipo de Entidad</label>
                                <select className='form-select' id='entity_type_id' {...register("entity_type_id")}>
                                    {
                                        typesEntities?.map(tipo => (
                                            <option key={tipo?.id} value={tipo?.id}>{tipo?.type}</option>
                                        ))
                                    }
                                </select>
                            </div>

                            <div className='form-group'>
                                <label htmlFor="description">Entidad</label>
                                <input
                                    className="form-control"
                                    type="text"
                                    placeholder='Ingrese nombre de la entidad'
                                    {...register('description')}
                                    required
                                />
                            </div>
                            <div className='form-group'>
                                <label htmlFor="direction">Dirección</label>
                                <input
                                    className="form-control"
                                    type="text"
                                    placeholder='Ingrese nombre de la entidad'
                                    {...register('direction')}
                                    required
                                />
                            </div>
                            <div className='form-group'>
                                <label htmlFor="ruc">RUC</label>
                                <input
                                    className="form-control"
                                    type="text"
                                    placeholder='Ingrese nombre de la entidad'
                                    {...register('ruc')}
                                    required
                                />
                            </div>
                            <div className='form-group'>
                                <label htmlFor="abbreviation">Abreviatura</label>
                                <input
                                    className="form-control"
                                    type="text"
                                    placeholder='Ingrese nombre de la entidad'
                                    {...register('abbreviation')}
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

export default FormEntities