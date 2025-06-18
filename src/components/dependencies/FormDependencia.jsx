import React from 'react'
import { Col, Modal, ModalBody, ModalHeader, Row } from 'reactstrap'
import { useEntitie } from '../../utility/hooks/entities/useEntitie'
const FormDependencia = ({
  modal, toggle, handleSubmit, register, submit, toggleActualizacion, errors, documentDetails
}) => {

  const { entities } = useEntitie()
  return (
    <Modal isOpen={modal} toggle={toggle || toggleActualizacion} size='lg'>
      <ModalHeader>
        Registrar dependencia
      </ModalHeader>
      <ModalBody>
        <form onSubmit={handleSubmit(submit)}>
          <Row>
            <Col>
              <div className='form-group'>
                <label htmlFor="nombre_completo">Entidades</label>
                <select className='form-select' id='entity_id' {...register("entity_id")}>
                  {
                    entities?.map(detail => (
                      <option key={detail?.id} value={detail?.id}>{detail?.description}</option>
                    ))
                  }
                </select>
              </div>
              <div className='form-group'>
                <label htmlFor="dependency_type_id">Tipo</label>
                <select className='form-select' id='dependency_type_id' {...register("dependency_type_id")}>
                  {
                    entities?.map(detail => (
                      <option key={detail?.id} value={detail?.id}>{detail?.detail}</option>
                    ))
                  }
                </select>
              </div>

              <div className='form-group'>
                <label htmlFor="description">Unidad Orgánica</label>
                <input
                  className="form-control"
                  type="text"
                  placeholder='Ingrese nombre de la entidad'
                  {...register('description')}
                  required
                />
              </div>

              <div className='form-group'>
                <label htmlFor="abbreviation">Abreviatura</label>
                <input
                  className="form-control"
                  type="text"
                  placeholder='Abreviatura'
                  {...register('abbreviation')}
                  required
                />
              </div>
            </Col>
          </Row>
          <button className='btn btn-primary my-2'>Enviar</button>
        </form>
      </ModalBody>
    </Modal>
  )
}

export default FormDependencia