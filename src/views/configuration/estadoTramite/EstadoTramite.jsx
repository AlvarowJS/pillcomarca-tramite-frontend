import React, { useState } from 'react'
import { useForm } from "react-hook-form";
import { Card, Col, Row } from 'reactstrap'

import SearchProcedureState from '../../../components/procedureState/SearchProcedureState'
import TablaProcedureState from '../../../components/procedureState/TablaProcedureState'
import FormProcedureState from '../../../components/procedureState/FormProcedureState'
import { useProcedureState } from '../../../utility/hooks/procedureState/useProcedureState';
import procedureStateDefault from '../../../utility/constants/procedureStateDefault';

const EstadoTramite = () => {
  const { handleSubmit, register, reset, formState: { errors } } = useForm();
  const [modal, setModal] = useState(false);
  const [actualizacion, setActualizacion] = useState(false);

  const {
    procedureStates,
    createProcedureState,
    getProcedureStateId,
    updateProcedureState,
    setSearch,
    search,
    filtereds } = useProcedureState()

  const toggle = () => {
    setActualizacion(false);
    reset(procedureStateDefault);
    setModal(!modal);
  };

  const toggleActualizacion = () => {
    setActualizacion(true)
    setModal(!modal);
  };

  const getProcedureGetIdTable = (id) => {
    getProcedureStateId(id, reset, toggleActualizacion)
  }
  const submit = (data) => {
    if (actualizacion) {
      updateProcedureState(data.id, data, reset, toggle);
    } else {
      createProcedureState(data, reset, toggle);
    }
  };
  return (
    <div>
      <h1>Tipos de documentos</h1>
      <Row className="my-2">
        <Col sm="10">
          <SearchProcedureState
            search={search} setSearch={setSearch}
          />
        </Col>
        <Col sm="2">
          <button className='btn btn-success my-1' onClick={toggle}>
            + Nuevo
          </button>
        </Col>
      </Row>

      <TablaProcedureState
        procedures={filtereds}
        getProcedureGetIdTable={getProcedureGetIdTable}
      />
      <FormProcedureState
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

export default EstadoTramite