import React, { useState } from 'react'
import { useForm } from "react-hook-form";
import { Card, Col, Row } from 'reactstrap'


import SearchDocumentOrigin from '../../../components/documentOrigin/SearchDocumentOrigin'
import TablaDocumentOrigin from '../../../components/documentOrigin/TablaDocumentOrigin'
import FormDocumentOrigin from '../../../components/documentOrigin/FormDocumentOrigin'
import { useDocumentOrigin } from '../../../utility/hooks/documentOrigin/useDocumentOrigin';
import documentOriginDefault from '../../../utility/constants/documentOriginDefault';

const OrigenDocumento = () => {
  const { handleSubmit, register, reset, formState: { errors } } = useForm();
  const [modal, setModal] = useState(false);
  const [actualizacion, setActualizacion] = useState(false);

  const {
    documentOrigins,
    createDocumentOrigin,
    getDocumentOriginId,
    updateDocumentOrigin,
    setSearch,
    search,
    filtereds
  } = useDocumentOrigin()

  const toggle = () => {

    setActualizacion(false);
    reset(documentOriginDefault);
    setModal(!modal);
  };

  const toggleActualizacion = () => {
    setActualizacion(true)
    setModal(!modal);
  };

  const getDocumentOriginIdTable = (id) => {
    getDocumentOriginId(id, reset, toggleActualizacion)
  }
  const submit = (data) => {
    if (actualizacion) {
      updateDocumentOrigin(data.id, data, reset, toggle);
    } else {
      createDocumentOrigin(data, reset, toggle);
    }
  };
  return (
    <div>
      <h1>Documentos de origen</h1>
      <Row className="my-2">
        <Col sm="10">
          <SearchDocumentOrigin
            search={search} setSearch={setSearch}
          />
        </Col>
        <Col sm="2">
          <button className='btn btn-success my-1' onClick={toggle}>
            + Crear Proveido
          </button>
        </Col>
      </Row>
      <TablaDocumentOrigin
        documentOrigins={filtereds}
        getDocumentOriginIdTable={getDocumentOriginIdTable}
      />
      <FormDocumentOrigin
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

export default OrigenDocumento