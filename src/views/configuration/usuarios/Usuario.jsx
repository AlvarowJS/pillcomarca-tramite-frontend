import React, { useState } from 'react'
import { useForm } from "react-hook-form";
import { Card, Col, Row } from 'reactstrap'
import { useUser } from '../../../utility/hooks/users/useUser'

import TablaUsers from '../../../components/users/TablaUsers'
import userDefault from '../../../utility/constants/userDefault'
import FormUsers from '../../../components/users/FormUsers';
import SearchUsers from '../../../components/users/SearchUsers';
import FormAsigmentUser from '../../../components/users/FormAsigmentUser';

const Usuario = () => {
  const { handleSubmit, register, reset, formState: { errors } } = useForm();
  const { handleSubmit: handleSubmitAsignment, register: registerAsignement, reset: resetAsignement } = useForm();
  const [modal, setModal] = useState(false);
  const [actualizacion, setActualizacion] = useState(false);
  
  const [modalAsignacion, setModalAsignacion] = useState(false)
  const {
    data,
    loading,
    totalRows,
    handlePerRowsChange,
    handlePageChange,
    createUser,
    getUserId,
    updateUser,
    setSearch,
    search,
    searchUser,getAsignmentId
  } = useUser()

  const toggle = () => {
    setActualizacion(false);
    reset(userDefault);
    setModal(!modal);
  };

  const toggleAsignment = () => {
    setModalAsignacion(!modalAsignacion)
  }

  const toggleActualizacion = () => {
    setActualizacion(true)
    setModal(!modal);
  };

  const getUserTablaId = (id) => {
    getUserId(id, reset, toggleActualizacion)
  }

  const getAsignmentTablaId = (id) => {
    getAsignmentId(id, toggleAsignment)
  }
  const submit = (data) => {
    if (actualizacion) {
      updateUser(data.id, data, reset, toggle);
    } else {
      createUser(data, reset, toggle);
    }
  };

  const submitAsignment = () => {

  }
  return (
    <div>
      <h1>Usuarios</h1>
      <Row className="my-2">
        <Col sm="10">
          <SearchUsers
            search={search}
            setSearch={setSearch}
            searchUser={searchUser}
          />
        </Col>
        <Col sm="2">
          <button className='btn btn-success' onClick={toggle}>
            + Crear
          </button>
        </Col>
      </Row>
      <TablaUsers
        data={data}
        loading={loading}
        totalRows={totalRows}
        handlePerRowsChange={handlePerRowsChange}
        handlePageChange={handlePageChange}
        getUserTablaId={getUserTablaId}
      />
      <FormUsers
        toggle={toggle}
        modal={modal}
        handleSubmit={handleSubmit}
        submit={submit}
        register={register}
        reset={reset}
        errors={errors}
      />
      <FormAsigmentUser 
        toggle={toggleAsignment}
        modal={modalAsignacion}
        handleSubmit={handleSubmitAsignment}
        submit={submitAsignment}
        register={registerAsignement}
        reset={resetAsignement}
      />
    </div>
  )
}

export default Usuario