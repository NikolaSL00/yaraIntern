import { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-grid-system';
import { nutrients } from '../../../mockData/data.json';
import { textValidator, numberValidator } from '../../../utils/validators';

const Table = () => {
  const [loader, setLoader] = useState(true);
  const [elements, setElements] = useState(nutrients);
  const [showForm, setShowForm] = useState(false);
  const [errors, setErrors] = useState({
    name: '',
    elementalName: '',
    ordinal: '',
    defaultUnit: '',
  });
  const [values, setValues] = useState({
    name: '',
    elementalName: '',
    ordinal: '',
    defaultUnit: '',
  });

  useEffect(() => {
    setTimeout(() => setLoader(() => false), 3000);
  }, []);

  const clearFormAndErrors = () => {
    setErrors((errors) => ({
      name: '',
      elementalName: '',
      ordinal: '',
      defaultUnit: '',
    }));
    setValues((values) => ({
      name: '',
      elementalName: '',
      ordinal: '',
      defaultUnit: '',
    }));
  };
  const changeHandler = (e) => {
    // setErrors((errors) => ({
    //   ...errors,
    // }));

    setValues((values) => ({
      ...values,
      [e.target.name]: e.target.value,
    }));
  };
  const cancelHandler = (e) => {
    e.preventDefault();
    clearFormAndErrors();
  };
  const showFormClickHandler = () => {
    setShowForm((value) => !value);
  };
  const submitHandler = (e) => {
    e.preventDefault();

    setElements((elements) => [
      ...elements,
      {
        name: values.name,
        elementalName: values.elementalName,
        ordinal: values.ordinal,
        defaultUnit: values.defaultUnit,
      },
    ]);
    clearFormAndErrors();
    setShowForm(() => false);
  };

  const isDisabled =
    Object.values(errors).some((value) => value === true) ||
    Object.values(values).some((value) => value === '');

  return loader ? (
    <h1 style={{ padding: '1rem 2rem' }}>Loading...</h1>
  ) : (
    <>
      <div style={{ padding: '1rem 2rem' }}>
        <h1>Nutrients</h1>
        <table
          style={{
            minWidth: 650,
            borderCollapse: 'separate',
            borderSpacing: '0px 4px',
            marginBottom: '1rem',
          }}
        >
          <tbody>
            <tr>
              <th style={{ textAlign: 'start' }}>Name</th>
              <th style={{ textAlign: 'start' }}>Elementral Name</th>
              <th style={{ textAlign: 'start' }}>Ordinal</th>
              <th style={{ textAlign: 'start' }}>Default Unit</th>
            </tr>
            {elements.map((el) => {
              return (
                <tr key={el.name}>
                  <td>{el.name}</td>
                  <td>{el.elementalName}</td>
                  <td>{el.ordinal}</td>
                  <td>{el.defaultUnit}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <button onClick={showFormClickHandler}>Add nutrient</button>
      </div>

      {showForm ? (
        <form onSubmit={submitHandler}>
          <Container>
            <Row style={{ marginBottom: '1.5rem' }} gutterWidth={0}>
              <Col style={{ minWidth: '300px', maxWidth: '400px' }}>
                {errors.name && (
                  <p style={{ color: 'red', fontSize: 'small' }}>
                    Only alphabetic and special symbols allowed
                  </p>
                )}
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    maxWidth: '300px',
                  }}
                >
                  <label htmlFor="tile">Nutrient name:</label>
                  <input
                    id="name"
                    name="name"
                    onChange={changeHandler}
                    onBlur={(e) => textValidator(e, setErrors)}
                    value={values.name}
                  />
                </div>
              </Col>
              <Col style={{ minWidth: '300px', maxWidth: '400px' }}>
                {errors.elementalName && (
                  <p style={{ color: 'red', fontSize: 'small' }}>
                    Only alphabetic and special symbols allowed
                  </p>
                )}
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    maxWidth: '300px',
                  }}
                >
                  <label htmlFor="elementalName">Elemental name:</label>
                  <input
                    id="elementalName"
                    name="elementalName"
                    onChange={changeHandler}
                    onBlur={(e) => textValidator(e, setErrors)}
                    value={values.elementalName}
                  />
                </div>
              </Col>
            </Row>
            <Row style={{ marginBottom: '1.5rem' }}>
              <Col style={{ minWidth: '300px', maxWidth: '400px' }}>
                {errors.ordinal && (
                  <p style={{ color: 'red', fontSize: 'small' }}>
                    Only numbers above 0 allowed!
                  </p>
                )}
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    maxWidth: '300px',
                  }}
                >
                  <label htmlFor="ordinal">Ordinal:</label>
                  <input
                    id="ordinal"
                    name="ordinal"
                    onChange={changeHandler}
                    onBlur={(e) => numberValidator(e, setErrors)}
                    value={values.ordinal}
                  />
                </div>
              </Col>
              <Col style={{ minWidth: '300px', maxWidth: '400px' }}>
                {errors.defaultUnit && (
                  <p style={{ color: 'red', fontSize: 'small' }}>
                    Only alphabetic and special symbols allowed
                  </p>
                )}
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    maxWidth: '300px',
                  }}
                >
                  <label htmlFor="defaultUnit">Default unit:</label>
                  <input
                    id="defaultUnit"
                    name="defaultUnit"
                    onChange={changeHandler}
                    onBlur={(e) => textValidator(e, setErrors)}
                    value={values.defaultUnit}
                  />
                </div>
              </Col>
            </Row>

            <Row
              align="start"
              justify="start"
              style={{ marginBottom: '1.5rem' }}
            >
              <Col style={{ minWidth: '300px', maxWidth: '400px' }}>
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                    gap: '0.5rem',
                    maxWidth: '300px',
                  }}
                >
                  <button onClick={cancelHandler}>Cancel</button>
                  <button disabled={isDisabled}>Save</button>
                </div>
              </Col>
            </Row>
          </Container>
        </form>
      ) : (
        ''
      )}
    </>
  );
};

export default Table;
