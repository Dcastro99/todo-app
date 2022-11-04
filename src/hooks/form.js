import { useState, useEffect } from 'react';

const useForm = (callback, defaultValues = {}) => {
  // console.log('BEGGIN HERE??::', props)
  const [values, setValues] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    callback(values);

    // props.handleCreateTodo(values);
  };

  const handleChange = (event) => {
    event.persist();
    let { name, value } = event.target;
    if (parseInt(value)) {
      value = parseInt(value);
    }

    setValues(values => ({ ...values, [name]: value }));
  };



  useEffect(() => {
    setValues(defaultValues);
  }, [defaultValues]);

  return {
    handleChange,
    handleSubmit,
    values,
  };
};

export default useForm;
