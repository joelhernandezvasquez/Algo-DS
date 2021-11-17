
let posts = [];
const wrapper = document.querySelector(".wrapper");

window.addEventListener("load",async ()=>{
    
  await fetchPosts();
  createPosts();
})

const fetchPosts = async ()=>{
    try{
        const response = await fetch("https://jsonplaceholder.typicode.com/posts");
        const result = await response.json();
        posts = result;
    }
    catch(err)
    {
        console.log(err);
    }
  
}

const createPosts = () =>{
 
   posts.forEach((element)=>{
    const post = document.createElement("div");
    post.classList.add("post");
    post.innerHTML = `<h1 class="title> ${element.title} </h1>
                      <p class="text> ${element.body}</p>
    `
    wrapper.appendChild(post);
   })
  
    

}