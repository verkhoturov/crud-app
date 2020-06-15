import React from "react";
import { Button } from "../common/buttons";
import Input from "../common/input";

const Form: React.FC<{
  titleUpdate?: string;
  descriptionUpdate?: string;
  priceUpdate?: string;
}> = ({ titleUpdate, descriptionUpdate, priceUpdate }) => {
  const [title, setTitle] = React.useState<string>("");
  const [description, setDescription] = React.useState<string>("");
  const [price, setPrice] = React.useState<string>("");

  React.useEffect(() => {
    if (titleUpdate) {
      setTitle(titleUpdate);
    }
    if (descriptionUpdate) {
      setDescription(descriptionUpdate);
    }
    if (priceUpdate) {
      setPrice(priceUpdate);
    }
  }, []);

  const handleSubmit = React.useCallback(
    (e: React.MouseEvent) => {
      e.preventDefault();
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
