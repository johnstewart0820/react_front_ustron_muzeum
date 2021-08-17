import React from "react";
import {useLocation} from "react-router-dom";

export default function ScrollToTop({children}) {
    const location = useLocation();
    // Scroll to top if path changes
    React.useLayoutEffect(() => {
        window.scrollTo({
            top:0,
            behavior: "smooth"
        });
    }, [location.pathname]);

    return children;
};
