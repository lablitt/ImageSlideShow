import React from 'react';
import CanvasDraw from "react-canvas-draw";
import './slideshow.css';
import Slide from './Slide';
const delay = 3000;


function Slideshow(props) {

//why does the array start with an undefined element? will have to click on first slide for testing
  console.log("im in slideshow")
  console.log(props.colors)

  const [index, setIndex] = React.useState(0);
  const timeoutRef = React.useRef(null);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  React.useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === props.colors.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => {
      resetTimeout();
    };
  }, [index, props.colors.length]);

//need to load save data
  return (
    <div className="slideshow">
      <div
        className="slideshowSlider"
        style={{ transform: `translate3d(${-index * 100}vw, 0, 0)` }}
      >
        {props.colors.map((item, index) => (
          <div key={index} >
            <img slide={item} className={"slide h"} src={item.dataURL}/>
          </div>
        ))}
      </div>

      <div className="slideshowDots">
        {props.colors.map((_, idx) => (
          <div
            key={idx}
            className={`slideshowDot${index === idx ? " active" : ""}`}
            onClick={() => {
              setIndex(idx);
            }}
          ></div>
        ))}
      </div>
    </div>
  );
}

export default Slideshow;

// ReactDOM.render(<Slideshow />, document.getElementById("App"));
