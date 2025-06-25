import React, { useEffect, useState } from 'react'
import bdAdmin from '../../../api/bdAdmin'
import { getAuthHeaders } from '../../auth/auth'
const URL = '/charge-user'
export const useCharges = () => {
    const [charges, setCharges] = useState()

    const getChargesForUser = (id) => {
        bdAdmin.get(`${URL}/${id}`, getAuthHeaders())
            .then(res => {
                setCharges(res.data.charge_assignment)
                console.log(res.data.charge_assignment)
            })
            .catch(err => console.log(err))
    }

    return {
        charges,
        getChargesForUser
    }
}
