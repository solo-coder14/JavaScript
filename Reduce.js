const people = [
    { name: 'Alice', age: 21 },
    { name: 'Bob', age: 21 },
    { name: 'Charlie', age: 25 }
  ];
  
  const grouped = people.reduce((acc, person) => {
    const age = person.age;
    if (!acc[age]) acc[age] = [];
    acc[age].push(person);
    return acc;
  }, {});
  
  console.log(grouped);

  