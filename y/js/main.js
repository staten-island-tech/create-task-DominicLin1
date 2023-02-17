import "../css/style.css"
const DOMselectors= {
   form: document.getElementById("form"),
   title:document.getElementById("title"),
   title2:document.getElementById("title2"),
   form2:document.getElementById("form2")
}


   DOMselectors.form.addEventListener("submit",
function create(event){
   let title = DOMselectors.title.value;
   let title2= DOMselectors.title2.value
   getQuote(title);
   event.preventDefault();
   getFact(title2)
})
   
DOMselectors.form2.addEventListener("submit",
function create2(event){
   
   let title2= DOMselectors.title2.value
   getFact(title2)
   event.preventDefault();

})
   
   
    async function getQuote(title) {
      let AnimeTitleURL=`https://animechan.vercel.app/api/random/anime?title=${title}`

   try {
    
    const response = await fetch(AnimeTitleURL);
    const data = await response.json();
    document.getElementById("api").textContent=data.quote
    document.getElementById("character").textContent=data.character
    console.log(data.quote);
    console.log(data.character)
    console.log(response)
   } catch (error) {
    console.log(error)
   }
       }

   /*     async function getCharacter(title) {
         let AnimeTitleURL=`https://animechan.vercel.app/api/random/anime?title=${title}`
   
      try {
       
       const response = await fetch(AnimeTitleURL); 
       const data = await response.json();
      
       document.getElementById("character").textContent=data.character
       
       console.log(data.character)
       console.log(response)
      } catch (error) {
       console.log(error)
      }
          }
 */
/*            
    async function getFact(title2) {
      let AnimeTitleURL2=`https://anime-facts-rest-api.herokuapp.com/api/v1/:${title2}`

   try {
    
    const response2 = await fetch(AnimeTitleURL2);
    const data2 = await response.json();
    document.getElementById("create").textContent=data.fact
    console.log(data2.fact);
    console.log(response2)
   } catch (error) {
    console.log(error)
   }
    }
   //  Api doesn't work anymore
    */

 