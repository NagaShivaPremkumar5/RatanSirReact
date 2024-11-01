// import Apples from "./Apples";
// import Cart from "./Cart";
// import Cricket from "./Cricket";
// import DiscountOnPrice from "./DiscountOnPrice";

// import Blog from "./Blog";
import DateAndTime1 from "./DateandTime1";
import DateTime from "./DateTime";

// import CourseGoal from "./CourseGoal";


// function App()
// {
//   const currentDate = new Date().toLocaleDateString();
//    const CurrentTime = new Date().toLocaleTimeString();
//   return(
//     <>
//     <h1 style={{textAlign:'center'}}>...REACT....</h1>
//     <h4>Today : {currentDate} <h4 style={{textAlign:"right"}}>{CurrentTime}</h4></h4>
    
//     <Cart/>
//     <Apples/>
//     <Cricket/>
//     <DiscountOnPrice/>
//     </>
//   )
// }
// export default App;


// function App(){

//   return(
//     <>
//     <CourseGoal title ='Learn React' description = 'In-depth'/>
//     <CourseGoal title ='About Ratan' description = 'Ratan sir was nice'/>
//     </>
//   )
// }
// export default App;

function App(){

  return(
    <>
    {/* <Blog/> */}
    <DateTime />
    <h3>*******************</h3>
    <DateAndTime1 />
    </>
  )
}
export default App;