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
}