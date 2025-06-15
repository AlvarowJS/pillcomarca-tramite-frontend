import React, { useState } from 'react'
import TablaProvideds from '../../../components/provideds/TablaProvideds'
import SearchProvideds from '../../../components/provideds/SearchProvideds'
import FormProvideds from '../../../components/provideds/FormProvideds'
import { useForm } from "react-hook-form";
import { Card, Col, Row } from 'reactstrap'
import { useProvideds } from '../../../utility/hooks/provided/useProvideds';
import providedDefault from '../../../utility/constants/providedsDefault';
const Proveido = () => {
  const { handleSubmit, register, reset, formState: { errors } } = useForm();
  const [modal, setModal] = useState(false);
  const [actualizacion, setActualizacion] = useState(false);
  const {
    provideds,
    createProvided,
    getProvidedId,
    updateProvided,
    setSearch,
    search,
    filtereds
  } = useProvideds()

  const toggle = () => {

    setActualizacion(false);
    reset(providedDefault);
    setModal(!modal);
  };

  const toggleActualizacion = () => {
    setActualizacion(true)
    setModal(!modal);
  };

  const getProvidedIdTable = (id) => {
    getProvidedId(id, reset, toggleActualizacion)
  }
  const submit = (data) => {
    if (actualizacion) {
      updateProvided(data.id, data, reset, toggle);
    } else {
      createProvided(data, reset, toggle);
    }
  };
  return (
    <div>
      <h1>Tipos de documentos</h1>
      <Row className="my-2">
        <Col sm="10">
          <SearchProvideds
            search={search} setSearch={setSearch}
          />
        </Col>
        <Col sm="2">
          <button className='btn btn-success my-1' onClick={toggle}>
            + Crear Proveido
          </button>
        </Col>
      </Row>

      <TablaProvideds
        provideds={filtereds}
        getProvidedIdTable={getProvidedIdTable}
      />
      <FormProvideds
        toggle={toggle}
        modal={modal}
        handleSubmit={handleSubmit}
        submit={submit}
        register={register}
        reset={reset}
        errors={errors}        
      />
    </div >
  )
}

export default Proveido