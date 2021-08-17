import React, {useEffect, useState} from 'react';
import DefaultImage from '../../img/loop/1.jpg';
import Onegallery from '../gallery/OneGallery';
const PostSingleHead = (props) => {
    const data = props.data;
    const [image_url, setImageURL] = useState('');
    const [isDialogOpen, setDialogOpen] = useState(false);
    const handleClick = (e) => {
        setImageURL(e.target.src);
        setDialogOpen(true);
    }
    const closeHandler = () => {
        setDialogOpen(false);
    }
    useEffect(() => {
        const main_home_desc_part = document.getElementsByClassName('image-post');
        for (let i  = 0; i < main_home_desc_part.length; i ++) {
            
            if (main_home_desc_part[i].alt != '') {
                main_home_desc_part[i].outerHTML = 
                '<div class="image-outer-post">' 
                + main_home_desc_part[i].outerHTML 
                + '<div class="image-post-desc">' 
                + main_home_desc_part[i].alt
                + '</div>'
                + '</div>';
            }
            main_home_desc_part[i].addEventListener("click", handleClick);
        }
    }, [data.body]);
    
    return (
        <>
            {
                data.short.length == 0 && data.original_image.length == 0 && data.body.length == 0 ?
                    <></>
                :
                <div className="post-container mb-5">
                {
                    data.short.length > 0 ? 
                    <section className="container section">
                        <div className="row mb-5 post-home-section">
                            <div className="col-md-4">
                                <h3 className="padding-title mt-5">{data.title}</h3>
                            </div>
                            <div className="col-md-8">
                            <div className="main-home-desc">{data.short}</div>
                            </div>
                        </div>
                    </section>
                    :
                    <></>
                }
                {(
                    data.original_image.length > 0 ?
                    <img src={ data.original_image } className="posts-single-img" width="100%"/>
                    :
                    null
                )}
                {
                    data.body.length > 0 ?
                    <section className="container section mt-4 pt-4">
                        <div className="row">
                            <div className="col-md-4">
                            </div>
                            <div className="col-md-8 post-body-desc">
                                <div className="main-home-desc" dangerouslySetInnerHTML={{__html: data.body}}/>
                            </div>
                        </div>
                    </section>
                    :
                    <></>
                }
                
            </div>
            }
            
            {isDialogOpen ?
                <Onegallery item={{name: image_url}} closeHandler={closeHandler}/> 
                :
                <></>
            }
        </>
    );
}

export default PostSingleHead;