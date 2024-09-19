
import React, { Component } from 'react';
import './ContentRating.css';

class ContentRating extends Component {
  constructor() {
    super();
    this.state = {
        likes:0,
        dislikes:0,
        handleLike: ()=>{
            this.setState((prevState)=> {
                return {
                    likes : prevState.likes + 1,
                    totalRatings : prevState.totalRatings +1 
                }
            })
        },
        handleDislike: ()=>{
            this.setState((prevState)=> {
                return {
                    dislikes  : prevState.dislikes + 1,
                    totalRatings : prevState.totalRatings +1 
                }
            })
        },
        totalRatings: 0
    }
  }
  render() {
    return (
     <>
     <div className='content-rating'>
        <p> 
            Content Rating Application
        </p>
        <div className='rating-buttons'>
            <button className='like-button' onClick={this.state.handleLike}>
                Like ({this.state.likes})
            </button>
            <button className='dislike-button' onClick={this.state.handleDislike}>
                Dislike ({this.state.dislikes})
            </button>
            <p>Total Ratings: {this.state.totalRatings}</p>
            <p>Total Ratings: {this.state.likes + this.state.dislikes}</p>
        </div>
     </div>
     </>
    );
  }
}

export default ContentRating;
