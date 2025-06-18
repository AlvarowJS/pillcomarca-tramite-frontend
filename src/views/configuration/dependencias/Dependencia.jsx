import React, { useState } from 'react'
import { useForm } from "react-hook-form";
import { Card, Col, Row } from 'reactstrap'

import TablaDependencia from '../../../components/dependencies/TablaDependencia'
import SearchDependencia from '../../../components/dependencies/SearchDependencia'
import { useDependencie } from '../../../utility/hooks/dependencies/useDependencie'
import dependenciaDefault from '../../../utility/constants/dependenciaDefault';
import FormDependencia from '../../../components/dependencies/FormDependencia';
import { useEntitie } from '../../../utility/hooks/entities/useEntitie';

const Dependencia = () => {
  const { handleSubmit, register, reset, formState: { errors } } = useForm();
  const [modal, setModal] = useState(false);
  const [actualizacion, setActualizacion] = useState(false);
  const [show, setShow] = useState(true);
  const {
    data,
    createDependencie,
    getDependencieId,
    updateDependencie,
    setSearch,
    search,
    entity,
    setEntity,
    filtereds
  } = useDependencie()

  const {
    entitiesOptions
  } = useEntitie()
  const toggle = () => {

    setActualizacion(false);
    reset(dependenciaDefault);
    setModal(!modal);
  };

  const toggleActualizacion = () => {
    setActualizacion(true)
    setModal(!modal);
  };

  const getDependencieIdTabla = (id) => {
    getDependencieId(id, reset, toggleActualizacion)
  }
  const submit = (data) => {
    if (actualizacion) {
      updateDependencie(data.id, data, reset, toggle);
    } else {
      createDependencie(data, reset, toggle);
    }
  };
  return (
    <div>
      Dependencias
      <Row className="my-2">
        <Col sm="10">
          <SearchDependencia
            search={search}
            setSearch={setSearch}
            entity={entity}
            setEntity={setEntity}
            entitiesOptions={entitiesOptions}
          />
        </Col>
        <Col sm="2">
          <button className='btn btn-success' onClick={toggle}>
            + Crear
          </button>
        </Col>
      </Row>
      <TablaDependencia
        data={filtereds}
        getDependencieIdTabla={getDependencieIdTabla}
      />
      <FormDependencia
        toggle={toggle}
        modal={modal}
        handleSubmit={handleSubmit}
        submit={submit}
        register={register}
        reset={reset}
        errors={errors}
      />

    </div>
  )
}

export default Dependencia