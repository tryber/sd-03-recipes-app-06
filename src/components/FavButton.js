import React, { useEffect, useContext } from 'react';
import DetailsContext from '../context/DetailsContext';
import whiteHeartIcon from '../images/whiteHeartIcon.svg';
import blackHeartIcon from '../images/blackHeartIcon.svg';

const FavButton = () => {
  const { heart, toFavorite, verifyHeart } = useContext(DetailsContext);

  const chooseHeart = (choose) => {
    if (choose === 'white') {
      return whiteHeartIcon;
    }
    return blackHeartIcon;
  };

  useEffect(() => {
    verifyHeart();
  }, []);

  return (
    <div>
      <button onClick={() => toFavorite()}>
        <img data-testid="favorite-btn" src={chooseHeart(heart)} alt="Heart" width="31px" />
      </button>
    </div>
  );
};

export default FavButton;
