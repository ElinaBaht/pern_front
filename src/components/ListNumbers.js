import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchNumbers } from '../redux/slices/numbers';
import InputNumber from './InputNumber';

const ListNumbers = () => {
  const dispatch = useDispatch();
  const { numbers } = useSelector((state) => state.numbers);
  const isNumbersLoading = numbers.status === 'loading';
  React.useEffect(() => {
    dispatch(fetchNumbers());
  }, []);

  return (
    <>
      <InputNumber />
      <table className="table mt-5 text-center">
        <tbody>
          <tr>
            {isNumbersLoading ? (
              <h1>Идёт загрузка</h1>
            ) : (
              numbers.items.map((obj, index) => <td key={index}>{obj.description}</td>)
            )}
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default ListNumbers;
