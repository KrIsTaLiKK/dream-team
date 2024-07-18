import { Route, Routes } from "react-router-dom";
import { lazy, Suspense, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useAuthSelectors } from "./hooks/index";
import { refreshUser } from "./redux/auth/operations";
import PrivateRoute from "./PrivateRoute";
import RestrictedRoute from "./RestrictedRoute";
import Layout from "./components/Layout/Layout";
import ToasterComponent from "./shared/components/ToasterComponent/ToasterComponent";
import Loader from "./shared/components/Loader/Loader";

const HomePage = lazy(() => import("./pages/HomePage/HomePage"));
const RegisterPage = lazy(() => import("./pages/RegisterPage/RegisterPage"));
const LoginPage = lazy(() => import("./pages/LoginPage/LoginPage"));
const UsersPage = lazy(() => import("./pages/UsersPage/UsersPage"));
const UserDetailsPage = lazy(() =>
  import("./pages/UserDetailsPage/UserDetailsPage")
);

const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuthSelectors();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <Loader />
  ) : (
    <>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route
            path="/register"
            element={
              <RestrictedRoute
                redirectTo="/users"
                component={<RegisterPage />}
              />
            }
          />
          <Route
            path="/login"
            element={
              <RestrictedRoute redirectTo="/users" component={<LoginPage />} />
            }
          />
          <Route element={<Layout />}>
            <Route
              path="/"
              element={
                <RestrictedRoute redirectTo="/users" component={<HomePage />} />
              }
            />
            <Route
              path="/users"
              element={
                <PrivateRoute redirectTo="/login" component={<UsersPage />} />
              }
            />
            <Route path="/users/:userId" element={<UserDetailsPage />} />
            {/* <Route
              path="/users/:userId"
              element={
                <PrivateRoute
                  redirectTo="/login"
                  component={<UserDetailsPage />}
                />
              }
            /> */}
          </Route>
        </Routes>
      </Suspense>
      <ToasterComponent />
    </>
  );
};

export default App;
