console.log("API...Started");
function callAPI(){
    fetch('https://newsapi.org/v2/top-headlines?country=in&apiKey=0420f942441e461eb85a1d9eb010141e')
    .then((res)=>{
        return res.json()
    })
    .then((data)=>{
        // console.log(data);
        renderUI(data);
    })
}

// callAPI();

function renderUI(data){
    const articles = data.articles;
    // console.log(articles);
    for(let i=0; i < articles.length;i++){

        const root = document.getElementById("root");
        
        // get single aRTICLE FROM artical array
        const ar = articles[i];
        console.log(ar);
    
        
        const div = document.createElement("div");
        div.setAttribute("class", "news-card");
        
        const h3 = document.createElement("h3");
        const img = document.createElement("img");
        // img.setAttribute("class", "news-card");
        
        img.src = ar.urlToImage;
        // img.style.height="200px"
        h3.innerText = ar.title;
        // div.innerText = ar.title;
        const p = document.createElement("p");
        p.innerText = ar.description;
        
        div.appendChild(h3);
        div.appendChild(img);
        div.appendChild(p);
        root.appendChild(div);
    }
}

callAPI();
// renderUI();