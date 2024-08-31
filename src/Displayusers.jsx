import { useSelector } from "react-redux";

const Display = () => {
  const selector = useSelector((state) => {
    //access to the global state (sabai vako state)ko store
    return state.user; //store ma cha  user slice
  });

  console.log(selector);
  return (
    <>
      {selector.map((abc, index) => {
        <div key={index}>{abc}</div>;
      })}
    </>
  );
};

export default Display;
