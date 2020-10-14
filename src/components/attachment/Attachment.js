import React, {Component} from 'react';
import PropTypes from "prop-types";

import AttachmentItem from "./AttachmentItem";
import ExpandedAttachment from "./ExpandedAttachment";
import OneCarouselInRow from "../carousel/OneCarouseInRow";
import Axios from 'axios';

export default class Attachment extends Component {

    static propTypes = {
        items: PropTypes.array.isRequired,
        heading: PropTypes.string,
    }

    constructor(props) {
        super(props);

        this.state = {
            expanded: false,
            active_photo: 0,
        }
    }


    itemClick = (item_index) => {
        const link = document.createElement('a');
        const url = this.props.items[item_index].name;
        link.href = url;
        link.setAttribute('download', url.split('/')[url.split('/').length - 1]);
        link.setAttribute('target', '_blank');
        document.body.appendChild(link);
        link.click();
        // setTimeout(() => {
        //     const response = {
        //       file: this.props.items[item_index].name,
        //     };
        //     window.open(response.file);
        //   }, 100);
    };


    closeExpanded = () => this.setState({expanded: false});


    render() {

        if (!this.props.items || !this.props.items.length) return null;

        const {expanded, active_photo} = this.state;
        const items = this.props.items.map((item, index) => ({...item, index, onClick: this.itemClick}));

        const carousel = {
            items,
            extra_classes: "arrows-on-right",
            heading: this.props.heading || "przywiązanie",
            ItemComponent: AttachmentItem,
        };

        const expanded_attachment = {items, active_photo, closeHandler: this.closeExpanded};

        return (
            <div className="attachment">
                <OneCarouselInRow loading={false} carousel={carousel}/>

                {expanded &&
                <ExpandedAttachment {...expanded_attachment} />
                }
            </div>
        )
    }
};