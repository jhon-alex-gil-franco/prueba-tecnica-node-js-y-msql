export const getData= async()=>{

      const resp=await fetch("http://localhost:3000/content")
      const data=await resp.json()
      return data
   
  }



