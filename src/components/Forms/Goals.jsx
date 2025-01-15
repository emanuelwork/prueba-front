import { useEffect, useState } from "react";
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
import { useFormStore } from "../../context/formContext";

export default function Goals({ setFormPage, setWelcomePage }) {
  useEffect(() => {
    setWelcomePage(2);
  }, []);

  const { data } = useFormStore();

  function handleContinue() {
    if (data.name && data.age && data.email && data.phone && data.location) {
      setFormPage(3);
    } else {
      alert("Por favor, rellena todos los campos");
    }
  }

  const [goal, setGoal] = useState(1);
  return (
    <section className={goals}>
      <h2>
        <AppleIcon />
        Objetivos
      </h2>

      <div>
        <Input
          formValue={"idealWeight"}
          text="¿Cuál es tu peso ideal?"
          placeholder="0.00 Kg"
          type="text"
        />
        <Input
          formValue={"height"}
          text="¿Cuánto mides?"
          placeholder="0 cm"
          type="text"
        />
        <Input
          formValue={"idealWeight"}
          text="¿Cuál es tu peso ideal?"
          placeholder="0.00 Kg"
          type="text"
        />
      </div>

      <div>
        <h2>¿Qué buscas al mejorar tu alimentación?</h2>
        <div>
          <ButtonCard
            active={goal === 1}
            onclick={() => setGoal(1)}
            text={"Pérdida de peso"}
            Icon={WeightScaleIcon}
          />

          <ButtonCard
            onclick={() => setGoal(2)}
            active={goal === 2}
            text={"Pérdida de peso"}
            Icon={FoodIcon}
          />

          <ButtonCard
            onclick={() => setGoal(3)}
            active={goal === 3}
            text={"Aumento de masa muscular"}
            Icon={GymIcon}
          />

          <ButtonCard
            onclick={() => setGoal(4)}
            active={goal === 4}
            text={"Control de enfermedades"}
            Icon={HealthIcon}
          />
        </div>
      </div>

      <div>
        <Input
          formValue={"minWeight"}
          text="¿Cuál ha sido tu peso mínimo en los últimos 5 años?"
          placeholder="0.00 Kg"
        />
        <Input
          formValue={"maxWeight"}
          text="¿Cuál ha sido tu peso máximo en los últimos 5 años?"
          placeholder="0.00 Kg"
        />
      </div>

      <div>
        <ButtonSave />
        <Button text={"Continuar"} action={handleContinue} />
      </div>
    </section>
  );
}
