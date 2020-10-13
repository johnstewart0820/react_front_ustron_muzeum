import React from "react";
import {API} from "../../extra/API";
import MainHeaderSection from "../header/MainHeaderSection";
import Breadcrumbs from "./Breadcrumbs";
import Loader from "./Loader";
import Pagination from "../loop/Pagination";
import LoopSearchPostsContainer from "../loop/LoopSearchPostsContainer";
import { main_url } from "../../extra/main_menu";


const PaginatedSearchPage = props => {
    const container = React.useRef(null);
    const [data, setData] = React.useState(null);
    const [filters, setFilters] = React.useState({page: 0});
    React.useEffect(() => {
        console.log('a');
        setData(null);
        API.getPosts({
            query: props.page.match.params.id,
            domain: window.document.domain
        }).then(res => {
            setData(res.data);
        });
    }, [props.page.match.params.id, filters]);
    const onPageChange = page => {
        setFilters({...filters, page});
        window.scrollTo({top: container.current.getBoundingClientRect().top + window.scrollY});
    };

    return (
        <>
            {!props.hideHeader && (
                <MainHeaderSection extra_classes={props.headerClasses}>
                    <Breadcrumbs breadcrumbs={[{label: "Start", href: main_url},{label: "Muzeum Ustroński", to: "/"}, {label: "Szukaj"}]} needOperate = {false}/>
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

export default PaginatedSearchPage;
