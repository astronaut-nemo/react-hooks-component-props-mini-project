import React from 'react';

// Component Function
function Article({title, date="January 1, 1970", preview, minutes}){
    console.log(minutes)

    // Helper function
    function EmojiMinutes(){
        if(minutes<30){
            // const numberOfCoffees = minutes/5;
            const emojiArray = [];
            for(let i = 0; i < minutes/5; i++){
                emojiArray.push("☕")
            }
            return (`${emojiArray.join('')} | ${minutes} min read`)
        }
        else if(minutes>=30){
            const emojiArray = [];
            for(let i = 0; i < minutes/10; i++){
                emojiArray.push("🍱")
            }
            return (`${emojiArray.join('')} | ${minutes} min read`)
        }
    }

    return(
        <article>
            <h3>{title}</h3>
            <small>{date}</small>
            <p>{preview}</p>
            {EmojiMinutes()}
        </article>
    )
};

export default Article