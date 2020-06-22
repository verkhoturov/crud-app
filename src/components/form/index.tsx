import React from "react";
import { useHistory } from "react-router-dom";
import { useAtom } from "@reatom/react";
import { products } from "../../atoms";
import { Button } from "../common/buttons";
import Input from "../common/input";

const Form: React.FC<{
  productData?: {
    id: number | null;
    title: string;
    description: string;
    price: string;
  };
  closeForm?: () => void;
  save: (val: any) => void;
}> = ({ productData, save, closeForm }) => {
  const [id, setId] = React.useState<number | null>(null);
  const [title, setTitle] = React.useState<string>("");
  const [description, setDescription] = React.useState<string>("");
  const [price, setPrice] = React.useState<string>("");
  const data = useAtom(products);
  const history = useHistory();

  React.useEffect(() => {
    if (productData) {
      setId(productData.id);
      setTitle(productData.title);
      setDescription(productData.description);
      setPrice(productData.price);
    }
  }, []);

  const handleSubmit = React.useCallback(
    (e: React.MouseEvent) => {
      e.preventDefault();
      if (productData && closeForm) {
        save({ id, title, description, price });
        closeForm();
      } else {
        const lastId = data.map(item => item.id).sort()[data.length - 1];
        const id = lastId + 1; // new id
        save({ id, title, description, price });
        history.push(`/products`);
      }
    },
    [title, price, description]
  );

  return (
    <form>
      <Input
        type={"text"}
        title={"название"}
        onChange={(e) => setTitle(e.target.value)}
        value={title}
      />
      <Input
        type={"text"}
        title={"описание"}
        onChange={(e) => setDescription(e.target.value)}
        value={description}
      />
      <Input
        type={"text"}
        title={"стоимость"}
        onChange={(e) => setPrice(e.target.value)}
        value={price}
      />
      <Button onClick={handleSubmit}>Сохранить</Button>
    </form>
  );
};

export default Form;
