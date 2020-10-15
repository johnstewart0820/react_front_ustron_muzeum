import React from "react";
import PageHeaderSection from "../components/header/PageHeaderSection";
import MainHeaderSection from "../components/header/MainHeaderSection";
import Breadcrumbs from "../components/general/Breadcrumbs";
import {Link} from "react-router-dom";
import Utils from "../utils/Locale";
import { main_url } from "../extra/main_menu";
import DefaultImage from '../img/forest.jpg';
export default function NotFoundPage() {
    const locale = Utils.getLocale();
    return (
        <MainHeaderSection>
            <Breadcrumbs breadcrumbs={[{label: "Start", href: main_url},{label: "Muzeum Ustroński", to: "/"}, {label: "404"}]} needOperate = {false}/>
            <PageHeaderSection extra_classes="not-found-page" noDefaultImage>
                <div className="background-error" style={{backgroundImage:`url(${DefaultImage})`}}>
                    <div className="page-title">
                        404<br/>
                        <p>
                            Strona o podanym adresie nie została znaleziona
                        </p>
                        <Link
                            className="button-link green full-width mt-4"
                            to={`/${locale}`}
                        >
                            wróc na glowną
                        </Link>
                    </div>
                </div>
            </PageHeaderSection>
        </MainHeaderSection>
    );
}
