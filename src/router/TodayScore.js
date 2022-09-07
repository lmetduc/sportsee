import UserFactory from "../Factories/UserFactory";
import { useFetch } from "../utils/useFetch";
import { useParams } from "react-router";

function TodayScore() {
  const { id } = useParams();
  const userId = { id }.id;
  const url = "http://localhost:3000/user/" + userId;

  const [userData, isLoading, error] = useFetch(url, UserFactory, "user");

  return JSON.stringify(userData._todayScore);
}

export default TodayScore;