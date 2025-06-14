import React from 'react'
import TablaTypeDocuments from '../../../components/typeDocuments/TablaTypeDocuments'
import FormTypeDocuments from '../../../components/typeDocuments/FormTypeDocuments'
import SearchTypeDocuments from '../../../components/typeDocuments/SearchTypeDocuments'

const TipoDocumento = () => {
  return (
    <div>
      <SearchTypeDocuments />
      <TablaTypeDocuments />
      <FormTypeDocuments />
    </div>
  )
}

export default TipoDocumento