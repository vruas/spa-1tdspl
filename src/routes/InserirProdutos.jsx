import { useState } from "react";
import { ListaProdutos } from "../components/ListaProdutos";

export default function InserirProdutos() {
    document.title = 'Inserir Produto';

    const [produtoId, setProdutoId] = useState(second)
    useState [produto, setProduto] = useState({
        id: 0,
        nome: "",
        desc: "",
        preco: 0.0,
        img:""

    });





  return (
    <div>
        <h1>InserirProdutos</h1>
        <div>
            <form>
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
