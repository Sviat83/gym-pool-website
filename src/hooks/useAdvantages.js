import { useEffect, useState } from "react";
import {db} from "../firebase"
import { collection, getDocs } from "firebase/firestore";

export function useAdvantages() {
    const [items , setItems] = useState([]);
    const [loading , setLoading] = useState(true);
    const [error ,setError] = useState(null);

    useEffect(()=>{
        let mounted = true;
        const fetch =async () =>{
            try{
                const q =collection(db , "advantage");
                const snap = await getDocs(q);
                const data = snap.docs.map(doc =>({
                    id: doc.id,
                    ...doc.data(),
                }));
              if (mounted)  setItems(data)
            } catch(err){
              if (mounted)   setError(err);
            }finally{
             if (mounted)    setLoading(false);
            }
        };
        fetch();
           return () => {
     mounted =false
    };
    },[])
   return {items ,loading, error}

}