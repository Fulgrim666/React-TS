import React, { useState } from "react";
import { IProducts } from "../models";

interface ProductProps {
  product: IProducts;
}

export function Product(props: ProductProps) {
  const [description, setDescription] = useState(false);

  const bntClassName = description ? "bg-yellow-400" : "bg-blue-400";

  const btnClasses = ["py-2 px-4 border", bntClassName];

  return (
    <div className="border py-2 px-4 rounded flex flex-col items-center mb-2">
      Product
      {props.product.title}
      <img
        src={props.product.image}
        className="w-1/6"
        alt={props.product.title}
      />
      <p> {props.product.title}</p>
      <span className="font-bold">{props.product.price}</span>
      <button
        className={btnClasses.join(" ")}
        onClick={() => setDescription((prev) => !prev)}
      >
        {description ? "Hide Details" : "Show Details"}
      </button>
      {description && (
        <div>
          <p>{props.product.description}</p>
          <p>
            Rate:{" "}
            <span style={{ fontWeight: "bold" }}>
              {props.product?.rating?.rate}
            </span>
          </p>
        </div>
      )}
    </div>
  );
}
