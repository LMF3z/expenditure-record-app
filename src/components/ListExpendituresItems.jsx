import { useContext } from 'react';
import {
  SwipeableList,
  SwipeableListItem,
} from '@sandstreamdev/react-swipeable-list';
import '@sandstreamdev/react-swipeable-list/dist/styles.css';
import expendituresType from '../store/types/expenditure.types';
import { StoreContext } from '../store/Store';
import ItemList from './ItemList';
import EditIcon from '../resources/icons/EditIcon';
import TrashIcon from '../resources/icons/TrashIcon';

const ListExpendituresItems = () => {
  const { state, dispatch } = useContext(StoreContext);
  const { listExpend } = state;

  const deletedExpenditure = (item) => {
    dispatch({ type: expendituresType.DELETE_EXPENDITURE, payload: item });
    dispatch({ type: expendituresType.TOTAL_EXPENDITURE });
  };

  const editExpenditure = (item) => {
    dispatch({ type: expendituresType.SET_EDIT_EXPENDITURE, payload: item });
    dispatch({ type: expendituresType.TOGGLE_MODAL });
  };

  return (
    <div className="container_swipe">
      <SwipeableList>
        {listExpend.map((item) => (
          <SwipeableListItem
            key={item.id}
            swipeLeft={{
              content: (
                <div className="w-full h-full pr-5 bg-red-600 flex justify-end items-center">
                  <TrashIcon color="#fff" classes="lg:w-8 lg:h-8" />
                </div>
              ),
              action: () => deletedExpenditure(item),
            }}
            swipeRight={{
              content: (
                <div className="w-full h-full pl-5 bg-blue flex justify-start items-center">
                  <EditIcon color="#fff" classes="lg:w-8 lg:h-8" />
                </div>
              ),
              action: () => editExpenditure(item),
            }}
          >
            <ItemList item={item} key={item.id} />
          </SwipeableListItem>
        ))}
      </SwipeableList>
    </div>
  );

  // {() => (
  //   <div className={'container_swipe'}>
  //     <SwipeableListItem
  //       swipeLeft={{
  //         content: (
  //           <div className="w-full h-full pr-5 bg-red-600 flex justify-end items-center">
  //             <TrashIcon color="#fff" classes="lg:w-8 lg:h-8" />
  //           </div>
  //         ),
  //         action: () => deletedExpenditure(),
  //       }}
  //       swipeRight={{
  //         content: (
  //           <div className="w-full h-full pl-5 bg-blue flex justify-start items-center">
  //             <EditIcon color="#fff" classes="lg:w-8 lg:h-8" />
  //           </div>
  //         ),
  //         action: () => console.info('swipe action triggered'),
  //       }}
  //       {...rest}
  //     >
  //       {state.listExpend.map((item) => (
  //         <ItemList key={item.id} item={item} />
  //       ))}
  //     </SwipeableListItem>
  //   </div>
  // )}

  // return state.listExpend.map((item) => <ItemList key={item.id} item={item} />);
};

export default ListExpendituresItems;
