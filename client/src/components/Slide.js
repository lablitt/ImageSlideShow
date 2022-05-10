import React, { useRef, useEffect } from "react";
import CanvasDraw from "react-canvas-draw";

const style = {
  canvasDraw: {
    width: '100%',
    height: '100%'
  }
}

const Slide = (props) => {

  const sigCanvas = useRef({});
  //want to save and clear



  useEffect(() => {
       let saveDataString = sigCanvas.current.getSaveData();
       //TO DO: we are getting a fixed width/height, we need get the live ones
       const width = sigCanvas.current.props.canvasWidth;
           const height = sigCanvas.current.props.canvasHeight;
           const background = sigCanvas.current.canvasContainer.children[0];
           const drawing = sigCanvas.current.canvasContainer.children[1];
           const canvas = document.createElement('canvas');
           canvas.width = width;
           canvas.height = height;

           // composite now
           canvas.getContext('2d').drawImage(background, 0, 0);
           canvas.getContext('2d').globalAlpha = 1.0;
           canvas.getContext('2d').drawImage(drawing, 0, 0);

           const dataURL = canvas.toDataURL('image/jpeg', 1.0);

       props.saveSlide && props.saveSlide(saveDataString, dataURL);
       sigCanvas.current.clear();
       props.slide.canvasDataString && sigCanvas.current.loadSaveData(props.slide.canvasDataString, true);
   },[props.currentSlideIndex, props.openCarousel])

  return (


      <CanvasDraw ref={sigCanvas} style={style.canvasDraw} hideInterface={props.hideInterface} imgSrc={props.slide.imageFile}/>


  )
}

export default Slide;
