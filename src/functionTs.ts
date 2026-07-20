// =================================================================
//  NOTES: Functions in TypeScript
// =================================================================

// ---------------------------------------------------------
// 1. BASIC FUNCTION TYPING (Parameters ko type dena)
// ---------------------------------------------------------

// TypeScript mein function banate waqt hume ye batana hota hai ki 
// function ke parameters (inputs) kis type ke honge.
function makeChai(type: string, cups: number) {
  console.log(`Making ${cups} cups of ${type}`);
}

makeChai("Masala Chai", 2); // Correct
// makeChai("Masala Chai", "two"); ERROR: TypeScript rokk dega kyunki cups 'number' hona chahiye.


// ---------------------------------------------------------
// 2. RETURN TYPE (Function kya wapas karega usko type dena)
// ---------------------------------------------------------

// Parentheses () ke baad ': number' lagane ka matlab hai 
// ki ye function humesha ek number hi return karega.
function getChaiPrice(): number {
  return 25; // Agar return "25" (string) karenge, toh TS error dega.
}

// Complex Return Type with Conditionals
function makeOrder(order: string): string | null {
  if (!order) {
    return null; // Agar order nahi aaya toh null wapas bhejdo
  }
  return order;  // Warna order (string) wapas bhejdo
}


// ---------------------------------------------------------
// 3. VOID RETURN TYPE (Jab function kuch bhi return na kare)
// ---------------------------------------------------------

// Agar koi function sirf kuch print kar raha hai ya operation kar raha hai,
// aur "return" keyword ka use nahi kar raha, toh uska type 'void' hota hai.
function logChai(): void {
  console.log("Chai is ready!");
  // return "Done";  ERROR: Type 'string' is not assignable to type 'void'.
}


// ---------------------------------------------------------
// 4. OPTIONAL & DEFAULT PARAMETERS
// ---------------------------------------------------------

// OPTIONAL PARAMETER (?):
// '?' lagane se 'type' pass karna zaroori nahi rehta. Agar nahi diya toh undefined manega.
function orderChaiOptional(type?: string) {
  console.log(type);
}

// DEFAULT PARAMETER (=):
// Agar koi value pass nahi ki, toh by default "Regular" type man lega.
function orderChaiDefault(type: string = "Regular") {
  console.log(type);
}

// BEST PRACTICE RULE: 
// Optional aur Default parameters humesha function ke aakhir (end) mein likhne chahiye.


// ---------------------------------------------------------
// 5. COMPLEX FUNCTION PARAMETERS (Inline Object Types)
// ---------------------------------------------------------

// Jab hum kisi function mein poora object paas karte hain, 
// toh uske type ko inline define karne ka syntax thoda darawana lag sakta hai, 
// par hota bahut aasan hai.

function createChai(order: { type: string; sugar: number; size: "small" | "large" }): number {
  // Yaha order ke andar type(string), sugar(number) aur size(literal union) hona chahiye.
  // Aur ye function ek number return karega.
  return 4; // Suppose humne 4 wapas kar diya
}

// Ise hum 'Type Alias' ya 'Interface' bana kar bhi clean kar sakte the. (Pichle videos ki tarah)