import { useContext } from "react";
import { DisplayLanguage } from "./DisplayLanguage";

const strings = {
  en: { CURRENT_LANGUAGE: "THIS LANGUAGE IS: " },
  it: { CURRENT_LANGUAGE: "QUESTA LINGUA E': " },
};

export const Language = () => {
  const language = useContext(DisplayLanguage);

  return (
    <h3>
      {strings[language].CURRENT_LANGUAGE}
      {language}
    </h3>
  );
};
