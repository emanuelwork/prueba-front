import { goals } from "../../styles/Goals.module.css";

import Button from "../shared/Button";
import ButtonCard from "../shared/ButtonCard";
import Input from "../shared/Input";

import { AppleIcon } from "../icons/AppleIcon";

import { FoodIcon } from "../icons/FoodIcon";
import { GymIcon } from "../icons/GymIcon";
import { HealthIcon } from "../icons/HealthIcon";
import { WeightScaleIcon } from "../icons/WeightScaleIcon";
import ButtonSave from "../shared/ButtonSave";

export default function Goals({ setFormPage }) {
  return (
    <section className={goals}>
      <h2>
        <AppleIcon />
        Objetivos
      </h2>

      <div>
        <Input
          text="¿Cuál es tu peso ideal?"
          placeholder="0.00 Kg"
          type="text"
        />
        <Input text="¿Cuánto mides?" placeholder="0 cm" type="text" />
        <Input
          text="¿Cuál es tu peso ideal?"
          placeholder="0.00 Kg"
          type="text"
        />
      </div>

      <div>
        <h2>¿Qué buscas al mejorar tu alimentación?</h2>
        <div>
          <ButtonCard
            active={true}
            text={"Pérdida de peso"}
            Icon={WeightScaleIcon}
          />

          <ButtonCard text={"Pérdida de peso"} Icon={FoodIcon} />

          <ButtonCard text={"Aumento de masa muscular"} Icon={GymIcon} />

          <ButtonCard text={"Control de enfermedades"} Icon={HealthIcon} />
        </div>
      </div>

      <div>
        <Input
          text="¿Cuál ha sido tu peso mínimo en los últimos 5 años?"
          placeholder="0.00 Kg"
        />
        <Input
          text="¿Cuál ha sido tu peso máximo en los últimos 5 años?"
          placeholder="0.00 Kg"
        />
      </div>

      <div>
        <ButtonSave />
        <Button text={"Continuar"} action={() => setFormPage(3)} />
      </div>
    </section>
  );
}
