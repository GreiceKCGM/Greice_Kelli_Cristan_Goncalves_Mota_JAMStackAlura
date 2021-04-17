import React from 'react';

export default function useform({ initialValues, onSubmit }) {
  const [userInfo, setUserInfo] = React.useState(initialValues);
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
  };
}
