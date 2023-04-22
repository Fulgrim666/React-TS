import { Loader } from "../components/loader";
import { Product } from "../components/products";
import { useProducts } from "../huks/products";
import { Error } from "../components/error";
import { Modal } from "../components/modal";
import { CreateProduct } from "../components/createProduct";
import { useContext } from "react";
import { IProducts } from "../models";
import { ModalContext } from "../context/modalContext";

export function ProductPage() {
  const { loading, error, product, addProduct } = useProducts();
  const { modal, open, close } = useContext(ModalContext);

  const createHendler = (product: IProducts) => {
    close();
    addProduct(product);
  };

  return (
    <div className="container mx-auto max-w-2xl pt-5">
      {loading && <Loader />}
      {error && <Error error={error} />}
      {product.map((product) => (
        <Product product={product} key={product.id} />
      ))}
      {modal && (
        <Modal title="Create new product" onClose={() => close()}>
          <CreateProduct onCreate={createHendler} />
        </Modal>
      )}
      <button
        className="fixed bottom-4 right-5 rounded-full bg-red-700 text-white text-2xl px-4 py-2"
        onClick={() => open()}
      >
        +
      </button>
    </div>
  );
}
