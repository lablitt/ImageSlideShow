import React, {useState, useEffect, useRef} from 'react';

import {useDropzone} from 'react-dropzone';

import PreviewBar from './PreviewBar';
import Slideshow from './Slideshow';
import EditorWindow from './EditorWindow';

const style = {

  slide: {
    border: '1px solid red',
    height: '20px',
    width: '100%',
    cursor: 'pointer'
  },
  button: {
    border: '1px solid purple',
    height: '20px',
    width: '300px'
  },
  thumbs: {
    height: '500px',
    width: '100%',
    background: 'green'
  },
  image: {
    height: '200px',
    width: '200px',
  },
  //here is mainContainer
  mainContainer: {
    display: 'flex',
    maxWidth: '1000px',
    minHeight: '700px',
    height: '100vh'
  },
  fullscreen : {
    visibility: 'collapse',
    position: 'fixed',
  },
  fullscreenOpen : {
    visibility: 'visible',
    position: 'fixed',
    minWidth: '100%',
    height: '100%',
    top: '0',
    left: '0'
  },
}


const emptySlide = {imageFile: "https://dummyimage.com/600x400/ffffff/fff"};

const AppFake = () => {

  const [slides, setSlides] = useState([emptySlide]);
  const [openCarousel, setOpenCarousel] = useState(false);
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
//check this lives here
  const {getRootProps} = useDropzone({
    accept: 'image/*',
    onDrop: acceptedFiles => {
      //NEED TO LIMIT TO ONE FILE
      console.log("in useDropzone")
      let currentSlide = {...slides[currentSlideIndex]};
      acceptedFiles.map(file => currentSlide.imageFile = URL.createObjectURL(file))
      const newSlides = [...slides];
      newSlides[currentSlideIndex] = currentSlide;
      setSlides(newSlides);
    }
  });

  const handleSelectSlide = (e) => {
    setCurrentSlideIndex(e.target.getAttribute("value"));
  }

  const prevSlideIndex = usePrevious(currentSlideIndex);

  const saveSlide = (saveDataString, dataURL) => {
    console.log("in prevSlideIndex   ", prevSlideIndex)

    let prevSlide = {...slides[prevSlideIndex]};
    prevSlide.canvasDataString = saveDataString;
    prevSlide.dataURL = dataURL;
    const newSlides = [...slides];
    newSlides[prevSlideIndex] = prevSlide;
    setSlides(newSlides);
  }

  const handleClick = () => {
    setSlides(prev => [...prev, emptySlide]);
  }


  const openSlideShow = () => {
    //save slide
    setOpenCarousel(true);
  }

//WHERE WOULD YOU STORE THIS FUNCTIONALITY????
//first thing tomorrow
  const myFunction = () => {
  // your logic here
  setOpenCarousel(false);
};

useEffect(() => {
  const keyDownHandler = event => {

    if (event.key === 'Escape') {
      event.preventDefault();

      // ??????? your logic here
      myFunction();
    }
  };

  document.addEventListener('keydown', keyDownHandler);

  // ??????? clean up event listener
  return () => {
    document.removeEventListener('keydown', keyDownHandler);
  };
}, []);

  return (
    <div style={style.mainContainer}>
      <PreviewBar slides={slides} handleClick={handleClick} handleSelectSlide={handleSelectSlide}/>
      <EditorWindow slide={slides[currentSlideIndex]} getRootProps={getRootProps} currentSlideIndex={currentSlideIndex} saveSlide={saveSlide} openSlideShow={openSlideShow} openCarousel={openCarousel}/>

      <div id="fullscreen" style={openCarousel ? style.fullscreenOpen : style.fullscreen}>
        <Slideshow colors={slides}/>
      </div>
    </div>
  )
}

//move to other file
function usePrevious(value) {
  // The ref object is a generic container whose current property is mutable ...
  // ... and can hold any value, similar to an instance property on a class
  const ref = useRef();
  // Store current value in ref
  useEffect(() => {
    ref.current = value;
  }, [value]); // Only re-run if value changes
  // Return previous value (happens before update in useEffect above)
  return ref.current;
}

export default AppFake;


//still left to do
//make slide, display slide image or just number
//i can now just do display none on the slide show since they are images not canvas

//add styles
//general cleanup
//sort styles - maybe stylise components
//sort reduce method

//how to improve
//we are getting a fixed width/height on canvas, we need get the live ones, thus canvas isn't responsive
//fix mime type errors in dropzone
//make mobile friendly
//only upload single files
