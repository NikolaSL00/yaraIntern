import { Col, Container, Row } from 'react-grid-system';
import { useState } from 'react';
import {
  textValidator,
  dateValidator,
  numberValidator,
} from '../../../utils/validators';

const Form = () => {
  const [errors, setErrors] = useState({
    name: '',
    unit: '',
    rFactor: '',
    sClass: '',
    date: '',
  });
  const [values, setValues] = useState({
    name: '',
    unit: '',
    rFactor: '',
    sClass: '',
    date: '',
  });
  const [showSummary, setShowSummary] = useState(false);

  const changeHandler = (e) => {
    // console.log('change handler');
    // console.log(e.target.name);
    // console.log(e.target.value);
    setErrors((errors) => ({
      ...errors,
    }));

    setValues((values) => ({
      ...values,
      [e.target.name]: e.target.value,
    }));
  };
  const submitHandler = (e) => {
    e.preventDefault();
    setShowSummary(() => true);
  };
  const cancelHandler = (e) => {
    e.preventDefault();
    setErrors((errors) => ({
      name: '',
      unit: '',
      rFactor: '',
      sClass: '',
      date: '',
    }));
    setValues((values) => ({
      name: '',
      unit: '',
      rFactor: '',
      sClass: '',
      date: '',
    }));
  };

  const isDisabled =
    Object.values(errors).some((value) => value === true) ||
    Object.values(values).some((value) => value === '');

  return (
    <div style={{ padding: '1rem 2rem' }}>
      <h1 style={{ padding: '0 0.65rem', marginBottom: '1.5rem' }}>
        Crop Details
      </h1>
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
                <label htmlFor="tile">Crop name:</label>
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
              {errors.sClass && (
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
                <label htmlFor="subClass">Sub-class:</label>
                <input
                  id="subClass"
                  name="sClass"
                  onChange={changeHandler}
                  onBlur={(e) => textValidator(e, setErrors)}
                  value={values.sClass}
                />
              </div>
            </Col>
          </Row>
          <Row style={{ marginBottom: '1.5rem' }}>
            <Col style={{ minWidth: '300px', maxWidth: '400px' }}>
              {errors.unit && (
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
                <label htmlFor="unit">Yield unit:</label>
                <input
                  id="unit"
                  name="unit"
                  onChange={changeHandler}
                  onBlur={(e) => textValidator(e, setErrors)}
                  value={values.unit}
                />
              </div>
            </Col>
            <Col style={{ minWidth: '300px', maxWidth: '400px' }}>
              {errors.date && (
                <p style={{ color: 'red', fontSize: 'small' }}>
                  Please enter a valid date. Year must be between 2000 and 2023.
                </p>
              )}
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  maxWidth: '300px',
                }}
              >
                <label htmlFor="date">Seeding date:</label>
                <input
                  id="date"
                  name="date"
                  onChange={changeHandler}
                  onBlur={(e) => dateValidator(e, setErrors)}
                  placeholder="01.12.2022"
                  value={values.date}
                />
              </div>
            </Col>
          </Row>

          <Row style={{ marginBottom: '1.5rem' }}>
            <Col style={{ minWidth: '300px', maxWidth: '400px' }}>
              {errors.rFactor && (
                <p style={{ color: 'red', fontSize: 'small' }}>
                  Please enter a valid number. The number must be greater than
                  0.
                </p>
              )}
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  maxWidth: '300px',
                }}
              >
                <label htmlFor="residue">Residue factor:</label>
                <input
                  id="residue"
                  name="rFactor"
                  onChange={changeHandler}
                  onBlur={(e) => numberValidator(e, setErrors)}
                  value={values.rFactor}
                />
              </div>
            </Col>

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
      {showSummary ? (
        <article>
          <h1>Crop Summary</h1>
          <p>
            My crop is called {values.name} with subclass of {values.sClass},
            {values.unit} unit, residue factor of {values.rFactor} and it is
            seed on {values.date}
          </p>
        </article>
      ) : (
        ''
      )}
    </div>
  );
};

export default Form;

// 6. should be applied
// If all validations pass, shows a summary of the entered data in the inputs below the form

// All inputs to be filled
// Texts inputs to include only text and special characters, but no numbers
// Number inputs to include only numbers >0
// On Save, if some of the validations fail, show an error message
// “Value of <input name> is required” – if the input is empty
// ”Value of <input name> should be text/number” – if the type is the entered value is not valid
// Additional tasks if everything above is finished
// In the form from 3., make the validation to work on input blur and disable Save button until all inputs are valid
// In the table from 4., open the form for adding a new item in a modal pop-up
