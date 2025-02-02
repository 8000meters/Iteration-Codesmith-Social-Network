import React, { Component, useEffect, useState } from 'react';
import { NavBar } from './NavBarContainer';
import { ResidentsListContainer } from './ResidentsListContainer';

export const ResidentsContainer = (props) => {
  const [residentList, setResidentList] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8080/residents')
      .then(res => res.json())
      .then(res => setResidentList(res));
  }, []);

  return (
    <div>
      <NavBar />
      <ResidentsListContainer residentList={residentList} />
    </div>
  );
};