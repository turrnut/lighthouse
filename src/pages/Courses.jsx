import "../i18n";
import { useTranslation } from "react-i18next";
import "../styles/mycss.css";
import { Routes, Route } from "react-router-dom";
import NavigationBar from "../components/NavigationBar";

function Courses () {
    const {t} = useTranslation();
    return (
        <>
            <NavigationBar/>
            <div class="cpane">
                <h1 class="titl">{t("courses")}</h1>
                <h2 class="stitl"></h2>
            </div>
        </>
    );
}

export default Courses;