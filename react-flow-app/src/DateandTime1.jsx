function DateAndTime1 (){
    const now = new Date();

    const currentDate = now.toDateString(); // ex:- wed oct 23 2024
    const currentTime =now.toLocaleTimeString(); //  ex:- 9:37 Am


    // normal 
    const day =now.getDate();
    const dayIndex = now.getDay();
    const monthIndex = now.getMonth();
    const year = now.getFullYear();

    // take days array 
    const days =["sun","mon","tue","wed","thu","fri","satu"]

    // take months array

    const months = ["jan","feb","mar","apr","may","june","jul","aug","sep","oct","nov","dec"]

     
    return(
        <>
        <h2 style={{color:"blue"}}>current date:{currentDate}</h2>
        <h2 style={{color:"red"}}>current Time: {currentTime}</h2>
        <h2 style={{color:"green"}}>current date and time :{currentDate} {currentTime}</h2>
        <h2 style={{color:"white"}}> ----date and time------</h2>
        <h2 style={{color:"orange"}}>today: {days[dayIndex]} </h2>
        <h2 style={{color:"yellow"}}>date: {day}</h2>
        <h2 style={{color:"purple"}} >month: {months[monthIndex]}</h2>
        <h2 style={{color:"green"}}> year: {year}</h2>
        </>
    )
}
export default DateAndTime1;