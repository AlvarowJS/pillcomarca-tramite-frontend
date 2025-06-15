import React, { useState } from 'react'
import TablaTypeDocuments from '../../../components/typeDocuments/TablaTypeDocuments'
import FormTypeDocuments from '../../../components/typeDocuments/FormTypeDocuments'
import SearchTypeDocuments from '../../../components/typeDocuments/SearchTypeDocuments'
import { useForm } from "react-hook-form";
import { Card, Col, Row } from 'reactstrap'
import documentTypeDefaults from '../../../utility/constants/documentTypeDefaults';
import useTypeDocuments from '../../../utility/hooks/typeDocuments/useTypeDocuments';
const TipoDocumento = () => {
  const { handleSubmit, register, reset, formState: { errors } } = useForm();
  const [modal, setModal] = useState(false);
  const [actualizacion, setActualizacion] = useState(false);
  const {
    documentTypes,
    createDocumentType,
    getDocumentTypeId,
    updateDocumentType,
    setSearch,
    search,
    filtereds,
    documentDetails
  } = useTypeDocuments()

  const toggle = () => {

    setActualizacion(false);
    reset(documentTypeDefaults);
    setModal(!modal);
  };

  const toggleActualizacion = () => {
    setActualizacion(true)
    setModal(!modal);
  };

  const getDocumentTypeByIdTable = (id) => {
    getDocumentTypeId(id, reset, toggleActualizacion)
  }
  const submit = (data) => {
    if (actualizacion) {
      updateDocumentType(data.id, data, reset, toggle);
    } else {
      createDocumentType(data, reset, toggle);
    }
  };
  return (
    <div>
      <h1>Tipos de documentos</h1>
      <Row className="my-2">
        <Col sm="10">
          <SearchTypeDocuments
            search={search} setSearch={setSearch}
          />
        </Col>
        <Col sm="2">
          <button className='btn btn-success my-1' onClick={toggle}>
            + Crear Entidad
          </button>
        </Col>
      </Row>

      <TablaTypeDocuments
        typeDocuments={filtereds}
        getDocumentTypeByIdTable={getDocumentTypeByIdTable}
      />
      <FormTypeDocuments
        toggle={toggle}
        modal={modal}
        handleSubmit={handleSubmit}
        submit={submit}
        register={register}
        reset={reset}
        errors={errors}
        documentDetails={documentDetails}
      />
    </div>
  )
}

export default TipoDocumento