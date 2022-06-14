import { useMatchContext } from "../context/match";
import Appic__PageAccount from "../components/1_appic/1__PageAccount";
import Caspr__PageAccount from "../components/2_caspr/2__PageAccount";

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
