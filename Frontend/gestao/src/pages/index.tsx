import Image from "next/image";
import { Inter } from "next/font/google";
import Header from "../componentes/Header"
import Table from "@/componentes/Table";
import Modal from "@/componentes/Modal";
import { useState } from "react";

export default function Home() {
  const [modalOpen, setModalOpen] = useState(false);
  
  return (
    <div>
      <Header descricaoPagina = "Pagina Inicial"/>
      <Table/>
      <div>
            {/* <button onClick={() => setModalOpen(true)}>Abrir Modal</button> */}
            <Modal isOpen={modalOpen} onClose={() => setModalOpen(false)}>
                <h1>Conteúdo do Modal</h1>
                <p>Este é um exemplo de modal em Next.js.</p>
            </Modal>
        </div>
    </div>
    
  );
}
