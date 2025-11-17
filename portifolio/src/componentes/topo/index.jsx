"use client"

import { use, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import estilos from "./topo.module.css";
import iconeLua from "/public/moon.png";
import iconeSol from "/public/sun.png";
import { CiMenuBurger } from "react-icons/ci";
import { MdClose } from "react-icons/md";

export default function Topo({ ehTemaEscuro, acao_onclick }) {
    const [menuAberto, setMenuAberto] = useState(false);

    function alternarMenu() {
        setMenuAberto(!menuAberto);
    }
    return (
        <header className={ehTemaEscuro ? estilos.topo_modo_escuro : estilos.topo_modo_claro}>

            {/* Menu Telas menores */}
            <nav className={estilos.navegacao}>
                <ul className={estilos.menu}>
                    <li><Link href="/" className={estilos.menu_link}>Inicio</Link></li>
                    <li><Link href="/sobre" className={estilos.menu_link}>Sobre</Link></li>
                    <li><Link href="/projetos" className={estilos.menu_link}>Projetos</Link></li>
                    <li><Link href="/contato" className={estilos.menu_link}>contato</Link></li>
                </ul>
            </nav>

            <p className={estilos.paragrafo_mobile}>Portifólio</p> {/* Frase que aparecerá no topo em telas menores */}

            {/*Botão Menu(Telas menores) - Alternação */}
            <button className={estilos.menu_celular} onClick={alternarMenu}>
                {menuAberto ? <MdClose /> : <CiMenuBurger />}
            </button>

            {/*Menu em telas menores */}
            {menuAberto && (
                <nav className={estilos.menu_mobile}>
                    <Link href="/" onClick={alternarMenu}>Inicio</Link>
                    <Link href="/sobre" onClick={alternarMenu}>Sobre</Link>
                    <Link href="/projetos" onClick={alternarMenu}>Projetos</Link>
                    <Link href="/contato" onClick={alternarMenu}>Contato</Link>
                    <button onClick={acao_onclick} className={estilos.botao}>
                        <Image
                            className={estilos.icones}
                            src={ehTemaEscuro ? iconeLua : iconeSol}
                            alt="Icone"
                            title={ehTemaEscuro ? "Tema Escuro" : "Tema claro"}
                        />
                    </button>
                </nav>
            )}
            <button onClick={acao_onclick} className={estilos.botao_desktop}>
                <Image
                    className={estilos.icones}
                    src={ehTemaEscuro ? iconeLua : iconeSol}
                    alt="Icone"
                    title={ehTemaEscuro ? "Tema escuro" : "Tema claro"}
                />
            </button>
        </header>
    )
}