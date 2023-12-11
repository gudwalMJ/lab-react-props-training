import React from "react";

function Greetings(props) {
  const { lang, children } = props;

  const getGreeting = (lang) => {
    switch (lang) {
      case "de":
        return "Hallo";
      case "en":
        return "Hello";
      case "es":
        return "Hola";
      case "fr":
        return "Bonjour";
      default:
        return "Hello";
    }
  };

  return (
    <div>
      <p>
        {getGreeting(lang)} {children}
      </p>
    </div>
  );
}

export default Greetings;
