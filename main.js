const posts = [
    {
        "id": 1,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/300?image=171",
        "author": {
            "name": "Phil Mangione",
            "image": "https://unsplash.it/300/300?image=15"
        },
        "likes": 80,
        "created": "2021-06-25"
    },
    {
        "id": 2,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=112",
        "author": {
            "name": "Sofia Perlari",
            "image": "https://unsplash.it/300/300?image=10"
        },
        "likes": 120,
        "created": "2021-09-03"
    },
    {
        "id": 3,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=234",
        "author": {
            "name": "Chiara Passaro",
            "image": "https://unsplash.it/300/300?image=20"
        },
        "likes": 78,
        "created": "2021-05-15"
    },
    {
        "id": 4,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=24",
        "author": {
            "name": "Luca Formicola",
            "image": null
        },
        "likes": 56,
        "created": "2021-04-03"
    },
    {
        "id": 5,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=534",
        "author": {
            "name": "Alessandro Sainato",
            "image": "https://unsplash.it/300/300?image=29"
        },
        "likes": 95,
        "created": "2021-03-05"
    }
];

const container = document.getElementById('container');
let post = '';

for (let i = 0; i < posts.length; i++){
    let ita = itaDate(posts[i].created)
    if (posts[i].author.image != null){
        post = 
        `
            <div class="post">
                <div class="post__header">
                    <div class="post-meta">                    
                        <div class="post-meta__icon">
                            <img class="profile-pic" src="${posts[i].author.image}" alt="${posts[i].content}">                    
                        </div>
                        <div class="post-meta__data">
                            <div class="post-meta__author">${posts[i].author.name}</div>
                            <div class="post-meta__time">${ita}</div>
                        </div>                    
                    </div>
                </div>
                <div class="post__text">${posts[i].content}</div>
                <div class="post__image">
                    <img src="${posts[i].media}" alt="${posts[i].author.name}-profile-image">
                </div>
                <div class="post__footer">
                    <div class="likes js-likes">
                        <div class="likes__cta">
                            <a class="like-button  js-like-button" data-postid="1">
                                <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
                                <span class="like-button__label">Mi Piace</span>
                            </a>
                        </div>
                        <div class="likes__counter">
                            Piace a <b id="like-counter-1" class="js-likes-counter">${posts[i].likes}</b> persone
                        </div>
                    </div> 
                </div>            
            </div>
        `;
    } else {
        console.log(posts[i].author.name)
        let init = inCharacter(posts[i].author.name)
        post = 
        `
            <div class="post">
                <div class="post__header">
                    <div class="post-meta">                    
                        <div class="post-meta__icon">
                            <div class="bcg-img profile-pic">${init}</div>
                        </div>
                        <div class="post-meta__data">
                            <div class="post-meta__author">${posts[i].author.name}</div>
                            <div class="post-meta__time">${ita}</div>
                        </div>                    
                    </div>
                </div>
                <div class="post__text">${posts[i].content}</div>
                <div class="post__image">
                    <img src="${posts[i].media}" alt="${posts[i].author.name}-profile-image">
                </div>
                <div class="post__footer">
                    <div class="likes js-likes">
                        <div class="likes__cta">
                            <a class="like-button  js-like-button" data-postid="1">
                                <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
                                <span class="like-button__label">Mi Piace</span>
                            </a>
                        </div>
                        <div class="likes__counter">
                            Piace a <b id="like-counter-1" class="js-likes-counter">${posts[i].likes}</b> persone
                        </div>
                    </div> 
                </div>            
            </div>
        `;
    }

    container.innerHTML += post;

}   

let buttons = document.getElementsByClassName('like-button');
let like = document.getElementsByClassName('js-likes-counter');
for (let i = 0; i < buttons.length; i++){
    buttons[i].addEventListener('click', function(){
        if (buttons[i].classList.contains('like-button--liked')){
            buttons[i].classList.remove('like-button--liked')
            like[i].innerHTML = posts[i].likes;
        } else {
            buttons[i].classList.add('like-button--liked')
            like[i].innerHTML = posts[i].likes + 1;
        }
        
    })
}


function inCharacter(word){
    let upChar = '';
    for (let i = 0; i < word.length; i++){
        if (word[i] == word[i].toUpperCase()){
            upChar += word[i]
        }
    }
    return upChar;
}

function itaDate(date){
    let newDate = date.split('-');
    let x = newDate[0];
    newDate[0] = newDate[2];
    newDate[2] = x;
    return newDate[0] + '-' + newDate[1] + '-' + newDate[2];
}
