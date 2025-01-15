import { button } from "../../styles/Button.module.css";
export default function Button({ text, action }) {
  return (
    <button className={button} onClick={action}>
      {text}
    </button>
  );
}
