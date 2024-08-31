import { createSlice } from "@reduxjs/toolkit";
const userSl = createSlice({
  //components have camelcase. functions have small letter
  name: "user",
  initialState: [],
  reducers: {
    adduser(state, action) {
      state.push(action.payload);
      console.log(action.payload);
    },
    removeuser(state, action) {},
    deleteuser(state, action) {},
  },
});
console.log(userSl.actions);
export const { adduser } = userSl.actions;
export default userSl.reducer;

// import { createSlice } from "@reduxjs/toolkit";

// export const userSI = createSlice({
//   name: "counter",
//   initialState: 0,
//   reducers: {
//     adduser(state, action) {
//       //       state.push(action.payload);
//     },
//     removeuser(state, action) {},
//     deleteuser(state, action) {},
//   },
// });

// export const { adduser, removeuser, deleteuser } = userSI.actions;

// export default userSI.reducer;
