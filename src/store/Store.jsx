import { createContext, useReducer } from 'react';
import utilsStorage from '../utils/handleLocalStorage';
import expenditureTypes from './types/expenditure.types';

export const StoreContext = createContext();

const INITIAL_ESTATE = {
  initialExpenditure: utilsStorage.getStorage('initialExpenditure')
    ? utilsStorage.getStorage('initialExpenditure')
    : 0,
  spent: utilsStorage.getStorage('spent')
    ? utilsStorage.getStorage('spent')
    : 0,
  available: utilsStorage.getStorage('available')
    ? utilsStorage.getStorage('available')
    : 0,
  listExpend: utilsStorage.getStorage('listExpend')
    ? utilsStorage.getStorage('listExpend')
    : [],
  // edit form
  editMode: false,
  stateFormEdit: {
    name_expend: '',
    amount_expend: 0,
    category_expend: 'seleccionar',
  },
  // modal
  isModalOpen: false,
  // progressbar
  progressBarEndvalue: utilsStorage.getStorage('percentExpenditure')
    ? utilsStorage.getStorage('percentExpenditure')
    : null,
};

const reducer = (state, { type, payload }) => {
  switch (type) {
    case expenditureTypes.SET_INITIAL_BUDGET: {
      utilsStorage.setStorage('initialExpenditure', payload);
      return { ...state, initialExpenditure: payload };
    }

    case expenditureTypes.REMOVE_INITIAL_BUDGET: {
      utilsStorage.removeStorageItem('initialExpenditure');
      return { ...state, initialExpenditure: 0 };
    }

    case expenditureTypes.ADD_EXPENDITURE: {
      payload.id = state.listExpend.length + 1;

      utilsStorage.setStorage('listExpend', [...state.listExpend, payload]);

      return {
        ...state,
        listExpend: [...state.listExpend, payload],
      };
    }

    case expenditureTypes.SET_EDIT_EXPENDITURE: {
      return {
        ...state,
        stateFormEdit: payload,
        editMode: true,
      };
    }

    case expenditureTypes.RESET_EDIT_EXPENDITURE: {
      return {
        ...state,
        stateFormEdit: {
          name_expend: '',
          amount_expend: 0,
          category_expend: 'seleccionar',
        },
        editMode: false,
      };
    }

    case expenditureTypes.EDIT_EXPENDITURE: {
      const toEdit = state.listExpend.map((item) => {
        if (+item.id === +payload.id) {
          item.amount_expend = payload.amount_expend;
          item.category_expend = payload.category_expend;
          item.date = payload.date;
          item.img = payload.img;
          item.name_expend = payload.name_expend;
        }

        return item;
      });

      utilsStorage.setStorage('listExpend', toEdit);

      return {
        ...state,
        listExpend: toEdit,
      };
    }

    case expenditureTypes.DELETE_EXPENDITURE: {
      const itemDeleted = state.listExpend.filter(
        (item) => item.id !== payload.id
      );

      utilsStorage.setStorage('listExpend', itemDeleted);

      return {
        ...state,
        listExpend: itemDeleted,
      };
    }

    case expenditureTypes.TOTAL_EXPENDITURE: {
      const total = state.listExpend.reduce(
        (acc, el) => acc + +el.amount_expend,
        0
      );

      const av = +state.initialExpenditure - total;

      const percent =
        total === +state.initialExpenditure
          ? 0
          : (total / +state.initialExpenditure) * 100;

      return {
        ...state,
        available: total.toFixed(2),
        spent: av,
        progressBarEndvalue: percent > 0 ? percent.toFixed(2) : null,
      };
    }

    case expenditureTypes.FILTERED_EXPENDITURE: {
      const filtered = state.listExpend.filter((item) =>
        item.category_expend.toLowerCase().includes(payload.toLowerCase())
      );

      return {
        ...state,
        listExpend:
          payload === 'all' ? utilsStorage.getStorage('listExpend') : filtered,
      };
    }

    case expenditureTypes.TOGGLE_MODAL: {
      return {
        ...state,
        isModalOpen: !state.isModalOpen,
      };
    }

    default:
      return state;
  }
};

const Store = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INITIAL_ESTATE);

  return (
    <StoreContext.Provider value={{ state, dispatch }}>
      {children}
    </StoreContext.Provider>
  );
};

export default Store;
