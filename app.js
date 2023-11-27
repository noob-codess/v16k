/*

async function gql(query, variables = {}) {
    const data = await fetch('https://api.hashnode.com/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            query,
            variables
        })
    });

    return data.json();
}

const GET_USER_ARTICLES = `
    query GetUserArticles($page: Int!) {
        user(username: "v16k") {
            publication {
                posts(page: $page) {
                    title
                    brief
                    slug
                    dateAdded
                    coverImage
                    
                }
            }
        }
    }
`;


gql(GET_USER_ARTICLES, { page: 0 })
    .then(result => {
        const articles = result.data.user.publication.posts;
        let container = document.createElement('div');

        articles.forEach(article => {
            let title = document.createElement('h2');
            title.innerText = article.title;

            let brief = document.createElement('p');
            brief.innerText = article.brief;
            brief.classList.add('brief');

            // Parse the original date string
            const originalDate = new Date(article.dateAdded);

            // Get the components of the date
            const year = originalDate.getFullYear();
            const month = String(originalDate.getMonth() + 1).padStart(2, '0'); // Months are 0-based
            const day = String(originalDate.getDate()).padStart(2, '0');

            // Create the new date format (YYYY-MM-DD)
            let formattedDate = `${year}-${month}-${day}`;

            let dateAdded = document.createElement('p');
            dateAdded.innerText = `Date Published: ${formattedDate}`;
            dateAdded.classList.add('date-added');

            let link = document.createElement('a');
            link.innerText = 'Read blog';
            link.classList.add('read-button');
            link.target = '_blank';
            link.href = `https://www.v16k.xyz/${article.slug}`;



            container.appendChild(title);
            container.appendChild(brief);
            container.appendChild(dateAdded);
            container.appendChild(link);
        })

        document.querySelector('.app').appendChild(container);
    });
 ------Comment below -------------

gql(query).then((resp)=>{              
    const apiresponse = resp.data.user.publication.posts;
    apiresponse.forEach(post => {
        const card = document.createElement("div");
        card.classList.add("card");

        const img = document.createElement("img");
        img.src = post.coverImage;
        card.appendChild(img);

        const desc = document.createElement("div");
        desc.classList.add("desc");

        const title = document.createElement("h2");
        title.innerText = post.title;
        desc.appendChild(title);

        const brief = document.createElement("p");
        brief.innerText = post.brief;
        desc.appendChild(brief);

        card.appendChild(desc);
        allArticle.appendChild(card);

        card.addEventListener('click',()=>{
            location.href = `https://www.v16k.xyz/${post.slug}`;
        })


    });
})
-----------Comment above------
document.getElementById('articles').parentNode.innerHTML = `
<div class="app">
    
</div>`;


 

*/