// ** React Imports
import { useSkin } from "@hooks/useSkin";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { Controller, useForm } from 'react-hook-form'


// ** Custom Components
import InputPasswordToggle from "@components/input-password-toggle";

// ** Reactstrap Imports
import {
  Row,
  Col,
  CardTitle,
  CardText,
  Form,
  Label,
  Input,
  Button,
} from "reactstrap";

// ** Illustrations Imports
import logo from "@src/assets/images/logo/logo.png";
import illustrationsLight from "@src/assets/images/pages/login-v2.svg";
import illustrationsDark from "@src/assets/images/pages/login-v2-dark.svg";

// ** Styles
import "@styles/react/pages/page-authentication.scss";
import './styles/style.css'
import axios from "axios";
import { useState } from "react";
import bdAdmin from "../../api/bdAdmin";
import { useLogin } from "../../utility/auth/useLogin";
import { useEntitie } from "../../utility/hooks/entities/useEntitie";

const Login = () => {

  const navigate = useNavigate()
  const { skin } = useSkin();
  const source = skin === "dark" ? illustrationsDark : illustrationsLight;
  const { handleSubmit, control, register, reset, formState: { errors } } = useForm()
  const [isError, setIsError] = useState(false)
  const { login } = useLogin()
  const { entities, getDependencies, dependencies } = useEntitie()

  const submit = async (data) => {
    login(data)
  }


  return (
    <div className="auth-wrapper auth-cover">
      <Row className="auth-inner m-0">
        <Link className="brand-logo" to="/" onClick={(e) => e.preventDefault()}>

        </Link>
        <Col className="d-none d-lg-flex align-items-center p-5" lg="8" sm="12">
          <div className="w-100 d-lg-flex align-items-center justify-content-center px-5">
            <img className="img-fluid" src={source} alt="Login Cover" />
          </div>
        </Col>
        <Col
          className="d-flex align-items-center auth-bg px-2 p-lg-5"
          lg="4"
          sm="12"
        >
          <Col className="px-xl-2 mx-auto" sm="8" md="6" lg="12">
            <img className="img_local" src={logo} alt="Logo" style={{ width: 100 }} />

            <CardTitle tag="h2" className="fw-bold mb-1 mt-2">
              Bienvenido al Tramite Documentario de la MDPM
            </CardTitle>
            <CardText className="mb-2">
              Porfavor ingrese tu usuario y contraseña
            </CardText>
            <Form
              className="auth-login-form mt-2"
              onSubmit={handleSubmit(submit)}
            >
              <div className="mb-1">
                <Label className="form-label" for="login-user">
                  Entidad
                </Label>
                <Controller
                  defaultValue='5'
                  control={control}
                  id='entity_id'
                  name='entity_id'
                  render={({ field }) => (
                    <div>
                      <select
                        {...field}
                        className={`form-select ${errors.entity_id ? 'is-invalid' : ''}`}
                      >
                        <option value=''>Seleccione una entidad</option>
                        {entities.map(entity => (
                          <option key={entity.id} value={entity.id}>
                            {entity.description}
                          </option>
                        ))}
                      </select>
                      {errors.entity_id && (
                        <div className="invalid-feedback">
                          {errors.entity_id.message || 'Este campo es requerido'}
                        </div>
                      )}
                    </div>
                  )}
                />
              </div>
              <div className="mb-1">
                <Label className="form-label" for="login-user">
                  DNI
                </Label>
                <Controller

                  control={control}
                  id='user'
                  name='user'

                  render={({ field }) => (
                    <Input
                      placeholder='ingrse su DNI'
                      invalid={errors.user && true}
                      {...field}
                      onChange={(e) => {
                        const value = e.target.value;
                        field.onChange(value);
                        if (value.length === 8) {
                          getDependencies(value);
                        }
                      }}
                    />
                  )}
                />
              </div>
              <div className="mb-1">
                <div className="d-flex justify-content-between">
                  <Label className="form-label" for="password">
                    Password
                  </Label>

                </div>
                <Controller
                  defaultValue=''
                  control={control}
                  id='password'
                  name='password'
                  render={({ field }) => (
                    <Input
                      type="password"
                      invalid={errors.password && true}
                      {...field}
                    />
                  )}
                />
              </div>

              <div className="mb-1">
                <div className="d-flex justify-content-between">
                  <Label className="form-label" for="password">
                    Dependencias
                  </Label>

                </div>
                <Controller
                  name="dependency_id"
                  control={control}
                  defaultValue=""
                  render={({ field }) => (
                    <Input type="select" {...field} invalid={errors.dependency_id && true}>
                      <option value="">Seleccione una dependencia</option>
                      {dependencies.map(dep => (
                        <option key={dep.id} value={dep.id}>
                          {dep.description} - {dep.firstName} {dep.lastName}
                        </option>
                      ))}
                    </Input>
                  )}
                />
              </div>

              {isError ? <p className="local_color">Credenciales invalidas, intentalo otra vez...</p> : null}
              <Button type="submit" color="primary" block>
                Ingresar
              </Button>
            </Form>


          </Col>
        </Col>
      </Row>
    </div>
  );
};

export default Login;
