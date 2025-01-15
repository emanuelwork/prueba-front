# Estructura de carpetas

```md
/prueba-front
├── /node_modules
│
├── /public
│
├── /src
│ ├── /assets
│ ├── /components
│ ├── /layouts
│ ├── /hooks
│ ├── /context
│ ├── /services
│ ├── /utils
│ ├── /styles
│ └── App.jsx
│
├── package.json # Dependencias y scripts del proyecto
└── vite.config.js # Configuración de Vite
```

### Descripción de las carpetas

- /public: Carpeta para archivos estáticos (imágenes, fuentes, etc.)
- /src: Carpeta principal para el código fuente de la aplicación
- /src/assets: Carpeta para archivos estáticos (imágenes, fuentes, etc.)
- /src/components: Carpeta para componentes reutilizables de UI
- /src/layouts: Carpeta para componentes de diseño general (cabeceras, pies de página)
- /src/hooks: Carpeta para hooks personalizados de React
- /src/context: Carpeta para contextos para manejo de estado global
- /src/services: Carpeta para lógica para interactuar con APIs externas
- /src/utils: Carpeta para funciones utilitarias generales
- /src/styles: Carpeta para estilos globales y temas
- /src/App.jsx: Componente principal de la aplicación
- /package.json: Dependencias y scripts del proyecto
- /vite.config.js: Configuración de Vite

# Requerimientos de cada vista

### Primer Formulario | Datos básicos

- Nombre
- Edad
- Correo electrónico
- Teléfono celular
- Lugar de trabajo

### Segundo Formulario | Objetivos

- Peso ideal
- Estatura
- Objetivo alimentación
- Peso mínimo (últimos 5 años)
- Peso máximo (últimos 5 años)

### Tercer Formulario | Historial médico

- Padecimiento de enfermedad cardíaca
- Padecimiento de alergias
- Cirugías previas
- Enfermedades familiares (corazón, cáncer, diabetes)
- Dieta para bajar de peso
- Medicamentos para bajar de peso
- Tratamientos reductivos previos
- Suplementos / vitaminas regulares
- Estudios médicos recientes
