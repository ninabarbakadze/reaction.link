import React, {Dispatch, SetStateAction, FormEvent} from 'react';
import { Iinput } from '../interfaces/event.interface';
import SavedEvents from './SavedEvents';
import { addEvents } from '../services/event.services';
import '../App.css';

interface iProps {
  setInputField: Dispatch<SetStateAction<Iinput[]>>
  inputFields: Iinput[]
}

const InputFieldOnDrop = ({inputFields, setInputField}: iProps) => {
  const handleChange = (index: number, event: FormEvent<HTMLInputElement>) => {
    event.preventDefault();
    const values = [...inputFields];
    values[index].event = event.currentTarget.value;
    setInputField(values);
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    inputFields.map(async (inputfield, index) => {
      if (inputfield.event !== '') await addEvents(inputFields);
    });
  };


  return (
    <>
      <SavedEvents />
      <form onSubmit={handleSubmit}> 
        { inputFields.map((InputField, index) => (
          <div className="input-parent" key={index}>
            <input 
              className="input-field"
              type="text" 
              placeholder="event"
              value={InputField.event} 
              onChange={(event) => handleChange(index, event) }
            />
          </div>
        )) }
        <button className="submit-button" type="submit" >save</button>
      </form>
    </>
  );
};

export default InputFieldOnDrop;
