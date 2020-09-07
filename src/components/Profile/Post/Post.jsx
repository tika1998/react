import React from 'react';

 const Post = (props) => {
   console.log(props)
    return (
      <div>
    
         <div> 
           <img width='100px' src='https://www.onlinetefltraining.com/wp-content/uploads/2013/08/2173808.jpg' ></img>
           {props.message}
         </div>
    <p>Like <span>{props.like}</span></p>
      </div>
    )
}

export default Post;