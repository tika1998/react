import React from 'react';
import Post from './Post/Post';

 const MyPosts = () => {
    return (
      <div>
        <div>
          my posts  
         </div>
        <div>
            <textarea></textarea>
            <button>Add Post</button>
        </div>
        < Post message='Hi how are you?' like='3'/>
        < Post message='fine thanks!!!!' like='8'/>
      </div>
    )
}

export default MyPosts;