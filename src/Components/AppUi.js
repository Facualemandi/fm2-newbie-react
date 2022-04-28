import React, { useState } from "react";
import LearnCode from "./LearnCode";
import Free from "./Free";
import Content from "./Content";
import InputsForm from "./InputsForm";


const expresiones = {
  name: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
  surname: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
  email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
  password: /^.{4,12}$/, // 4 a 12 digitos.
};


const AppUi = () => {

  const [onValueName, setOnValueName] = useState({ campo: "", valido: null });
  const [onValueSurname, setOnValueSurname] = useState({ campo: "", valido: null });
  const [onValueEmail, setOnValueEmail] = useState({ campo: "", valido: null });
  const [onValuePass, setOnValuePass] = useState({ campo: "", valido: null });

  


  return (
    <>
      <main className="main">
        <section>
          <LearnCode />
        </section>
        <section>
          <Free />
          <Content>
            <InputsForm 
            exp={expresiones}
            onValueName={onValueName}
            setOnValueName={setOnValueName}

            onValueSurname={onValueSurname}
            setOnValueSurname={setOnValueSurname}

            onValueEmail={onValueEmail}
            setOnValueEmail={setOnValueEmail}

            onValuePass={onValuePass}
            setOnValuePass={setOnValuePass}
            
            validoName={onValueName.valido}
            validoSurname={onValueSurname.valido}
            validoEmail={onValueEmail.valido}
            validoPass={onValuePass.valido}

            />
          </Content>
        </section>
      </main>
    </>
  );
};

export default AppUi;
