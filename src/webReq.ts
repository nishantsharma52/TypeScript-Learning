// =================================================================

// Topic: Making network requests using third-party library 'Axios'
// =================================================================

// 1. IMPORTS
// Axios library ko import kar rahe hain network request bhejne ke liye.
import axios from "axios";
// 'type' keyword lagane se TS ko pata chalta hai ki hum sirf Type definition import kar rahe hain, 
// koi actual JavaScript code nahi. Ye code ko optimize karne mein madad karta hai.
import type { AxiosResponse } from "axios";

// 2. INTERFACE DEFINITION
// Data ka shape define kar rahe hain, taaki TS hume aage help kar sake.
interface Todo {
    userId: number;
    id: number;
    title: string;
    completed: boolean
}

// 3. ASYNC FUNCTION
const fetchData = async () => {
    try {
        // 4. AXIOS GET REQUEST WITH GENERICS
        // 'axios.get' directly API call karta hai.
        // <Todo> lagane se hum AxiosResponse ko bata rahe hain ki "Bhai, jo data aayega wo Todo jaisa hoga".
        // Isse TypeScript ko pata chal jata hai ki responce.data ke andar kya-kya fields hain.
        const responce: AxiosResponse<Todo> = await axios.get("https://jsonplaceholder.typicode.com/todo/1");
        
        // Axios automatically data ko JSON mein convert kar deta hai (hume response.json() nahi karna padta).
        // Actual data humesha 'responce.data' ke andar milta hai.
        console.log("Todo", responce.data);
        
    } catch (error: any) {
        // 5. AXIOS SPECIFIC ERROR HANDLING (TYPE GUARD)
        // Agar normal error ko log karenge toh wo generic hogi. 
        // Par 'axios.isAxiosError' ek Type Guard hai jo check karta hai ki kya error Axios ki taraf se aayi hai?
        if(axios.isAxiosError(error)){
            // Ab TS ko 100% pata hai ki ye ek AxiosError hai, toh wo hume auto-suggestions dega.
            console.log("Axios Error", error.message);
            
            // 6. RESPONSE CHECK
            // Agar API ne reject kiya (jaise 404 Not Found ya 500 Server Error)
            // toh error.response available hoga.
            if(error.response){
                // Server ne kis status code (e.g., 404, 500) ke sath fail kiya, wo yahan mil jayega.
                console.log(error.response.status);
            }
        }
    }
}

// Function call (agar execute karna ho toh isko uncomment kar lena)
// fetchData();