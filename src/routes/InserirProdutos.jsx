import { useState } from "react";
import { ListaProdutos } from "../components/ListaProdutos";
import { useNavigate } from "react-router-dom";

export default function InserirProdutos() {
    document.title = 'Inserir Produto';
    const navigate = useNavigate();

    const [produtoId, setProdutoId] = useState(second)
    useState [produto, setProduto] = useState({
        id: 0,
        nome: "",
        desc: "",
        preco: 0.0,
        img:""

    });

    const handleChange = (e)=>{
        e.preventDefault();
        const {name, value} = e.target;
        setProduto({...produto, [name]: value});
    }

    const handleSubmit = (e)=>{
        e.preventDefault();
        setProdutoId(ListaProdutos[ListaProdutos.length-1].id + 1);
        setProduto({...produto, [id]:produtoId})

        alert("Produto cadastrado com sucesso...");
        navigate("/produtos")
    };





  return (
    <div>
        <h1>InserirProdutos</h1>
        <div>
            <form onSubmit={handleSubmit}>
                <fieldset>
                    <legend>Cadastrar Produto</legend>
                    <div>
                        <label htmlFor="idNome">Nome:</label>
                        <input type="text" name="nome" id="idNome" value={produto.nome} />
                    </div>
                    <div>
                        <label htmlFor="idDesc">Descrição:</label>
                        <input type="text" name="desc" id="idDesc" value={produto.desc} />
                    </div>
                    <div>
                        <label htmlFor="idPreco">Preço:</label>
                        <input type="number" name="preco" id="idPreco" value={produto.preco} />
                    </div>
                    <div>
                        <label htmlFor="idImg">Nome:</label>
                        <input type="url" name="nome" id="idImg" value={produto.img} />
                    </div>
                    <div>
                        <button>Cadastrar</button>
                    </div>
                </fieldset>
            </form>
        </div>

    </div>
  )
}
