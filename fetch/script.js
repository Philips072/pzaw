const postURL = `https://jsonplaceholder.typicode.com/posts`
const photosURL =`https://jsonplaceholder.typicode.com/photos`
const btn = document.querySelector('button')

async function fetchPosts() {
    try {
        const [posts, photos] = await Promise.all([
            fetch(postURL).then(res => res.json()),
            fetch(photosURL).then(res => res.json())
        ]);


        const postContainer = document.getElementById('posts-container')
        posts.slice(0, 10).forEach((post, i) =>{
            const postElem =  `
            <div class="post">
                <img src="${photos[i].thumbnailUrl}" alt="Post Image">
                <div class="post-content">
                    <h2>${post.title}</h2>
                    <p>${post.body}</p>
                </div>
            </div>
        `;
        postContainer.innerHTML += postElem;
    });
    } catch (error) {
        console.error('Błąd w trakcie pobierania danych:', error);
    }
}

btn.addEventListener('click',fetchPosts )
