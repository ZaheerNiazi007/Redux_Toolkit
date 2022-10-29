// import { useDispatch, useSelector } from "react-redux";
// import { decrement, increment, incrementByAmount } from "./redux/counter";
import "./App.css";
import UserView from "./UserView";

function App() {
  // const { count } = useSelector((state) => state.counter);
  // const dispatch = useDispatch();
  return (
    <div className="App">
      {/* <h1>{count}</h1>
      <button onClick={() => dispatch(increment())}>increment</button>
      <button onClick={() => dispatch(decrement())}>decrement</button>
      <button onClick={() => dispatch(incrementByAmount(33))}>
        incrementByAmount
      </button> */}
      <UserView />
    </div>
  );
}

export default App;
