import React, { useState } from 'react';
import Button from '../common/button';
import TextField from '../common/form/textField';

const CreateKeySill = () => {
  const [data, setData] = useState({
    id: '',
    name: ''
  });

  const handleChange = ({ target }) => {
    setData((prevState) => ({
      ...prevState,
      [target.name]: target.value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Создать ключевой навык:</h3>
      <TextField
        label="Введите id"
        type="text"
        name="id"
        value={data.id}
        onFieldChange={handleChange}
      />
      <TextField
        label="Введите название навыка:"
        type="text"
        name="name"
        value={data.name}
        onFieldChange={handleChange}
      />
      <Button color="warning" name="Создать ключевое качество:" />
    </form>
  );
};

export default CreateKeySill;
