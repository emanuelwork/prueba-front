import { useState } from "react";

import { selectModal } from "../../styles/SelectModal.module.css";

export default function SelectModal({ children, text, value }) {
  const [enabled, setEnabled] = useState(false);

  return (
    <div className={selectModal}>
      <div>{text}</div>
      <div>
        <span>
          <input
            type="radio"
            id={value + "-yes"}
            name={value}
            onClick={() => {
              setEnabled(true);
            }}
          />
          <label htmlFor={value + "-yes"}>Sí</label>
        </span>

        <span>
          <input
            type="radio"
            id={value + "-no"}
            name={value}
            onClick={() => setEnabled(false)}
          />
          <label htmlFor={value + "-no"}>No</label>
        </span>
      </div>

      {enabled && children}
    </div>
  );
}
