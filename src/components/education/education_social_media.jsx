import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import I18n from '../../I18n';
const EducationSocialMedia = (props) => {
  const medias = props.data;

  return (
    <section className="education-container section mb-5 mt-5 pb-5">
      <div className="row">
        <div className="col-12">
          <small>
              <I18n t="museum_title"/>
            </small>
          { 
            medias && medias.field_educational_videos_social_media_title && 
            <h3>
              {medias.field_educational_videos_social_media_title}
            </h3>
          }
        </div>
      </div>
      <div className="row">
        <div className="col-lg-3 col-md-6 col-6 social-media-item">
          <div className="social-medias">
            <div className="cover-social-media">
              <div className="social-media">
                <a href={medias.field_educational_videos_social_media[0].field_social_media_link} target="_blank">
                  <img src={medias.field_educational_videos_social_media[0].field_social_media_icon} alt="" className="img-small"></img>
                  <span>
                    {medias.field_educational_videos_social_media[0].field_social_media_name}
                  </span>
                </a>
              </div>
              <div className="social-media">
                <a href={medias.field_educational_videos_social_media[1].field_social_media_link} target="_blank">
                  <img src={medias.field_educational_videos_social_media[1].field_social_media_icon} alt="" className="img-small"></img>
                  <span>
                    {medias.field_educational_videos_social_media[1].field_social_media_name}
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 col-6 social-media-item">
          <img src={medias.field_educational_videos_photo1} alt="" className="img-full" />            
        </div>
        <div className="col-lg-3 col-md-6 col-6 social-media-item">
          <img src={medias.field_educational_videos_photo2} alt="" className="img-full" />
        </div>
        <div className="col-lg-3 col-md-6 col-6 social-media-item">
          <img src={medias.field_educational_videos_photo3} alt="" className="img-full" />
        </div>
      </div>
    </section>
  )
};

export default withRouter(EducationSocialMedia);
