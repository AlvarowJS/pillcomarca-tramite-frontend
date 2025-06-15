import React from 'react'
import { Col, Modal, ModalBody, ModalHeader, Row } from 'reactstrap'
const FormTypeDocuments = ({
  modal, toggle, handleSubmit, register, submit, toggleActualizacion, errors, documentDetails
}) => {
  return (
    <Modal isOpen={modal} toggle={toggle || toggleActualizacion} size='lg'>
      <ModalHeader>
        Registrar Tipo de Documento
      </ModalHeader>
      <ModalBody>
        <form onSubmit={handleSubmit(submit)}>
          <Row>
            <Col>
              <div className='form-group'>
                <label htmlFor="type">Entidad</label>
                <input
                  className="form-control"
                  type="text"
                  placeholder='Ingrese nombre de la entidad'
                  {...register('type')}
                  required
                />
              </div>

              <div className='form-group'>
                <label htmlFor="nombre_completo">Tipo de Entidad</label>
                <select className='form-select' id='detail_document_type_id' {...register("detail_document_type_id")}>
                  {
                    documentDetails?.map(detail => (
                      <option key={detail?.id} value={detail?.id}>{detail?.detail}</option>
                    ))
                  }
                </select>
              </div>



            </Col>
          </Row>
          <button className='btn btn-primary my-2'>Enviar</button>
        </form>
      </ModalBody>
    </Modal>
  )
}

export default FormTypeDocuments