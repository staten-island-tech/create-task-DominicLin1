import "../css/style.css"
const DOMselectors= {
   form: document.getElementById("form"),
   title:document.getElementById("title"),
   form2:document.getElementById("form-2"),
   character:document.getElementById("Character"),
 
}


   DOMselectors.form.addEventListener("submit",
function create(event){
   let title = DOMselectors.title.value;
   getQuotebyanime(title);
   event.preventDefault();
}),
   
 DOMselectors.form2.addEventListener("submit",
function create2(event){
  let character= DOMselectors.character.value
  getQuotebycharacter(character)
   event.preventDefault();

})

    
   
    async function getQuotebyanime(title) {
       let AnimeTitleURL=`https://animechan.vercel.app/api/random/anime?title=${title}` 
      

   try {
    
    const response = await fetch(AnimeTitleURL);
    const data = await response.json();
    document.getElementById("AN").textContent=data.quote
    document.getElementById("character").textContent=data.character
    console.log(data.quote);
    console.log(data.character)
    console.log(response)
   } catch (error) {
    console.log(error)
   }
       }
async function getQuotebycharacter(Character) {
      let AnimeTitleURL=`https://animechan.vercel.app/api/random/character?name=${Character}`

   try {
    
    const response = await fetch(AnimeTitleURL);
    const data = await response.json();
    document.getElementById("CR").textContent=data.quote
    document.getElementById("anime").textContent=data.anime
    console.log(data.quote);
    console.log(data.anime)
    console.log(response)
   } catch (error) {
    console.log(error)
   }
       }


  
 