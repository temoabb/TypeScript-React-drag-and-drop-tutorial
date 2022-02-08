import React, { useRef } from "react";
import "./styles.css";

interface Props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleAdd: (e: React.FormEvent) => void; // this function returns nothing;
}

const InputField = ({ todo, setTodo, handleAdd }: Props) => {
  const myRef = useRef<HTMLInputElement>(null);

  const submitHandler = (e: React.FormEvent) => {
    handleAdd(e);
    myRef.current?.blur();
  };

  return (
    <form className="input" onSubmit={submitHandler}>
      <input
        ref={myRef}
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        type="input"
        className="input__box"
        placeholder="Enter a task"
      />
      <button className="input__submit" type="submit">
        Go
      </button>
    </form>
  );
};

export default InputField;
