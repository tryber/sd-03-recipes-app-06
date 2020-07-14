import React from 'react';
import { useHistory } from 'react-router-dom';

const FinishButton = ({ activate } = this.props) => {
  const history = useHistory();
  return (
    <div className="buttonDiv">
      {
        <button
          name="bebida-btn" data-testid="finish-recipe-btn"
          className="footer-btn" disabled={!activate}
          onClick={() => history.push('/receitas-feitas')}
        ><h2 className="buttonTitle">Finalizar Receita</h2></button>
      }
    </div>
  );
};

export default FinishButton;
