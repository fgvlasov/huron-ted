import { useMatchContext } from "../context/match";
import Appic__PageAccount from "../components/matches/01_appic/01__PageAccount";
import Caspr__PageAccount from "../components/matches/02_caspr/02__PageAccount";

export default function Account() {
  const [match, setMatch] = useMatchContext();
  switch (match) {
    case "appic":
      return <Appic__PageAccount />;
    case "caspr":
      return <Caspr__PageAccount />;
    default:
      return <Appic__PageAccount />;
  }
}
