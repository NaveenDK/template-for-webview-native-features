import React, { Component } from 'react';



class camButton extends React.Component{
    handleClickCamera(){
        window.postMessage("camera!");

    }
    handleClickGallery(){
        window.postMessage("gallery!");

    }

    render(){
        return(
            <div>
            <button onclick={(e)=>
            this.handleClickCamera(e)}>
               Camera
            </button>
            <button onclick={(e)=>
            this.handleClickGallery(e)}>
                Gallery
            </button>
            </div>
        )
    }
}
export default camButton;