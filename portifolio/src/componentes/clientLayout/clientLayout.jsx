"use client";

import { useState, useEffect } from "react";
import Topo from "@/componentes/topo";

export default function ClientLayout({ children }) {
  const [temaEscuro, setTemaEscuro] = useState(false);

  function alternarTema() {
    setTemaEscuro(!temaEscuro);
  }

  // Adiciona a classe no <body>
  useEffect(() => {
    if (temaEscuro) {
      document.body.classList.add("escuro");
    } else {
      document.body.classList.remove("escuro");
    }
  }, [temaEscuro]);

  return (
    <>
      <Topo acao_onclick={alternarTema} ehTemaEscuro={temaEscuro} />
      {children}
    </>
  );
}
