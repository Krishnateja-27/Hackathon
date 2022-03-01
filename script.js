async function helper(){
    for(i=1;i<=10;i++){
        const data = await fetch(`https://anapioficeandfire.com/api/books/${i}`)
        const res = await data.json()
        
        
        document.querySelector('.bdy').innerHTML+=`<div class="user-container">
        <div>
        <h3 class="user-name">Name : ${res.name}</h3>
        <p class="user-join-date">ISBN : ${res.isbn}</p>
        <p>Number of Pages :${res.numberOfPages}</p>
        <p>Authors : ${res.authors[0]}</p>
        <p>Publisher : ${res.publisher}</p>
        <p>Released : ${res.released}</p>
        </div>
        </div>`;
    }
    
}
helper();