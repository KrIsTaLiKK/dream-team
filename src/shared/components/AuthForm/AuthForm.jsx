import { useId, useState } from "react";
import { Field, Formik, Form, ErrorMessage } from "formik";
import Icon from "../Icon/Icon";
import AuthToggleText from "../AuthToggleText/AuthToggleText";
import s from "./AuthForm.module.scss";
import HomeBtn from "../HomeBtn/HomeBtn";

const AuthForm = ({
  initialValues,
  handleSubmit,
  isLoginForm = false,
  validation,
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const [showPasswordRepeat, setShowPasswordRepeat] = useState(false);
  const userId = useId();
  const emailId = useId();
  const passwordId = useId();
  const passwordRepeatId = useId();

  const formTitle = isLoginForm ? "Вход" : "Регистрация";
  const submitBtn = isLoginForm ? "Войти" : "Зарегистрироваться";
  const iconEyePass = showPassword ? "eye-open" : "eye-close";
  const iconEyePassRepeat = showPasswordRepeat ? "eye-open" : "eye-close";

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const toggleShowPasswordRepeat = () => {
    setShowPasswordRepeat(!showPasswordRepeat);
  };

  return (
    <div className={s.wrap}>
      <HomeBtn isAuthenticated={false} />
      <div className={s.authform}>
        <Formik
          initialValues={initialValues}
          onSubmit={handleSubmit}
          validationSchema={validation}
        >
          <Form className={s.authform__form}>
            <p className={s.authform__title}>{formTitle}</p>
            {!isLoginForm && (
              <div className={s.authform__field}>
                <label htmlFor={userId} className={s.authform__label}>
                  Имя
                </label>
                <Field
                  name="name"
                  id={userId}
                  className={s.authform__input}
                  placeholder="Кристина"
                ></Field>
                <ErrorMessage
                  className={s.authform__error}
                  name="name"
                  component="span"
                />
              </div>
            )}

            <div className={s.authform__field}>
              <label htmlFor={emailId} className={s.authform__label}>
                Электронная почта
              </label>
              <Field
                type="email"
                name="email"
                placeholder="example@mail.ru"
                id={emailId}
                className={s.authform__input}
              />
              <ErrorMessage
                name="email"
                component="span"
                className={s.authform__error}
              />
            </div>

            <div className={s.authform__field}>
              <label htmlFor={passwordId} className={s.authform__label}>
                Пароль
              </label>
              <Field
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Введите пароль..."
                id={passwordId}
                className={s.authform__input}
              />
              <button
                type="button"
                onClick={toggleShowPassword}
                className={s.authform__eyeBtn}
              >
                <Icon
                  iconId={iconEyePass}
                  width={24}
                  height={24}
                  className={s.authform__iconEye}
                />
              </button>
              <ErrorMessage
                name="password"
                component="span"
                className={s.authform__error}
              />
            </div>

            {!isLoginForm && (
              <div className={s.authform__field}>
                <label htmlFor={passwordRepeatId} className={s.authform__label}>
                  Подтвердите пароль
                </label>
                <Field
                  type={showPasswordRepeat ? "text" : "password"}
                  name="passwordRepeat"
                  id={passwordRepeatId}
                  className={s.authform__input}
                  placeholder="Повторите пароль..."
                />
                <button
                  type="button"
                  onClick={toggleShowPasswordRepeat}
                  className={s.authform__eyeBtn}
                >
                  <Icon
                    iconId={iconEyePassRepeat}
                    width={24}
                    height={24}
                    className={s.authform__iconEye}
                  />
                </button>
                <ErrorMessage
                  className={s.authform__error}
                  name="passwordRepeat"
                  component="span"
                />
              </div>
            )}

            <button className={s.authform__submitBtn} type="submit">
              {submitBtn}
            </button>
          </Form>
        </Formik>
        <AuthToggleText isLoginForm={isLoginForm} />
      </div>
    </div>
  );
};

export default AuthForm;
