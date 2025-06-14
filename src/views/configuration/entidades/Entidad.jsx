import React, { useState } from 'react'
import TablaEntities from '../../../components/entities/TablaEntities'
import FiltersEntities from '../../../components/entities/FiltersEntities'
import { useEntitie } from '../../../utility/hooks/entities/useEntitie'
import FormEntities from '../../../components/entities/FormEntities'
import { useForm } from "react-hook-form";
import entitiesDefault from '../../../utility/constants/entitiesDefaults'
import { Card, Col, Row } from 'reactstrap'

const Entidad = () => {

    const { handleSubmit, register, reset, formState: { errors } } = useForm();
    const [modal, setModal] = useState(false);
    const [actualizacion, setActualizacion] = useState(false);
    const [show, setShow] = useState(true);
    const {
        entities,
        getEntityById,
        updateEntity,
        filteredEntities,
        search,
        setSearch,
        typesEntities,
        createEntity
    } = useEntitie()

    const toggle = () => {

        setActualizacion(false);
        reset(entitiesDefault);
        setModal(!modal);
    };

    const toggleActualizacion = () => {
        setActualizacion(true)
        setModal(!modal);
    };

    const getEntityByIdTable = (id) => {
        getEntityById(id, reset, toggleActualizacion)
    }
    const submit = (data) => {
        if (actualizacion) {
            updateEntity(data.id, data, reset, toggle);
        } else {
            createEntity(data, reset, toggle);
        }
    };

    return (
        <div>
            <h1>Entidades</h1>
            <Row className="my-2">
                <Col sm="10">
                    <FiltersEntities
                        search={search} setSearch={setSearch}
                    />
                </Col>
                <Col sm="2">
                    <button className='btn btn-success my-1' onClick={toggle}>
                        + Crear Entidad
                    </button>
                </Col>
            </Row>
            <TablaEntities
                entities={filteredEntities}
                getEntityByIdTable={getEntityByIdTable}
            />
            <FormEntities
                toggle={toggle}
                modal={modal}
                handleSubmit={handleSubmit}
                submit={submit}
                register={register}
                reset={reset}
                errors={errors}
                typesEntities={typesEntities}
            />
        </div>
    )
}

export default Entidad