import React from "react";
import { connect } from 'react-redux';

const ImageDetail = ({img}) => {
  
  return (
    <div className="ui card">
      <div className="image">
        {img === null ? (
          <div className="ui placeholder">
            <div className="square image"></div>
          </div>
        ) : (
          <img alt="alt" src={img.url_s} />
        )}
      </div>
      <div className="content">
        {img === null ? (
          <div className="ui placeholder">
            <div className="header">
              <div className="very short line"></div>
              <div className="medium line"></div>
            </div>
          </div>
        ) : (
          <a href="/" className="header">
            {img.id}
          </a>
        )}

        <div className="meta">
          {img === null ? (
            <div className="ui placeholder">
              <div className="very short line"></div>
            </div>
          ) : (
            <span className="date">{img.date}</span>
          )}
        </div>
        <div className="description">{img === null ? "" : img.title}</div>
      </div>
    </div>
  );
};

// export default ImageDetail;
const mapStateToProps = (state) => {
  return { img: state.selectedImage }
 }
 
 export default connect(mapStateToProps)(ImageDetail);
 
