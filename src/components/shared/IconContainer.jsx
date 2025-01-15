import {
  iconContainerActive,
  iconContainerDisabled,
} from "../../styles/IconContainer.module.css";
export default function IconContainer({ children, active }) {
  return active ? (
    <div className={iconContainerActive}>{children}</div>
  ) : (
    <div className={iconContainerDisabled}>{children}</div>
  );
}
