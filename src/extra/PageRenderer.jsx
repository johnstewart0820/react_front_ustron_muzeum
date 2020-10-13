import React from "react";
import {useParams} from "react-router-dom";
import SiteInfoContext from "../constants/SiteInfoContext";
import {API} from "./API";
import Loader from "../components/general/Loader";
import Layouts from "../constants/PageList";
import NotFoundPage from "../pages/NotFoundPage";

export default function PageRenderer(props) {
    const {locale, slug, id} = useParams();
    const siteInfo = React.useContext(SiteInfoContext).site_info;
    const [pageData, setPageData] = React.useState(null);

    React.useEffect(() => {
        if (slug === 'search') {
            setPageData({post_type: 'search', query: id});
            return;
        }
        if (!locale || !siteInfo.languages.split(',').includes(locale)) {
            /* show 404 if invalid locale */
            setPageData(false);
            return;
        }

        if (!slug) {
            // no page id/slug = home page
            setPageData(siteInfo.default_content);
            return;
        }
        
        API.getPost(slug)
            .then(res => {
                setPageData(res.data.content);
            })
            .catch(e => {
                setPageData(false);
            });
    }, [locale, slug, siteInfo.default_content?.id]);

    // null while loading
    if (pageData === null)
        return <Loader/>;

    // 404 if no page found in DB
    if (!pageData)
        return <NotFoundPage/>;

    let layoutValue;
    if (pageData.post_type === 'search')
        layoutValue = 'search';
    else if (pageData.post_type === 'news')
        layoutValue = 'news_single';
    else if (pageData.post_type === 'events')
        layoutValue = 'events_single';
    else if (pageData.post_type === 'post')
        layoutValue = 'post_single';
    else if (pageData.post_type === 'gallery')
        layoutValue = 'post_single';
    else
        layoutValue = pageData.acf['field_layout'];
    const Layout = Layouts[layoutValue];

    if (!Layout) {
        console.error(`Could not render layout [${layoutValue}]`);
        return <NotFoundPage/>;
    }

    return <Layout {...props} page={pageData} />;
}
