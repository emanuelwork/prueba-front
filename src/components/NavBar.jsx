import {navBar} from "../styles/Navbar.module.css"
import { ExitIcon } from "./icons/ExitIcon";
import logo from "../assets/logo.png"

export default function Navbar() {
  return (
    <nav className={navBar}>
      <ul >
        <li><img src={logo} alt="logotipo" height={34} /></li>
        <li>Nutrición</li>
        <li ><button >Salir <ExitIcon color="#868589" /></button></li>
      </ul>
    </nav>
  )
}