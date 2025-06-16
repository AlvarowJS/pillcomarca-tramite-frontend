import React, { useEffect, useState } from 'react'
import bdAdmin from '../../../api/bdAdmin'
import { getAuthHeaders } from '../../auth/auth'
const URL = '/document-origins'
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import documentOriginDefault from '../../constants/documentOriginDefault';
const MySwal = withReactContent(Swal);
export const useDocumentOrigin = () => {
    const [documentOrigins, setDocumentOrigins] = useState([])
    const [search, setSearch] = useState("");
    const [filtereds, setFiltereds] = useState([]);
    const [refresh, setRefresh] = useState(false);

    useEffect(() => {
        bdAdmin.get(URL, getAuthHeaders())
            .then(res => {
                setDocumentOrigins(res.data);
                setFiltereds(res.data);
            })
            .catch(err => {
                console.error("Error fetching entities:", err)
            })
    }, [refresh])


    useEffect(() => {
        if (!search) {
            setFiltereds(documentOrigins);
        } else {
            const filtered = documentOrigins.filter(origin =>
                origin.origin?.toLowerCase().includes(search.toLowerCase())
            );
            setFiltereds(filtered);
        }
    }, [search, documentOrigins]);

    const createDocumentOrigin = (data, reset, toggle) => {
        bdAdmin.post(URL, data, getAuthHeaders())
            .then(res => {
                reset(documentOriginDefault);
                toggle();
                setRefresh(!refresh);
                MySwal.fire("Proveido creado", "", "success");

            })
            .catch(err => {
                MySwal.fire("Error", "Ocurrió un error", "error");
                console.error(errors);
            })
    }

    const getDocumentOriginId = (id, reset, toogleActualizacion) => {
        bdAdmin.get(`${URL}/${id}`, getAuthHeaders())
            .then(res => {
                reset(res.data)
                toogleActualizacion()                
            })
            .catch(err => console.log(err))
    }
    const updateDocumentOrigin = async (id, data, reset, toggle) => {
        try {
            await bdAdmin.put(`${URL}/${id}`, data, getAuthHeaders());
            reset(documentOriginDefault);
            toggle();
            setRefresh(!refresh);
            MySwal.fire("Documento de origen actualizado", "", "success");
        } catch {
            MySwal.fire("Error", "Contacte con soporte", "error");
        }
    };
    return {
        documentOrigins,
        createDocumentOrigin,
        getDocumentOriginId,
        updateDocumentOrigin,
        setSearch,
        search,
        filtereds
    }
}
