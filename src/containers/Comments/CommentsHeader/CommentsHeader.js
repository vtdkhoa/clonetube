import React from 'react'
import { Button, Icon } from 'semantic-ui-react'
import PropTypes from 'prop-types'
import './CommentsHeader.scss'

const CommentsHeader = props => {
  const amountComments = Number(props.amountComments).toLocaleString() || ''

  return (
    <div className="comments-header">
      <h4>{amountComments} Comments</h4>
      <Button basic compact icon labelPosition="left">
        <Icon name="align left"/>
        Sort by
      </Button>
    </div>
  )
}

CommentsHeader.propTypes = {
  amountComments: PropTypes.any
}

export default CommentsHeader