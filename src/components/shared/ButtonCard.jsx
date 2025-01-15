import {
  buttonCardActive,
  buttonCardDisabled,
} from "../../styles/ButtonCard.module.css";

export default function ButtonCard({ text, Icon, active, onclick }) {
  return active ? (
    <button className={buttonCardActive} onClick={onclick}>
      {Icon && <Icon />}
      {text}
    </button>
  ) : (
    <button className={buttonCardDisabled} onClick={onclick}>
      {Icon && <Icon />}
      {text}
    </button>
  );
}
