# Full Stack App

Este proyecto es una aplicación **full stack** desarrollada con **React + Node.js**, que demuestra funcionalidades básicas como validación de datos, manejo de productos y gestión de tareas.  
Puedes ejecutarlo localmente o probarlo desplegado online en el siguiente dominio:

🌐 **La aplicacion es corriendo en un droplet de Digital Ocean para que pueda ser probada:** [FullStack App](https://fullstack.openvrtraining.com)

---

## Cómo ejecutar el proyecto localmente

### 1. Clonar el repositorio

```bash
git clone https://github.com/EnriqueVega1995/full_stack_app.git
cd full_stack_app
```

### 2. Instalar dependencias

```bash
cd backend
npm install
```

```bash
cd ../frontend
npm install
```

### 3. Iniciar los servidores

#### Iniciar backend

```bash
cd backend
npm start
```
El backend quedará corriendo en http://localhost:3000 (esto solo en la rama master)

#### Iniciar frontend

```bash
cd ../frontend
npm run dev
```
La app estará disponible en http://localhost:5173

> **Nota:** Asegúrate de que el archivo `.env` o las rutas en React apunten a `http://localhost:3000` si estás en entorno local.

---

## Funcionalidades

### 1. Validación de Datos

Formulario para validar un objeto JSON con datos de usuario.

🌐 [Probar online](https://fullstack.openvrtraining.com)

Ruta del archivo: `frontend/src/components/ValidationForm.jsx`

---

### 2. Tabla de Productos

Vista estática de productos con sus precios, usada como ejemplo de visualización de datos en tablas.

🌐 [Probar online](https://fullstack.openvrtraining.com)

Ruta del archivo: `frontend/src/components/ProductTable.jsx`

---

### 3. Gestor de Tareas

CRUD básico para crear y visualizar tareas. Permite filtrar tareas por estado (pendiente, completado).

> Eliminación aún no implementada.

🌐 [Probar online](https://fullstack.openvrtraining.com)

Ruta del archivo: `frontend/src/components/TaskManager.jsx`

---

## Tecnologías utilizadas

- **Frontend:** React + Vite  
- **Backend:** Node.js + Express  
- **Servidor:** Nginx + PM2  
- **Producción:** Ubuntu Droplet (DigitalOcean)  
- **Dominio:** `fullstack.openvrtraining.com`

---

## Estructura del Proyecto

```
full_stack_app/
├── backend/        # Servidor Node.js + Express
│   └── index.js
├── frontend/       # Aplicación React + Vite
│   └── src/
│       ├── ValidationForm.jsx
│       ├── ProductTable.jsx
│       └── TaskManager.jsx
├── .gitignore
└── README.md
```

