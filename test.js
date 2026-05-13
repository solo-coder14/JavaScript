const original = {
  name: "Alice",
  details: { age: 25, city: "New York" }
};

// const shallowCopy = { ...original };
const shallowCopy = original;

shallowCopy.name = "woafi"
shallowCopy.details.age = 30;

console.log(original)
console.log(shallowCopy)



