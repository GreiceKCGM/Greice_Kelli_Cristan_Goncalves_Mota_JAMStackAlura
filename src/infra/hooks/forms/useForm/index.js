import React from 'react';

export function useform({initialValues}) {
    const [userInfo, setUserInfo] = React.useState(initialValues);

return{
    userInfo,

     handleChange(event) {
    const fieldName = event.target.getAttribute('name');
    const {value} = event.target;

    setUserInfo({
      ...userInfo,
      [fieldName]: value,
    });
}
}
