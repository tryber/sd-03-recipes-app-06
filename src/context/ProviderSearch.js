import React, { useState } from 'react';
import PropTypes from 'prop-types';
import SearchContext from './SearchContext';

const ProviderSearch = ({ children }) => {
  const [showBar, setShowBar] = useState(false);

  const contextValue = {
    showBar,
    setShowBar,
  };

  return (
    <SearchContext.Provider value={contextValue}>
      {children}
    </SearchContext.Provider>
  );
};

ProviderSearch.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ProviderSearch;
