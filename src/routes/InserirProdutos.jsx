import { useNavigate} from "react-router-dom";
import { ListaProdutos } from "../components/ListaProdutos"
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

    return (
        <div>
            <h2>Inserindo Produtos</h2>
            <h4>Exercício - Checkpoint 2</h4>
            <form onSubmit={handleInserir}>
                <fieldset>
                    <legend>Produto a ser Inserido</legend>
                    <div>
                        <label htmlFor="idNome">Nome:</label>
                        <input
                            type="text"
                            name="nome"
                            id="idNome"
                            value={produto.nome}
                            onChange={handleChange}
                        />
                    </div>

                    <div>
                        <label htmlFor="idDesc">Descrição:</label>
                        <input
                            type="text"
                            name="desc"
                            id="idDesc"
                            value={produto.desc}
                            onChange={handleChange}
                        />
                    </div>

                    <div>
                        <label htmlFor="idPreco">Preço:</label>
                        <input
                            type="text"
                            name="preco"
                            id="idPreco"
                            value={produto.preco}
                            onChange={handleChange}
                        />
                    </div>

                    <div>
                        <button type="submit">Adicionar</button>
                    </div>
                </fieldset>
            </form>

            <table id="taskTable">
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Descrição</th>
                        <th>Preço</th>
                    </tr>
                </thead>
                <tbody>
                    {produtos.map((produto, index) => (
                        <tr key={index}>
                            <td>{produto.nome}</td>
                            <td>{produto.desc}</td>
                            <td>{produto.preco}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}