import React from 'react';
import './MediaObject.css';


const MediaObject = () => {
  return (
    <div className="p2">
      <div className="mb2">
        <img
          src="http://d2v52k3cl9vedd.cloudfront.net/assets/images/placeholder-square.svg"
          className="flex-none mr2 MediaObject__media" />
        <div className="">
          <div>
            <h3 className="m0">Bacon bacon bacon</h3>
            <p className="m0">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum, soluta, ut obcaecati, laudantium nobis.</p>
          </div>
        </div>
      </div>
      <div className="mb2">
        <img
          src="http://d2v52k3cl9vedd.cloudfront.net/assets/images/placeholder-square.svg"
          className="flex-none mr2 MediaObject__media" />
        <div className="">
          <p className="m0">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum, soluta, ut obcaecati, laudantium nobis.</p>
        </div>
      </div>
      <div className="mb2">
        <img
          src="http://d2v52k3cl9vedd.cloudfront.net/assets/images/placeholder-square.svg"
          className="flex-none mr2 MediaObject__media" />
        <div className="">
          <p className="m0">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum, soluta, ut obcaecati, laudantium nobis. Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
        </div>
      </div>
    </div>
  );
};

export default MediaObject;
