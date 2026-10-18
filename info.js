let btn=document.querySelector("button");
btn.addEventListener("click", async()=>{
    let para= document.querySelector("p");
    para.innerText="Loading....";
    try{
        let fact= await getInfo();
        para.innerText=fact;
    }catch(e){
        console.log("Oops some error !");
        para.innerText="Failed to fetch a cat fact. Please try again.";
    }
  
})
let url="https://catfact.ninja/fact";
async function getInfo(){
    try{
        let res= await axios.get(url);
        return res.data.fact;
    }catch(err){
        throw err; // here throw err used so that it proceeds to the above async funtion in event listener.
    }
    
}