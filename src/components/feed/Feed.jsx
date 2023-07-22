import React from 'react';
import "./Feed.css";
import Post from '../../components/post/Post';
import Share from '../../components/share/Share';
import { Posts } from "../../dummyData";
export default function Feed(){
    return(
        <div className='feed'>
            <div className="feedWrapper">
                <Share/>
                {Posts.map((p) => (
          <Post key={p.id} post={p} />
        ))}
                <Post/>

            </div>
        </div>
    )
}