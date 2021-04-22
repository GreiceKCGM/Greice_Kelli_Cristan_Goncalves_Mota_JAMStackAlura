import React from 'react';

export default function useform({ initialValues, onSubmit, validateSchema }) {
  const [userInfo, setUserInfo] = React.useState(initialValues);

  const [isFormDisabled, setIsFormDisabled] = React.useState(true);
  const [errors, setErrors] = React.useState({});
  const [touched, setTouchedField] = React.useState({});

  async function validateuserInfo(currentUserInfo) {
    try {
      await validateSchema(currentUserInfo);
      setIsFormDisabled(false);
      setErrors({});
    } catch (err) {
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
    }
  }

  React.useEffect(() => {
    validateuserInfo(userInfo);
  }, [userInfo]);

  const isFormInvalid = userInfo.email.length === 0
  || userInfo.name.length === 0 || userInfo.message.length === 0;

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
    isFormInvalid,
    isFormDisabled,
    setIsFormDisabled,
    errors,
    touched,
    handleBlur(event) {
      const fieldName = event.target.getAttribute('name');

      setTouchedField({
        ...touched,
        [fieldName]: true,
      });
    },
    emailIsInvalid() {
      return userInfo.email.length > 0 && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(userInfo.email);
    },
    handleReset() {
      setUserInfo(initialValues);
      setTouchedField({});
    },
  };
}
