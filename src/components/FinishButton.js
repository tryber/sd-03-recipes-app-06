import React from 'react';
import { useHistory } from 'react-router-dom';
import { writeDoneRecipes } from '../helper/ControlFunctions';

const translate = {
  comida: 'Meal',
  bebida: 'Drink',
};

const alcoholicOrNot = (type, obj) => {
  if (type === 'comida') {
    return '';
  }
  return obj.strAlcoholic;
};

const FinishButton = ({ activate, done = {}, tipo } = this.props) => {
  const history = useHistory();
  const now = new Date;
  return (
    <div className="buttonDiv">
      {
        <button
          name="bebida-btn" data-testid="finish-recipe-btn"
          className="footer-btn" disabled={!activate}
          onClick={() => {
            history.push('/receitas-feitas');
            const objToWrite = {
              id: done[`id${translate[tipo]}`],
              type: tipo,
              area: done.strArea || '',
              category: done.strCategory,
              alcoholicOrNot: alcoholicOrNot(tipo, done),
              name: done[`str${translate[tipo]}`],
              image: done[`str${translate[tipo]}Thumb`],
              doneDate: `${now.getDate()}/${now.getMonth()}/${now.getFullYear()}`,
              tags: done.strTags || '',
            };
            writeDoneRecipes(objToWrite);
            console.log(objToWrite);
          }}
        ><h2 className="buttonTitle">Finalizar Receita</h2></button>
      }
    </div>
  );
};

export default FinishButton;
