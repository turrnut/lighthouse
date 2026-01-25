import "../i18n";
import { useTranslation } from "react-i18next";
import "../styles/mycss.css";
import NavigationBar from "../components/NavigationBar";

function Home () {
    const {t} = useTranslation();
    return (
        <>
            <NavigationBar/>
            <div class="cpane">
                <h1 class="titl">{t("appname")}</h1>
                <h2 class="stitl">{t("homesubt")}</h2>
            </div>
        </>
    );
}

export default Home;