// function App()
// {
//   const cities = ['Hyderabad','Banglore','chennai','kolkota']

//   return(
//     <>
//     <h1> Popular cities</h1>
//    <p> {cities}</p>
//    <p>First city : {cities[0]}</p>
//    <p> Last city: {cities[cities.length-1]}</p>
//    <p> Cities Length : {cities.length}</p>
//     </>
//   )
// }
// export default App;
// function App() {
//   const books = [
//     { id: 1001, name: "Spring Boot", author: "Ratansir" },
//     { id: 1002, name: "Oracle", author: "Dinesh Sir" },
//     { id: 1003, name: "Core Java", author: "Srinivas Sir" }
//   ];

//   const listOfBooks = books.map((book) => (
//     <li key={book.id}>
//       <b>{book.name}</b> by {book.author}
//     </li>
//   ));

//   return (
//     <>
//       <h1>List of Books</h1>
//       <ul>{listOfBooks}</ul>
//     </>
//   );
// }

// export default App;

// 
// 
//veg items are available....
// function App() {
//   const items = [
//     { title: 'cabbage', category: 'non-veg', id: 1 },
//     { title: 'chicken', category: 'non-veg', id: 2 },
//     { title: 'mutton', category: 'non-veg', id: 3 },
//     { title: 'spinach', category: 'non-veg', id: 4 },
//     { title: 'fish', category: 'non-veg', id: 5 },
//     { title: 'potato', category: 'non-veg', id: 6 }
//   ];
//   const vegItems = items.filter(item=> item.category ==='veg');
 
//   const listitems = items.map(item=>
//   (<li key ={item.id} style={{color:item.category==="veg"? "green": "red"}}>
//     Id :{item.id}, Name : {item.title}. Category : {item.category}
//   </li>));

// return(
//   <>
//   <h1 style={{color:'blue'}}>Items List </h1>
//   <ol>
//     {vegItems.length >0? listitems:'veg items are not available'}
//   </ol>
//   </>
// )
// }
// export default App;
// non veg items are not avaiable
// function App() {
//   const items = [
//     { title: 'cabbage', category: 'veg', id: 1 },
//     { title: 'chicken', category: 'veg', id: 2 },
//     { title: 'mutton', category: 'veg', id: 3 },
//     { title: 'spinach', category: 'veg', id: 4 },
//     { title: 'fish', category: 'veg', id: 5 },
//     { title: 'potato', category: 'veg', id: 6 }
//   ];
//   const nonvegItems = items.filter(item=> item.category ==='non-veg');
 
//   const listitems = items.map(item=>
//   (<li key ={item.id} style={{color:item.category==="non-veg"? "red": "green"}}>
//     Id :{item.id}, Name : {item.title}. Category : {item.category}
//   </li>));

// return(
//   <>
//   <h1 style={{color:'blue'}}>Items List </h1>
//   <ol>
//     {nonvegItems.length >0? listitems:'nonveg items are not available'}
//   </ol>
//   </>
// )
// }
// export default App;
//all itemss
// function App() {
//   const items = [
//     { title: 'cabbage', category: 'veg', id: 1 },
//     { title: 'chicken', category: 'non-veg', id: 2 },
//     { title: 'mutton', category: 'non-veg', id: 3 },
//     { title: 'spinach', category: 'veg', id: 4 },
//     { title: 'fish', category: 'non-veg', id: 5 },
//     { title: 'potato', category: 'veg', id: 6 }
//   ];

//   const vegItems = items.filter((item) => item.category === 'veg');
//   const nonVegItems = items.filter((item) => item.category === 'non-veg');

//   const vegList = vegItems.map((item) => <li key={item.id}>{item.title}</li>);
//   const nonVegList = nonVegItems.map((item) => <li key={item.id}>{item.title}</li>);

//   return (
//     <>
//       <h1>Items</h1>
//       <h2>VegItems</h2>
//       <ol>{vegList}</ol>
//       <h2>Non-Vegetarian</h2>
//       <ol>{nonVegList}</ol>
//     </>
//   );
// }

// export default App;

function App() {
  const items = [
    { title: 'cabbage', category: 'vegd', id: 1 },
    { title: 'chicken', category: 'vegd', id: 2 },
    { title: 'mutton', category: 'vegd', id: 3 },
    { title: 'spinach', category: 'vegd', id: 4 },
    { title: 'fish', category: 'vegd', id: 5 },
    { title: 'potato', category: 'vegd', id: 6 }
  ];

  const vegItems = items.filter((item) => item.category === 'veg');
  const nonVegItems = items.filter((item) => item.category === 'non-veg');

  const vegList = vegItems.map((item) => <li key={item.id}>{item.title}</li>);
  const nonVegList = nonVegItems.map((item) => <li key={item.id}>{item.title}</li>);

  return (
    <>
      <h1>Items</h1>
      <h2>Veg Items</h2>
      <ol>{vegItems.length > 0 ? vegList : 'Veg items are not available'}</ol>
      <h2>Non-veg Items</h2>
      <ol>{nonVegItems.length > 0 ? nonVegList : 'Non-veg items are not available'}</ol>
    </>
  );
}

export default App;

