import React, { useState } from 'react';
import PropTypes from 'prop-types';
import InProgressContext from './InProgressContext';

const ProviderInProgress = ({ children }) => {
  const [showButton, setShowButton] = useState(false);

  const countIng = (type, id, obj) => {
    const inProgress = JSON.parse(localStorage.getItem('inProgressRecipes'));
    if (inProgress && obj.length > 0) {
      console.log('tamanho do objeto', obj.length);
      let savedIng = [];
      savedIng = [...inProgress[type][id]];
      if (savedIng.length === obj.length) {
        return setShowButton(true);
      }
      setShowButton(false);
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
