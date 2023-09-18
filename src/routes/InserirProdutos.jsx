import { useNavigate} from "react-router-dom";
import React, { useState } from "react";

export default function InserirProdutos() {
    const navigate = useNavigate();

    const [produto, setProdutos] = useState({
        id: "",
        nome: "",
        desc: "",
        preco: "",
    });

    const [produtos, setProduto] = useState([]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProdutos({ ...produto, [name]: value });
    };
    const handleInserir = (event) => {
        event.preventDefault();

        if (produto.nome && produto.desc && produto.preco) {
            event.preventDefault();
            
            ListaProdutos.push(produto)

            navigate("/produtos")
        }
    };
}