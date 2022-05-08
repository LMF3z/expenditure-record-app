import { useContext, useState, useEffect } from 'react';
import { StoreContext } from '../store/Store';
import toast from 'react-hot-toast';
import expendituresTypes from '../store/types/expenditure.types';
import images from '../resources/images';
import ButtonIcon from './ButtonIcon';

const FormCreateExpenditure = () => {
  const { state, dispatch } = useContext(StoreContext);

  const [stateForm, setStateForm] = useState({
    name_expend: '',
    amount_expend: 0,
    category_expend: 'seleccionar',
  });

  useEffect(() => {
    if (state.editMode) {
      setEditForm();
    }
  }, [state.editMode]);

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setStateForm({ ...stateForm, [name]: value });
  };

  const addExpenditure = (e) => {
    e.preventDefault();
    if (stateForm.name_expend === '' || stateForm.amount_expend <= 0) {
      toast.error('Nombre de gasto o cantidad incorrectos');
      return;
    }
    if (
      stateForm.category_expend === '' ||
      stateForm.category_expend === 'seleccionar'
    ) {
      toast.error('Debe seleccionar una categoria');
      return;
    }

    const img = Object.values(images).find(
      (item) =>
        item.split('/').pop().split('.')[0] === stateForm.category_expend
    );

    stateForm.img = img;

    const date = new Date();
    stateForm.date = date.toLocaleDateString();

    if (state.editMode) {
      editExpenditure(stateForm);
    } else {
      dispatch({ type: expendituresTypes.ADD_EXPENDITURE, payload: stateForm });
      setStateForm({
        name_expend: '',
        amount_expend: 0,
        category_expend: 'seleccionar',
      });
    }
  };

  const editExpenditure = (form) => {
    dispatch({ type: expendituresTypes.EDIT_EXPENDITURE, payload: form });
    dispatch({ type: expendituresTypes.RESET_EDIT_EXPENDITURE });
    setStateForm({
      name_expend: '',
      amount_expend: 0,
      category_expend: 'seleccionar',
    });
  };

  const setEditForm = () => {
    setStateForm(state.stateFormEdit);
  };

  return (
    <form
      className=" w-full h-full text-white bg-inherit flex flex-col justify-center items-center space-y-10"
      onSubmit={addExpenditure}
    >
      <h1 className="text-4xl underline decoration-2 decoration-blue">
        Nuevo gasto
      </h1>
      <div className="container flex flex-col justify-center items-center space-y-5 animate__animated animate__fadeIn">
        <div className="container_label_input">
          <label htmlFor="">Nombre del gasto:</label>
          <div className="input-wrapper">
            <input
              onChange={handleChange}
              name="name_expend"
              type="text"
              className="lg:w-96 text-black"
              value={stateForm.name_expend}
            />
          </div>
        </div>
        <div className="container_label_input">
          <label htmlFor="">Cantidad gastada:</label>
          <div className="input-wrapper">
            <input
              onChange={handleChange}
              name="amount_expend"
              type="number"
              min={0}
              minLength={1}
              step="0.01"
              className="lg:w-96 text-black"
              value={stateForm.amount_expend}
            />
          </div>
        </div>
        <div className="container_label_input">
          <label htmlFor="">Categoría:</label>
          <div className="input-wrapper">
            <select
              onChange={handleChange}
              name="category_expend"
              className="text-black"
              value={stateForm.category_expend}
            >
              <option selected className="option" value="seleccionar">
                seleccionar
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
      <div className="button w-72 lg:w-96 animate__animated animate__fadeIn">
        <ButtonIcon
          label={state.editMode ? 'Editar gasto' : 'Añadir gasto'}
          type="submit"
          classes="button w-72 lg:w-96"
          // handleClick={() => {}}
        />
        {/* <button>Añadir gasto</button> */}
      </div>
    </form>
  );
};

export default FormCreateExpenditure;
