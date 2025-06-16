import React, { useEffect, useState } from 'react'
import bdAdmin from '../../../api/bdAdmin'
import { getAuthHeaders } from '../../auth/auth'
const URL = '/document-types'
const URL2 = '/detail-document-types'
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import entitiesDefault from '../../constants/entitiesDefaults';
const MySwal = withReactContent(Swal);

const useTypeDocuments = () => {
    const [documentTypes, setDocumentTypes] = useState([])
    const [documentDetails, setDocumentDetails] = useState([])
    const [search, setSearch] = useState("");
    const [filtereds, setFiltereds] = useState([]);
    const [refresh, setRefresh] = useState(false);

    useEffect(() => {
        bdAdmin.get(URL, getAuthHeaders())
            .then(res => {
                setDocumentTypes(res.data);
                setFiltereds(res.data);
            })
            .catch(err => {
                console.error("Error fetching entities:", err)
            })
    }, [refresh])
    useEffect(() => {
        bdAdmin.get(URL2, getAuthHeaders())
            .then(res => {
                setDocumentDetails(res.data);
            })
            .catch(err => {
                console.error("Error fetching entities:", err)
            })
    }, [refresh])

    useEffect(() => {
        if (!search) {
            setFiltereds(documentTypes);
        } else {
            const filtered = documentTypes.filter(documenttype =>
                documenttype.type?.toLowerCase().includes(search.toLowerCase())                
            );
            setFiltereds(filtered);
        }
    }, [search, documentTypes]);

    const createDocumentType = (data, reset, toggle) => {
        bdAdmin.post(URL, data, getAuthHeaders())
            .then(res => {
                reset(entitiesDefault);
                toggle();
                setRefresh(!refresh);
                MySwal.fire("Entidad creada", "", "success");

            })
            .catch(err => {
                const errors = err.response?.data?.errors;
                if (errors?.ruc) {
                    MySwal.fire("Error", "RUC ya registrado", "error");
                } else {
                    MySwal.fire("Error", "Ocurrió un error", "error");
                }
                console.error(errors);
            })
    }

    const getDocumentTypeId = (id, reset, toogleActualizacion) => {
        bdAdmin.get(`${URL}/${id}`, getAuthHeaders())
            .then(res => {
                reset(res.data)
                toogleActualizacion()                
            })
            .catch(err => console.log(err))
    }
    const updateDocumentType = async (id, data, reset, toggle) => {
        try {
            await bdAdmin.put(`${URL}/${id}`, data, getAuthHeaders());
            reset(entitiesDefault);
            toggle();
            setRefresh(!refresh);
            MySwal.fire("Entidad actualizado", "", "success");
        } catch {
            MySwal.fire("Error", "Contacte con soporte", "error");
        }
    };
    return {
        documentTypes,
        createDocumentType,
        getDocumentTypeId,
        updateDocumentType,
        setSearch,
        search,
        filtereds,
        documentDetails


    }
}

export default useTypeDocuments