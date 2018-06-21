import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Image extends Component {  

  constructor(props, context) {
    super(props, context);
    this.setImagePosition = this.setImagePosition.bind(this);

    this.state = {
      container: {
        position:'relative',
        width:  '500px',
        height: '500px',
        border: '1px solid black',
        textAlign: 'center',  
        verticalAlign: 'top'
      },
      imgPosition:{
        position: 'absolute',
        left: '0',
        bottom: '0'
      },
      imgurl:`https://res.cloudinary.com/${ props.username }/image/upload/c_thumb,w_200,g_face/${this.props.imagename}`
    };
  }

  componentDidMount() {
    let image = this.refs.image;
    let innerWidth = Math.round(this.props.innerWidth  * 0.7);
    let imgUrl = `https://res.cloudinary.com/${ this.props.username }/image/upload/w_auto:100:${ innerWidth }/${this.props.imagename}`;
    
    image.addEventListener('load', ()=> {
      this.setImagePosition(image.width, image.height);
    }, false);

    setTimeout(() => {
      image.src = imgUrl;
    }, 1000);    
  }

  setImagePosition(imgWidth, imgHeight) {
    let containerWidth  = Math.round(imgWidth * 1.2);
    let containerHeight = Math.round(imgHeight * 1.2);
    
    let xCenterPos = (containerWidth / 2)  - (imgWidth / 2);
    let yCenterPos = (containerHeight / 2) - (imgHeight / 2);

    let imgPosition = {}

    if(this.props.xPosition === 'left'){
      if(this.props.yPosition === 'top'){
        imgPosition = { position: 'absolute', left: 0, top: 0 }
      }
      else if(this.props.yPosition === 'center'){
        imgPosition = { position: 'absolute', left: 0, top: yCenterPos }
      }
      else if(this.props.yPosition === 'bottom'){
        imgPosition = { position: 'absolute', left: 0, bottom: 0 }
      }
    }
    else if(this.props.xPosition === 'center'){
      if(this.props.yPosition === 'top'){
        imgPosition = { position: 'absolute', left: xCenterPos, top: 0 }
      }
      else if(this.props.yPosition === 'center'){
        imgPosition = { position: 'absolute', left: xCenterPos, top: yCenterPos }
      }
      else if(this.props.yPosition === 'bottom'){
        imgPosition = { position: 'absolute', left: xCenterPos, bottom: 0 }
      }
    }
    else if(this.props.xPosition === 'right'){
      if(this.props.yPosition === 'top'){
        imgPosition = { position: 'absolute', right: 0, top: 0 }
      }
      else if(this.props.yPosition === 'center'){
        imgPosition = { position: 'absolute', right: 0, top: yCenterPos }
      }
      else if(this.props.yPosition === 'bottom'){
        imgPosition = { position: 'absolute', right: 0, bottom: 0 }
      }
    } 

    this.setState({ container: {
                                position:'relative',
                                width:  containerWidth  + 'px',
                                height: containerHeight + 'px',
                                border: '1px solid black',
                              },
                              imgPosition});
  }

  render() {
    return (
      <div style={this.state.container}>
        <img ref="image" src={this.state.imgurl} alt='' style={ this.state.imgPosition }/>
      </div>
    );
  }
}

Image.propTypes = {
  username:PropTypes.string,
  imagename:PropTypes.string,
  innerWidth: PropTypes.number,
  innerHeight: PropTypes.number,
  xPosition:PropTypes.oneOf(['left', 'center', 'right']),
  yPosition:PropTypes.oneOf(['top', 'center', 'bottom']),  
};

export default Image;

