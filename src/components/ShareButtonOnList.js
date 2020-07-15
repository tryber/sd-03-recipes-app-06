import React, { useContext } from 'react';
import DetailsContext from '../context/DetailsContext';
import shareIcon from '../images/shareIcon.svg';

const ShareButtonOnList = ({ location, testid } = this.props) => {
  const { shareUrl } = useContext(DetailsContext);

  return (
    <div className="ShareOnList">
      <button
        onClick={() => shareUrl(location)}
      ><img data-testid={testid} src={shareIcon} alt="share" width="31px" />
      </button>
    </div>
  );
};

export default ShareButtonOnList;