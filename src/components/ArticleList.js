import React from 'react';
import Article from "./Article";


function ArticleList({posts}){
    // console.log(posts)
    
    // Mapping out each post in the list
    const postsList = posts.map((post) =>{
            return <Article key={post.id} title={post.title} date={post.date} preview={post.preview} minutes={post.minutes}/>
    })

    return(
        <main>
            {postsList}
        </main>
    )
};

export default ArticleList