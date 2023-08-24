import React from 'react';
import Photo from './Photo';


function MiniGallery(props) {
    const {
    photos
    } = props;
        return (
            <div className="mini-gallery">
                {photos?.map((el, index) => (
                    <Photo
                        key={index}
                        src={el}
                    />
                ))}
            </div>
        );
    }
export default MiniGallery;