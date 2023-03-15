import { Row } from 'react-grid-system';
import { useNavigate } from 'react-router';

const Element = ({ text, path }) => {
  const navigate = useNavigate();
  return (
    <>
      <Row
        style={{ heigh: '90px', width: '100%' }}
        justify="center"
        align="center"
        direction="column"
        onClick={() => navigate(path)}
      >
        <div style={{ margin: '10px' }}>
          <i className="fa-solid fa-arrow-right"></i>
        </div>
        <div>
          <p>{text}</p>
        </div>
      </Row>
    </>
  );
};

export default Element;
