import React from "react";
import {API} from "../../extra/API";
import {getArticleLink} from "../../extra/functions";
import MainHeaderSection from "../header/MainHeaderSection";
import Breadcrumbs from "./Breadcrumbs";
import Loader from "./Loader";
import Pagination from "../loop/Pagination";
import LoopSearchPostsContainer from "../loop/LoopSearchPostsContainer";

const PaginatedNewsPage = props => {
    const container = React.useRef(null);
    const [data, setData] = React.useState(null);
    const [filters, setFilters] = React.useState({page: 0});

    React.useEffect(() => {
        setData(null);
        const categories = props.page.acf.field_news_museum_categories.map((item, key) => (item.id));
        API.getPosts({
            categories: categories,
            page: filters.page,
        }).then(res => {
            setData(res.data);
        }).catch(err => {
            console.error(err);
            setData(false);
        });
    }, [props.config, filters]);

    const onPageChange = page => {
        setFilters({...filters, page});
        window.scrollTo({top: container.current.getBoundingClientRect().top + window.scrollY});
    };

    return (
        <>
            {!props.hideHeader && (
                <MainHeaderSection extra_classes={props.headerClasses}>
                    <Breadcrumbs breadcrumbs={props.breadcrumbs || [
                        {label: "Muzeum Ustroński", to: "/"},
                        {label: props.page.title},
                    ]}/>
                </MainHeaderSection>
            )}

            {data === null && <Loader/>}

            {!!data?.contents && (
                <> 
                    <LoopSearchPostsContainer
                        onRef={el => container.current = el}
                        extra_classes={props.containerClasses}
                    >
                        {data.contents.map(post => <props.itemComponent key={post.id} {...post} />)}         
                        <Pagination
                            active_page={data.pages.currentPage}
                            total_amount={data.pages.pageCount}
                            pageChangeCallback={onPageChange}
                        />
                    </LoopSearchPostsContainer>
                </>
            )}
        </>
    );
};

export default PaginatedNewsPage;
