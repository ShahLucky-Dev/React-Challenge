import { useParams } from "react-router-dom";

function FoodDetail() {
  const { id } = useParams();

  return <h1>Food Id: {id}</h1>;
}

export default FoodDetail;
