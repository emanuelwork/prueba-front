import { buttonSave } from "../../styles/ButtonSave.module.css";
import { DiskIcon } from "../icons/DiskIcon";

export default function ButtonSave() {
  return (
    <button className={buttonSave}>
      Deseo continuar después,{" "}
      <span>
        <DiskIcon height={16} width={16} />
        Guardar mi avance
      </span>
    </button>
  );
}
