import React from "react";
import SingleItem from "./SingleItem";
import { Link } from "react-router-dom";

// a função recebe como parâmetro o objeto "props"
const ItemList = ({ title, items, itemsArray, path, idPath }) => {
  // desestruturação: a variável "title" vai armazenar o valor da variável de mesmo nome do objeto "props"

  // console.log("title: ", title);
  // console.log("items: ", items);

  return (
    <div className="item-list"> {/* lista de itens */} {/* bloco/componente */}
      <div className="item-list__header"> {/* elemento do bloco item-list */}
        <h2>{title} populares</h2>
        <Link to={path} className="item-list__link">
          Mostrar tudo
        </Link>
      </div>
      <div className="item-list__container">
        {itemsArray
          .filter((currentObj, index) => index < items)
          .map((currentObj, index) => (
            <SingleItem
              // id={currentObj.id}
              // image={currentObj.image}
              // name={currentObj.name}
              // banner={currentObj.banner}
              {...currentObj} // o Spread Operator vai passar o objeto, com todas as chaves
              idPath={idPath}
              key={`${title}-${index}`}
            />
          ))}
      </div>
    </div>
  );
};

export default ItemList;
