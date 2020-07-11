import React, { useState } from 'react';
import PropTypes from 'prop-types';
import InProgressContext from './InProgressContext';

const compareObjects = (obj1, obj2) => {
  if (obj1 && obj2) {
    if (obj1.length === obj2.length) {
      return true;
    }
  }
  return false;
}; 

const ProviderInProgress = ({ children }) => {
  const [showButton, setShowButton] = useState(false);

  const countIng = (type, id, obj) => {
    const inProgress = JSON.parse(localStorage.getItem('inProgressRecipes'));
    if (obj.length && inProgress) {
      console.log('tamanho do objeto', obj.length);
      let savedIng = [];
      savedIng = inProgress[type][id];
      setShowButton(compareObjects(obj, savedIng));
    }
  };

  const contextValue = {
    showButton,
    setShowButton,
    countIng,
  };

  return (
    <InProgressContext.Provider value={contextValue}>
      {children}
    </InProgressContext.Provider>
  );
};

ProviderInProgress.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ProviderInProgress;
