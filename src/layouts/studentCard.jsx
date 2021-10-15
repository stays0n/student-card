import React from 'react';
import { Link } from 'react-router-dom';
import { isLocalStorageDataLoaded } from './../utils/localStorage';

import StudentInfo from './../components/studentInfo';

const DATA_NAME = 'studentData';

const StudentCard = () => {
  return (
    <div className='container-sm'>
      <h1 className='display-1 mb-4'>Карточка студента</h1>
      {isLocalStorageDataLoaded(DATA_NAME) ? (
        <StudentInfo />
      ) : (
        <div>
          <p>Нет данных</p>
          <Link className='btn btn-primary' to='/form' children='Добавить' />
        </div>
      )}
    </div>
  );
};

export default StudentCard;
