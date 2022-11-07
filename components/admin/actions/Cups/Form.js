import { useSelector } from "react-redux";
import AddProducts from "../../AddProducts";
import UpdateProducts from "../../UpdateProducts";

export default function Form() {
  const visible = useSelector((state) => state.app.client.toggleForm);
  console.log(visible);
  return <div>{visible ? <AddProducts /> : <UpdateProducts />}</div>;
}
