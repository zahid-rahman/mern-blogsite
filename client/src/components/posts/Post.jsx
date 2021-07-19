import { Image } from 'react-bootstrap'
import blogImage from '../../images/blog-image.jpeg'

const Post = () => {
    return (
        <div className="text-center">
            <a href="#">
                <Image src={blogImage} fluid />
            </a>
            <h3 className="p-3">Title 1</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. In accusamus numquam magni vitae accusantium ex quam explicabo quaerat velit perferendis.</p>
            <br />
        </div>
    )
}

export default Post
