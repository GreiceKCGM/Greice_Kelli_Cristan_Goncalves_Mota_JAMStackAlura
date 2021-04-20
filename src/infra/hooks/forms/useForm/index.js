import React from 'react';

export default function useform({ initialValues, onSubmit, validateSchema }) {
  const [userInfo, setUserInfo] = React.useState(initialValues);

  const [isFormDisabled, setIsFormDisabled] = React.useState(true);
  const [errors, setErrors] = React.useState({});
  const [touched, setTouchedField] = React.useState({});

  React.useEffect(() => {
    validateSchema(userInfo)
      .then(() => {
        setIsFormDisabled(false);
        setErrors({});
      })
      .catch((err) => {
        const formattedErros = err.inner.reduce((errorObjectAcc, currentError) => {
          const fieldName = currentError.path;
          const errorMessage = currentError.message;
          return {
            ...errorObjectAcc,
            [fieldName]: errorMessage,
          };
        }, {});
        setErrors(formattedErros);
        setIsFormDisabled(true);
      });
  }, [userInfo]);

  return {
    userInfo,
    handleSubmit(event) {
      event.preventDefault();
      onSubmit(userInfo);
    },
    handleChange(event) {
      const fieldName = event.target.getAttribute('name');
      const { value } = event.target;

      setUserInfo((currentValues) => ({
        ...currentValues,
        [fieldName]: value,
      }));
    },
    isFormDisabled,
    errors,
    touched,
    handleBlur(event) {
      const fieldName = event.target.getAttribute('name');

      setTouchedField({
        ...touched,
        [fieldName]: true,
      });
    },
  };
}
