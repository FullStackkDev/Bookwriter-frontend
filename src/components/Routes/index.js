import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../../screens/home";
import SignIn from "../../screens/signIn";
import SignUp from "../../screens/signUp";
import Books from "../../screens/books";
import Settings from "../../pages/Settings";
import ProtectedRoute from "../ProtectedRoutes";
import Page404 from "../../screens/Page404";
import Book from "../../screens/book";

const AppRoutes = ({ isAuthenticated }) => {
  return (
    <Routes>
      <>
        <Route
          exact
          path="/signin"
          element={
            <ProtectedRoute
              isAuthenticated={isAuthenticated}
              path="/signin"
              element={<SignIn />}
            />
          }
        />
        <Route
          exact
          path="/signup"
          element={
            <ProtectedRoute
              isAuthenticated={isAuthenticated}
              path="/signup"
              element={<SignUp />}
            />
          }
        />

        <Route
          exact
          path="/"
          element={
            <ProtectedRoute
              isAuthenticated={isAuthenticated}
              path="/"
              element={<Home />}
              redirectPath="/signin"
            />
          }
        />
        <Route
          exact
          path="/books"
          element={
            <ProtectedRoute
              isAuthenticated={isAuthenticated}
              path="/books"
              element={<Books />}
              redirectPath="/signin"
            />
          }
        />
        <Route
          exact
          path="/settings"
          element={
            <ProtectedRoute
              isAuthenticated={isAuthenticated}
              path="/settings"
              element={<Settings />}
              redirectPath="/signin"
            />
          }
        />
        <Route
          exact
          path="/book/:id"
          element={
            <ProtectedRoute
              isAuthenticated={isAuthenticated}
              path="/book/:id"
              element={<Book />}
              redirectPath="/signin"
            />
          }
        />
        <Route path="*" element={<Page404 />} />
      </>
    </Routes>
  );
};

export default AppRoutes;
