import { basicData } from "../../styles/BasicData.module.css";

import { CakeIcon } from "../icons/CakeIcon";
import { LocationIcon } from "../icons/LocationIcon";
import { MailIcon } from "../icons/MailIcon";
import { PhoneIcon } from "../icons/PhoneIcon";
import { UserIcon } from "../icons/UserIcon";
import Button from "../shared/Button";

import Input from "../shared/Input";

export default function BasicData({ setFormPage }) {
  return (
    <div className={basicData}>
      <h1>Para comenzar, ayúdanos a verificar tus datos.</h1>

      {/* Name and age */}
      <div>
        <Input
          text="Nombre"
          placeholder="Nombre y apellidos"
          Icon={<UserIcon />}
          type="text"
        />
        <Input
          text="Edad"
          placeholder="Ingrese tu edad en años"
          Icon={<CakeIcon />}
          type="text"
        />
      </div>
      <div>
        {/* Email and phone */}
        <Input
          text="Correo electrónico"
          placeholder="Correo electrónico"
          Icon={<MailIcon />}
          type="email"
        />

        <Input
          text="Teléfono celular"
          placeholder="Número de teléfono y código"
          Icon={<PhoneIcon />}
          type="tel"
        />
      </div>

      <Input text="Lugar de trabajo" placeholder="" Icon={<LocationIcon />} />

      <Button text={"Continuar"} action={() => setFormPage(2)} />
    </div>
  );
}
