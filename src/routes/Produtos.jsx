import { Link } from "react-router-dom";
import { ListaProdutos } from "../components/ListaProdutos";
import classes from "./Produtos.module.css";
import {AiOutlineEdit as Editar} from "react-icons/ai";
import {BsTrash as Excluir} from "react-icons/bs"
import {MdOutlineAddBox as InserirProdutos} from 'react-icons/md'

export default function Produtos() {
  return (
    <div>
      <h1>Produtos de INFORMÁTICA</h1>
      <h3>Confira nossos produtos!</h3>

      <table className={classes.estilo}>
        <thead className={classes.tableHeaders}>
          <tr>
            <th>ID</th>
            <th>NOME</th>
            <th>DESCRIÇÃO</th>
            <th>PREÇO</th>
            <th>IMAGEM</th>
            <th>EDITAR</th>
          </tr>
        </thead> 

        <tbody>
          {ListaProdutos.map((produto, indice) => (
            <tr key={indice} className={classes.tableLine}>
              <td>{produto.id}</td>
              <td>{produto.nome}</td>
              <td>{produto.desc}</td>
              <td>{produto.preco}</td>
              <td><img src={produto.img} alt={produto.desc} /></td>
              <td>
                <Link to={`/editar/produtos/${produto.id}`}> <Editar/> </Link>  
                  | <Link to={`/excluir/produtos/${produto.id}`}> <Excluir/> </Link>
                    | <Link to={`/inserir/produtos/${produto.id}`}> <InserirProdutos/> </Link> 
              </td>
            </tr>
          ))}
        </tbody>

        <tfoot className={classes.tableFooter}>
          <tr>
            <td colSpan={6}>PRODUTOS</td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
}



 