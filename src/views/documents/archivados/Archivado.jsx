import React from 'react'
import SearchArchivado from '../../../components/documentos/archivados/SearchArchivado'
import TablaArchivados from '../../../components/documentos/archivados/TablaArchivados'
import { Col, Row } from 'reactstrap'
import { useArchivados } from '../../../utility/hooks/documentos/useArchivados'

const Archivado = () => {
  const {
    data,
    loading,
    totalRows,
    handlePerRowsChange,
    handlePageChange,
  } = useArchivados()
  return (
    <div>
      <h1>Documentos Archivados</h1>
      <Row className="my-2">
        <Col sm="10">
          <SearchArchivado

          />
        </Col>
        <Col sm="2">

        </Col>
      </Row>

      <TablaArchivados
        data={data}
        loading={loading}
        totalRows={totalRows}
        handlePerRowsChange={handlePerRowsChange}
        handlePageChange={handlePageChange}
      />
    </div>
  )
}

export default Archivado