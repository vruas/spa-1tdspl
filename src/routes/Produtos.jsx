import { Link } from "react-router-dom";
import { ListaProdutos } from "../components/ListaProdutos";
import classes from "./Produtos.module.css";
import {AiFillEdit as Editar} from "react-icons/ai";
import {RiDeleteBin2Fill as Excluir} from "react-icons/ri";
import { useEffect, useState } from "react";

export default function Produtos() {

  const [counter, setCounter] = useState(0);
  document.title = "Lista de Produtos: " + counter;

  
  return (
    <div>
      <h1>Produtos de INFORMÁTICA - FIPAPI</h1>
      <p>Os Melhores Produtos do Mercado</p>


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
                <Link to={`/editar/produtos/${produto.id}`}> <Editar/></Link> | <Link to={`/excluir/produtos/${produto.id}`}> <Excluir/> </Link>
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
  // useEffect(()=>{
      //   console.log("Este useEffect renderiza sempre que ocorre alguma atualização no componente!");
      // });
    
      // const [listaProdutosLocal, setListaProdutosLocal] = useState([{}]);
    
      // useEffect(()=>{
      //   console.log("Este useEffect renderiza apenas uma vez no carregamento do componente!");
      // },[]);
      
      // const [counter2, setCounter2] = useState(0);
    
      // useEffect(()=>{
      //   console.log("Este useEffect renderiza apenas se o objeto/elemento/componente e ou variável sofrer uma atualização. Devemos colocar o item a ser monitorado no array de dependências: [ ]");
      // },[counter2]);
}
        {/* <div>
          <button onClick={()=> setCounter(counter + 1)}>COUNTER - {counter}</button>
        </div>
        <div>
          <button onClick={()=> setCounter2(counter2 + 1)}>COUNTER2 - {counter2}</button>
        </div> */}