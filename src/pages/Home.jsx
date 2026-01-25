import "../i18n";
import { useTranslation } from "react-i18next";
import "../styles/mycss.css";
import NavigationBar from "../components/NavigationBar";
import snowvideo from "../videos/snowvideo.mp4";

function Home () {
    const {t} = useTranslation();
    return (
        <>
            <NavigationBar/>
            <div class="cpane">
                <video class="introvid" muted autoPlay loop playsInline>
                    <source src={snowvideo} type="video/mp4"/>
                </video>
                <h1 class="titl">{t("appname")}</h1>
                <h2 class="stitl">{t("homesubt")}</h2>
                <p>{t("hometxt1")}</p>
                <h1 class="t1">{t("homet")}</h1>
                <p> {t("placeholder")} </p>
            </div>
        </>
    );
}

export default Home;