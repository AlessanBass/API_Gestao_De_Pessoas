import axios from "axios"
import Link from "next/link";
import React, { useEffect, useState } from "react";
import styles from "../styles/h.module.css"

export default function Table(){
    const [pessoas, setPessoas] = useState(null);

    useEffect(() => {
        //Função para fazer a requisiação
        const buscaDados = async () => {
            try {
                const response = await axios.get('http://localhost:3000/pessoas');
                console.log(response.data)
                setPessoas(response.data);
            } catch (error) {
                console.log(error)
            }
        };

        buscaDados();
    }, [])

    return(
        <table className="table">
        <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">Nome</th>
                <th scope="col">E-mail</th>
                <th scope="col">Telefone</th>
                <th scope="col">Ações</th>
            </tr>
        </thead>
        <tbody>
        {pessoas && pessoas.map((pessoa, index) => (
                <tr key={index}>
                    <th scope="row">{index + 1}</th>
                    <td>{pessoa.nome}</td>
                    <td>{pessoa.email}</td>
                    <td>{pessoa.telefone}</td>
                    <td >
                        <Link className={`${styles.sepAcoes}`} href={`editepessoas/${pessoa.id_pessoa}`}>
                            <i className="fa-solid fa-pen-to-square"></i>
                        </Link>
                        <Link className={`${styles.sepAcoes}`} href={`editepessoas/${pessoa.id_pessoa}`}>
                            <i className="fa-solid fa-trash"></i>
                        </Link>
                        <Link href={`verpessoas/${pessoa.id_pessoa}`}>
                            <i className="fa-solid fa-eye"></i>
                        </Link>
                    </td>
                </tr>
            ))}
        </tbody>
    </table>
    )
}