import Thumbnails from './Thumbnails';

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

const PreviewBar = (props) => {

  return (
    <div style = {style.container}>
      <Thumbnails slides={props.slides} handleSelectSlide={props.handleSelectSlide}/>
      <button onClick={props.handleClick} >add slide</button>
    </div>
  );
}

export default PreviewBar;
