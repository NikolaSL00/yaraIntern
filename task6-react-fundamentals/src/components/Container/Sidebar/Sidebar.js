import { Row } from 'react-grid-system';
import Element from './Element';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const color = '#eaeff3';

const Sidebar = () => {
  const location = useLocation();
  const [style, setStyle] = useState({
    form: 'white',
    table: 'white',
    home: 'white',
    error: 'white',
  });
  const [randomUrl, setRandomUrl] = useState('/');

  const resetStyle = () => {
    setStyle((values) => ({
      form: 'white',
      table: 'white',
      home: 'white',
      error: 'white',
    }));
  };
  const styleHandler = () => {
    switch (location.pathname) {
      case '/':
        setStyle((values) => ({ ...values, home: color }));
        break;
      case '/table':
        setStyle((values) => ({ ...values, table: color }));
        break;
      case '/form':
        setStyle((values) => ({ ...values, form: color }));
        break;
      default:
        setStyle((values) => ({ ...values, error: color }));
    }
  };

  useEffect(() => {
    const url = Math.floor(Math.random() * 100);
    setRandomUrl(() => url);
  }, []);

  useEffect(() => {
    resetStyle();
    styleHandler();
  }, [location]);

  return (
    <>
      <Row
        gutterWidth={0}
        style={{
          justifyContent: 'center',
          marginBottom: '10px',
          height: '100px',
          backgroundColor: `${style.form}`,
        }}
        id="sidebar-row"
      >
        <Element text={'Form'} path="/form" />
      </Row>
      <Row
        gutterWidth={0}
        style={{
          justifyContent: 'center',
          marginBottom: '10px',
          backgroundColor: `${style.table}`,
          height: '100px',
        }}
        id="sidebar-row"
      >
        <Element text={'Table'} path="/table" />
      </Row>
      <Row
        gutterWidth={0}
        style={{
          justifyContent: 'center',
          marginBottom: '10px',
          height: '100px',
          backgroundColor: `${style.error}`,
        }}
        id="sidebar-row"
      >
        <Element text={'Error'} path={`/${randomUrl}`} />
      </Row>
    </>
  );
};

export default Sidebar;
