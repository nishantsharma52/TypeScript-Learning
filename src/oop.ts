// =================================================================
//  NOTES: OOP Concepts in TypeScript
// =================================================================

// ---------------------------------------------------------
// 1. BASIC CLASS & CONSTRUCTOR
// ---------------------------------------------------------

class Chai {
  // Properties ko pehle type dena padta hai
  flavor: string;
  price: number;

  // Constructor class ka blueprint set karta hai
  constructor(flavor: string, price: number) {
    this.flavor = flavor; // 'this' hamesha naye banne wale object ko point karta hai
    this.price = price;
  }
}

// Object banana (Instance)
const masalaChai = new Chai("Masala", 20);
// Ab masalaChai.flavor type karenge toh TS hume suggestions dega.


// ---------------------------------------------------------
// 2. ACCESS MODIFIERS (Public, Private, Protected)
// ---------------------------------------------------------

class SpecialChai {
  // 'public' (Default): Class ke bahar se koi bhi access kar sakta hai
  public flavor: string = "Masala Chai"; 

  // 'private': Sirf isi class ke andar access ho sakta hai, bahar se nahi.
  private secretIngredient: string = "Cardamom";

  // Private property ko access karne ke liye method (function) banana padta hai
  public revealSecret() {
    return this.secretIngredient;
  }
}

const myTea = new SpecialChai();
// myTea.secretIngredient ERROR: Private hai, direct access nahi milega.
myTea.revealSecret(); //  Valid, kyunki revealSecret public hai.


// ---------------------------------------------------------
// 3. PROTECTED (Staff Door)
// ---------------------------------------------------------
// Protected properties ka access class aur uski bachha-classes (Extended classes) ke paas hota hai.

class Shop {
  protected shopName: string = "Chai Corner";
}

// Branch (Child) Shop (Parent) ko extend (inherit) kar rahi hai
class Branch extends Shop {
  public getName() {
    return this.shopName; // Valid: Kyunki Branch bachha hai, toh parent ke protected property ka access mil gaya.
  }
}


// ---------------------------------------------------------
// 4. JAVASCRIPT # PRIVATE FIELD vs TYPESCRIPT 'private'
// ---------------------------------------------------------

class Wallet {
  // TS ka private keyword (Compile time check)
  // private balance = 100;

  // JS ka native private field (Runtime check - TS isko bhi support karta hai)
  #balance = 100;

  public getBalance() {
    return this.#balance;
  }
}

const w = new Wallet();
// w.#balance  ERROR: JS ka native private property direct access nahi hoti.


// ---------------------------------------------------------
// 5. READONLY PROPERTIES
// ---------------------------------------------------------

class Cup {
  // readonly: Ek baar constructor mein value assign ho gayi, fir change nahi hogi.
  readonly capacity: number;

  constructor(capacity: number) {
    this.capacity = capacity;
  }
}

const myCup = new Cup(250);
// myCup.capacity = 300;  ERROR: Readonly property change nahi ho sakti.


// ---------------------------------------------------------
// 6. GETTERS & SETTERS
// ---------------------------------------------------------
// Private variables ko indirectly read/write karne ka clean tareeka. Convention ye hai ki private vars ke aage '_' (underscore) lagate hain.

class ModernChai {
  private _sugar: number = 2;

  // Getter (Value read karne ke liye)
  get sugar(): number {
    return this._sugar;
  }

  // Setter (Value write/update karne ke liye)
  set sugar(value: number) {
    if (value > 5) {
      throw new Error("Too sweet! Itna meetha mat lo.");
    }
    this._sugar = value;
  }
}

const c = new ModernChai();
console.log(c.sugar); // Output: 2 (Getter call hua)
c.sugar = 3; // (Setter call hua)
// c.sugar = 10;  Error throw karega (Too sweet)


// ---------------------------------------------------------
// 7. STATIC MEMBERS
// ---------------------------------------------------------
// Static properties kisi specific object ke liye nahi, balki puri Class ke liye hoti hain. Ise 'new' keyword se nahi, direct Class ke naam se access karte hain.

class CafeChai {
  static shopName: string = "ChaiCode Cafe"; 
  
  constructor(public flavor: string) {
    // Constructor shortcut: Parameters mein hi 'public/private' likh dene se TS unhe automatically property bana deta hai.
  }
}

// CafeChai class par direct dot lagake access hoga, object banake nahi.
console.log(CafeChai.shopName);


// ---------------------------------------------------------
// 8. ABSTRACT CLASSES
// ---------------------------------------------------------
// Abstract class ek blueprint ka blueprint hota hai. Iska direct object nahi banta, bas doosri classes isko extend karke rules follow karti hain.

abstract class Drink {
  // Jo bhi class Drink ko extend karegi, usme make() function hona COMPULSORY hai.
  abstract make(): void; 
}

class MyChai extends Drink {
  // Agar make() yaha define nahi kiya, toh TS error dega.
  make() {
    console.log("Brewing Chai...");
  }
}
// const d = new Drink();  ERROR: Abstract class ka direct object (instance) nahi ban sakta.


// ---------------------------------------------------------
// 9. COMPOSITION (Inheritance ka alternative)
// ---------------------------------------------------------
// "Extends" ke bajaye hum ek class ko dusri class ke andar inject kar dete hain.

class Heater {
  heat() {
    console.log("Heating...");
  }
}

class ChaiMaker {
  // ChaiMaker class apne constructor me Heater type ka private instance mangti hai
  constructor(private heater: Heater) {}

  make() {
    this.heater.heat(); // Heater ke function ko access kar liya
  }
}