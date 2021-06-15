import React from "react";
import { useState } from "react";
import './PhotoViewer.css';
import {ImageUrls} from './Select_Urls';


export function PhotoViewer() {    // declare and export new function called 'PhotoViewer'
    const [photoSelectedUrl, setPhotoSelected] = useState(null);
    const imgs = ImageUrls.map((url) => 
        <img className = {url===photoSelectedUrl ? 'small-selected-img' : 'small-img'}
        alt={url} key={url}
        src={url}
        onClick={() => {url === photoSelectedUrl ? setPhotoSelected(null) : setPhotoSelected(url);
        }}
        />
        );
    return (                
        <div className='img_box'> 
            <img className='large-img' 
            alt={photoSelectedUrl} key={photoSelectedUrl}
            src={photoSelectedUrl} />
            {imgs}
        </div>
        
    );
}


