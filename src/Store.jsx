import { configureStore } from "@reduxjs/toolkit";
import userSl from "./counterSlice";

const store = configureStore({
  // either export here or use export { store };  down at the code
  reducer: {
    // all the reducer(functions) of the slices reside here
    user: userSl, //user is one of the slice
  },
});
export { store };
// import { configureStore } from "@reduxjs/toolkit";
// import UserSl from "./counterSlice";

// const Store = configureStore({
//   reducer: {
//     use: UserSl,
//   },
// });
// export default Store;
