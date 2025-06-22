import { useState, useEffect } from 'react'
import bdAdmin from '../../../api/bdAdmin'
import { getAuthHeaders } from '../../auth/auth'
const URL = '/identification-documents'
export const useIdentificationDocument = () => {
    const [identifications, setIdentifications] = useState([])
    useEffect(() => {
        bdAdmin.get(URL, getAuthHeaders())
            .then(res => {
                setIdentifications(res.data)
            })
            .catch(err => console.log(err))
    }, [])
    return {
        identifications
    }
}
