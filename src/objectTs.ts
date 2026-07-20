// =================================================================
// NOTES: Objects and Utility Types in TypeScript
// =================================================================

// ---------------------------------------------------------
// 1. OBJECT INFERENCE & DECLARATION
// ---------------------------------------------------------

// TypeScript automatically types infer (guess) kar leta hai.
const myChai = {
  name: "Masala Chai", // Inferred as 'string'
  price: 20,           // Inferred as 'number'
  isHot: true          // Inferred as 'boolean'
};

// Explicitly Type define karna hamesha best practice hai
type TeaType = {
  name: string;
  price: number;
  isHot: boolean;
};

const newTea: TeaType = {
  name: "Ginger Tea",
  price: 25,
  isHot: true, 
  // Agar isHot: 5 likhenge toh TS error dega kyunki sirf boolean allowed hai.
};


// ---------------------------------------------------------
// 2. ARRAYS INSIDE OBJECTS
// ---------------------------------------------------------

type T = {
  name: string;
  price: number;
  ingredients: string[]; // String values ka Array
};

const adrakChai: T = {
  name: "Adrak Chai",
  price: 25,
  ingredients: ["Ginger", "Tea Leaves", "Sugar"] // Agar isme koi Number (e.g. 2) dalenge toh error aayega.
};


// ---------------------------------------------------------
// 3. DUCK TYPING (Structural Typing)
// ---------------------------------------------------------
// "If it looks like a duck and walks like a duck, it might be a duck."
// TypeScript dekhta hai ki jo zaroori properties chahiye thi kya wo hain? 
// Agar usse extra properties de di, toh bhi wo chal jayega (kuch cases mein).

type Cup = {
  size: string;
};

const bigCup = {
  size: "500 ml",
  material: "Steel" // Yeh property Cup type mein nahi hai!
};

// Phir bhi TS error nahi dega kyunki bigCup mein Cup ke liye zaroori 'size' property toh hai hi. 
// Baaki 'material' ignore kar dega (lekin compile nahi rokega agar is tarah assign kiya).
let smallCup: Cup = bigCup; 


// ---------------------------------------------------------
// 4. SPLITTING OBJECT TYPES (Code clean aur reusable banane ke liye)
// ---------------------------------------------------------

type Item = {
  name: string;
  quantity: number;
};

type Address = {
  street: string;
  pin: number;
};

// Alag-alag types ko ek bade type mein jod (compose) dena ek acchi practice hai.
type Order = {
  orderId: string;
  items: Item[]; // Upar banaye gaye type ka array banaya
  address: Address;
};


// =================================================================
//  UTILITY TYPES (Magic of TypeScript)
// =================================================================

type ChaiInfo = {
  name: string;
  price: number;
  isHot: boolean;
  ingredients?: string[];
};

// ---------------------------------------------------------
// 5. Partial<Type> -> Sabko Optional (?) bana deta hai
// ---------------------------------------------------------
// 'Partial' use karne par aapko saari properties pass karne ki zaroorat nahi hoti.

function updateChai(updates: Partial<ChaiInfo>) {
  console.log("Updating chai with:", updates);
}
updateChai({ price: 25 }); //  Valid! Kyunki Partial ne sabko optional bana diya (sirf price update kiya).


// ---------------------------------------------------------
// 6. Required<Type> -> Sabko Compulsory bana deta hai
// ---------------------------------------------------------
// Agar koi property optional (?) thi, toh wo use bhi compulsory bana dega.

type ChaiOrderType = {
  name?: string;
  quantity?: number;
};

function placeOrder(order: Required<ChaiOrderType>) {
  console.log(order);
}
// placeOrder({ name: "Masala Chai" });  ERROR! Kyunki Required ki wajah se 'quantity' dena ab zaroori hai.
placeOrder({ name: "Masala Chai", quantity: 2 }); // Valid


// ---------------------------------------------------------
// 7. Pick<Type, Keys> -> Type mein se sirf kuch properties uthana
// ---------------------------------------------------------
// Pura type nahi chahiye, usme se sirf kuch hi fields select karni hain toh 'Pick' use karte hain.

type BasicChaiInfo = Pick<ChaiInfo, "name" | "price">;

const basicInfo: BasicChaiInfo = {
  name: "Lemon Tea",
  price: 30,
  // isHot ya ingredients maangega hi nahi kyunki humne unhe Pick nahi kiya.
};


// ---------------------------------------------------------
// 8. Omit<Type, Keys> -> Type mein se kuch properties ko HATA dena
// ---------------------------------------------------------
// 'Pick' ka ulta. Kisi property ko chhodna ho (skip karna ho) baaki sab chahiye.

type ChaiNew = {
  name: string;
  price: number;
  isHot: boolean;
  secretIngredients: string[]; // Hum ye logo ko nahi dikhana chahte
};

// 'ChaiNew' type lelo, lekin usme se "secretIngredients" ko nikal do (omit kar do).
type PublicChai = Omit<ChaiNew, "secretIngredients">;

const myPublicChai: PublicChai = {
  name: "Kulhad Chai",
  price: 40,
  isHot: true,
  // secretIngredients maangega hi nahi!
};