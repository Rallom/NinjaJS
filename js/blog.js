const posts = []
var index = 0

function send() {
    const title = document.getElementById('post-title');
    const text = document.getElementById('post-text');
    const author = document.getElementById('post-author');

    let currentMax = 0
    for (let e=0; e < posts.length; e ++) {
        const tempPost = posts[e]
        if (tempPost.index > currentMax) {
            currentMax = tempPost.index
        }
    }
    index = currentMax + 1 
    const post = new PostClass(title.value, text.value, author.value, index)
    posts.push(post)
    renderPosts(posts)

    title.value = ""
    text.value = ""
    author.value = ""
}

class PostClass {

    constructor(title, text, author, index) {
        this.title = title;
        this.text = text;
        this.author = author;
        this.index = index
    }


    getListObject = function(post) {
        const li = document.createElement('li')
        li.className = `list-element-${post.index}`

        const h3 = document.createElement('h3')
        const pText = document.createElement('p')
        const pAuthor = document.createElement('p')
        const button = document.createElement('button')
        button.innerHTML = 'Delete'
        button.onclick = function(){
            li.remove()
            posts.splice(posts.indexOf(post), 1)
        }

        h3.innerText = this.title
        pText.innerText = this.text
        pAuthor.innerText = this.author

        li.appendChild(h3)
        li.appendChild(pText)
        li.appendChild(pAuthor)
        li.appendChild(button)


        return li
    }
}

function renderPosts(posts) {
    const list = document.getElementById("postlist")
    list.innerText = ""

    for (let i=0; i < posts.length; i ++) {
        const post = posts[i]
        const li = post.getListObject(post);
        list.appendChild(li);
    }
}
