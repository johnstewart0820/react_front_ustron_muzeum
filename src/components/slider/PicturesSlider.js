import React, { Component } from 'react';
import PropTypes from "prop-types";

import Loader from "../general/Loader";
import Angle from "../../svg/components/Angle";
import { StopIcon, PlayIcon } from "../../svg/icons";
import {Link} from "react-router-dom";

const SlideContent = ({ field_slide_title, field_slide_content, field_slide_button_title, field_slide_button_link, show_title = true }) => (
	<>
		<div className="pictures-slider__slide_content container">

			{/* TODO Top link must be moved to menu */}
			{/*{ top_link &&
				<a href={ top_link } target="_blank" className="pictures-slider__slide_top_link" rel={'noopener noreferrer'}>
					<em> { top_link_svg } </em>
					<span> { top_link_label } </span>
				</a>
			}*/}
			{show_title === false ? null :
			<>
				<div className="hero-title open-sans">{field_slide_title}</div>
				<div className="hero-copy">
					<div className="hero-copy-line __big">{field_slide_title}</div>
					<div className="hero-copy-line">{field_slide_content}</div>
				</div>
				{field_slide_button_title &&
				<Link to={!field_slide_button_link ? '/' : field_slide_button_link} className="hero-copy-cta open-sans weight-600">
					{field_slide_button_title}
				</Link>}
			</>
			}
			{/* {field_slide_title && <div className="pictures-slider__slide_title">{field_slide_title}</div>}
			{field_slide_content && <div className="pictures-slider__slide_desc">{field_slide_content}</div>}
			{field_slide_button_title && <a className="button-link green" href={field_slide_button_link}>{field_slide_button_title}</a>} */}
		</div>
	</>
)

export default class PicturesSlider extends Component{

	static propTypes = {
		slides: PropTypes.array.isRequired,
		delay: PropTypes.number
	}

	constructor(props){
		super(props);

		this.timer = null;
		this.delay = this.props.delay || 4000;

		this.state = {
			active_slide: 0,
			auto_playing: true
		}
	}


	componentDidMount(){
		const { slides } = this.props;
		if( Array.isArray( slides ) && slides.length ) this.autoPlay();
	}


	componentWillUnmount(){
		clearInterval( this.timer );
		delete this.timer;
	}


	componentDidUpdate( prev_props ) {
		if ( prev_props.slides !== this.props.slides ) {
			this.stopAutoPlay();
			this.autoPlay();
		}
	}


	autoPlay = () => {
		this.setState({ auto_playing: true });

		this.timer = setInterval(() => {
			const { slides } = this.props;
			const active_slide =
				this.state.active_slide === slides.length - 1
				? 0
				: this.state.active_slide + 1;

			this.setState({ active_slide })
		}, this.delay );
	}


	stopAutoPlay = () => { this.setState({ auto_playing: false }); clearInterval( this.timer ) };


	changeSlide = ( action ) => {

		const { active_slide } = this.state;
		const { slides } = this.props;

		const index =
			toString.call( action ) === "[object Number]"
			? action
			: action === "prev"
				? active_slide === 0 ? slides.length - 1 : active_slide - 1
				: active_slide === slides.length - 1 ? 0 : active_slide + 1

		this.stopAutoPlay();
		this.setState({ active_slide: index })
	};


	render(){

		const { slides, show_title } = this.props;
		const { active_slide, auto_playing } = this.state;

		return(
			<div className="pictures-slider" style={this.props.style}>

				{ (!slides || !slides.length) && <Loader /> }

				{ slides && !!slides.length && slides.map(( item, index ) => (

					item.link
					? (
						<a
							key={ index }
							href={ item.link }
							target="_blank"
							rel={'noopener noreferrer'}
							className={`pictures-slider__slide thumbnail ${ active_slide === index ? "active" : ""}`}
							style={{ backgroundImage: `url(${ item.url })`}}
						>
							<SlideContent {...item } show_title={show_title} />
						</a>
					)
					: (
						<div
							key={ index }
							className={`pictures-slider__slide thumbnail ${ active_slide === index ? "active" : ""}`}
							style={{ backgroundImage: `url("${ item.field_slide_image_thumb }")`}}
						>
							<SlideContent {...item} show_title={show_title} />
						</div>
					)

				)) }


				<div className="pictures-slider__circles">
					{ slides && slides.length > 1 &&
						slides.map(( item, index) => (
							<button
								key={index}
								className={index === active_slide ? "active" : ""}
								onClick={() => this.changeSlide(index)}
							>
								<span className="d-none"> slide {index} </span>
							</button>
						))
					}
				</div>

				{ slides && slides.length > 1 &&
					<div className="pictures-slider__controls">
						<button onClick={() => this.changeSlide("prev")}>
							<Angle direction="left" /> <span className="d-none"> arrow </span>
						</button>

						<button onClick={() => auto_playing ? this.stopAutoPlay() : this.autoPlay()}>
							{ auto_playing && <StopIcon /> }
							{ !auto_playing && <PlayIcon /> }
							<span className="d-none"> stop/start </span>
						</button>

						<button onClick={() => this.changeSlide("next")}>
							<Angle/> <span className="d-none"> arrow </span>
						</button>
					</div>
				}
			</div>
		)
	}
};