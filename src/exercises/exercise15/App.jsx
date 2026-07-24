import { useState } from "react";
import Greeting from "./exercises/exercise15/Greeting";
import LanguageContext from "./exercises/exercise15/LanguageContext";

const App = () => {
  const [language, setLanguage] = useState ("en");

  const toggleLang = () => {
    setLanguage((prevLang) => (prevLang === 'en' ? 'es' : 'en'));
  }
  return (
    <LanguageContext.Provider value={language}>
      <button onClick={toggleLang}> switch to {language==="en" ? "Spanish" : "English"}</button>
      <Greeting/>
    </LanguageContext.Provider>
  );
}


export default App;
