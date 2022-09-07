
import AverageSessionsFactory from "../Factories/AverageSessionsFactory";

import { useFetch } from "../utils/useFetch";
import { useParams } from "react-router";

function AverageSessions() {
  const { id } = useParams();
  const userId = { id }.id;
  const url = "http://localhost:3000/user/" + userId + "/average-sessions";

  const [data, isLoading, error] = useFetch(url, AverageSessionsFactory, "api");

  return JSON.stringify(data._sessions);
}

export default AverageSessions;