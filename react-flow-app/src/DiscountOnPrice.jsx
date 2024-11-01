import { useState } from "react";

function DiscountOnPrice(){

    const originalPrice = 5999; 
    const [discountedPrice,setDiscountPrice] = useState(0);
    const [price,setPrice] = useState(0);
    const [discount,setDiscount] = useState(0);

    const applyDiscount = (discountValue) => {
        if(discountValue === 10){
            setDiscountPrice(originalPrice * 0.9)          
            setDiscount(originalPrice * 0.1);
            setPrice(price);
        } else if (discountValue ===20){
            setDiscountPrice(originalPrice * 0.8)          
            setDiscount(originalPrice * 0.2);
            setPrice(price);
        } else if (discountValue ===30) {
            setDiscountPrice(originalPrice * 0.7)          
            setDiscount(originalPrice * 0.3);
            setPrice(price);
        } else  {
            setDiscount(0);
            setPrice(price);
            setDiscountPrice(0)
        }
      };
      return(
        <>
        <hr></hr>
        <hr></hr>
        <hr></hr>
        <h1 style={{color:'pink'}}> Original Price:${originalPrice}</h1>
        <h2 style={{color:'yellow'}}> Discounted Price : ${discount.toFixed(2)}</h2>
        <h3 style={{color:'red'}}> Discount applied :{discount}%</h3>
        <h3 style={{color:'white'}}>Discounted Amount :${discountedPrice} </h3>
       
       
       <p>Click a button to apply a discount</p>
       <button style={{color:'green'}} onClick={()=> applyDiscount(10)}>Apply 10% Discount</button>
       <button style={{color:'blue'}} onClick={()=> applyDiscount(20)}>Apply 20% Discount</button>
       <button style={{color:'pink'}} onClick={()=> applyDiscount(30)}>Apply 30% Discount</button>
       <button style={{color:'red'}} onClick={()=> applyDiscount(0)}>Reset Price</button>
        </>

      )
}
export default DiscountOnPrice;