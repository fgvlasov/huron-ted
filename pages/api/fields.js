import { default_000__preset_value } from "../../public/default_000__preset_value";

export default function handler(req, res) {
  res.status(200).json(default_000__preset_values);
}
