import { set } from "react-hook-form";
import OrderItem from "../components/OrderItem";

import { useState } from "react";
import qr from '../../public/media/qr.png'
import Image from "next/image";

import s1 from '../../public/media/strips.jpg'
import s2 from '../../public/media/zingerChicken.jpg'
import s3 from '../../public/media/zeroChicken.jpg'


const viewOrder = () => {

    const [code, setCode] = useState(false)

    let total = 0;

    if (typeof window !== 'undefined') {
        // Perform localStorage action
        const items = { ...localStorage }
      }

      const user = "Nour";

      const list = [
        {
          image: s1.src ,
          title : "Chicekn Strips Bucket",
        description : "27 Boneless Original Recipe chicken Tenders served with a creamy sauce. It's made to be dipped. Perfect for sharing with friends and family during a casual get-together or for a tasty meal at home.",
          price: 19
        },
        {
            image : s2.src, 
            title : "Zinger Burger" ,
            description : "100% fillet chicken coated in Zinger flavouring, lettuce, and mayonnaise served on a soft bun. It's a satisfying and flavorful option for those who enjoy a little bit of heat in their meals.",
             price: 12
        },
        {
            image : s3.src,
            title : "Zero Chicken Burger ",
            description : "The meat-free patty is coated in KFC's secret recipe of 11 Herbs and Spices and fried to golden perfection, topped with a sliced cheese and freshly shredded lettuce, then drizzled with Spicy BBQ sauce and mayonnaise, all between a toasted sesame bun.",
             price: 16.99
        }
      ];

    return(
        <>
        <div>
            <div className="flex flex-row justify-evenly justify-content: center">
                <button className = "btn w-32 h-8 items-center content-center rounded-xl ml-16 mt-8 bg-gray-400 hover:bg-gray-500 " onClick={() => setCode(true)}>Generate QR</button>
                {code && <Image className="mt-4 w-16 h-16" src={qr}/>}
            </div> 

            <div>
            <div className="text-white"> {list.map((item) => ( total += item.price) ) } </div>
            {list.map((item) => (
                    <OrderItem key={item.title} image = {item.image} title = {item.title}
                      description = {item.description} price = {item.price} user = {user}/>) ) }

            </div>

            <div className="flex flex-row justify-evenly mb-8">
                <h3 className="text-xl font-bold"> Total: </h3>
                <h4>${Math.round(total*100)/100}</h4>
                <button className = "btn w-32 h-8 items-center content-center rounded-xl bg-red-700 hover:bg-red-800 text-amber-50" onClick={() => { alert("Order will arrive in 50 minutes")}}>Cash on Delivery</button>
            </div>

        </div>
        
        </>

    )
}

export default viewOrder;