import React from 'react';
import MainHeaderSection from "../../components/header/MainHeaderSection";
import OneCarouseInRow from "../../components/carousel/OneCarouseInRow";
import Breadcrumbs from "../../components/general/Breadcrumbs";
import NewsSingleHead from "../../components/news/NewsSingleHead";
import LoopNewsPost from "../../components/news/LoopNewsPost";
import {API} from "../../extra/API";

export default function NewsSinglePage(props) {
    const [news, setNews] = React.useState(null);

    React.useEffect(() => {
        API.getEntities({categories: props.page.categories})
            .then(res => setNews(res.data.contents))
            .catch(e => {
                console.error(e);
                setNews(false);
            });
    }, []);

    return (
        <>
            <MainHeaderSection extra_classes="single">
                <Breadcrumbs breadcrumbs={[]}/>
            </MainHeaderSection>
            <NewsSingleHead {...props.page}/>

            {news !== false && (
                <OneCarouseInRow carousel={{
                    loading: news === null,
                    heading: 'Ostatnie aktualności',
                    ItemComponent: LoopNewsPost,
                    items: news || [],
                }}/>
            )}
        </>
    );
};