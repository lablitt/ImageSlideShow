import Thumbnails from './Thumbnails';

const style = {
  //here is container
  container: {
    flexBasis: '35%',
    maxWidth: '300px',
    border: '1px solid gray',
    height: '100%',
    width: '100%'
  },

  button: {
    border: '1px solid purple',
    height: '20px',
    width: '300px'
  },
  image: {
    height: '200px',
    width: '200px',
  },
  mainContainer: {
    display: 'flex'
  },
  button: {
    marginLeft: '10px'
  },
}

const PreviewBar = (props) => {

  return (
    <div style = {style.container}>
      <Thumbnails slides={props.slides} handleSelectSlide={props.handleSelectSlide}/>
      <button style = {style.button} onClick={props.handleClick} >add slide</button>
    </div>
  );
}

export default PreviewBar;
