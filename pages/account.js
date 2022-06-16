import { useMatchContext } from "../context/match";
import Appic__PageAccount from "../components/matches/01_appic/01__PageAccount";
import Caspr__PageAccount from "../components/matches/02_caspr/02__PageAccount";

export default function Account() {
  const [match, setMatch] = useMatchContext();
  switch (match) {
    case "_01_appic":
      return <Appic__PageAccount match="_01_appic" />;
    case "_02_caspr":
      return <Caspr__PageAccount match="_02_caspr" />;
    default:
      return <Appic__PageAccount match="_01_appic" />;
  }
}
