import { useNavigate, useParams } from "react-router-dom";
import style from "./ExcluirProdutos.module.css";
import "./ExcluirProdutos.scss";
import { useEffect, useState } from "react";

export default function ExcluirProdutos() {
  document.title = "Excluir Produtos";

  const navigate = useNavigate();

  // Receber o ID do produto pelo HOOK useParams( );
  const { id } = useParams();

  const [listaProdutoExterno, setListaProdutoExterno] = useState([]);
  const [prod, setProd] = useState(null);

 

  return (
    <>
      <div>
        <h1>Excluir Produtos</h1>

        {prod && (
          <div className={style.card}>
            <h2>Produto Selecionado</h2>
            <figure>
              <img src={prod.img} alt={prod.desc} title={prod.desc} />
              <figcaption>
                {prod.nome} - <span>R$ </span>
                {prod.preco}
              </figcaption>
            </figure>
            <div className={style.btn}>
              <button >EXCLUIR</button>
              <button onClick={() => navigate("/produtos")}>CANCELAR</button>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

