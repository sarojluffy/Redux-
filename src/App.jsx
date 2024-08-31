import Chance from "chance";
import { useDispatch } from "react-redux";
import { adduser } from "./counterSlice";
import Display from "./Displayusers";

function App() {
  const chance = Chance();
  const dispatch = useDispatch(); //sends the data to the the store
  const abc = () => {
    dispatch(adduser(chance.name({ suffix: true })));
  };

  return (
    <>
      <button onClick={abc}>increase</button>
      <Display />

      <br></br>
      <br></br>

      <div>
        <button>decrease</button>
      </div>
    </>
  );
}

export default App;
