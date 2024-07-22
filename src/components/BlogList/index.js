// Write your JS code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import BlogItem from '../BlogItem'

class BlogList extends Component {
  state = {blogList: [], isLoading: true}

  componentDidMount() {
    this.gettingBlogItems()
  }

  gettingBlogItems = async () => {
    const fetchData = await fetch('https://apis.ccbp.in/blogs')
    const data = await fetchData.json()
    const updatedDetails = data.map(eachItem => ({
      id: eachItem.id,
      author: eachItem.author,
      title: eachItem.title,
      imageUrl: eachItem.image_url,
      avatarUrl: eachItem.avatar_url,
      topic: eachItem.topic,
    }))
    this.setState({
      blogList: updatedDetails,
      isLoading: false,
    })
  }

  render() {
    const {blogList, isLoading} = this.state
    return isLoading ? (
      <div data-testid="loader">
        <Loader type="TailSpin" color="#00bfff" height={50} width={50} />
      </div>
    ) : (
      <ul className="home-list-container">
        {blogList.map(eachItem => (
          <BlogItem eachItem={eachItem} key={eachItem.id} />
        ))}
      </ul>
    )
  }
}

export default BlogList
