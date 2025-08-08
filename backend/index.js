const express = require('express');
const app = express();
app.use(express.json());
const cors = require('cors');


app.use(cors());
app.use(express.json());

let tasks = [];

// Validacion de datos 
app.post('/validate', (req, res) => {
    const { name, email, age } = req.body;

    if (!name || name.trim() === '') {
        return res.status(400).json({ error: 'El nombre es requerido' });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
        return res.status(400).json({ error: 'Se requiere un correo electrónico válido' });
    }

    if (typeof age !== 'number' || age < 18) {
        return res.status(400).json({ error: 'La edad debe ser un número mayor o igual a 18' });
    }

    res.json({ message: 'Datos validados correctamente' });

});

// crud de tareas 

// post de tareas
app.post('/tasks', (req, res) => {
  const { title, description, status } = req.body;

  if (!title || !description || !['pendiente', 'completado'].includes(status)) {
    return res.status(400).json({ error: 'Datos inválidos' });
  }

  const task = { id: tasks.length + 1, title, description, status };
  tasks.push(task);

  res.status(201).json(task);
});

//get de tareas
app.get('/tasks', (req, res) => {
  const { status } = req.query;
  if (status && !['pendiente', 'completado'].includes(status)) {
    return res.status(400).json({ error: 'Estado inválido' });
  }

  const result = status ? tasks.filter(task => task.status === status) : tasks;
  res.json(result);
});

app.listen(3000, () => {
  console.log('Servidor backend escuchando en http://localhost:3000');
});