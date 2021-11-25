import React, {Dispatch, SetStateAction, FormEvent} from 'react';
import { Iinput } from '../interfaces/event.interface';
import SavedEvents from './SavedEvents';

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


  return (
    <>
      <SavedEvents />
      <form > 
        { inputFields.map((InputField, index) => (
          <div key={index}>
            <input 
              type="text" 
              placeholder="event"
              value={InputField.event} 
              onChange={(event) => handleChange(index, event) }
            />
          </div>
        )) }
        <button type="submit">save</button>
      </form>
    </>
  );
};

export default InputFieldOnDrop;
