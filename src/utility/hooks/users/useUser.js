import { useState, useEffect } from 'react'
import bdAdmin from '../../../api/bdAdmin'
import { getAuthHeaders } from '../../auth/auth'
const URL = '/users'
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import userDefault from '../../constants/userDefault';
const MySwal = withReactContent(Swal);

export const useUser = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [totalRows, setTotalRows] = useState(0);
    const [perPage, setPerPage] = useState(10);
    const [search, setSearch] = useState()

    const searchUser = () => {
        handlePerRowsChange("", "", search);
    }
    const fetchUsers = async (page, search) => {
        setLoading(true);
        const response = await bdAdmin.get(`${URL}?page=${page}&per_page=${perPage}&delay=1`, getAuthHeaders());
        setData(response.data.data);
        setTotalRows(response.data.total);
        setLoading(false);
    };

    const handlePageChange = page => {
        fetchUsers(page);
    };

    const handlePerRowsChange = async (newPerPage, page, search) => {
        setLoading(true);
        const response = await bdAdmin.get(`${URL}?search=${search}&page=${page && ""}&per_page=${newPerPage && ""}&delay=1`, getAuthHeaders());
        setData(response.data.data);
        setPerPage(newPerPage);
        setLoading(false);
    };
    useEffect(() => {
        fetchUsers(1);

    }, []);

    const createUser = (data, reset, toggle) => {
        bdAdmin.post(URL, data, getAuthHeaders())
            .then(res => {
                reset(providedDefault);
                toggle();
                setRefresh(!refresh);
                MySwal.fire("Proveido creado", "", "success");

            })
            .catch(err => {
                MySwal.fire("Error", "Ocurrió un error", "error");
                console.error(errors);
            })
    }

    const getUserId = (id, reset, toogleActualizacion) => {
        bdAdmin.get(`${URL}/${id}`, getAuthHeaders())
            .then(res => {
                reset(res.data.person)
                toogleActualizacion()
            })
            .catch(err => console.log(err))
    }
    const updateUser = async (id, data, reset, toggle) => {
        try {
            await bdAdmin.put(`${URL}/${id}`, data, getAuthHeaders());
            reset(providedDefault);
            toggle();
            setRefresh(!refresh);
            MySwal.fire("Proveido actualizado", "", "success");
        } catch {
            MySwal.fire("Error", "Contacte con soporte", "error");
        }
    };


    return {
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
    }
}
