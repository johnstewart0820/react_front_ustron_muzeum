import React from "react";
import PageHeaderSection from "../components/header/PageHeaderSection";
import MainHeaderSection from "../components/header/MainHeaderSection";
import Breadcrumbs from "../components/general/Breadcrumbs";
import {Link} from "react-router-dom";
import Utils from "../utils/Locale";
import { main_url } from "../extra/main_menu";

export default function ErrorPage({error}) {
    const locale = Utils.getLocale();
    return (
        <MainHeaderSection>
            <Breadcrumbs breadcrumbs={[{label: "Start", href: main_url},{label: "Muzeum Ustroński", to: "/"}, {label: "500"}]} needOperate = {false}/>
            <PageHeaderSection extra_classes="not-found-page" noDefaultImage>
                <div className="background-error">
                    <div className="page-title">
                        500<br/>
                        <p>
                            {error || 'Wystąpił nieoczekiwany błąd. Proszę spróbować ponownie za chwilę'}
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
};
