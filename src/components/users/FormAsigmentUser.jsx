import { Col, Modal, ModalBody, ModalHeader, Row } from 'reactstrap'
import { useDependencie } from '../../utility/hooks/dependencies/useDependencie'
import Select from 'react-select'
import { useState } from 'react';
import ListAsignmentUser from './ListAsignmentUser';
import { useEntitie } from '../../utility/hooks/entities/useEntitie';


const FormAsigmentUser = ({
    modal, toggle, handleSubmit, register, submit, charges,
    dependenciesOptions, dependencies, setDependencies,
    filteredDependenciesOptions, setEntity, entity,
    dependenciesDefaultOptions, entitiesOptions,
    selectedOption, setSelectedOption
}) => {
    

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
                                            options={dependenciesDefaultOptions}
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
                                            {...register('charge')}
                                            required
                                        />
                                    </div>
                                </Col>
                            </Row>
                            <Row className="mb-1">
                                <Col>
                                    <div className='form-group'>
                                        <label htmlFor="detail">Documento sustentario</label>
                                        <input
                                            className="form-control"
                                            type="text"
                                            placeholder='Memorandum, contradto u otro documento'
                                            {...register('detail')}
                                            required
                                        />
                                    </div>
                                </Col>
                                <Col>
                                    <div className='form-group'>
                                        <label htmlFor="startDate">Fecha de Inicio de Contrato</label>
                                        <input
                                            className="form-control"
                                            type="date"
                                            placeholder='Apellidos de la Persona'
                                            {...register('startDate')}
                                            required
                                        />
                                    </div>
                                </Col>
                            </Row>
                            <Row className="mb-1">
                                <Col>
                                    <div className='form-group'>
                                        <label htmlFor="finalDate">Fecha de Fin de Contrato</label>
                                        <input
                                            className="form-control"
                                            type="date"
                                            placeholder='Ingrese el telefono o celular'
                                            {...register('finalDate')}

                                        />
                                    </div>
                                </Col>
                                <Col>
                                    <div className='form-group'>
                                        <label htmlFor="email">Role</label>
                                        <select className="form-select" id="role_id" {...register('role_id')}  >
                                            <option value="2">Administrador del sistema</option>
                                            <option value="3" selected>Usuario Interno</option>
                                        </select>
                                    </div>
                                </Col>

                                <Col>
                                    <div className='form-group'>
                                        <label htmlFor="charge_state_id">Estado</label>
                                        <select className="form-select" id="charge_state_id" {...register('charge_state_id')}  >
                                            <option value="1" selected>Activo</option>
                                            <option value="2">Inactivo</option>
                                        </select>
                                    </div>
                                </Col>
                            </Row>
                        </>
                    )}
                    {selectedOption === "usuario" && (
                        <>
                            <Row className="mb-1">
                                <Col>
                                    <div className='form-group'>
                                        <label htmlFor="charge_state_display">Asignar Dependencia</label>
                                        <input
                                            className="form-control"
                                            id="charge_state_display"
                                            value="Usuario Externo"
                                            disabled
                                        />
                                        <input
                                            type="hidden"
                                            value="46"
                                            {...register('charge_state_id')}
                                        />
                                    </div>
                                </Col>
                                <Col>
                                    <div className='form-group'>
                                        <label htmlFor="role_display">Role</label>
                                        <input
                                            className="form-control"
                                            id="role_display"
                                            value="Usuario Externo"
                                            disabled
                                        />
                                        <input
                                            type="hidden"
                                            value="4"
                                            {...register('role_id')}
                                        />
                                    </div>
                                </Col>
                            </Row>

                            <Row className="mb-1">
                                <Col>
                                    <div className='form-group'>
                                        <label htmlFor="state">Estado</label>
                                        <select className="form-select" id="state" {...register('charge_state_id')}>
                                            <option value="1" selected>Activo</option>
                                            <option value="2">Inactivo</option>
                                        </select>
                                    </div>
                                </Col>
                                <Col></Col>
                            </Row>
                        </>

                    )}
                    {selectedOption === "externo" && (
                        <>
                            <Row className="mb-1">
                                <Col>
                                    <div className='form-group'>
                                        <label htmlFor="nombre_completo">Entidad</label>
                                        <Select
                                            id="search"
                                            value={entity}
                                            onChange={setEntity}
                                            options={entitiesOptions}
                                            isSearchable={true}
                                            placeholder="No especifica"
                                        // className='w-50'
                                        />
                                    </div>
                                </Col>
                                <Col>
                                    <div className='form-group'>
                                        <label htmlFor="firstName">Asignar Dependencia</label>
                                        <Select
                                            id="search"
                                            value={dependencies}
                                            onChange={setDependencies}
                                            options={filteredDependenciesOptions}
                                            isSearchable={true}
                                            placeholder="No especifica"
                                        // className='w-50'
                                        />
                                    </div>
                                </Col>
                            </Row>
                            <Row className="mb-1">
                                <Col>
                                    <div className='form-group'>
                                        <label htmlFor="state">Role</label>
                                        <input
                                            className="form-control"
                                            id="role_display"
                                            value="Usuario Externo"
                                            disabled
                                        />
                                        <input
                                            type="hidden"
                                            value="4"
                                            {...register('role_id')}
                                        />
                                    </div>
                                </Col>
                                <Col>
                                    <div className='form-group'>
                                        <label htmlFor="state">Estado</label>
                                        <select className="form-select" id="charge_state_id" {...register('charge_state_id')}  >
                                            <option value="1" selected>Activo</option>
                                            <option value="2">Inactivo</option>
                                        </select>
                                    </div>
                                </Col>
                            </Row>

                        </>
                    )}
                    <button className='btn btn-primary my-2'>Asignar</button>
                </form>
                <ListAsignmentUser
                    charges={charges}
                />
            </ModalBody>
        </Modal >
    )
}

export default FormAsigmentUser