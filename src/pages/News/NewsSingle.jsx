import React from 'react';
import MainHeaderSection from "../../components/header/MainHeaderSection";
import OneCarouseInRow from "../../components/carousel/OneCarouseInRow";
import Breadcrumbs from "../../components/general/Breadcrumbs";
import NewsSingleHead from "../../components/news/NewsSingleHead";
import LoopNewsPost from "../../components/news/LoopNewsPost";
import Gallery from "../../components/gallery/Gallery";
import Attachment from "../../components/attachment/Attachment";
import {API} from "../../extra/API";

export default function NewsSinglePage(props) {
    const [news, setNews] = React.useState(null);
    const breadcrumb = props.page.breadcrumb;
    React.useEffect(() => {
        API.getEntities({categories: props.page.categories})
            .then(res => setNews(res.data.contents))
            .catch(e => {
                console.error(e);
                setNews(false);
            });
    }, []);
    console.log(props.page.gallery);
    return (
        <>
            <MainHeaderSection extra_classes="single">
                <Breadcrumbs breadcrumbs={breadcrumb}/>
            </MainHeaderSection>
            <NewsSingleHead {...props.page}/>
            {!!props.page.gallery?.length && <Gallery items={props.page.gallery}/>}
            {!!props.page.attachments?.length && <Attachment items={props.page.attachments}/>}
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