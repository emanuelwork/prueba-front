import { useEffect, useRef } from "react";
import {
  medicalHistory,
  medicalHistoryCheckList,
  medicationInput,
} from "../../styles/MedicalHistory.module.css";

import { ClipIcon } from "../icons/ClipIcon";

import Button from "../shared/Button";
import ButtonSave from "../shared/ButtonSave";
import Input from "../shared/Input";
import SelectModal from "../shared/SelectModal";

export default function MedicalHistory({ setFormPage, setWelcomePage }) {
  useEffect(() => {
    setWelcomePage(3);
  }, []);
  const fileInputRef = useRef(null);

  return (
    <section className={medicalHistory}>
      <h2>Historial médico</h2>{" "}
      <div>
        <SelectModal
          text="¿Padeces alguna enfermedad o afectación médica?"
          value="medicalHistory"
        >
          <div className={medicalHistoryCheckList}>
            <h3>Selecciona</h3>
            <ul>
              <li>
                <label>
                  <input type="checkbox" /> Diabetes
                </label>
              </li>
              <li>
                <label>
                  <input type="checkbox" /> Enfermedades del corazón
                </label>
              </li>
              <li>
                <label>
                  <input type="checkbox" /> Enfermedades gastrointestinales
                </label>
              </li>
              <li>
                <label>
                  <input type="checkbox" /> Enfermedades renales
                </label>
              </li>
              <li>
                <label>
                  <input type="checkbox" /> Cancer
                </label>
              </li>
              <li>
                <label>
                  <input type="checkbox" /> Otra
                </label>
              </li>
            </ul>
          </div>
        </SelectModal>

        <SelectModal text="¿Tienes alguna alergia?" value="allergy">
          <Input type="text" placeholder="Escribe aquí tus alergias" />
        </SelectModal>

        <SelectModal text="¿Te han hecho alguna cirugía?" value="surgery">
          <Input
            type="text"
            placeholder="¿A qué procedimiento quirúrgico te has sometido?"
          />
        </SelectModal>
      </div>
      <div>
        <SelectModal text="¿Has hecho dieta para bajar de peso?" value="diet" />
        <SelectModal
          text="¿Has tomado medicamentos para bajar de peso?"
          value="medication"
        />
        <SelectModal
          text="¿Has tomado tratamientos reductivos anteriormente?"
          value="reduction"
        >
          <div>
            <Input type="text" placeholder="ej. Cavitación" />
            <Input type="text" placeholder="ej. 6 meses" />
          </div>
        </SelectModal>
      </div>
      <div>
        <SelectModal
          text="¿Utilizas algún suplemento o tomas vitaminas de manera regular?"
          value="supplement"
        >
          <Input
            type="text"
            text="¿Cuál?"
            placeholder="¿Te has realizado estudios médicos recientes?"
          />
        </SelectModal>
        <SelectModal
          text="¿Te has realizado estudios médicos recientes?"
          value="medicalHistory"
        >
          <Input
            type="text"
            text="¿Qué tipo de estudio médico?"
            placeholder="ej. Química Sanguinea, Hemoglobina, etc."
          />
          <input
            ref={fileInputRef}
            className={medicationInput}
            type="file"
            name="medicationInput"
          />
          <label onClick={() => fileInputRef.current.click()}>
            <ClipIcon width={16} height={16} /> Adjuntar archivo
          </label>
        </SelectModal>
      </div>
      <div>
        <ButtonSave />
        <Button text={"Continuar"} action={() => setFormPage(1)} />
      </div>
    </section>
  );
}
