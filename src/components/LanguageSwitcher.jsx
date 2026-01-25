import "../i18n";
import { useTranslation } from "react-i18next";

function App() {
  const { i18n } = useTranslation();

  const isZh = i18n.language.startsWith("zh");

  const toggleLanguage = () => {
    i18n.changeLanguage(isZh ? "en" : "zh");
  };

  return (
    <button class="lswitch" onClick={toggleLanguage}>
      {isZh ? "English 🌎" : "中文 🌏"}
    </button>
  );
}

export default App;
