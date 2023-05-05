import Item from "../components/Item"
import Link from "next/link";
import UltimatePepperoni from "../../public/media/UltimatePepperoni.png";
import PizzaCarbonara from "../../public/media/PizzaCarbonara.png";
import AmericanBaconCheeseburger from "../../public/media/AmericanBaconCheeseburger.png";
import Meatzza from "../../public/media/Meatzza.png";
import Extravaganzza from "../../public/media/Extravaganzza.png";
import MemphisBbqChicken from "../../public/media/MemphisBbqChicken.png";
import LegosDeluxe from "../../public/media/LegosDeluxe.png";


const LegosPizza = () => {

    const list = [
        {
          image: UltimatePepperoni,
          title : "Ultimate Pepperoni",
        description : "Ultimate Pepperoni is loaded with 50% more crispy Pepperoni and crust stuffed with even more stretchy mozzarella cheese. These classic toppings are often found on a delicious and hearty pizza that is perfect for sharing with friends and family.                                                                                                      ",
          price:"$8.03"
        },
        {
            image : PizzaCarbonara, 
            title : "PizzaCarbonara" ,
            description : "Some call it Pizza Carbonara, some White Bacon Pizza. Whatever you choose, you get the same awesome hot and fresh pizza topped with white sauce, mozza cheese, parmesan, oregano and bacon",
            price:"$7.63"
        },
        {
            image : AmericanBaconCheeseburger,
            title : "American Bacon Cheeseburger ",
            description : " The mind-blowing delicious mash-up comes packed with all the hallmarks of a signature cheeseburger including 100% mozzarella cheese, double ground beef, fresh tomato, onions, gherkins and Lego's vine ripened tomato sauce, but now has the added bonus of BACON.",
            price:"$11.46"
        },
        {
          image : Meatzza,
          title : "Meatzza",
          description : " This yummy combination of Minced Beef, Beef pepperoni with onion and jalapenos is an absolute treat for the beef lovers. These classic toppings are often found on a delicious and hearty pizza that is perfect for sharing with friends and family.",
          price:"$11.34"
      },
      {
        image : Extravaganzza,
        title : "Extravaganzza ",
        description : " It's a yummy combination of BBQ Chicken, Chicken Sausage, Spicy Chicken, Beef Pepperoni, Red Paprika, Olive, Capsicum that will give you an unique experience with every slice.",
        price:"$12.00"
    },
    {
      image : MemphisBbqChicken,
      title : "Memphis BBQ Chicken",
      description : "Savory chicken, fresh cilantro, and gooey cheese baked on a crispy pizza crust. This flavorful combination of ingredients is sure to satisfy your taste buds and leave you wanting more.",
      price:"$10.32"
    },
    {
    image : LegosDeluxe,
    title : "Lego's Deluxe ",
    description : " Pepperoni, Italian Sausage, Mushrooms, Green Peppers, Onions, Tomato Sauce. These classic toppings are often found on a delicious and hearty pizza that is perfect for sharing with friends and family.",
    price:"$12.21"
    }

      ];




    return(
        <>
        <div className="flex justify-between">
            <div className="text-5xl ml-16 mt-16 items-center content-center justify-center"> LegosPizza</div>
            <button className="btn w-32 h-8 items-center content-center rounded-xl m-16 bg-red-200 hover:bg-red-800"> <Link href='/viewOrder'>Create Order</Link></button>
        </div>
            {list.map((item) => (
                    <Item key={item.title} image = {item.image.src} title = {item.title}  description = {item.description} price = {item.price} />))}
        </>
    )
}

export default LegosPizza;