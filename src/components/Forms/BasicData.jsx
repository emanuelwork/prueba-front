import { useEffect } from "react";

import { useFormStore } from "../../context/formContext";

import { basicData } from "../../styles/BasicData.module.css";
import { CakeIcon } from "../icons/CakeIcon";
import { LocationIcon } from "../icons/LocationIcon";
import { MailIcon } from "../icons/MailIcon";
import { PhoneIcon } from "../icons/PhoneIcon";
import { UserIcon } from "../icons/UserIcon";
import Button from "../shared/Button";

import Input from "../shared/Input";

export default function BasicData({ setFormPage, setWelcomePage }) {
  useEffect(() => {
    setWelcomePage(1);
  }, []);

  const { data } = useFormStore();

  function handleContinue() {
    if (data.name && data.age && data.email && data.phone && data.location) {
      setFormPage(2);
    } else {
      alert("Por favor, rellena todos los campos");
    }
  }

  return (
    <div className={basicData}>
      <h1>Para comenzar, ayúdanos a verificar tus datos.</h1>

      {/* Name and age */}
      <div>
        <Input
          formValue={"name"}
          text="Nombre"
          placeholder="Nombre y apellidos"
          Icon={<UserIcon />}
          type="text"
        />
        <Input
          formValue={"age"}
          text="Edad"
          placeholder="Ingrese tu edad en años"
          Icon={<CakeIcon />}
          type="text"
        />
      </div>
      <div>
        {/* Email and phone */}
        <Input
          formValue={"email"}
          text="Correo electrónico"
          placeholder="Correo electrónico"
          Icon={<MailIcon />}
          type="email"
        />

        <Input
          formValue={"phone"}
          text="Teléfono celular"
          placeholder="Número de teléfono y código"
          Icon={<PhoneIcon />}
          type="tel"
        />
      </div>

      <Input
        formValue={"location"}
        text="Lugar de trabajo"
        placeholder=""
        Icon={<LocationIcon />}
      />

      <Button text={"Continuar"} action={handleContinue} />
    </div>
  );
}
