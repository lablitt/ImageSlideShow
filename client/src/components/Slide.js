import React, { useRef, useState, useEffect } from "react";
import CanvasDraw from "react-canvas-draw";

const style = {
  container: {
    border: '1px solid gray',
    height: '700px',
    width: '300px'
  },
  slide: {
    border: '1px solid red',
    height: '20px',
    width: '300px',
    cursor: 'pointer'
  },
  button: {
    border: '1px solid purple',
    height: '20px',
    width: '300px'
  },
  thumbs: {
    height: '500px',
    width: '300px',
    background: 'green'
  },
  image: {
    height: '200px',
    width: '200px',
  },
  mainContainer: {
    display: 'flex'
  }
}


const Slide = (props) => {

  const sigCanvas = useRef({});
  //want to save and clear

  console.log("elloo" + props.slide.imageFile);

  useEffect(() => {
       let saveDataString = sigCanvas.current.getSaveData();
       props.saveSlide(saveDataString);
       sigCanvas.current.clear();
       props.slide.canvasDataString && sigCanvas.current.loadSaveData(props.slide.canvasDataString, true);
   },[props.currentSlideIndex])

  return (
    <div>
      <div>
        {
          //could make this cleaner
          props.slide.imageFile != "dd" ?
            <CanvasDraw ref={sigCanvas} imgSrc={props.slide.imageFile}/> :
            <CanvasDraw ref={sigCanvas} imgSrc={"https://dummyimage.com/600x400/ffffff/fff"}/>
        }
      </div>
    </div>
  )
}

export default Slide;
