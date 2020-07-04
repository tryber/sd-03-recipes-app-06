import React, { useEffect, useContext } from 'react';
import DetailsContext from '../context/DetailsContext';

const ShareFavButtons = () => {
  const { shareUrl, location } = useContext(DetailsContext);
  return (
    <div>
      <button
        data-testid="share-btn" onClick={() => shareUrl(location.pathname)}
      >Share
      </button>
      <button data-testid="favorite-btn">Favorite</button>
    </div>
  );
};

export default ShareFavButtons;
