import { useContext } from 'react';
import { StoreContext } from '../store/Store';
import expenditureTypes from '../store/types/expenditure.types';

const FilterListExpendituresItems = ({ classes }) => {
  const { dispatch } = useContext(StoreContext);

  const handleChangeFiltered = ({ target }) => {
    dispatch({
      type: expenditureTypes.FILTERED_EXPENDITURE,
      payload: target.value,
    });
  };

  return (
    <div className={`container_filtered min-h-50vh mt-5 ${classes}`}>
      <div className="container_label_input">
        <label className="text-2xl lg:text-4xl font-bold text-gray-400">
          filtrar gastos
        </label>
      </div>
      <div className="container_label_input">
        <div className="input-wrapper border-1">
          <select
            onChange={handleChangeFiltered}
            name="category_expend"
            className="text-black"
          >
            <option selected className="option" value="all">
              Todas las categorias
            </option>
            <option className="option" value="saving">
              Ahorro
            </option>
            <option className="option" value="groceries">
              Comida
            </option>
            <option className="option" value="house">
              Casa
            </option>
            <option className="option" value="budget">
              Gastos varios
            </option>
            <option className="option" value="leisure">
              Ocio
            </option>
            <option className="option" value="salud">
              Salud
            </option>
            <option className="option" value="subscription">
              Suscripciones
            </option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default FilterListExpendituresItems;
