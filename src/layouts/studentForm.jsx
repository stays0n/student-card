import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  setDataToLocalStorage,
  getDataFromLocalStorage,
  isLocalStorageDataLoaded,
} from './../utils/localStorage';
import { validator } from './../utils/validator';

import FormModal from './../components/formModal';
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
  const [errors, setErrors] = useState({});
  const isValid = Object.keys(errors).length === 0;

  const handleDataChange = (e) => {
    const { name, value } = e.target;
    setData((prevState) => ({ ...prevState, [name]: value }));
  };

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const validatorConfig = {
    name: {
      isRequired: {
        message: 'Поле обязательно для заполнения',
      },
      isCapitalSymbol: {
        message: 'Поле должно содержать хотя бы одну заглавную букву',
      },
    },

    surname: {
      isRequired: {
        message: 'Поле обязательно для заполнения',
      },
      isCapitalSymbol: {
        message: 'Поле должно содержать хотя бы одну заглавную букву',
      },
    },

    birthyear: {
      isRequired: {
        message: 'Поле обязательно для заполнения',
      },
      isFourDigits: {
        message: 'Поле должно состоять из четырёх символов',
        value: 4,
      },
      max: {
        message: 'Год не может быть больше текущего',
        value: new Date().getFullYear(),
      },
      min: {
        message: 'Год не может быть меньше 1900',
        value: 1900,
      },
    },

    portfolio: {
      isRequired: {
        message: 'Поле обязательно для заполнения',
      },
      isFullLink: {
        message: 'Поле должно начинаться с http:// или https://',
      },
    },
  };

  useEffect(() => {
    validate();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  const validate = () => {
    const err = validator(data, validatorConfig);
    setErrors(err);
    return Object.keys(err).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const isValid = validate();
    if (!isValid) return;
    setDataToLocalStorage(DATA_NAME, data);
  };

  return (
    <React.Fragment>
      <div className='container-sm'>
        <h1 className='display-1'>
          {isLocalStorageDataLoaded(DATA_NAME) ? 'Редактировать' : 'Создать'}
        </h1>
        <div className='row'>
          <form onSubmit={handleSubmit}>
            <InputTextfield
              label='Имя'
              name='name'
              value={data.name}
              onDataChange={handleDataChange}
              error={errors.name}
            />
            <InputTextfield
              label='Фамилия'
              name='surname'
              value={data.surname}
              onDataChange={handleDataChange}
              error={errors.surname}
            />
            <InputTextfield
              label='Год рождения'
              type='number'
              name='birthyear'
              value={data.birthyear}
              onDataChange={handleDataChange}
              error={errors.birthyear}
            />
            <InputTextfield
              label='Портфолио'
              name='portfolio'
              value={data.portfolio}
              onDataChange={handleDataChange}
              error={errors.portfolio}
            />
            <Link className='btn btn-secondary me-2' to='/'>
              Назад
            </Link>
            <button
              className='btn btn-primary'
              type='submit'
              disabled={!isValid}
              onClick={handleShow}>
              {isLocalStorageDataLoaded(DATA_NAME) ? 'Обновить' : 'Создать'}
            </button>
          </form>
        </div>
      </div>
      <FormModal state={show} onClose={handleClose} />
    </React.Fragment>
  );
};

export default StudentForm;
