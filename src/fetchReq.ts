// =================================================================

// Topic: Making network requests using modern 'fetch' API (Async/Await)
// =================================================================

// 1. INTERFACE DEFINITION
// API se jo data aayega, hum pehle hi uski 'shape' (structure) bata rahe hain.
// Isse TypeScript hume aage auto-complete suggestions dega aur galtiyan hone se bachayega.
interface Todo {
    userId: number;
    id: number;
    title: string;
    completed: boolean
}

// 2. ASYNC FUNCTION
// 'async' keyword ka use karte hain kyunki internet se data aane mein time lagta hai,
// aur hum chahte hain ki code tab tak wait kare jab tak data na aa jaye.
const fetchData = async () => {
    // 3. TRY-CATCH BLOCK
    // Agar API call ke dauran koi network issue aata hai, toh app crash na ho, 
    // isliye hum code ko 'try' block mein rakhte hain aur error ko 'catch' karte hain.
    try {
        // 'fetch' in-built function hai jo network request bhejta hai.
        // 'await' ka matlab hai: "Ruko, jab tak server se response nahi aa jata".
        const response = await fetch("https://jsonplaceholder.typicode.com/todo/1");
        
        // 4. ERROR CHECKING
        // fetch() tab tak error throw nahi karta jab tak network fail na ho. 
        // Agar page not found (404) hai, toh hume manually check karna padta hai 'response.ok' se.
        if(!response.ok){
            // Agar sab theek nahi hai, toh hum khud ek error fek (throw) rahe hain status code ke sath.
            throw new Error(`HTTP error ${response.status}`)
        }

        // 5. PARSING DATA WITH TYPE
        // response.json() data ko readable JavaScript object mein convert karta hai.
        // ': Todo' lagane se hum TypeScript ko bata rahe hain ki ye 'data' humare Todo interface jaisa dikhega.
        const data: Todo = await response.json()
     
        // Ab tum console.log(data.title) karoge toh VS Code tumhari help karega!
        
    } catch (error: any) {
        // 6. ERROR HANDLING
        // Agar 'try' block mein kahin bhi error aayi (jaise internet band ho ya JSON galat ho), 
        // toh wo yahan 'catch' ho jayegi. 
        // (Note: Hitesh yahan 'any' use kar rahe hain jaldi ke liye, but production mein error ko check karke handle karna behtar hota hai jaisa unhone Type Guards wale video mein sikhaya tha).
        console.log("Error aayi hai:", error);
    }
}

// Function ko execute karna
// fetchData();