// =================================================================
//  TypeScript Types, Interfaces, Unions & Intersections
// =================================================================

// ---------------------------------------------------------
// 1. TYPE ALIASES (Custom Types Banana)
// ---------------------------------------------------------

// PROBLEM: Bina 'type' banaye, hume baar-baar same object signature likhna padta hai.
// Ye code ko padhne me mushkil (complex) banata hai aur galti hone ke chances badhte hain.
function makeChai(order: { teaType: string; sugar: number; strong: boolean }) {
  console.log(order);
}

//  SOLUTION: Hum ek custom 'Type' bana lenge (Jise Type Alias kehte hain).
// Isse ek blue-print ready ho jata hai jisko hum poore project me baar-baar use kar sakte hain.
type ChaiOrder = {
  teaType: string;
  sugar: number;
  strong: boolean;
};

// Ab code kitna clean aur readable lag raha hai! Dekhte hi pata chal raha hai ki 'order' kaisa dikhega.
function makeChaiBetter(order: ChaiOrder) {
  console.log(order);
}


// ---------------------------------------------------------
// 2. TYPE vs INTERFACE (Classes ke saath kya use karein?)
// ---------------------------------------------------------

// Ek normal 'type' se banayi gayi recipe
type TRecipe = {
  water: number;
  milk: number;
};

// 'interface' se banayi gayi recipe (Syntax almost same hai bas '=' nahi lagta)
interface IRecipe {
  water: number;
  milk: number;
}

// Ek Class normal object 'type' ko implement kar sakti hai.
class MasalaChai implements TRecipe {
  water = 100;
  milk = 50;
}

// PROBLEM WITH TYPES IN CLASSES:
// Humne ek Literal Type (fixed string values) banaya.
type CupSize = "small" | "large";

// Agar hum is 'CupSize' type ko kisi class me 'implements' keyword ke sath use karenge, toh ERROR aayega.
// Error: Class can only implement an object type... (Kyunki ye ek primitive union type hai, object nahi)
// class Chai implements CupSize { }  (Code yahan fat jayega)

// SOLUTION (Use Interfaces for Classes):
// Classes ke rules strict hote hain, isliye Classes ke blueprints ke liye hamesha 'interface' banana best practice hai.
interface ICupSize {
  size: "small" | "large";
}

// Ab ye perfectly chalega!
class Chai implements ICupSize {
  size: "small" | "large" = "large"; // Default value 'large' de di
}


// ---------------------------------------------------------
// 3. UNION TYPES (|) (Literal Types - "Ya toh ye, ya wo")
// ---------------------------------------------------------

// Hum restrict kar rahe hain ki 'TeaType' me in teeno ke alawa koi aur value nahi aa sakti.
// (Isko Literal Types bhi bolte hain kyunki humne properly likh diya hai ki kya aayega).
type TeaType = "masala" | "ginger" | "lemon";

function orderChai(tea: TeaType) {
  console.log(tea);
}

// orderChai("coffee");  ERROR dega kyunki "coffee" hamari list (Union) me allow hi nahi hai.
orderChai("masala"); //  Perfectly valid


// ---------------------------------------------------------
// 4. INTERSECTION TYPES (&) (Do types ko aapas me jodna)
// ---------------------------------------------------------

// Pehla type jisme base ingredients hain
type BaseChai = {
  teaLeaves: number;
};

// Dusra type jisme extra ingredients hain
type ExtraIngredient = {
  masala: number;
};

// '&' (Intersection) ka matlab hai: BaseChai aur ExtraIngredient DONO ki properties lazmi (compulsory) honi chahiye.
type SpecialMasalaChai = BaseChai & ExtraIngredient;

// Ab agar object banate waqt dono me se ek bhi property miss hui toh TS complain karega.
const myCup: SpecialMasalaChai = {
  teaLeaves: 2,
  masala: 1, // Agar 'masala' line yahan se hata di, toh error aayega kyunki intersection ne usko zaruri bana diya hai.
};


// ---------------------------------------------------------
// 5. OPTIONAL PROPERTIES (?) (Ho bhi sakta hai, nahi bhi)
// ---------------------------------------------------------

type User = {
  username: string; // Compulsory hai (dena hi padega)
  bio?: string;     // '?' ka matlab hai Optional. User chahe toh apna bio de, warna khali chhod de.
};

// Yahan humne bio nahi diya, phir bhi koi error nahi aayega kyunki wo optional tha.
const user1: User = {
  username: "hitesh",
}; 

// Yahan bio de diya, ye bhi bilkul theek hai.
const user2: User = {
  username: "hitesh",
  bio: "hiteshai",
}; 


// ---------------------------------------------------------
// 6. READONLY PROPERTIES (Ek baar set ho gaya toh lock ho gaya)
// ---------------------------------------------------------

type Config = {
  readonly appName: string; // 'readonly' ka matlab: value ek baar assign hone ke baad LOCK ho jayegi.
  version: number;          // Ye normal hai, isko baad me update kar sakte hain.
};

// Humne app initialize kari aur values set ki
const cfg: Config = {
  appName: "MasterJi",
  version: 1,
};

// cfg.appName = "ChaiCode"; ERROR: Cannot assign to 'appName' because it is a read-only property.
// Aap appName ko overwrite nahi kar sakte kyunki wo readonly hai. Ye safety deta hai ki koi galti se main config change na kar de.

cfg.version = 2; //  Ye valid hai kyunki 'version' pe readonly nahi laga hai, toh update ho jayega.