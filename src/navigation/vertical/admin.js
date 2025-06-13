import {
  File,
  FileText,
  BarChart,  
  Edit,
  Inbox,
  Send,
  Archive,
  Settings,
  Layers,
  Folder,
  Users,
  Grid,
  Clipboard,
  AlignLeft,
  Trello,
  FilePlus,
  Clock,
  ExternalLink
} from "react-feather";

export default [
  {
    id: "documentos",
    title: "Documentos",
    icon: <Inbox size={20} />, // Bandeja de entrada
    children: [
      {
        id: "nuevo_documento",
        title: "Nuevo Documento",
        icon: <FilePlus size={20} />,
        navLink: "/documentos/documento",
      },
      {
        id: "pendientes",
        title: "Pendientes",
        icon: <Clock size={20} />,
        navLink: "/documentos/pendientes",
      },
      {
        id: "tramitar",
        title: "Tramitar",
        icon: <Edit size={20} />,
        navLink: "/documentos/tramitar",
      },
      {
        id: "enviados",
        title: "Enviados",
        icon: <Send size={20} />,
        navLink: "/documentos/enviados",
      },
      {
        id: "archivo",
        title: "Archivados",
        icon: <Archive size={20} />,
        navLink: "/documentos/archivados",
      },
    ]
  },
  {
    id: "gestion",
    title: "Gestión",
    icon: <Layers size={20} />,
    children: [
      {
        id: "documentos_internos",
        title: "Internos",
        icon: <FileText size={20} />,
        navLink: "/gestion/documentos-internos",
      },
      {
        id: "documentos_externos",
        title: "Externos",
        icon: <ExternalLink size={20} />,
        navLink: "/gestion/documentos-externos",
      },
    ]
  },
  {
    id: "configuracion",
    title: "Configuración",
    icon: <Settings size={20} />,
    children: [
      {
        id: "entidades",
        title: "Entidades",
        icon: <Grid size={20} />,
        navLink: "/configuracion/entidad",
      },
      {
        id: "dependencias",
        title: "Dependencias",
        icon: <Folder size={20} />,
        navLink: "/configuracion/dependencias",
      },
      {
        id: "usuario",
        title: "Usuarios",
        icon: <Users size={20} />,
        navLink: "/configuracion/usuarios",
      },
      {
        id: "tipo_documento",
        title: "Tipo Documento",
        icon: <File size={20} />,
        navLink: "/configuracion/tipo",
      },
      {
        id: "origen",
        title: "Origen Documento",
        icon: <AlignLeft size={20} />,
        navLink: "/configuracion/origen",
      },
      {
        id: "proveido",
        title: "Proveídos",
        icon: <Clipboard size={20} />,
        navLink: "/configuracion/proveido",
      },
      {
        id: "estado_tramite",
        title: "Estado Trámite",
        icon: <BarChart size={20} />,
        navLink: "/configuracion/estado-tramite",
      },
      {
        id: "estado_procedimiento",
        title: "Procedimientos",
        icon: <Trello size={20} />,
        navLink: "/configuracion/estado-procedimiento",
      },
    ]
  },
];
