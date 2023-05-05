import { useState } from "react";
import Item from "../components/Item"
import s1 from '../../public/media/strips.jpg'
import s2 from '../../public/media/zingerChicken.jpg'
import s3 from '../../public/media/zeroChicken.jpg'

import Link from "next/link";


const CFC = () => {

    const [order, setOrder] = useState()
    const list = [
        {
          image: s1 ,
          title : "Chicekn Strips Bucket",
        description : "27 Boneless Original Recipe chicken Tenders served with a creamy sauce. It's made to be dipped. Perfect for sharing with friends and family during a casual get-together or for a tasty meal at home.",
          price:"$19"
        },
        {
            image : s2, 
            title : "Zinger Burger" ,
            description : "100% fillet chicken coated in Zinger flavouring, lettuce, and mayonnaise served on a soft bun. It's a satisfying and flavorful option for those who enjoy a little bit of heat in their meals.",
             price:"$12"
        },
        {
            image : s3,
            title : "Zero Chicken Burger ",
            description : "The meat-free patty is coated in KFC's secret recipe of 11 Herbs and Spices and fried to golden perfection, topped with a sliced cheese and freshly shredded lettuce, then drizzled with Spicy BBQ sauce and mayonnaise, all between a toasted sesame bun.",
             price:"$16.99"
        }
      ];

    return(
        <>
        <div className="flex justify-between">
            <div className="text-5xl ml-16 mt-16 items-center content-center justify-center"> CFC</div>
            <button className="btn w-32 h-8 items-center content-center rounded-xl m-16 bg-red-200 hover:bg-red-800"> <Link href='/viewOrder'>Create Order</Link></button>
        </div>
            {list.map((item) => (
                    <Item key={item.title} image = {item.image.src} title = {item.title}  description = {item.description} price = {item.price} />))}
        </>
    )
}

export default CFC;