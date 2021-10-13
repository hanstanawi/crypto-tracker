import './App.css';
import Table from './components/crypto/Table';
import Header from './components/UI/Header';
import Layout from './components/UI/Layout';

function App() {
  return (
    <>
      <Header />
      <Layout>
        <Table />
      </Layout>
    </>
  );
}

export default App;
