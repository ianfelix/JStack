import { useState } from 'react';

export const useError = () => {
  const [errors, setErrors] = useState([]);

  const setError = ({ field, message }) => {
    const hasEmailError = errors.some((error) => error.field === field);

    if (hasEmailError) return;

    setErrors((prevState) => [
      ...prevState,
      {
        field,
        message,
      },
    ]);
  };

  const removeError = (field) => {
    setErrors((prevState) =>
      prevState.filter((error) => error.field !== field),
    );
  };

  const getErrorMessageByFieldName = (fieldName) =>
    errors.find((error) => error.field === fieldName)?.message;

  return { setError, removeError, getErrorMessageByFieldName };
};
