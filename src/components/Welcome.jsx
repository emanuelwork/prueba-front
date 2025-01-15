import { welcome, welcomeInfo } from "../styles/Welcome.module.css";
import { AppleIcon } from "./icons/AppleIcon";
import { CalendarIcon } from "./icons/CalendarIcon";
import { ClockIcon } from "./icons/ClockIcon";
import { FoodIcon } from "./icons/FoodIcon";
import { HealthIcon } from "./icons/HealthIcon";
import IconContainer from "./shared/IconContainer";
export default function Welcome({ page }) {
  return page === 1 ? (
    <section className={welcome}>
      <img src="/src/assets/avatar.jpg" alt="avatar" />
      <h1>
        <span>¡Bienvenida</span> Oscar Adan!
      </h1>
    </section>
  ) : (
    <section className={welcomeInfo}>
      <div>
        <div>
          <img src="/src/assets/avatar.jpg" alt="avatar" />
          <div>
            <h1>Nutrición</h1>
            <h2>Hola, Oscar Adan</h2>
            <p>
              Para brindarte una mejor atención, contesta las siguientes
              preguntas. La información es confidencial y esencial para crear tu
              perfil y que recibas la mejor atención.
            </p>
          </div>
        </div>
        <div>
          <IconContainer active={page === 2}>
            <AppleIcon color="#434142" />
          </IconContainer>
          <p>···</p>
          <IconContainer active={page === 3}>
            <HealthIcon />
          </IconContainer>
          <p>···</p>
          <IconContainer active={false}>
            <FoodIcon />
          </IconContainer>
          <p>···</p>
          <IconContainer active={false}>
            <ClockIcon />
          </IconContainer>
          <p>···</p>
          <IconContainer active={false}>
            <CalendarIcon />
          </IconContainer>
        </div>
      </div>
    </section>
  );
}
