import React, { useContext } from 'react';
import DetailsContext from '../context/DetailsContext';
import shareIcon from '../images/shareIcon.svg';

const ShareButton = () => {
  const { shareUrl, location } = useContext(DetailsContext);

  return (
    <div>
      <button
        data-testid="share-btn" onClick={() => shareUrl(location.pathname)}
      ><img src={shareIcon} alt="share" width="31px" />
      </button>
    </div>
  );
};

export default ShareButton;
