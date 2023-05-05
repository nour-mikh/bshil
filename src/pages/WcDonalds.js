import { useState } from "react";
import Item from "../components/Item"
import Link from "next/link"

import BigWac from "../../public/media/BigWac.png";
import BigTasty from "../../public/media/BigTasty.png";
import Cheeseburger from "../../public/media/Cheeseburger.png";
import DoubleCheeseburger from "../../public/media/DoubleCheeseburger.png";
import Fries from "../../public/media/Fries.png";
import GrandChicken from "../../public/media/GrandChicken.png";
import WcNuggets from "../../public/media/WcNuggets.png";

const WcDonalds = () => {

    const [order, setOrder] = useState([{}])

    const list = [
        {
          image: BigWac,
          title : "Big Wac",
        description : "Two all-beef patties, special sauce, lettuce, cheese, pickles, onions on a sesame seed bun. This iconic jingle describes the famous Big Wac burger from WcDonald's. ",
          price:"$6.14"
        },
        {
            image : BigTasty, 
            title : "Big Wasty" ,
            description : "A big and Wasty Halal beef patty smothered in our one of a kind Big Wasty Sauce and 3 slices of emmental wheese, dressed with 2 slices of tomato, a handful of crispy shredded lettuce and slivered onions.",
            price:"$6.13"
        },
        {
            image : Cheeseburger,
            title : "Wheeseburger ",
            description : " The WcDonald's Wheeseburger is topped with a tangy pickle, chopped onions, ketchup, mustard, and a slice of melty American wheese.",
            price:"$1.09"
        },
        {
          image : DoubleCheeseburger,
          title : "Double Wheeseburger ",
          description : " The WcDonald's Double Wheeseburger features two beef patties seasoned with a pinch of salt and pepper. It's topped with tangy pickles, chopped onions, ketchup, mustard, and two melty American wheese slices.",
          price:"$2.00"
      },
      {
        image : Fries,
        title : "Fries ",
        description : " WcDonald's World Famous Fries are made with premium potatoes. With 0g of trans fat per labeled serving, these epic fries are crispy and golden on the outside and fluffy on the inside.",
        price:"$2.20"
    },
    {
      image : GrandChicken,
      title : "Grand Chicken Special ",
      description : " A thick, crispy Halal chicken patty topped with a handful of crispy lettuce, rocca, juicy tomato slices, two slices of Emmental cheese and a slice of chicken roll, all held together by a soft, water split bun.",
      price:"$6.12"
    },
    {
    image : WcNuggets,
    title : "WcNuggets ",
    description : " WcDonald's 6 piece Chicken WcNuggets are made with 100% chicken breast meat in a deliciously crispy coating, just waiting to be dipped.",
    price:"$5/pcs"
    }

      ];

    return(
        <>
        <div className="flex justify-between">
            <div className="text-5xl ml-16 mt-16 items-center content-center justify-center"> WcDonalds</div>
            <button className="btn w-32 h-8 items-center content-center rounded-xl m-16 bg-red-200 hover:bg-red-800"> <Link href='/viewOrder'>Create Order</Link></button>
        </div>
            {list.map((item) => (
                    <Item key={item.title} image = {item.image.src} title = {item.title}  description = {item.description} price = {item.price} />))}
        </>
    )
}

export default WcDonalds;