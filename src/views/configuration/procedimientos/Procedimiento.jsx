import React, { useState } from 'react'
import { useForm } from "react-hook-form";
import { Card, Col, Row } from 'reactstrap'

import SearchProcessState from '../../../components/processState/SearchProcessState'
import TablaProcessState from '../../../components/processState/TablaProcessState'
import FormProcessState from '../../../components/processState/FormProcessState'
import { useProcessState } from '../../../utility/hooks/processState/useProcessState';
import processStateDefault from '../../../utility/constants/processStateDefault';

const Procedimiento = () => {

  const { handleSubmit, register, reset, formState: { errors } } = useForm();
  const [modal, setModal] = useState(false);
  const [actualizacion, setActualizacion] = useState(false);

  const {
    data,
    createProcessState,
    getProcessStateId,
    updateProcessState,
    setSearch,
    search,
    filtereds,
  } = useProcessState()

  const toggle = () => {
    setActualizacion(false);
    reset(processStateDefault);
    setModal(!modal);
  };

  const toggleActualizacion = () => {
    setActualizacion(true)
    setModal(!modal);
  };

  const getProcessStateIdTable = (id) => {
    getProcessStateId(id, reset, toggleActualizacion)
  }
  const submit = (data) => {
    if (actualizacion) {
      updateProcessState(data.id, data, reset, toggle);
    } else {
      createProcessState(data, reset, toggle);
    }
  };
  return (
    <div>
      <h1>Estados de procedimiento</h1>
      <Row className="my-2">
        <Col sm="10">
          <SearchProcessState
            search={search} setSearch={setSearch}
          />
        </Col>
        <Col sm="2">
          <button className='btn btn-success my-1' onClick={toggle}>
            + Crear
          </button>
        </Col>
      </Row>
      <TablaProcessState
        data={filtereds}
        getProcessStateIdTable={getProcessStateIdTable} />
      <FormProcessState
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

export default Procedimiento