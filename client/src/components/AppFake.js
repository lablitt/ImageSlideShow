import React, {useState, useEffect, useRef} from 'react';

import {useDropzone} from 'react-dropzone';

import PreviewBar from './PreviewBar';
import Slideshow from './Slideshow';
import EditorWindow from './EditorWindow';

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
//will render slides
// will render add slide button
//starts with one blank slide

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
      let currentSlide = {...slides[currentSlideIndex]};
      acceptedFiles.map(file => currentSlide.imageFile = URL.createObjectURL(file))
      const newSlides = [...slides];
      newSlides[currentSlideIndex] = currentSlide;
      setSlides(newSlides);
    }
  });

  const handleSelectSlide = (e) => {
    setCurrentSlideIndex(e.target.value);
  }

  //send function as prop

  //ITS SAVING ON THE WRONG SLIDE
  //WE NEED THE PREV SLIDE
  const prevSlideIndex = usePrevious(currentSlideIndex);

  const saveSlide = (saveDataString, dataURL) => {
    console.log("hello    " + prevSlideIndex)
    let prevSlide = {...slides[prevSlideIndex]};
    prevSlide.canvasDataString = saveDataString;
    prevSlide.dataURL = dataURL;
    const newSlides = [...slides];
    newSlides[prevSlideIndex] = prevSlide;
    console.log(newSlides)
    setSlides(newSlides);
  }

  const handleClick = () => {
    setSlides(prev => [...prev, emptySlide]);
  }


  const openSlideShow = () => {
    //has an array
    //call slideshow function
    setOpenCarousel(true);

  }

  // const showSlides = () => {
  //
  // }


//WHERE WOULD YOU STORE THIS FUNCTIONALITY????
//first thing tomorrow
  const myFunction = () => {
  // your logic here
  console.log('pressed Esc ✅');
  setOpenCarousel(false);
};

useEffect(() => {
  const keyDownHandler = event => {
    console.log('User pressed: ', event.key);

    if (event.key === 'Escape') {
      event.preventDefault();

      // 👇️ your logic here
      myFunction();
    }
  };

  document.addEventListener('keydown', keyDownHandler);

  // 👇️ clean up event listener
  return () => {
    document.removeEventListener('keydown', keyDownHandler);
  };
}, []);

  return (
    <div style={style.mainContainer}>
      <PreviewBar slides={slides} handleClick={handleClick} handleSelectSlide={handleSelectSlide}/>
      <EditorWindow slide={slides[currentSlideIndex]} getRootProps={getRootProps} currentSlideIndex={currentSlideIndex} saveSlide={saveSlide} openSlideShow={openSlideShow}/>

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
