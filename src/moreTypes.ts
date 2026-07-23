// ------------------------------------
// 1. Type Assertion
// ------------------------------------

let response: any = "42";

// Forceful Type Assertion using 'as' keyword
let numericLength: number = (response as string).length;

type Book = {
  name: string;
};

let bookString = '{ "name": "who moved my cheese" }';

// JSON.parse() returns 'any', so we assert it as 'Book'
let bookObject = JSON.parse(bookString) as Book;

console.log(bookObject.name);

// Asserting DOM element types
const inputElement = document.getElementById("username") as HTMLInputElement;


// ------------------------------------
// 2. Any vs Unknown
// ------------------------------------

let value: any;

value = "chai";
value = [1, 2, 3];
value = 2.5;

// 'any' allows this without compile-time error,
// even if it fails at runtime
value.toUpperCase();

let newValue: unknown;

newValue = "chai";
newValue = [1, 2, 3];
newValue = 2.5;

// 'unknown' forces us to check the type
// before using methods
if (typeof newValue === "string") {
  newValue.toUpperCase();
}


// ------------------------------------
// 3. Try-Catch & Error Handling (Type Guards)
// ------------------------------------

try {
  // Some API call or code that might throw an error
} catch (error) {
  // Type Guard for error
  if (error instanceof Error) {
    console.log(error.message);
  } else {
    console.log("Error", error);
  }
}


// ------------------------------------
// 4. Forceful Type Assertion (Unknown to String)
// ------------------------------------

const data: unknown = "chai aur code";

const strData: string = data as string;


// ------------------------------------
// 5. Type Never
// ------------------------------------

// Agar hum baad me "superadmin" add karte hain
// aur if-block me handle nahi karte,
// to TypeScript 'never' type check ke zariye warning dega.

type Role = "admin" | "user"; // | "superadmin"

function redirectBasedOnRole(role: Role): void {
  if (role === "admin") {
    console.log("Redirecting to admin dashboard");
    return;
  }

  if (role === "user") {
    console.log("Redirecting to user dashboard");
    return;
  }

  // Yahan tak code aana hi nahi chahiye.
  // Agar upar ke cases handle ho chuke hain,
  // toh 'role' ka type yahan 'never' hoga.
  role;
}

// Ek function jo kabhi kuch return nahi karta
// (Infinite loop ya process)

function neverReturn(): never {
  while (true) {
    // Server running infinitely
  }
}