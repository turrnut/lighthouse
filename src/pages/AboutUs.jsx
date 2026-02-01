import "../i18n";
import { useTranslation } from "react-i18next";
import "../styles/mycss.css";
import { Routes, Route } from "react-router-dom";
import NavigationBar from "../components/NavigationBar";

function AboutUs () {
    const {t} = useTranslation();
    return (
        <>
            <NavigationBar/>
            <div class="cpane">
                <h1 class="titl">{t("about")}</h1>
                <h2 class="stitl">{t("aboutsubt")}</h2>

                <h1 class="t1"> {t("aboutt")}</h1>
                <p> {t("email")}: <a href="mailto:turrnut@gmail.com">turrnut@gmail.com</a></p>
            </div>
        </>
    );
}

export default AboutUs;