import React, {useState, useEffect} from 'react';
import MainHeaderSection from "../components/header/MainHeaderSection";
import OneCarouseInRow from "../components/carousel/OneCarouseInRow";
import Breadcrumbs from "../components/general/Breadcrumbs";
import PostSingleHead from "../components/posts/PostSingleHead";
import LoopEventPost from "../components/events/LoopEventPost";
import Gallery from "../components/gallery/Gallery";
import Attachment from "../components/attachment/Attachment";
import {API} from "../extra/API";

export default function PostSinglePage(props) {
    const breadcrumb = props.page.breadcrumb;
    const [events, setEvents] = React.useState(null);
    React.useEffect(() => {
        API.getEntities({categories: props.page.categories}).then(res => setEvents(res.data.contents));
    }, []);
    console.log(props.page.gallery);
    return (
        <>
            <MainHeaderSection extra_classes="single">
                <Breadcrumbs breadcrumbs={breadcrumb}/>
            </MainHeaderSection>
            <PostSingleHead data={props.page}/>
            {!!props.page.gallery?.length && <Gallery items={props.page.gallery}/>}
            {!!props.page.attachments?.length && <Attachment items={props.page.attachments}/>}
            {events !== false && (
                <OneCarouseInRow carousel={{
                    loading: events === null,
                    sub_heading: 'Galeria',
                    heading: 'SKANSEN',
                    ItemComponent: LoopEventPost,
                    items: events || [],
                }}/>
            )}
        </>
    );
};