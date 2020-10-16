import React, { useState, useEffect, Component } from 'react';
import PropTypes from 'prop-types';
import moment from "moment";
import LinkToAll from "../buttons/LinkToAll";
import Arrows from '../buttons/Arrows';
import SectionHeading from "../general/SectionHeading";
import HeadingDate from "../buttons/HeadingDate";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock, faSortUp } from "@fortawesome/free-solid-svg-icons";

export default class Carousel extends Component{

	static propTypes = {
		heading: PropTypes.string,
		items: PropTypes.array.isRequired,
		extra_classes: PropTypes.string,
		ItemComponent: PropTypes.elementType.isRequired,
		path_to_all:PropTypes.string,
		link_to_all:PropTypes.string,
		selectedDate: PropTypes.object,
	};
	
	movement_duration = 650;
	movement = false;
	min_slides = 2;

	state = {
		current: "temporary",
		loading: true,
		items: this.props.temporary_data,
		temporary_data: this.props.temporary_data,
		permanent_data: this.props.permanent_data,
		posts_length: 0,
		wrap_left: 0,
		transition: true,
	}



	componentDidUpdate ( prev_props ) {
		if ( prev_props.temporary_data !== this.props.temporary_data ) {
			this.setState({
				current: "temporary",
				loading: true,
				items: this.props.temporary_data,
				posts_length: 0,
				wrap_left: 0,
				transition: true,
			})
		}
	}
	

	moveItems = action => {

		if ( this.movement || this.state.items.length < this.min_slides ) return;
		this.movement = true;
		
		const item = this.carousel_wrap.children[0]
		const item_width = item.offsetWidth;
		const item_margin = +window.getComputedStyle(item).getPropertyValue("margin-right").replace("px", "");

	
		switch ( action ) {
			case "next":

				this.setState({ transition: true }, () => {
					const first_item_clone = this.state.items.slice(0, 1);
					const items = [...this.state.items, ...first_item_clone ];
	
					this.setState({ items }, () => {
						
						const wrap_left = this.state.wrap_left - item_width - item_margin;
						this.setState({ wrap_left }, () => {
	
								setTimeout(() => {
	
									this.setState({ transition: false }, () => {
										const items = this.state.items.slice(1);
										this.setState({ items, wrap_left: 0 }, () => this.movement = false );
									})
	
								}, this.movement_duration )
						})
					});
				});

				break;

			case "prev":

				this.setState({ transition: false }, () => {

					const last_item_clone = this.state.items.slice(-1);
					const items = [ ...last_item_clone, ...this.state.items ];
					const wrap_left = this.state.wrap_left - item_width - item_margin;

					this.setState({ wrap_left, items }, () => {
						
						setTimeout(() => {
							
							this.setState({ transition: true }, () => {

								this.setState({ wrap_left: 0 }, () => {

									setTimeout(() => {
		
										const items = this.state.items.slice(0, -1);
										this.setState({ items }, () => this.movement = false );

									}, this.movement_duration);
								})

							})

						}, 60);
					})
				});

				break;

			default:
				console.warn(`Unhandled move items action [${action}]`);
		}
	}


	slideOnTouchStart = e => this.touch_start = e.changedTouches[0].screenX;


	slideOnTouchEnd = e => {

		const touch_end = e.changedTouches[0].screenX;
		if ( Math.abs( this.touch_start - touch_end ) >= 24 ) {
			
			const action = this.touch_start > touch_end ? "next" : "prev";
			this.moveItems( action );
		}
	}


	render(){

		const { heading, sub_heading, extra_classes, ItemComponent, path_to_all, link_to_all, bodyStyles , containerStyles, arrow_show=true} = this.props;
		const { items, wrap_left, transition } = this.state;
		const setCurrentSection = (section) => {
			this.setState({current: section});
			this.setState({items: section === "temporary" ? this.props.temporary_data : this.props.permanent_data});
		};
		if( !items || !items.length || !ItemComponent ) return null;

		const wrap_styles = {
			transition: transition ? "left .6s" : "",
			left: wrap_left
		}

		return (
			<div style={ containerStyles } className="section mt-5 pt-5 row">
				<div className={`carousel__head container ${extra_classes}`}>
					<div className="row">
						<div className="col-md-4 col-12">
							{sub_heading ? <small>{sub_heading}</small> : null}
							<SectionHeading heading={ heading }/>
							<LinkToAll path={ path_to_all } href={ link_to_all }  />
						</div>
						<div className="col-md-4 col-12">
							<div className="section-switcher in-col">
								<button
								type="button"
								className={this.state.current === "temporary" ? "active" : ""}
								onClick={() => setCurrentSection("temporary")}
								>
									Czasowa
									{this.state.current === "temporary" && (
										<FontAwesomeIcon icon={faSortUp} size="2x" />
									)}
								</button>
								<button
								type="button"
								className={this.state.current === "permanent" ? "active" : ""}
								onClick={() => setCurrentSection("permanent")}
								>
									Stałe
									{this.state.current === "permanent" && (
										<FontAwesomeIcon icon={faSortUp} size="2x" />
									)}
								</button>
							</div>
						</div>
						<div className="col-md-4 col-12 d-flex align-items-center justify-content-center see-more">
						<a className="btn btn-transparent" >
							ZOBACZ WSZYSTKIE
						</a>
						</div>
					</div>
					
				</div>
				<div className={`carousel ${ extra_classes || "" } section container `} style={ containerStyles }>


					<div className="carousel__body" style={ bodyStyles }>
						{arrow_show ? ( items && items.length >= this.min_slides && 
							<>
							<Arrows onClick={ this.moveItems } extra_classes={'education-arrow'} /> 
							<div className="carousel__arrows-placeholder"/>
							</> ) : null}


						<div 
							className="carousel__overflow" 
							onTouchStart={ this.slideOnTouchStart }
							onTouchEnd={ this.slideOnTouchEnd } 
						> 
							<div ref={ el => this.carousel_wrap = el } className="carousel__wrap" style={ wrap_styles }>
								{ items && !!items.length &&
									items.map(( item, index ) => (
										<ItemComponent key={ index } {...item } />
									))
								}
							</div>
						</div>

					</div>
			  </div>
			</div>
		)
	}
}
