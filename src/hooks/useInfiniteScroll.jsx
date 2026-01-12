import { useEffect } from "react"

 const useInfiniteScroll = (callBack) =>{
    useEffect(()=>{
        const handleScroll = () =>{
          const  nearBottom = window.innerHeight + window.scrollY >= 
            document.body.offsetHeight -200;
             if (nearBottom) {
               callBack();
             }  
        };

            window.addEventListener("scroll",handleScroll);
            return () => window.removeEventListener("scroll",handleScroll); 
    })
 }

 export default useInfiniteScroll;