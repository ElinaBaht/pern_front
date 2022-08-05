import React from 'react';
import axios from '../axios';

const InputNumber = () => {
  const [value, setValue] = React.useState('');
  const [number, setNumber] = React.useState('');

  const onChange = (value) => {
    setValue(value);
    console.log(value);
  };

  const onSubmit = async () => {
    try {
      const numbers = { number };
      const { data } = await axios.post('/numbers', numbers);
      console.log(data);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <h1 className="text-center mt-5">SUPERKASSA</h1>
      <form value={value} onChange={onChange} className="d-flex mt-5" on>
        <select id="select1">
          <option value="+7">+7</option>
          <option value="+1">+1</option>
          <option value="+86">+86</option>
        </select>
        <input
          placeholder="Input number"
          type="number"
          className="form-control"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
        />
        <button onClick={onSubmit} className="btn btn-success">
          Add number
        </button>
      </form>
    </>
  );
};

export default InputNumber;
