import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchNumbers } from '../redux/slices/numbers';

const ListNumbers = () => {
  // const [numbers, setNumbers] = React.useState([]);
  const dispatch = useDispatch();
  const { numbers } = useSelector((state) => state.numbers);

  React.useEffect(() => {
    dispatch(fetchNumbers());
  }, []);

  const deleteNumber = () => {};

  return (
    <>
      <table className="table mt-5 text-center">
        <tbody>
          <tr>
            {numbers.items.map((obj, index) => (
              <td key={index}>{obj.description}</td>
            ))}
            <td>
              <button className="btn btn-danger">Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default ListNumbers;
