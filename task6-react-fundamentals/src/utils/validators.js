export const textValidator = (e, setErrors) => {
  let regex = new RegExp('[0-9]');
  let str = String(e.target.value.trim());

  setErrors((state) => ({
    ...state,
    [e.target.name]: regex.test(str),
  }));
};

export const dateValidator = (e, setErrors) => {
  let regex = new RegExp('[0-9]{2}.[0-9]{2}.[0-9]{4}');
  let date = String(e.target.value.trim());

  if (regex.test(date)) {
    const [day, month, year] = date.split('.');

    const checkDay = day > 0 && day <= 31;
    const checkMonth = month >= 1 && month <= 12;
    const checkYear = year >= 2000 && year <= 2023;

    if (!checkDay || !checkMonth || !checkYear) {
      setErrors((state) => ({
        ...state,
        [e.target.name]: true,
      }));
      return;
    }
  }

  setErrors((state) => ({
    ...state,
    [e.target.name]: !regex.test(date),
  }));
};

export const numberValidator = (e, setErrors) => {
  const regex = new RegExp('[0-9]+');
  const value = parseInt(e.target.value.trim());

  if (regex.test(value)) {
    if (value < 0) {
      setErrors((values) => ({
        ...values,
        [e.target.name]: true,
      }));
      return;
    }
  }

  setErrors((values) => ({
    ...values,
    [e.target.name]: !regex.test(value),
  }));
};
