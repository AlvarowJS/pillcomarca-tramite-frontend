import { Col, Modal, ModalBody, ModalHeader, Row } from 'reactstrap'
import { useDependencie } from '../../utility/hooks/dependencies/useDependencie'
import Select from 'react-select'
import { useState } from 'react';


const FormAsigmentUser = ({
    modal, toggle, handleSubmit, register, submit
}) => {
    const [selectedOption, setSelectedOption] = useState("internas"); // valor por defecto    
    const { dependenciesOptions, dependencies, setDependencies } = useDependencie()
    return (
        <Modal isOpen={modal} toggle={toggle || toggleActualizacion} size='xl'>
            <ModalHeader>
                Asignar Cargo
            </ModalHeader>
            <ModalBody>
                <Row className="my-2">
                    <Col>
                        <div className="form-check">
                            <input
                                className="form-check-input"
                                type="radio"
                                name="formType"
                                id="radioInternas"
                                value="internas"
                                checked={selectedOption === "internas"}
                                onChange={(e) => setSelectedOption(e.target.value)}
                            />
                            <label className="form-check-label" htmlFor="radioInternas">
                                Dependencias Internas
                            </label>
                        </div>
                    </Col>
                    <Col>
                        <div className="form-check">
                            <input
                                className="form-check-input"
                                type="radio"
                                name="formType"
                                id="radioUsuario"
                                value="usuario"
                                checked={selectedOption === "usuario"}
                                onChange={(e) => setSelectedOption(e.target.value)}
                            />
                            <label className="form-check-label" htmlFor="radioUsuario">
                                Usuario
                            </label>
                        </div>
                    </Col>
                    <Col>
                        <div className="form-check">
                            <input
                                className="form-check-input"
                                type="radio"
                                name="formType"
                                id="radioExterno"
                                value="externo"
                                checked={selectedOption === "externo"}
                                onChange={(e) => setSelectedOption(e.target.value)}
                            />
                            <label className="form-check-label" htmlFor="radioExterno">
                                Entidades Externas
                            </label>
                        </div>
                    </Col>
                </Row>
                <form onSubmit={handleSubmit(submit)}>
                    {selectedOption === "internas" && (
                        <>
                            <Row className="mb-1">
                                <Col>
                                    <div className='form-group'>
                                        <label htmlFor="nombre_completo">Asignar Dependencia</label>
                                        <Select
                                            id="search"
                                            value={dependencies}
                                            onChange={setDependencies}
                                            options={dependenciesOptions}
                                            isSearchable={true}
                                            placeholder="No especifica"
                                        // className='w-50'
                                        />
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
                                            type="date"
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
                                            type="date"
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
                        </>
                    )}
                    <button className='btn btn-primary my-2'>Enviar</button>
                </form>
            </ModalBody>
        </Modal >
    )
}

export default FormAsigmentUser