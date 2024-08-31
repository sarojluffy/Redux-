import { createSlice } from "@reduxjs/toolkit";
const userSl = createSlice({
  //components have camelcase. functions have small letter
  name: "user",
  initialState: [],
  reducers: {
    adduser(state, action) {
      // this state means the state of only this slice,
      //  arko useselector ma use vakostate chai whole store ko
      // slice ko state ra tesma hune action (action.payload0)
      state.push(action.payload);
      console.log(action.payload);
    },
    removeuser(state, action) {
      console.log(action.payload);
      state.splice(action.payload, 1);
    },
    deleteuser(state, action) {
      state.length = 0;
    },
  },
});
console.log(userSl.actions);
export const { adduser, removeuser, deleteuser } = userSl.actions;
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
