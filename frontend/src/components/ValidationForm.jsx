import React, { useState } from 'react';

const ValidationForm = () => {
  const [jsonInput, setJsonInput] = useState(
    JSON.stringify({
      name: 'John Doe',
      email: 'john@example.com',
      age: 25,
    }, null, 2)
  );
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);

  const handleValidate = async () => {
    try {
      const parsed = JSON.parse(jsonInput);
      const res = await fetch('http://localhost:3000/validate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(parsed),
      });
      const data = await res.json();
      setResponse(data);
      setError(null);
    } catch (err) {
      setError('JSON inválido o error en la petición');
      setResponse(null);
    }
  };

  return (
    <div>
      <h2>1.1 – Validación de Datos</h2>

      <label style={{ display: 'block', marginBottom: '0.5rem' }}>
        Ingresa JSON de prueba:
      </label>
      <textarea
        style={{
          width: '100%',
          height: '150px',
          fontFamily: 'monospace',
          padding: '1rem',
          resize: 'vertical',
          background: '#2e2e2e',
          color: '#eee',
          border: '1px solid #444',
        }}
        value={jsonInput}
        onChange={(e) => setJsonInput(e.target.value)}
      />

      <button style={{ marginTop: '1rem' }} onClick={handleValidate}>
        Enviar datos al backend
      </button>

      {response && (
        <div style={{ marginTop: '1rem' }}>
          <strong>Respuesta:</strong>
          <pre>{JSON.stringify(response, null, 2)}</pre>
        </div>
      )}

      {error && (
        <div style={{ marginTop: '1rem', color: 'tomato' }}>
          <strong>{error}</strong>
        </div>
      )}
    </div>
  );
};

export default ValidationForm;
