// ** React Imports
import React, { useEffect, useState } from "react";

import { Fragment, lazy } from "react";
import { Route, Navigate, useNavigate } from "react-router-dom";
// ** Layouts
import BlankLayout from "@layouts/BlankLayout";
import VerticalLayout from "@src/layouts/VerticalLayout";
import HorizontalLayout from "@src/layouts/HorizontalLayout";
import LayoutWrapper from "@src/@core/layouts/components/layout-wrapper";
// ** Route Components
import PublicRoute from "@components/routes/PublicRoute";

// ** Utils
import { isObjEmpty } from "@utils";
import Home from "../../views/home/Home";
import bdAdmin from "../../api/bdAdmin";
import { useLogin } from "../../utility/auth/useLogin";
import DocumentoNuevo from "../../views/documents/documento/DocumentoNuevo";
import Pendiente from "../../views/documents/pendiente/Pendiente";
import Tramitar from "../../views/documents/tramitar/Tramitar";
import Enviado from "../../views/documents/enviados/Enviado";
import Entidad from "../../views/configuration/entidades/Entidad";
import Dependencia from "../../views/configuration/dependencias/Dependencia";
import Usuario from "../../views/configuration/usuarios/Usuario";
import TipoDocumento from "../../views/configuration/tipoDocumento/TipoDocumento";
import OrigenDocumento from "../../views/configuration/origenDocumento/OrigenDocumento";
import Proveido from "../../views/configuration/proveidos/Proveido";
import EstadoTramite from "../../views/configuration/estadoTramite/EstadoTramite";
import Procedimiento from "../../views/configuration/procedimientos/Procedimiento";
import Archivado from "../../views/documents/archivados/Archivado";
import DocumentoExternos from "../../views/gestion/externos/DocumentoExternos";
import DocumentoInternos from "../../views/gestion/internos/DocumentoInternos";


// import OperacionesTrans from "../../views/operaciones/OperacionesTrans";

const getLayout = {
  blank: <BlankLayout />,
  vertical: <VerticalLayout />,
  horizontal: <HorizontalLayout />,
};

// ** Document title
const TemplateTitle = "%s - Vuexy React Admin Template";

// ** Default Route
const DefaultRoute = "/login";

const Error = lazy(() => import("../../views/Error"));

const AuthGuard = ({ children }) => {
  const { authToken } = useLogin()

  useEffect(() => {
    authToken()
  }, [])

  return <LayoutWrapper>{children}</LayoutWrapper>;
};

// const navigate = useNavigate();
// ** Merge Routes
const Routes = [
  {
    path: "/",
    index: true,
    element: <Navigate replace to={DefaultRoute} />,

  },
  {
    path: "/home",
    element: <AuthGuard><Home /></AuthGuard>,
  },
  {
    path: "/usuarios",
    element: <AuthGuard><Usuario /></AuthGuard>,
  },

  // Documents
  {
    path: "/documentos/documento",
    element: <AuthGuard><DocumentoNuevo /></AuthGuard>
  },
  {
    path: "/documentos/pendientes",
    element: <AuthGuard><Pendiente /></AuthGuard>
  },
  {
    path: "/documentos/tramitar",
    element: <AuthGuard><Tramitar /></AuthGuard>
  },
  {
    path: "/documentos/enviados",
    element: <AuthGuard><Enviado /></AuthGuard>
  },
  {
    path: "/documentos/archivados",
    element: <AuthGuard><Archivado /></AuthGuard>
  },
  //Gestion
  {
    path: "/gestion/documentos-externos",
    element: <AuthGuard><DocumentoExternos /></AuthGuard>
  },
  {
    path: "/gestion/documentos-internos",
    element: <AuthGuard><DocumentoInternos /></AuthGuard>
  },
  // Configuracion
  {
    path: "/configuracion/entidad",
    element: <AuthGuard><Entidad /></AuthGuard>
  },
  {
    path: "/configuracion/dependencias",
    element: <AuthGuard><Dependencia /></AuthGuard>
  },
  {
    path: "/configuracion/Usuarios",
    element: <AuthGuard><Usuario /></AuthGuard>
  },
  {
    path: "/configuracion/tipo",
    element: <AuthGuard><TipoDocumento /></AuthGuard>
  },
  {
    path: "/configuracion/origen",
    element: <AuthGuard><OrigenDocumento /></AuthGuard>
  },
  {
    path: "/configuracion/proveido",
    element: <AuthGuard><Proveido /></AuthGuard>
  },
  {
    path: "/configuracion/estado-tramite",
    element: <AuthGuard><EstadoTramite /></AuthGuard>
  },
  {
    path: "/configuracion/estado-procedimiento",
    element: <AuthGuard><Procedimiento /></AuthGuard>
  },


  {
    path: "/error",
    element: <Error />,
    meta: {
      layout: "blank",
    },

  },

];

const getRouteMeta = (route) => {
  if (isObjEmpty(route.element.props)) {
    if (route.meta) {
      return { routeMeta: route.meta };
    } else {
      return {};
    }
  }
};

// ** Return Filtered Array of Routes & Paths
const MergeLayoutRoutes = (layout, defaultLayout) => {
  const LayoutRoutes = [];

  if (Routes) {
    Routes.filter((route) => {
      let isBlank = false;
      // ** Checks if Route layout or Default layout matches current layout
      if (
        (route.meta && route.meta.layout && route.meta.layout === layout) ||
        ((route.meta === undefined || route.meta.layout === undefined) &&
          defaultLayout === layout)
      ) {
        const RouteTag = PublicRoute;
        // ** Check for public or private route
        if (route.meta) {
          route.meta.layout === "blank" ? (isBlank = true) : (isBlank = false);
        }
        if (route.element) {
          const Wrapper =
            // eslint-disable-next-line multiline-ternary
            isObjEmpty(route.element.props) && isBlank === false
              ? // eslint-disable-next-line multiline-ternary
              LayoutWrapper
              : Fragment;

          route.element = (
            <Wrapper {...(isBlank === false ? getRouteMeta(route) : {})}>
              <RouteTag route={route}>{route.element}</RouteTag>
            </Wrapper>
          );
        }

        // Push route to LayoutRoutes
        LayoutRoutes.push(route);
      }
      return LayoutRoutes;
    });
  }
  return LayoutRoutes;
};

const getRoutes = (layout) => {
  const defaultLayout = layout || "vertical";
  const layouts = ["vertical", "horizontal", "blank"];

  const AllRoutes = [];

  layouts.forEach((layoutItem) => {
    const LayoutRoutes = MergeLayoutRoutes(layoutItem, defaultLayout);

    AllRoutes.push({
      path: "/",
      element: getLayout[layoutItem] || getLayout[defaultLayout],
      children: LayoutRoutes,
    });
  });
  return AllRoutes;
};

export { DefaultRoute, TemplateTitle, Routes, getRoutes };
