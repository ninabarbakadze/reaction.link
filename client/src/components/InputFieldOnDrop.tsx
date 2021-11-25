import React, {Dispatch, SetStateAction, FormEvent} from 'react';
import { Iinput } from '../interfaces/event.interface';

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
  );
};

export default InputFieldOnDrop;
