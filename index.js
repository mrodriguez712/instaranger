import { posts } from "./data.js"

const postEl = document.getElementById('post-el')

for (let post of posts) {
    postEl.innerHTML +=
    `
    <div class="container" >
        <div class="user-container-image">
            <img class="user-pic" src='./images/${post.avatar}' alt="Username profile picture">
            <div>
                <p class='user-name'>${post.name}</p>
                <p clas='user-location'>${post.location}</p>
            </div>
        </div>
    
        <div class='user-post'>
            <img class='user-pic-post' src='./images/${post.post}' alt='posted image of user'>
        </div>

        <div class='user-buttons'>
            <img id='icon-like-btn' class='icons' id='heart-icon' src='./images/icon-heart.png' alt='heart icon for liking post'/>
            <img class='icons' src='./images/icon-comment.png' alt='icon for commenting on posts' />
            <img class='icons' src='./images/icon-dm.png' alt='icon for direct messaging user' />

            <div class='user-likes'>
                <p><span class='likes'>${post.likes}</span> likes</p>
            </div>
        </div>

        <div class='user-comment'>
            <p class='comment'>${post.comment}</p>
        </div>

    </div>
    `

    if (post.likes <= 1) {
        postEl.innerHTML = 
        `
        <div class="container" >
            <div class="user-container-image">
                <img class="user-pic" src='./images/${post.avatar}' alt="Username profile picture">
                <div>
                    <p class='user-name'>${post.name}</p>
                    <p clas='user-location'>${post.location}</p>
                </div>
            </div>
        
            <div class='user-post'>
                <img class='user-pic-post' src='./images/${post.post}' alt='posted image of user'>
            </div>

            <div class='user-buttons'>
                <img id='icon-like-btn' class='icons' id='heart-icon' src='./images/icon-heart.png' alt='heart icon for liking post'/>
                <img class='icons' src='./images/icon-comment.png' alt='icon for commenting on posts' />
                <img class='icons' src='./images/icon-dm.png' alt='icon for direct messaging user' />

                <div class='user-likes'>
                    <p><span class='likes'>${post.likes}</span> like</p>
                </div>
            </div>

            <div class='user-comment'>
                <p class='comment'>${post.comment}</p>
            </div>

        </div>
        `
    }
}


