// Write your JS code here
import {Link} from 'react-router-dom'
import './index.css'

const BlogItem = props => {
  const {eachItem} = props
  const {id, title, imageUrl, avatarUrl, author, topic} = eachItem
  return (
    <Link className="link" to={`/blogs/${id}`}>
      <li className="list-item">
        <img src={imageUrl} alt={id} className="blog-img" />
        <div>
          <p className="topic-name">{topic}</p>
          <h1 className="titile-name">{title}</h1>
          <div className="author-container">
            <img src={avatarUrl} alt={author} className="author-img" />
            <p className="author-name">{author}</p>
          </div>
        </div>
      </li>
    </Link>
  )
}

export default BlogItem
