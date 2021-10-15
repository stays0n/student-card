import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  setDataToLocalStorage,
  getDataFromLocalStorage,
  isLocalStorageDataLoaded,
} from './../utils/localStorage';

import InputTextfield from './../components/inputTextfield';

const initialState = {
  name: '',
  surname: '',
  birthyear: '',
  portfolio: '',
};

const DATA_NAME = 'studentData';

const StudentForm = () => {
  const [data, setData] = useState(getDataFromLocalStorage(DATA_NAME) || initialState);

  const handleDataChange = (e) => {
    const { name, value } = e.target;
    setData((prevState) => {
      return { ...prevState, [name]: value };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setDataToLocalStorage('studentData', data);
  };

  return (
    <div className='container-sm'>
      <h1 className='display-1'>
        {isLocalStorageDataLoaded(DATA_NAME) ? 'Редактировать' : 'Создать'}
      </h1>
      <form onSubmit={handleSubmit}>
        <InputTextfield label='Имя' name='name' value={data.name} onDataChange={handleDataChange} />
        <InputTextfield
          label='Фамилия'
          name='surname'
          value={data.surname}
          onDataChange={handleDataChange}
        />
        <InputTextfield
          label='Год рождения'
          type='number'
          name='birthyear'
          value={data.birthyear}
          onDataChange={handleDataChange}
        />
        <InputTextfield
          label='Портфолио'
          name='portfolio'
          value={data.portfolio}
          onDataChange={handleDataChange}
        />
        <Link className='btn btn-secondary me-2' to='/'>
          Назад
        </Link>
        <button className='btn btn-primary'>
          {isLocalStorageDataLoaded(DATA_NAME) ? 'Обновить' : 'Создать'}
        </button>
      </form>
    </div>
  );
};

export default StudentForm;
