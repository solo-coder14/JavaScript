// static is a keyword used to define methods or properties that belong to the class itself rather than to instances of the class.

// Key Characteristics:
// Static members are called on the class directly, not on instances
// They are shared across all instances
// They cannot be called from an instance of the class
// Useful for utility functions, factory methods, or shared data






// Static method
// class MathUtils {
//   static add(a, b) {
//     return a + b;
//   }
  
//   static multiply(a, b) {
//     return a * b;
//   }
// }

// // Call static methods on the class itself
// console.log(MathUtils.add(5, 3));        // 8
// console.log(MathUtils.multiply(4, 2));   // 8

// // ❌ Cannot call on instance
// const math = new MathUtils();
// console.log(math.add(1, 2));  // TypeError: math.add is not a function





//static properties
// class Counter {
//   static count = 0;
  
//   static increment() {
//     Counter.count++;
//   }
  
//   getCount() {
//     return Counter.count;
//   }
// }

// console.log(Counter.count);  // 0
// Counter.increment();
// Counter.increment();
// console.log(Counter.count);  // 2

// const c1 = new Counter();
// const c2 = new Counter();
// console.log(c2.getCount());  // 2 (shared across instances)