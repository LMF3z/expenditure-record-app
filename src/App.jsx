import { useContext, useEffect, useState } from 'react';
import { Toaster } from 'react-hot-toast';
import { StoreContext } from './store/Store';
import expendituresTypes from './store/types/expenditure.types';
import Header from './components/Header';
import Indicator from './components/Indicator';
import Main from './components/Main';
import StartRecording from './components/StartRecording';
import ButtonAddExpenditure from './components/ButtonAddExpenditure';
import ModalForm from './components/ModalForm';
import FormCreateExpenditure from './components/FormCreateExpenditure';
import FilterListExpendituresItems from './components/FilterListExpendituresItems';
import ListExpendituresItems from './components/ListExpendituresItems';
import utilsStorage from './utils/handleLocalStorage';
// import ButtonToDownloadApp from './components/ButtonToDownloadApp';

const App = () => {
  const { state, dispatch } = useContext(StoreContext);
  const [listSaved, setListSaved] = useState([]);

  useEffect(() => {
    dispatch({ type: expendituresTypes.TOTAL_EXPENDITURE });
    setListSaved(
      utilsStorage.getStorage('listExpend')
        ? utilsStorage.getStorage('listExpend')
        : []
    );
  }, []);

  return (
    <>
      <Header />
      <Main>
        {state.initialExpenditure > 0 ? <Indicator /> : <StartRecording />}
        <ButtonAddExpenditure
          handleClick={() => dispatch({ type: expendituresTypes.TOGGLE_MODAL })}
        />
        {listSaved.length > 0 && <FilterListExpendituresItems classes="h-28" />}
        {state.listExpend.length > 0 && (
          <>
            <div className="w-full lg:w-3/5 mt-3 flex justify-start items-center">
              <label className="text-2xl lg:text-4xl font-bold text-gray-400">
                Gastos
              </label>
            </div>
            <ListExpendituresItems />
          </>
        )}
      </Main>
      {state.isModalOpen && (
        <ModalForm closeModal={handleCloseModal}>
          <FormCreateExpenditure />
        </ModalForm>
      )}
      <Toaster />
    </>
  );
};

export default App;
