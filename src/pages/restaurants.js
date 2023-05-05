import RestaurantComponent from "../components/RestaurantComponent"
import s1 from '../../public/media/group-3@2x.png'
import s2 from '../../public/media/group-2@2x.png'
import s3 from '../../public/media/group-4@2x.png'

const restaurants = () => {
    const list = [
        {
          image: s2 ,
          title : "Wcdonalds",
        description : "American fast-food chain that is one of the largest in the world, known for its hamburgers, especially its Big Wacs, Big Yummies, and WcChickens ",
          next:"WcDonalds"
        },
        {
            image : s3, 
            title : "Lego's Pizza" ,
            description : "Lego's came from humble beginnings in 1960, with just one store. Now, as the largest pizza company in the world, Lego's proudly continues its legacy of delivering great-tasting pizza to customers' doors.",
             next:"LegosPizza"
        },
        {
            image : s1,
            title : "CFC ",
            description : " CFC is a global chicken restaurant brand with a rich, decades-long history of success and innovation. It all started with one cook, who created a finger lickin' good recipe more than 80 years ago with a list of 11 secret herbs and spices scratched out on the back of his kitchen door.",
             next:"CFC"
        }
      ];


return(
    <>
    <div className="">
        <div className="text-5xl ml-16 mt-16 items-center content-center justify-center"> Restaurants Available at Bshil</div>
        {list.map((item) => (
        <RestaurantComponent key={item.title} image = {item.image.src} title = {item.title}  description = {item.description} next={item.next}  /> 
      ))}
    </div>
    </>
)
}
export default restaurants