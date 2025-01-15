import { input } from "../../styles/Input.module.css";
export default function Input({ text, Icon, placeholder, type }) {
  return (
    <div className={input}>
      <h2>
        {Icon && Icon}
        {text && text}
      </h2>
      <input type={type} placeholder={placeholder} />
    </div>
  );
}
