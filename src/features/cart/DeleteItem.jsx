import { useDispatch } from "react-redux";
import Button from "../../ui/Button";
import { delateItem } from "./cartSlice";

function DeleteItem({ pizzaId }) {
  const dispatch = useDispatch();

  return (
    <Button type="small" onClick={() => dispatch(delateItem(pizzaId))}>
      Delete
    </Button>
  );
}

export default DeleteItem;
