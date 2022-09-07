
import PerformanceFactory from "../Factories/PerformanceFactory";
import { useFetch } from "../utils/useFetch";
import { useParams } from "react-router";

function Activities() {
  const { id } = useParams();
  const userId = { id }.id;
  const url = "http://localhost:3000/user/" + userId + "/performance";

  const [data, isLoading, error] = useFetch(url, PerformanceFactory, "api");

  return JSON.stringify(data);
}

export default Activities;