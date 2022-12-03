import React from 'react'
import profile from "../assets/profile.jpg"
import Post from './Post'
const Posts = () => {
    const posts = [
        {
            id: '123',
            userName: 'Joe Doe',
            profile: profile,
            post: profile,
            caption: "Hello World"
        },
        {
            id: '234',
            userName: 'Ninja',
            profile: profile,
            post: profile,
            caption: "Iam from object"
        }
    ]
    return (
        <div className='mt-1 mx-1'>
            {
                posts.map((post) => (
                    <Post
                        key={post.id}
                        username={post.userName}
                        profile={post.profile}
                        postPhoto={post.post}
                        caption={post.caption}
                    />
                ))
            }
        </div>
    )
}

export default Posts