import React, { useRef, useEffect } from "react";
import CanvasDraw from "react-canvas-draw";

const Slide = (props) => {

  const sigCanvas = useRef({});
  //want to save and clear

  console.log("elloo" + props.slide.imageFile);

  useEffect(() => {
       let saveDataString = sigCanvas.current.getSaveData();
       props.saveSlide && props.saveSlide(saveDataString);
       sigCanvas.current.clear();
       props.slide.canvasDataString && sigCanvas.current.loadSaveData(props.slide.canvasDataString, true);
   },[props.currentSlideIndex])

  return (
    <div>
      <div>
        {
          props.forSlideshow ?
          <CanvasDraw ref={sigCanvas} saveData={props.slide.canvasDataString} className={props.className} hideInterface={props.hideInterface} imgSrc={props.slide.imageFile}/> :
          <CanvasDraw ref={sigCanvas} className={props.className} hideInterface={props.hideInterface} imgSrc={props.slide.imageFile}/>
        }
      </div>
    </div>
  )
}

export default Slide;
