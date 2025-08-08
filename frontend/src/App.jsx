import ValidationForm from './ValidationForm';
import ProductTable from './ProductTable';
import TaskManager from './TaskManager';

function App() {
  const products = [
    { name: 'Producto A', price: 100 },
    { name: 'Producto B', price: 200 },
  ];

  return (
    <div style={styles.wrapper}>
      <div style={styles.container}>
        <h1>Fullstack App</h1>
        <p>Esta es una aplicación de ejemplo que incluye validación de datos, una tabla de productos y un gestor de tareas.</p>
        <p>Autor: Roberto Campos</p>

        <section style={styles.section}>
          <ValidationForm />
        </section>

        <hr />

        <section style={styles.section}>
          <ProductTable products={products} />
        </section>

        <hr />

        <section style={styles.section}>
          <TaskManager />
        </section>
      </div>
    </div>
  );
}

const styles = {
  wrapper: {
    width: '100%',
    minHeight: '100vh',
    backgroundColor: '#1e1e1e',
    color: '#fff',
    padding: '2rem 0',
    display: 'flex',
    justifyContent: 'center',
  },
  container: {
    width: '100%',
    maxWidth: '900px',
    padding: '0 2rem',
  },
  section: {
    width: '100%',
    marginBottom: '3rem',
  },
};

export default App;
