import React from "react";
import {API} from "../../extra/API";
import MainHeaderSection from "../header/MainHeaderSection";
import Breadcrumbs from "./Breadcrumbs";
import Loader from "./Loader";
import Pagination from "../loop/Pagination";
import LoopSearchPostsContainer from "../loop/LoopSearchPostsContainer";

const PaginatedExhibitionPage = props => {
    const container = React.useRef(null);
    const breadcrumb = props.page.breadcrumb;
    const [data, setData] = React.useState(null);
    const [filters, setFilters] = React.useState({page: 0});

    React.useEffect(() => {
        API.getByConfig(props.page.acf.field_exhibitions, {page: filters.page}).then(res => {
            setData(res.data);
        }).catch(err => {
            console.error(err);
            setData(false);
        });
    }, [filters]);
    const onPageChange = page => {
        setFilters({...filters, page});
        window.scrollTo({top: container.current.getBoundingClientRect().top + window.scrollY});
    };

    return (
        <>
            {!props.hideHeader && (
                <MainHeaderSection extra_classes={props.headerClasses}>
                    <Breadcrumbs breadcrumbs={breadcrumb}/>
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

export default PaginatedExhibitionPage;
