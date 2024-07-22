// Write your JS code here
import './index.css'
import Loader from 'react-loader-spinner'
import {Component} from 'react'

class BlogItemDetails extends Component {
  state = {blogDetails: {}, isLoading: true}

  componentDidMount() {
    this.gettingBlogDetails()
  }

  gettingBlogDetails = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const fetchData = await fetch(`https://apis.ccbp.in/blogs/${id}`)
    const data = await fetchData.json()
    const updatedData = {
      id: data.id,
      title: data.title,
      imageUrl: data.image_url,
      avatarUrl: data.avatar_url,
      author: data.author,
      content: data.content,
    }
    this.setState({
      blogDetails: updatedData,
      isLoading: false,
    })
  }

  render() {
    const {blogDetails, isLoading} = this.state
    const {id, title, imageUrl, avatarUrl, author, content} = blogDetails
    return isLoading ? (
      <div data-testid="loader">
        <Loader type="TailSpin" color="#00bfff" height={50} width={50} />
      </div>
    ) : (
      <div className="blog-details-container">
        <h1 className="blog-item-titile-name">{title}</h1>
        <div className="blog-item-author-container">
          <img
            src={avatarUrl}
            className="blog-item-author-img"
            alt={`avatar${id}`}
          />
          <p>{author}</p>
        </div>
        <img src={imageUrl} className="blog-item-img" alt={title} />
        <p className="blog-item-description">{content}</p>
      </div>
    )
  }
}

export default BlogItemDetails
