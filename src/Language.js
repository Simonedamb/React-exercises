import React from "react";
import { DisplayLanguage } from "./DisplayLanguage";

const Strings = {
  en: { CURRENT_LANGUAGE: "THIS LANGUAGE IS ENGLISH" },
  it: { CURRENT_LANGUAGE: "QUESTA LINGUA E' ITALIANA" },
};

export class Language extends React.Component {
  render() {
    return (
      <div>
        <DisplayLanguage.Consumer>
          {(language) => {
            return (
              <h1 className="stringLanguage">
                {Strings[language].CURRENT_LANGUAGE}
              </h1>
            );
          }}
        </DisplayLanguage.Consumer>
      </div>
    );
  }
}
