import { useContext } from 'react';
import { StoreContext } from '../store/Store';
import expenditureTypes from '../store/types/expenditure.types';
import CircularProgressBar from './CircularProgressBar';

const Indicator = () => {
  const { state, dispatch } = useContext(StoreContext);

  const reset = () => {
    dispatch({ type: expenditureTypes.REMOVE_INITIAL_BUDGET });
  };

  return (
    <div className="container_cards min-h-50vh md:h-70vh lg:h-50vh mt-14">
      <div className="w-full h-1/2 lg:w-1/2 lg:h-full flex justify-center items-center">
        <CircularProgressBar />
      </div>
      <div className="w-full h-1/2 lg:w-1/2 lg:h-full lg:pt-10 flex flex-col justify-evenly lg:justify-start lg:space-y-5 items-center ">
        <button onClick={reset} className="button w-11/12">
          Resetear
        </button>
        <p>
          <span className="text-blue font-bold text-lg">Presupuesto:</span>{' '}
          {`${state.initialExpenditure}`}
        </p>
        <p>
          <span className="text-blue font-bold text-lg">Disponible:</span>{' '}
          {`${state.spent}`}
        </p>
        <p>
          <span className="text-blue font-bold text-lg">Gastado:</span>{' '}
          {`${state.available}`}
        </p>
      </div>
    </div>
  );
};

export default Indicator;
