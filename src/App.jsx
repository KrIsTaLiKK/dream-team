import { Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";
import { useRefreshUserQuery } from "./redux/auth/authApi";
import PrivateRoute from "./PrivateRoute";
import RestrictedRoute from "./RestrictedRoute";
import Layout from "./components/Layout/Layout";
import ToasterComponent from "./shared/components/ToasterComponent/ToasterComponent";
import Loader from "./shared/components/Loader/Loader";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";

const HomePage = lazy(() => import("./pages/HomePage/HomePage"));
const RegisterPage = lazy(() => import("./pages/RegisterPage/RegisterPage"));
const LoginPage = lazy(() => import("./pages/LoginPage/LoginPage"));
const UsersPage = lazy(() => import("./pages/UsersPage/UsersPage"));
const UserDetailsPage = lazy(() =>
  import("./pages/UserDetailsPage/UserDetailsPage")
);

const App = () => {
  const { isRefreshing } = useRefreshUserQuery();

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
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
      <ToasterComponent />
    </>
  );
};

export default App;
