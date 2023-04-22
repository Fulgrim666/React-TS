import {useState, useEffect} from "react";
import { IProducts } from "../models";
import axios, {AxiosError} from "axios";

export function useProducts () {
    const [product, setProducts] = useState<IProducts[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
  
    function addProduct (product:IProducts) {
      setProducts(prev => [...prev, product])
    }
    async function fetchProducts() {
      try {
        setError("");
        setLoading(true);
        const response = await axios.get<IProducts[]>(
          "https://fakestoreapi.com/products?limit=5"
        );
        setProducts(response.data);
        setLoading(false);
      } catch (e: unknown) {
        const error = e as AxiosError;
        setLoading(false);
        setError(error.message);
      }
    }
    useEffect(() => {
      fetchProducts();
    }, []);
return {product, loading, error, addProduct}
}