import React, { useState, useEffect } from 'react';

const TaskManager = () => {
  const [tasks, setTasks] = useState([]);
  const [form, setForm] = useState({
    title: '',
    description: '',
    status: 'pendiente',
  });

  const [filter, setFilter] = useState('todas');

  const fetchTasks = async () => {
    const url =
      filter === 'todas'
        ? 'http://localhost:3000/tasks'
        : `http://localhost:3000/tasks?status=${filter}`;

    try {
      const res = await fetch(url);
      const data = await res.json();
      setTasks(data);
    } catch (error) {
      console.error('Error al obtener tareas:', error);
    }
  };

  const createTask = async (e) => {
    e.preventDefault();
    const res = await fetch('http://localhost:3000/tasks', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    });

    const data = await res.json();
    if (res.ok) {
      alert('Tarea creada exitosamente');
      setForm({ title: '', description: '', status: 'pendiente' });
      fetchTasks();
    } else {
      alert(data.error);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, [filter]); // se vuelve a cargar cuando cambia el filtro

  return (
    <div style={{ marginTop: '2rem' }}>
      <h2>1.3 – Gestor de Tareas</h2>

      <form onSubmit={createTask} style={{ marginBottom: '1rem' }}>
        <input
          type="text"
          placeholder="Título"
          value={form.title}
          onChange={(e) => setForm({ ...form, title: e.target.value })}
          required
        />
        <br />
        <textarea
          placeholder="Descripción"
          value={form.description}
          onChange={(e) => setForm({ ...form, description: e.target.value })}
          required
        />
        <br />
        <select
          value={form.status}
          onChange={(e) => setForm({ ...form, status: e.target.value })}
        >
          <option value="pendiente">Pendiente</option>
          <option value="completado">Completado</option>
        </select>
        <br />
        <button type="submit">Crear Tarea</button>
      </form>

      <h3>Filtrar tareas por estado:</h3>
      <select
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        style={{ marginBottom: '1rem' }}
      >
        <option value="todas">Todas</option>
        <option value="pendiente">Pendientes</option>
        <option value="completado">Completadas</option>
      </select>

      <h3>Lista de Tareas</h3>
      <ul>
        {tasks.length === 0 ? (
          <li>No hay tareas</li>
        ) : (
          tasks.map((task) => (
            <li key={task.id}>
              <strong>{task.title}</strong> - {task.description} ({task.status})
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

export default TaskManager;
