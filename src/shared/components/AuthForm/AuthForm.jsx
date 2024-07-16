import { useId, useState } from "react";
import { Field, Formik, Form, ErrorMessage } from "formik";

import Icon from "../Icon/Icon";
import s from "./AuthForm.module.css";

const AuthForm = ({
  initialValues,
  handleSubmit,
  login = false,
  validation,
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const [showPasswordRepeat, setShowPasswordRepeat] = useState(false);
  const userId = useId();
  const emailId = useId();
  const passwordId = useId();
  const passwordRepeatId = useId();

  const formTitle = login ? "Авторизация" : "Регистрация";
  const submitBtn = login ? "Авторизоваться" : "Зарегистрироваться";
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
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={validation}
      >
        <Form className={s.form}>
          <p className={s.title}>{formTitle}</p>
          {!login && (
            <div className={s.fieldWrap}>
              <label htmlFor={userId} className={s.label}>
                Имя
              </label>
              <Field
                name="name"
                id={userId}
                className={s.input}
                placeholder="Кристина"
              ></Field>
              <ErrorMessage className={s.error} name="name" component="span" />
            </div>
          )}

          <div className={s.fieldWrap}>
            <label htmlFor={emailId} className={s.label}>
              Электронная почта
            </label>
            <Field
              type="email"
              name="email"
              placeholder="example@mail.ru"
              id={emailId}
              className={s.input}
            />
            <ErrorMessage name="email" component="span" className={s.error} />
          </div>

          <div className={s.fieldWrap}>
            <label htmlFor={passwordId} className={s.label}>
              Пароль
            </label>
            <Field
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Введите пароль..."
              id={passwordId}
              className={s.input}
            />
            <button
              type="button"
              onClick={toggleShowPassword}
              className={s.eyeBtn}
            >
              <Icon
                iconId={iconEyePass}
                width={24}
                height={24}
                className={s.iconEye}
              />
            </button>
            <ErrorMessage
              name="password"
              component="span"
              className={s.error}
            />
          </div>

          {!login && (
            <div className={s.fieldWrap}>
              <label htmlFor={passwordRepeatId} className={s.label}>
                Подтвердите пароль
              </label>
              <Field
                type={showPasswordRepeat ? "text" : "password"}
                name="passwordRepeat"
                id={passwordRepeatId}
                className={s.input}
                placeholder="Повторите пароль..."
              />
              <button
                type="button"
                onClick={toggleShowPasswordRepeat}
                className={s.eyeBtn}
              >
                <Icon
                  iconId={iconEyePassRepeat}
                  width={24}
                  height={24}
                  className={s.iconEye}
                />
              </button>
              <ErrorMessage
                className={s.error}
                name="passwordRepeat"
                component="span"
              />
            </div>
          )}

          <button className={s.submitBtn} type="submit">
            {submitBtn}
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default AuthForm;
