import {
  buttonCardActive,
  buttonCardDisabled,
} from "../../styles/ButtonCard.module.css";

export default function ButtonCard({ text, Icon, active }) {
  return active ? (
    <button className={buttonCardActive}>
      {Icon && <Icon />}
      {text}
    </button>
  ) : (
    <button className={buttonCardDisabled}>
      {Icon && <Icon />}
      {text}
    </button>
  );
}
