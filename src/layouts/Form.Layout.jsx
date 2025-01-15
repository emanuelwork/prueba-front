import { formLayout } from "../styles/FormLayout.module.css";
export default function FormLayout({ children }) {
  return <form className={formLayout}>{children}</form>;
}
