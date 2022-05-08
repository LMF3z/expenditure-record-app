import { useContext, useState } from 'react';
import { StoreContext } from '../store/Store';
import expenditureTypes from '../store/types/expenditure.types';
import PlusIcon from '../resources/icons/PlusIcon';
import ButtonIcon from './ButtonIcon';

const StartRecording = () => {
  const { dispatch } = useContext(StoreContext);
  const [initial, setInitial] = useState(0);

  const handleChangeInitialExpenditure = ({ target }) => {
    setInitial(Number(target.value));
  };

  const saveInitialBudget = () =>
    dispatch({ type: expenditureTypes.SET_INITIAL_BUDGET, payload: initial });

  return (
    <div className="container_start_recording min-h-45vh h-45vh">
      <h3 className="text-xl text-blue capitalize">Definir presupuesto</h3>
      <div className="input-wrapper">
        <input
          type="number"
          value={initial}
          onChange={handleChangeInitialExpenditure}
          min={0}
          minLength={1}
          className="lg:w-96"
        />
      </div>
      <ButtonIcon
        label="Añadir"
        icon={<PlusIcon />}
        classes="button w-72 lg:w-96"
        handleClick={saveInitialBudget}
      />
    </div>
  );
};

export default StartRecording;
