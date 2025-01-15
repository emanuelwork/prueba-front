import { welcome } from "../styles/Welcome.module.css";
export default function Welcome({ page }) {
  return page === 1 ? (
    <section className={welcome}>
      <img src="/src/assets/avatar.jpg" alt="avatar" />
      <h1>
        <span>¡Bienvenida</span> Oscar Adan!
      </h1>
    </section>
  ) : (
    <section className={welcome}>
      <img src="/src/assets/avatar.jpg" alt="avatar" />
      <h1>
        <span>¡Bienvenida</span> Oscar Adan!
      </h1>
    </section>
  );
}
