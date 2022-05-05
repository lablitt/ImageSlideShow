
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


const Thumbnails = (props) => {
  const slides = props.slides.map((obj, i) => {
    return <button
      key={i.toString()}
      style = {style.slide}
      value={i}
      onClick={props.handleSelectSlide}>
      {obj.imageFile}
    </button>
  });

  return (
    <div>
      {slides}
    </div>
  )
}

export default Thumbnails;
