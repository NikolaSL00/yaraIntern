import { Routes, Route } from 'react-router-dom';
import { Row, Col, Container } from 'react-grid-system';
import Header from './components/Container/Header/Header';
import Home from './components/Container/Home/Home';
import Sidebar from './components/Container/Sidebar/Sidebar';
import NotFound from './components/NotFound/NotFound';
import Table from './components/Container/Table/Table';
import Form from './components/Container/Form/Form';

const App = () => {
  return (
    <Container
      id="container"
      fluid
      style={{ padding: '0 0', margin: '0 0', width: '100%' }}
    >
      <Row gutterWidth={0} id="header-row" style={{ height: '10vh' }}>
        <Header />
      </Row>

      <Row
        gutterWidth={0}
        id="second-row"
        style={{ width: '100%', height: '90vh', borderTop: '1px solid gray' }}
      >
        <Col id="sidebar-column" md={1}>
          <Sidebar />
        </Col>

        <Col style={{ backgroundColor: '#eaeff3' }} id="content-column" md={11}>
          <Routes>
            <Route path="/" element={<Home content="home" />} />
            <Route path="/table" element={<Table content="table" />} />
            <Route path="/form" element={<Form content="form" />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Col>
      </Row>
    </Container>
  );
};

export default App;
