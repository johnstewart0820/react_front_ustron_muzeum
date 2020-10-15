import React, { useState } from "react";
import { withRouter } from "react-router-dom";

const EducationVideos = (props) => {
  const videos = props.data;

  return (
    <>
      <article className="section single-item-page mb-5">
        <div className="container">
          <div className="row">
            <div className="col-12">
              {videos && videos.field_educational_videos_title  && 
                <h3>
                  {videos.field_educational_videos_title.split(" ")[0]}
                  <br/>
                  {videos.field_educational_videos_title.split(" ")[1]
                }</h3>
              }
            </div>
            <div className="row col-12 mt-4">
              <div className="col-md-6 col-12">
                {videos && videos.field_educational_videos && 
                  <video poster={videos.field_educational_videos[0].field_educational_videos_image} alt="" className="img-full" 
                    src={videos.field_educational_videos[0].field_educational_videos_link} controls
                  />
                }
              </div>
              <div className="col-md-6 col-12">
                <div className="row education-top-image">
                  <div className="col-md-6 col-12">
                    {videos && videos.field_educational_videos && 
                      <video poster={videos.field_educational_videos[1].field_educational_videos_image} alt="" className="img-full" 
                        src={videos.field_educational_videos[1].field_educational_videos_link} controls
                      />  
                    }
                  </div>
                  <div className="col-md-6 col-12">
                    {videos && videos.field_educational_videos && 
                      videos.field_educational_videos[1].field_educational_videos_description
                    }
                  </div>
                </div>
                <div className="row education-bottom-image">
                  <div className="col-md-6 col-12">
                    {videos && videos.field_educational_videos && 
                      <video poster={videos.field_educational_videos[2].field_educational_videos_image} alt="" className="img-full" 
                        src={videos.field_educational_videos[2].field_educational_videos_link} controls
                      />  
                    }
                  </div>
                  <div className="col-md-6 col-12">
                    {videos && videos.field_educational_videos && 
                      videos.field_educational_videos[2].field_educational_videos_description
                    }
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>
    </>
  )
};

export default withRouter(EducationVideos);
