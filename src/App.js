import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import StudentCard from './layouts/studentCard';
import StudentForm from './layouts/studentForm';

const App = () => {
  return (
    <Switch>
      <Route path='/' exact component={StudentCard} />
      <Route path='/form' component={StudentForm} />
      <Redirect to='/' />
    </Switch>
  );
};

export default App;
