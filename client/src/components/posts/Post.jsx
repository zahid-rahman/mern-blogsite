import { Image } from 'cloudinary-react'
import blogImage from '../../images/blog-image.jpeg'

const Post = (details) => {
    console.log(details.post.title)
    return (
        <div className="text-center">
            <a href="#">
            <Image
                    cloudName="zskart"
                    height="250"
                    width="350"
                    publicId={details.post.imagePublicId}
                    crop="scale"
                />
            </a>
            <h3 className="p-3">{details.post.title}</h3>
            <br />
        </div>
    )
}

export default Post
