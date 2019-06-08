import React from 'react';
import TitleBar from 'COMPONENTS/TitleBar';
import CalorieIntakeForm, { loadData } from 'COMPONENTS/CalorieIntakeForm';

const Home = () => {
  return (
    <div>
      <TitleBar />
      <CalorieIntakeForm />
    </div>
  );
};

export default {
  component: Home,
  loadData,
};
