import Chance from "chance";
import { useDispatch } from "react-redux";
import { adduser, deleteuser } from "./counterSlice";
import Display from "./Displayusers";

function App() {
  const chance = Chance();
  const dispatch = useDispatch(); //sends the data to the the store
  const abc = () => {
    dispatch(adduser(chance.name({ suffix: true }))); //dispatch send data to the store
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

      <div>
        <button
          onClick={() => {
            dispatch(deleteuser());
          }}
        >
          delete all{" "}
        </button>
      </div>
    </>
  );
}

export default App;
