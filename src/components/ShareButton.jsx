import React from 'react';
import propTypes from 'prop-types';
import ShareIcon from '../images/shareIcon.svg';

const ShareButton = ({ url }) => (
  <button
    className="icon-button"
    type="button" text={url}
    onCopy={
      () => {
        alert(`Você copiou a URL ${url}`);
      }
    }
  >
    <img
      className="icons"
      src={ShareIcon}
      alt="share icon"
      // data-testid="`${index}`-horizontal-share-btn"
    />
  </button>
);

ShareButton.propTypes = {
  url: propTypes.string.isRequired,
};

export default ShareButton;
