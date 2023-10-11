// Write your code here
import {Component} from 'react'
import './index.css'

class ReviewsCarousel extends Component {
  state = {index: 0}

  onLeftArrowClick = () => {
    const {index} = this.state
    if (index !== 0) {
      this.setState(prevState => ({index: prevState.index - 1}))
    } else {
      this.setState({index: 0})
    }
  }

  onRightArrowClick = () => {
    const {index} = this.state
    if (index < 3) {
      this.setState(prevState => ({index: prevState.index + 1}))
    }
  }

  render() {
    const {reviewsList} = this.props
    const {index} = this.state
    console.log(index)
    const {imgUrl, username, companyName, description} = reviewsList[index]
    return (
      <div className="app-container">
        <h1 className="heading">Reviews</h1>
        <img src={imgUrl} alt={username} className="logo-img" />
        <div className="arrow-container">
          <button
            type="button"
            className="button"
            data-testid="leftArrow"
            onClick={this.onLeftArrowClick}
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
              alt="left arrow"
              className="arrow-icon"
            />
          </button>
          <p className="username">{username}</p>
          <button
            type="button"
            className="button"
            data-testid="rightArrow"
            onClick={this.onRightArrowClick}
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
              alt="right arrow"
              className="arrow-icon"
            />
          </button>
        </div>
        <p className="company-name">{companyName}</p>
        <p className="description">{description}</p>
      </div>
    )
  }
}
export default ReviewsCarousel
