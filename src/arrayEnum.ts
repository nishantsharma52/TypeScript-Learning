// =================================================================
// NOTES: Arrays, Tuples, and Enums in TypeScript
// =================================================================

// ---------------------------------------------------------
// 1. ARRAYS
// ---------------------------------------------------------

// String values ka ek array banana
const chaiFlavors: string[] = ["masala", "adrak"];
// chaiFlavors.push(2);  ERROR: String array me number push nahi kar sakte.

// Number values ka array
const chaiPrices: number[] = [10, 20, 30];

// Angular bracket syntax (Alternative way to define Arrays)
const ratings: Array<number> = [4.5, 5.0]; 

// Array of Objects (Custom type ka array)
type Chai = {
  name: string;
  price: number;
};

// Yahan humne bataya ki 'menu' variable ek array hoga, jisme sirf 'Chai' type ke objects honge.
const menu: Chai[] = [
  { name: "Masala", price: 15 },
  { name: "Adrak", price: 20 },
];

// Readonly Arrays (Jisme baad me changes ya push allowed na ho)
const cities: readonly string[] = ["Delhi", "Jaipur"];
// cities.push("Pune");  ERROR: Property 'push' does not exist on type 'readonly string[]'.

// 2D Arrays (Array ke andar Array - Multi-dimensional)
const table: number[][] = [
  [1, 2, 3],
  [4, 5, 6],
];


// ---------------------------------------------------------
// 2. TUPLES (Strict Typed & Ordered Arrays)
// ---------------------------------------------------------

// Tuples basically arrays hi hote hain, lekin inme Order aur Type fix hota hai.
type ChaiTuple = [string, number];

const myChai: ChaiTuple = ["Masala", 20]; //  Valid
// const wrongChai: ChaiTuple = [20, "Masala"];  ERROR: Order matters! Pehle string aana chahiye, fir number.

// Optional elements in Tuples
type UserInfo = [string, number, boolean?]; // 3rd element 'boolean' hai but Optional (?) hai
const user1: UserInfo = ["Hitesh", 100]; // Valid, 3rd skip kar diya
const user2: UserInfo = ["Hitesh", 100, true]; // Valid

// Readonly Tuples
const location: readonly [number, number] = [28.66, 32.22];
// location[0] = 29.11; ERROR: Readonly hone ke karan change nahi kar sakte.

// Named Tuples (Best practice: Taaki pata chale array ki value kis cheez ke liye hai)
type ChaiItem = [name: string, price: number];
const mySpecialChai: ChaiItem = ["Masala", 25];

//  GAUCHA / GOTCHA (Ajeeb behavior of Tuples)
// Tuples backend me arrays hi hote hain. TS hume unme order strictly force karta hai assign karte waqt...
// LEKIN, usme '.push()' allow kar deta hai jo unexpected bugs la sakta hai!
const t: [string, number] = ["Chai", 10];
t.push(100); // Yeh allow ho jata hai TypeScript me, lekin iska dhyan rakhna chahiye kyunki ye tuple ka purpose thoda tod deta hai.


// ---------------------------------------------------------
// 3. ENUMS (Choices ko restrict karna)
// ---------------------------------------------------------

// Enums (Enumerations) se hum defined choices bana dete hain, taaki humari app me galti se koi aur value na pass ho.
enum CupSize {
  Small,  // Default value is 0
  Medium, // Default value is 1
  Large,  // Default value is 2
}

const userSize: CupSize = CupSize.Large; 

// Auto-increment in Enums
enum Status {
  Pending = 100, // Ab next values automatically 101, 102 ban jayengi.
  Served,        // Value = 101
  Cancelled,     // Value = 102
}

// String Enums (Most common in production)
// Enums me values usually Capital rakhte hain as a standard practice.
enum ChaiType {
  MASALA = "Masala",
  GINGER = "Ginger",
}

function makeEnumChai(type: ChaiType) {
  console.log(`Making ${type} chai`);
}

// makeEnumChai("Masala");  ERROR: "Masala" seedha string pass nahi kar sakte. Enum ka hi use karna hoga:
makeEnumChai(ChaiType.MASALA); // Valid


// Heterogeneous Enums (Mix of String & Number) 
//  (NOT RECOMMENDED, standard practice nahi hai)
enum RandomEnum {
  ID = 1,
  NAME = "Chai",
}

// Const Enums (Performance Optimization ke liye)
// Isme future changes restrict ho jate hain aur JS compile hone par clean code nikalta hai.
const enum Sugars {
  Low = 1,
  Medium = 2,
  High = 3,
}

const s: Sugars = Sugars.Medium; // s ki value 2 hogi