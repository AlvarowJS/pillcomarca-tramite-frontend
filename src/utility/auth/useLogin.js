import React, { useState } from 'react'
import bdAdmin from '../../api/bdAdmin'
import { useNavigate } from 'react-router-dom'

export const useLogin = () => {
    const navigate = useNavigate()
    
    const login = (data) => {
        bdAdmin.post('/login', data)
            .then(res => {
                const data = res.data;
                localStorage.setItem('role', data?.userData?.role_id);
                localStorage.setItem('accessToken', data?.accessToken);
                localStorage.setItem('refreshToken', data?.refreshToken);
                localStorage.setItem('userData', JSON.stringify(data?.userData));
                navigate('/documentos/documento')
            })
            .catch(err => {
                localStorage.setItem('rol', '');
                localStorage.setItem('accessToken', '');
                localStorage.setItem('refreshToken', '');
                localStorage.setItem('userData', '');
                throw err;
            });
    }

    const authToken = () => {
        const token = localStorage.getItem("accessToken");
        const objToken = { token: token }
        bdAdmin.post('/token-auth', objToken, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
            .then(res => {
                
                const rol = res?.data?.rol

                if (!token) {
                    navigate("/login");
                } else {
                    if (rol == "2") {
                    }
                    else {
                        const restrictedRoutes = ["/"];
                        if (restrictedRoutes.includes(window.location.pathname)) {
                            navigate("/error");
                        }
                    }
                }


            })
            .catch(err => {
                console.log(err.response.status)
                if (err.response.status == 401) {
                    navigate("/login");
                }
            })
    }
    // const dependencias = 
    return {
        login,
        authToken
    }
}
