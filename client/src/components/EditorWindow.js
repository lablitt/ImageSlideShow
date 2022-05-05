import Slide from './Slide';

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


const EditorWindow = (props) => {



  return (
    <>
    <div style={style.thumbs} {...props.getRootProps({className: 'dropzone', onClick: event => event.stopPropagation()})}>
      <Slide slide={props.slide} currentSlideIndex={props.currentSlideIndex} openSlideShow={props.openSlideShow} saveSlide={props.saveSlide} openCarousel={props.openCarousel}/>
    </div>
    <button onClick={props.openSlideShow}>PLAY</button>
    </>
  )
}

export default EditorWindow;
