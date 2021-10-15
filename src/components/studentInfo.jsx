import React from 'react';
import { Link } from 'react-router-dom';
import { getDataFromLocalStorage } from './../utils/localStorage';

const DATA_NAME = 'studentData';

const StudentInfo = () => {
  const data = getDataFromLocalStorage(DATA_NAME);

  return (
    <React.Fragment>
      <ul className='list-group list-group-flush mb-4'>
        <li className='list-group-item'>
          <b>Имя:</b> {data.name ? data.name : '-'}
        </li>
        <li className='list-group-item'>
          <b>Фамилия:</b> {data.surname ? data.surname : '-'}
        </li>
        <li className='list-group-item'>
          <b>Год рождения:</b> {data.birthyear ? data.birthyear : '-'}
        </li>
        <li className='list-group-item'>
          <b>Портфолио:</b> <a href={data.portfolio}>{data.portfolio ? data.portfolio : '-'}</a>
        </li>
      </ul>
      <Link className='btn btn-primary' to='/form' children='Редактировать' />
    </React.Fragment>
  );
};

export default StudentInfo;
