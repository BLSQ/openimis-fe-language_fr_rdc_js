import messages_fr from "./translations/fr.json";
import flatten from "flat";

const DEFAULT_CONFIG = {
  "translations": [{ key: 'fr', messages: flatten(messages_fr) }],
}

export const LanguageFrRdcModule = (cfg) => {
  return { ...DEFAULT_CONFIG, ...cfg };
}
