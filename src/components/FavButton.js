import React, { useEffect, useContext } from 'react';
import DetailsContext from '../context/DetailsContext';
import whiteHeartIcon from '../images/whiteHeartIcon.svg';
import blackHeartIcon from '../images/blackHeartIcon.svg';

const FavButton = () => {
  const { heart, toFavorite, verifyHeart, location } = useContext(DetailsContext);

  const chooseHeart = (choose) => {
    if (choose === 'white') {
      return whiteHeartIcon;
    }
    return blackHeartIcon;
  };

  useEffect(() => {
    if (location.pathname.match(/in-progress/g)) {
      verifyHeart(location.pathname.slice(0, location.pathname.length - 12));
    } else {
      verifyHeart(location.pathname);
    }
  }, []);

  return (
    <div>
      <button 
        onClick={() => {
          if (location.pathname.match(/in-progress/g)) {
            toFavorite(location.pathname.slice(0, location.pathname.length - 12));
            return null;
          }
          toFavorite(location.pathname);
          return null;
        }}
      >
        <img data-testid="favorite-btn" src={chooseHeart(heart)} alt="Heart" width="31px" />
      </button>
    </div>
  );
};

export default FavButton;
