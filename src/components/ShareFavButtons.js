import React, { useEffect, useContext } from 'react';
import DetailsContext from '../context/DetailsContext';
import shareIcon from '../images/shareIcon.svg';
import whiteHeartIcon from '../images/whiteHeartIcon.svg';
import blackHeartIcon from '../images/blackHeartIcon.svg';

const ShareFavButtons = () => {
  const { shareUrl, location, heart, toFavorite, verifyHeart, drinkOk } = useContext(DetailsContext);

  const chooseHeart = (choose) => {
    if (choose === 'white') {
      return whiteHeartIcon;
    }
    return blackHeartIcon;
  };

  useEffect(() => {
    verifyHeart();

  },[]);

  return (
    <div>
      <button
        data-testid="share-btn" onClick={() => shareUrl(location.pathname)}
      ><img src={shareIcon} alt="share" width="31px" />
      </button>
      <button onClick={() => toFavorite()}>
        <img data-testid="favorite-btn" src={chooseHeart(heart)} alt="Heart" width="31px" />
      </button>
    </div>
  );
};

export default ShareFavButtons;
