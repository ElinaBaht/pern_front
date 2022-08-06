import React from 'react';
import axios from '../axios';

const InputNumber = () => {
  const [value, setValue] = React.useState('+7');
  const [mobNumber, setMobNumber] = React.useState('');

  const number = `${value + mobNumber}`;

  const onSubmitForm = async (e) => {
    e.preventDefault();
    try {
      const body = { number };
      const response = await axios.post('/numbers', body, {});
      console.log(response);
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <>
      <h1 className="text-center mt-5">SUPERKASSA</h1>
      <div>
        <form onSubmit={onSubmitForm} className="d-flex mt-5" on>
          <select value={value} onChange={(e) => setValue(e.target.value)} id="select1">
            <option value="+7">+7</option>
            <option value="+1">+1</option>
            <option value="+86">+86</option>
          </select>
          <input
            placeholder="Input number"
            type="number"
            className="form-control"
            value={mobNumber}
            onChange={(e) => setMobNumber(e.target.value)}
          />
          <button className="btn btn-success">Add number</button>
        </form>
      </div>
    </>
  );
};

export default InputNumber;
