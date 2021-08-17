import React, { Component } from 'react';
import PropTypes from "prop-types";

import ExpandedGalleryItem from "./ExpandedGalleryItem";
import CloseButton from "../buttons/CloseButton";
import Angle from '../../svg/components/Angle';

export default class Onegallery extends Component{

	static propTypes = {
		item: PropTypes.object,
		closeHandler: PropTypes.func.isRequired
	}

	constructor(props){
		super(props);
	}

	render(){

		const { item, closeHandler } = this.props;

		if( !item ) return null;

		return(
			<div className="expanded-gallery">
				<CloseButton onClick={ closeHandler } />

				<div className="expanded-gallery__items">
					<ExpandedGalleryItem {...item } active={ true } />
				</div>
			</div>
		)
	}
};