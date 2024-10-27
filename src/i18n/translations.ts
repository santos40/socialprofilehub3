export const translations = {
  en: {
    common: {
      loading: "Loading...",
      error: "An error occurred",
      submit: "Submit",
      cancel: "Cancel",
      save: "Save",
      delete: "Delete",
      edit: "Edit",
      back: "Back",
    },
    navigation: {
      home: "Home",
      directory: "Business Directory",
      register: "Add Business",
      admin: "Admin Dashboard",
    },
    business: {
      name: "Business Name",
      description: "Description",
      category: "Category",
      contact: "Contact Information",
      location: "Location",
      photos: "Photos",
      addBusiness: "Add Business",
      editBusiness: "Edit Business",
    },
    forms: {
      required: "This field is required",
      invalidEmail: "Please enter a valid email",
      invalidUrl: "Please enter a valid URL",
      invalidPhone: "Please enter a valid phone number",
    },
    admin: {
      login: "Admin Login",
      dashboard: "Dashboard",
      settings: "Settings",
      logout: "Logout",
    },
  },
  es: {
    common: {
      loading: "Cargando...",
      error: "Se produjo un error",
      submit: "Enviar",
      cancel: "Cancelar",
      save: "Guardar",
      delete: "Eliminar",
      edit: "Editar",
      back: "Volver",
    },
    navigation: {
      home: "Inicio",
      directory: "Directorio de Negocios",
      register: "Añadir Negocio",
      admin: "Panel de Administración",
    },
    business: {
      name: "Nombre del Negocio",
      description: "Descripción",
      category: "Categoría",
      contact: "Información de Contacto",
      location: "Ubicación",
      photos: "Fotos",
      addBusiness: "Añadir Negocio",
      editBusiness: "Editar Negocio",
    },
    forms: {
      required: "Este campo es obligatorio",
      invalidEmail: "Ingrese un email válido",
      invalidUrl: "Ingrese una URL válida",
      invalidPhone: "Ingrese un número de teléfono válido",
    },
    admin: {
      login: "Iniciar Sesión",
      dashboard: "Panel",
      settings: "Configuración",
      logout: "Cerrar Sesión",
    },
  },
  // ... Similar structure for 'fr', 'de', 'pt'
};

export type Language = keyof typeof translations;
export type TranslationKey = keyof typeof translations.en;