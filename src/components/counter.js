import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import classes from "./counter.module.css";

import {
  decrement,
  increment,
  incrementByAmount,
  selectCount,
} from "./counterSlice";

const Counter = () => {
  const count = useSelector(selectCount);
  const dispatch = useDispatch();
  const [incrementAmount, setIncrementAmount] = useState("1");

  const incrementHandler = () => {
    dispatch({ type: increment });
  };

  const decrementHandler = () => {
    dispatch({ type: decrement });
  };

 
  return (
    <div className={classes.main}>
      <div>
        <div className={classes.value}>{count}</div>
        <button
          className={classes.buttonIncrease}
          //   onClick={() => dispatch(increment())}
          onClick={incrementHandler}
        >
          Increment +
        </button>

        <button
          className={classes.buttonDecrease}
          //   onClick={() => dispatch(decrement())}
          onClick={decrementHandler}
        >
          Decrement -
        </button>
      </div>
      <div>
        <input
          type="number"
          className={classes.input}
          value={incrementAmount}
          onChange={(e) => setIncrementAmount(e.target.value)}
        />
        <div>
          <button
            className={classes.addAmount}
            onClick={() =>
              dispatch(incrementByAmount(Number(incrementAmount) || 0))
            }
          >
            AddAmount
          </button>
        </div>
      </div>
    </div>
  );
};
export default Counter;
