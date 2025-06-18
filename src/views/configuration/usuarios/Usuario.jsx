import React, { useState } from 'react'
import { useForm } from "react-hook-form";
import { Card, Col, Row } from 'reactstrap'
import { useUser } from '../../../utility/hooks/users/useUser'

import TablaUsers from '../../../components/users/TablaUsers'
import userDefault from '../../../utility/constants/userDefault'
import FormUsers from '../../../components/users/FormUsers';
import SearchUsers from '../../../components/users/SearchUsers';

const Usuario = () => {
  const { handleSubmit, register, reset, formState: { errors } } = useForm();
  const [modal, setModal] = useState(false);
  const [actualizacion, setActualizacion] = useState(false);
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
    searchUser
  } = useUser()
  
  const toggle = () => {

    setActualizacion(false);
    reset(userDefault);
    setModal(!modal);
  };

  const toggleActualizacion = () => {
    setActualizacion(true)
    setModal(!modal);
  };

  const getUserTablaId = (id) => {
    getUserId(id, reset, toggleActualizacion)
  }
  const submit = (data) => {
    if (actualizacion) {
      updateUser(data.id, data, reset, toggle);
    } else {
      createUser(data, reset, toggle);
    }
  };
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
    </div>
  )
}

export default Usuario