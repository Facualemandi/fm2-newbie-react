import Button from "./Button";
import React, { useState } from "react";
import "../Styles/InputsForm.css";

const InputsForm = ({
  exp,
  onValueName,
  setOnValueName,
  onValueSurname,
  setOnValueSurname,
  onValueEmail,
  setOnValueEmail,
  onValuePass,
  setOnValuePass,
  validoName,
  validoSurname,
  validoEmail,
  validoPass,
}) => {
  const onChangeName = (e) => {
    setOnValueName({ ...onValueName, campo: e.target.value });
  };
  const onChangeSurname = (e) => {
    setOnValueSurname({ ...onValueSurname, campo: e.target.value });
  };
  const onChangeEmail = (e) => {
    setOnValueEmail({ ...onValueEmail, campo: e.target.value });
  };
  const onChangePass = (e) => {
    setOnValuePass({ ...onValuePass, campo: e.target.value });
  };

  const verify = (e) => {
    if (exp.name) {
      e.preventDefault();

      if (exp.name.test(onValueName.campo)) {
        setOnValueName({ ...onValueName, valido: "true" });
      } else {
        setOnValueName({ ...onValueName, valido: "false" });
      }
    }
    if (exp.surname) {
      if (exp.surname.test(onValueSurname.campo)) {
        setOnValueSurname({ ...onValueSurname, valido: "true" });
      } else {
        setOnValueSurname({ ...onValueSurname, valido: "false" });
      }
    }
    if (exp.email) {
      if (exp.email.test(onValueEmail.campo)) {
        setOnValueEmail({ ...onValueEmail, valido: "true" });
      } else {
        setOnValueEmail({ ...onValueEmail, valido: "false" });
      }
    }
    if (exp.password) {
      if (exp.password.test(onValuePass.campo)) {
        setOnValuePass({ ...onValuePass, valido: "true" });
      } else {
        setOnValuePass({ ...onValuePass, valido: "false" });
      }
    }
  };

  return (
    <>
      <form className="form_container">
        <input
          onChange={onChangeName}
          value={onValueName.campo}
          type="text"
          placeholder="Enter Your Name"
        />
        {validoName === "true" && <p className="correct">Nombre Ingresado</p>}
        {validoName === "false" && <p className="incorrect">El nombre solo puede contener letras</p>}
        <input
          value={onValueSurname.campo}
          onChange={onChangeSurname}
          type="text"
          placeholder="Enter Your Surname"
        />
        {validoSurname === "true" && <p className="correct">Apellido Ingresado!</p>}
        {validoSurname === "false" && <p className="incorrect">El apellido solo puede contener letras</p>}
        <input
          value={onValueEmail.campo}
          onChange={onChangeEmail}
          type="email"
          placeholder="Enter Your Email Adress..."
        />
        {validoEmail === "true" && <p className="correct">  Email Ingresado! </p>}
        {validoEmail === "false" && <p className="incorrect">El Formato de Email es invalido.</p>}
        <input
          value={onValuePass.campo}
          onChange={onChangePass}
          type="password"
          placeholder="Enter Your Password"
        />
        {validoPass === "true" && <p className="correct">Password Ingresado!</p>}
        {validoPass === "false" && <p className="incorrect">Incorrecto</p>}

        <Button verifica={verify} />
      </form>
    </>
  );
};

export default InputsForm;
