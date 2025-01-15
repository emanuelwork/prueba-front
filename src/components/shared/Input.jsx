import { input } from "../../styles/Input.module.css";
import { useFormStore } from "../../context/formContext";

export default function Input({ text, Icon, placeholder, type, formValue }) {
  const { data, setData } = useFormStore();

  return (
    <div className={input}>
      <h2>
        {Icon && Icon}
        {text && text}
      </h2>
      <input
        type={type}
        placeholder={placeholder}
        defaultValue={data[formValue]}
        onChange={(e) => {
          if (e.target.value.length > 0)
            setData({ ...data, [formValue]: e.target.value });
        }}
      />
    </div>
  );
}
