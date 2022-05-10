import Slide from './Slide';

const style = {
  //here as well
  displayPart: {
    display: 'flex',
    flexBasis: '65%',
    flexDirection: 'column'
  },

  button: {
    height: '20px',
    width: '300px',
    marginLeft: '10px'
  },
  //here is thumbs
  thumbs: {
    height: '100%',
    maxHeight: '500px',
    width: '100%',
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
    <div style={style.displayPart} >
      <div style={style.thumbs} {...props.getRootProps({className: 'dropzone', onClick: event => event.stopPropagation()})}>
        <Slide slide={props.slide} currentSlideIndex={props.currentSlideIndex} openSlideShow={props.openSlideShow} saveSlide={props.saveSlide} openCarousel={props.openCarousel}/>
      </div>
      <button style={style.button}onClick={props.openSlideShow}>PLAY</button>
    </div>
  )
}

export default EditorWindow;
