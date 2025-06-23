import React, { useEffect, useState } from 'react'
import bdAdmin from '../../../api/bdAdmin';
import { getAuthHeaders } from '../../auth/auth';

const URL = '/getArchived'
export const useArchivados = () => {

    const [data, setData] = useState()
    const [loading, setLoading] = useState(false);
    const [totalRows, setTotalRows] = useState(0);
    const [perPage, setPerPage] = useState(10);


    const fetchArchiveds = async (page, search) => {
        setLoading(true)
        const response = await bdAdmin.get(`${URL}?per_page=${perPage}&page=${page}`, getAuthHeaders())
        setData(response.data.data)
        setTotalRows(response.data.total)
        setLoading(false)
    }
    const handlePageChange = page => {
        fetchArchiveds(page);
    };

    const handlePerRowsChange = async (newPerPage, page, search) => {
        setLoading(true);
        const response = await bdAdmin.get(`${URL}?search=${search}&page=${page && ""}&per_page=${newPerPage && ""}&delay=1`, getAuthHeaders());
        setData(response.data.data);
        setPerPage(newPerPage);
        setLoading(false);
    };

    useEffect(() => {
        fetchArchiveds(1)
    }, [])
    return {
        data,
        loading,
        totalRows,
        handlePerRowsChange,
        handlePageChange,

    }
}
