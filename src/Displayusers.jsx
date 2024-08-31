import { useSelector } from "react-redux";

import { useDispatch } from "react-redux";
import { removeuser } from "./counterSlice";

const Display = () => {
  const dispatch = useDispatch(); //removeuser ko dispatch
  const selector = useSelector((state) => {
    //access to the global state (sabai vako state)ko store
    return state.user; //user slice store ma vako
  });
  const del = (indx) => {
    dispatch(removeuser(indx));
  };
  console.log(selector);
  return (
    <>
      {selector.map((abc, index) => {
        return (
          <>
            <div key={index}>
              {abc}
              {/* <button onClick={del(index)}>del {index}</button>; */}
              <button
                onClick={() => {
                  del(index);
                }}
              >
                del {index}
              </button>
            </div>
            ;
          </>
        );
      })}
    </>
  );
};

export default Display;
