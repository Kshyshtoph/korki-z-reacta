import { useForm } from "react-hook-form";
import { useState } from "react";
import { ListItem } from "./";

const Form = () => {
  const [arr, setArr] = useState([]);
  const onSubmit = (data) => {
    console.log(data);
    setArr([...arr, data.test]);
  };
  const { register, handleSubmit } = useForm();

  return (
    <div className="form">
      <form onSubmit={handleSubmit(onSubmit)}>
        <input name="test" ref={register}></input>
        <button>Submit</button>
      </form>
      <ul>
        {arr.map((text, index) => {
          return <ListItem {...{ text }} key={index} />;
        })}
      </ul>
    </div>
  );
};

export default Form;
