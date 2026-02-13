// 📘 JavaScript MCQ – Concept List
// 1️⃣ Falsy Values

// Only these are falsy:

// false, 0, -0, 0n, "", null, undefined, NaN

// 2️⃣ Truthy Values

// 👉 Everything else is truthy

// [], {}, " ", "0", function(){}, new Boolean(false)

// 3️⃣ All Objects are Truthy
// Boolean([]) → true
// Boolean({}) → true



// 4️⃣ == vs ===

// == → value comparison (type conversion)

// === → value + type comparison

// 5️⃣ typeof Special Cases
// typeof null      → "object"
// typeof []        → "object"
// typeof function  → "function"

// 6️⃣ Object Comparison

// 👉 Objects compare by reference

// [] == []   → false
// {} == {}   → false

// 7️⃣ NaN Rules
// NaN == NaN        → false
// isNaN("JS")      → true
// Number.isNaN("JS") → false

// 8️⃣ null vs undefined
// null == undefined   → true
// null === undefined  → false

// 9️⃣ Boolean Conversion
// Boolean("")   → false
// Boolean(" ")  → true
// Boolean(0)    → false
// Boolean([])   → true

// 🔟 Logical AND (&&)

// 👉 Returns first falsy or last truthy

// 0 && 1   → 0
// 1 && 2   → 2

// 1️⃣1️⃣ Logical OR (||)

// 👉 Returns first truthy

// 0 || 5   → 5
// 5 || 0   → 5

// 1️⃣2️⃣ Unary + Operator
// +"5"   → 5
// +true  → 1
// +false → 0

// 1️⃣3️⃣ Array to String
// [] + []     → ""
// [1] + 1    → "11"
// [1,2] + 1  → "1,21"

// 1️⃣4️⃣ parseInt Rules
// parseInt("10px") → 10
// parseInt("px10") → NaN

// 1️⃣5️⃣ Relational Operator Trap
// 1 < 2 < 3   → true
// 3 > 2 > 1   → false

// 1️⃣6️⃣ Empty Array Comparison
// [] == ""      → true
// [] == 0       → true
// [] == false   → true

// 1️⃣7️⃣ typeof typeof
// typeof typeof 1 → "string"

// 1️⃣8️⃣ Hoisting
// var → hoisted (undefined)
// let/const → hoisted but TDZ

// 1️⃣9️⃣ Function Return
// function f(){}
// f() → undefined

// 2️⃣0️⃣ Loop Difference
// for...in → index / keys
// for...of → values

