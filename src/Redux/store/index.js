import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import authSlice from "./authSlice";
import bookSlice from "./bookSlice";

export default configureStore({
  reducer: {
    user: userSlice.reducer,
    auth: authSlice.reducer,
    books: bookSlice.reducer,
  },
});
