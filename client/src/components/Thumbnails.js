
const style = {
//here for slide
  slide: {
    border: '1px solid red',
    margin: '10px',
    height: '100px',
    width: '-webkit-fill-available',
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


const Thumbnails = (props) => {
  const slides = props.slides.map((obj, i) => {
    return <img
      key={i.toString()}
      style = {style.slide}
      value={i}
      src={obj.dataURL}
      onClick={props.handleSelectSlide}/>
  });

  return (
    <div>
      {slides}
    </div>
  )
}

export default Thumbnails;
