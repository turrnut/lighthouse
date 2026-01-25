import "../i18n";
import { useTranslation } from "react-i18next";
import "../styles/mycss.css";
import LanguageSwitcher from "./LanguageSwitcher";
import { Link } from "react-router-dom";
import { useState } from "react";

function NavigationBar () {

    const { t } = useTranslation();
    const [collapsed, setCollapsed] = useState(false);

    const Collapse = () => {
        setCollapsed(prev => !prev);
    };

    return (
        <ul className="navul">
            {/* Logo (always visible) */}
            <li className="navli">
                <img
                    id="logo"
                    className="nava"
                    src="../../favicon.ico"
                    onClick={Collapse}
                    style={{ cursor: "pointer" }}
                    alt="logo"
                />
            </li>

            {/* Everything that should hide/show */}
            {!collapsed && (
                <>
                    <li className="navli">
                        <Link className="nava" to="/">{t("navb1")}</Link>
                    </li>
                    <li className="navli">
                        <Link className="nava" to="/courses">{t("navb2")}</Link>
                    </li>
                    <li className="navli">
                        <Link className="nava" to="/stdres">{t("navb3")}</Link>
                    </li>
                    <li className="navli">
                        <Link className="nava" to="/about">{t("navb4")}</Link>
                    </li>
                </>
            )}

            {/* Language switcher (always visible) */}
            <li className="navlilswitch">
                <LanguageSwitcher />
            </li>
        </ul>
    );
}

export default NavigationBar;

