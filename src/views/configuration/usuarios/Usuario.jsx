import React, { useState } from 'react'
import { useForm } from "react-hook-form";
import { Card, Col, Row } from 'reactstrap'
import { useUser } from '../../../utility/hooks/users/useUser'

import TablaUsers from '../../../components/users/TablaUsers'
import userDefault from '../../../utility/constants/userDefault'
import FormUsers from '../../../components/users/FormUsers';
import SearchUsers from '../../../components/users/SearchUsers';
import FormAsigmentUser from '../../../components/users/FormAsigmentUser';
import { useCharges } from '../../../utility/hooks/charge/useCharges';
import { useDependencie } from '../../../utility/hooks/dependencies/useDependencie';
import { useEntitie } from '../../../utility/hooks/entities/useEntitie';

const Usuario = () => {
  const { handleSubmit, register, reset, formState: { errors } } = useForm();
  const { handleSubmit: handleSubmitAsignment, register: registerAsignement, reset: resetAsignement } = useForm();
  const [modal, setModal] = useState(false);
  const [actualizacion, setActualizacion] = useState(false);
  const [selectedOption, setSelectedOption] = useState("internas");
  const [userIdAsignment, setUserIdAsignment] = useState(null);

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
    searchUser,
    getAsignmentId
  } = useUser()

  const { dependenciesOptions, dependencies, setDependencies,
    filteredDependenciesOptions, setEntity, entity,
    dependenciesDefaultOptions } = useDependencie()
  const { entitiesOptions } = useEntitie()

  const { getChargesForUser, charges } = useCharges()
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
    getChargesForUser(id)
    setUserIdAsignment(id);
  }
  const submit = (data) => {
    if (actualizacion) {
      updateUser(data.id, data, reset, toggle);
    } else {
      createUser(data, reset, toggle);
    }
  };

  const submitAsignment = (data) => {
    try {
      const payload = {
        user_id: userIdAsignment,
        dependency_id: dependencies?.value,
        entity_id: entity?.value,
        ...data
      };

      // Limpiar campos según el tipo seleccionado
      if (selectedOption === 'internas') {
        delete payload.role_id;
        delete payload.charge_state_id;
      }

      if (selectedOption === 'usuario') {
        delete payload.charge;
        delete payload.detail;
        delete payload.startDate;
        delete payload.finalDate;
        delete payload.entity_id; // no se usa
      }

      if (selectedOption === 'externo') {
        delete payload.charge;
        delete payload.detail;
        delete payload.startDate;
        delete payload.finalDate;
      }
    } catch (error) {
      console.error("Error al asignar:", error);
      Swal.fire("Error", "No se pudo asignar el cargo. Intente nuevamente.", "error");
    }
    console.log(data, "As")
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
        getAsignmentTablaId={getAsignmentTablaId}
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
        charges={charges}
        dependenciesOptions={dependenciesOptions}
        dependencies={dependencies}
        setDependencies={setDependencies}
        filteredDependenciesOptions={filteredDependenciesOptions}
        setEntity={setEntity}
        entity={entity}
        dependenciesDefaultOptions={dependenciesDefaultOptions}
        entitiesOptions={entitiesOptions}
        selectedOption={selectedOption}
        setSelectedOption={setSelectedOption}
      />
    </div>
  )
}

export default Usuario