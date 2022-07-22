import { getData } from "./getData.js";
import { liCategory } from "./components/category.js";

const listCategory=document.getElementById("list-categories")

getData()
.then(res=>
    {
        
        res.map(index=>{

            listCategory.innerHTML+=liCategory(index.title)
            
        })

    })

   
    
    

