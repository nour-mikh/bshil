import Item from "../components/Item"


const LegosPizza = () => {
    return(
        <>
            <div className="text-5xl ml-16 mt-16 items-center content-center justify-center"> LegosPizza</div>
            <Item image = "/group-5@2x.png" title = "Wcdonalds" description = "American fast-food chain that is one of the largest in the world, known for its hamburgers, especially its Big Wacs, Big Yummies, and WcChickens " /> 
            <Item image = "/group-4@2x.png" title = "Lego's Pizza" description = "Lego's came from humble beginnings in 1960, with just one store. Now, as the largest pizza company in the world, Lego's proudly continues its legacy of delivering great-tasting pizza to customers' doors." />
            <Item image = "/group-3@2x.png" title = "CFC " description = " CFC is a global chicken restaurant brand with a rich, decades-long history of success and innovation. It all started with one cook, who created a finger lickin' good recipe more than 80 years ago with a list of 11 secret herbs and spices scratched out on the back of his kitchen door."/>
        </>
    )
}

export default LegosPizza;