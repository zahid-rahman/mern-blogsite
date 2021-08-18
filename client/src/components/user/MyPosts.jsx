import ShowPost from './ShowPost'
import React from 'react'

const MyPosts = () => {

    const array = ['$', '$', '$', '$', '$'];
    const renderPosts = array.map((element) => {
        return (
            <>
                <ShowPost></ShowPost>
                <br />
            </>
        )
    })

    return (
        <>
            <br />
            {renderPosts}
            <div className="m-auto w-50 d-block">
                <button className="btn btn-dark m-auto w-50 d-block">load more</button>
            </div>
            <br />
        </>
    )
}

export default MyPosts