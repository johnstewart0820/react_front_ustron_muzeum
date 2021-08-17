import React, { Component } from 'react';
import PropTypes from "prop-types";

import { isFunction } from '../../extra/functions';

export default class LoopSearchPostsContainer extends Component{

	static propTypes = {}
	
	state = {
		extra_classes:PropTypes.string,
	}


	componentDidMount(){

		const { onRef } = this.props;
		if ( isFunction( onRef ) ) onRef( this.section ); 
	}

	render(){

		const { extra_classes, children } = this.props;

		return(
			<section 
				ref={ (el) => this.section = el } 
				className={`loop-search-posts-container ${ extra_classes || "" }`} 
			>
				<div className="container">
					<div className="row">

						{ children }

					</div>
				</div>
			</section>
		)
	}
};