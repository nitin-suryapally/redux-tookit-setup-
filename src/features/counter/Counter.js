import React from "react";
import { increment, decrement, reset, incrementByAmount } from "./countSlice";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";

const Counter = () => {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();
  const [ incrementBy, setIncrementBy ] = useState(0);
  const addvalue = Number(incrementBy) || 0;

  const resetAll = () => {
    setIncrementBy(0)
    dispatch(reset());
  };
  return (
    <div>
      <p> {count} </p>

      <div>
        <button
          onClick={() => {
            dispatch(increment());
          }}
        >
          +
        </button>
        <button
          onClick={() => {
            dispatch(decrement());
          }}
        >
          -
        </button>
      </div>

      <input
        type="text"
        value={incrementBy}
        onChange={(e) => {
          setIncrementBy(e.target.value);
        }}
        
      />

      <div>
        <button onClick={() => {dispatch(incrementByAmount(addvalue))}}>add amount</button>
        <button onClick={resetAll}>reset</button>
      </div>
    </div>
  );
};

export default Counter;
