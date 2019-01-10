import React, { Component } from 'react';
import Media from '../components/media';
import { connect } from 'react-redux';

class MediaContainer extends Component{
  render(){
    const { data } = this.props;
    return (
      <Media 
        cover={data.get('cover')} 
        title={data.get('title')} 
        author={data.get('author')} 
        type={data.get('type')} 
        id={data.get('id')}
        openModal={this.props.openModal} />
    )
  }
}

function mapStateToProps(state, props){
  return {
    data: state.get('data').get('entities').get('media').get(props.id)
  }
}

export default connect(mapStateToProps)(MediaContainer);