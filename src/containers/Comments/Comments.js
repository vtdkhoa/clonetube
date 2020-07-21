import React, { Component } from 'react'
import CommentsHeader from './CommentsHeader/CommentsHeader'
import AddComment from './AddComment/AddComment'
import Comment from './Comment/Comment'
import './Comments.scss'

class Comments extends Component {
  render() {
    return (
      <div>
        <CommentsHeader amountComments={this.props.amountComments}/>
        <AddComment/>
        <Comment/>
        <Comment/>
        <Comment/>
      </div>
    )
  }
}

export default Comments