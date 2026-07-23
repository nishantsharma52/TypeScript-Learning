// =================================================================
//  NOTES: Interfaces & Generics in TypeScript
// =================================================================

// ---------------------------------------------------------
// 1. INTERFACES (Objects ko shape dena)
// ---------------------------------------------------------

// Interface object ka structure define karta hai (bilkul 'type' ki tarah, but zada use hota hai)
interface Chai {
  flavor: string;
  price: number;
  milk?: boolean; // Optional property (?)
}

// Interface use karke object banana
const masalaChai: Chai = {
  flavor: "Masala",
  price: 30,
  // milk optional hai, isliye yahan nahi diya toh bhi chalega.
};


// ---------------------------------------------------------
// 2. READONLY PROPERTIES & MERGING INTERFACES
// ---------------------------------------------------------

// Readonly property (Ek baar set hone ke baad change nahi ho sakti)
interface Shop {
  readonly id: number;
  name: string;
}

const myShop: Shop = {
  id: 1,
  name: "ChaiCode Cafe",
};
// myShop.id = 2;  ERROR: Cannot assign to 'id' because it is a read-only property.

// =================================================
//  INTERFACE MERGING (Sabse powerful feature)
// =================================================
// Agar aap same naam se do interface banate ho, toh TS unhe aapas me jodd (merge) deta hai.

interface User {
  name: string;
}

// Kisi aur file ya library ne aake same interface me kuch add kar diya:
interface User {
  age: number;
}

// Ab TS ko dono properties chahiye!
const hitesh: User = {
  name: "Hitesh",
  age: 42, // Agar age nahi denge toh error aayega kyunki merge ho chuka hai.
};


// ---------------------------------------------------------
// 3. INTERFACES WITH FUNCTIONS (Methods)
// ---------------------------------------------------------

interface DiscountCalculator {
  // Yahan sirf function ka signature banaya hai, logic nahi.
  // Matlab: Ye ek function lega jisme price as number aayega, aur return bhi number karega.
  (price: number): number;
}

// Interface ko implement karna
const apply50: DiscountCalculator = (price) => {
  return price * 0.5;
};

// Interface me class/object methods define karna
interface TeaMachine {
  start(): void;       // Kuch return nahi karega
  stop(time: number): void; // Time input lega, but return void
}

// Ab koi bhi class/object agar TeaMachine type ka hai, toh use ye dono methods rakhne hi padenge.
const myMachine: TeaMachine = {
  start: () => console.log("Started"),
  stop: (time) => console.log(`Stopped at ${time}`),
};


// ---------------------------------------------------------
// 4. INDEX SIGNATURES
// ---------------------------------------------------------
// Jab hume properties ke naam pehle se nahi pata hote, but unka type pata hota hai.

interface ChaiRatings {
  // Iska matlab hai: "Koi bhi property (flavor) jo ki string ho, uski value number honi chahiye."
  [flavor: string]: number;
}

const ratings: ChaiRatings = {
  masala: 4.5,
  ginger: 4.0,
  lemon: 3.5,
  // "cardamom": "best" ERROR: Value number hi honi chahiye!
};


// ---------------------------------------------------------
// 5. EXTENDING INTERFACES
// ---------------------------------------------------------

interface A {
  a: string;
}

interface B {
  b: string;
}

// Interface C, A aur B dono ki properties ko inherit (extend) kar raha hai.
interface C extends A, B {
  c: string;
}

const myObj: C = {
  a: "A",
  b: "B",
  c: "C",
};


// =================================================================
//  GENERICS (Reusable Templates)
// =================================================================
// Generics code ko flexible banate hain. Jab hume pehle se data type nahi pata hota, toh hum 'T' (ya koi variable) use karte hain.

// ---------------------------------------------------------
// 6. GENERIC FUNCTIONS
// ---------------------------------------------------------

// Function define karte waqt <T> lagaya. (T = Type). 
// Jo type input me aayega, wahi array me wapas aayega.
function wrapInArray<T>(item: T): T[] {
  return [item];
}

// Yahan T = number ban gaya
const numArr = wrapInArray(42);       // Output: [42] (Type: number[])

// Yahan T = string ban gaya
const strArr = wrapInArray("Masala"); // Output: ["Masala"] (Type: string[])


// Multiple Generics (A aur B)
function pair<A, B>(item1: A, item2: B): [A, B] {
  return [item1, item2];
}

const myPair = pair("Chai", 10); // Type: [string, number]


// ---------------------------------------------------------
// 7. GENERIC INTERFACES (Bohot zyada use hota hai APIs me)
// ---------------------------------------------------------

// Box type ka data kuch bhi ho sakta hai (string, number, object), wo jab object banega tab decide hoga.
interface Box<T> {
  content: T;
}

// Jab hum variable bana rahe hain, tab humne bataya ki <T> yahan 'number' hai.
const numberBox: Box<number> = {
  content: 10,
};

const stringBox: Box<string> = {
  content: "Tea Leaves",
};


// ---------------------------------------------------------
// 8. REAL WORLD EXAMPLE: API PROMISE
// ---------------------------------------------------------
// Jab backend se data aata hai, status code hamesha number hota hai, par 'data' alag-alag type ka ho sakta hai.

interface ApiResponse<T> {
  status: number;
  data: T; // Data ka type API call ke waqt decide hoga
}

// Yahan humne bataya ki 'data' ek object hoga jisme 'flavor' property string hogi.
const chaiResponse: ApiResponse<{ flavor: string }> = {
  status: 200,
  data: {
    flavor: "Masala Chai", // Ye strictly is shape ko follow karega
  },
};