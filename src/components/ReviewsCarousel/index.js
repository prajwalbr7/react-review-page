// Write your code here
import {Component} from 'react'
import './index.css'

class ReviewsCarousel extends Component {
  state = {activePage: 0}

  onClickRightArrow = () => {
    const {reviewsList} = this.props
    const {activePage} = this.state
    if (activePage < reviewsList.length - 1) {
      this.setState(prevState => ({activePage: prevState.activePage + 1}))
    }
  }

  onClickLeftArrow = () => {
    const {activePage} = this.state
    if (activePage > 0) {
      this.setState(prevState => ({activePage: prevState.activePage - 1}))
    }
  }

  render() {
    const {reviewsList} = this.props
    const {activePage} = this.state
    console.log(activePage)
    const {imgUrl, username, companyName, description} = reviewsList[activePage]
    return (
      <div className="container1">
        <h1 className="heading">Reviews</h1>

        <div className="container-2">
          <button
            className="button"
            type="button"
            onClick={this.onClickLeftArrow}
            data-testid="leftArrow"
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
              className=""
              alt="left arrow"
            />
          </button>
          <div className="container3">
            <img src={imgUrl} alt={username} className="" />
            <p className="heading2">{username}</p>
            <p className="para1">{companyName}</p>
            <p className="para2">{description}</p>
          </div>
          <button
            className="button"
            type="button"
            onClick={this.onClickRightArrow}
            data-testid="rightArrow"
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
              alt="right arrow"
              className=""
            />
          </button>
        </div>
      </div>
    )
  }
}
export default ReviewsCarousel
