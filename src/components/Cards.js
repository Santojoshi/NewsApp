import React, { Component } from 'react'

export default class cards extends Component {

  render() {
    let { title, description, image, readmore, time } = this.props
    return (
      <div>
        <div className="my-3 " style={{margin:'1vw' }}>
          <div className="card">
            <img src={image} className="card-img-top" alt='img' />
            <div className="card-body">
              <h5 className="card-title">{title}</h5>
              <p className="card-text">{description}</p>
              <a href={readmore} target='_main' className="btn btn-primary">Read More</a>
              <p class="card-text"><small class="text-muted"> <b> Published at- </b>{time}</small></p>
            </div>
          </div>
        </div>

      </div>
    )
  }
}
