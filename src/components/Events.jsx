import Services from "./Services"


const Events=()=>{
    const  serv=[{
        img:"birthday.jpg",
        title:"Birthdays",
        des:"We Organize Birthdays "
    },{
        img:"wedding.jpg",
        title:"Weddings",
        des:"We care about the experience of planning your wedding from start to finish. So relax and have fun. Your event team will guide you every step of the way, ensuring your big day is effortless and unforgettable."
    },{
        img:"anni.jpg",
        title:"Anniversary",
        des:"We Organize many events"
    },{
        img:"conf.jpg",
        title:"Conferences",
        des:"We travel the globe producing conferences. If you are looking for hotel management, speaker management, guest engagement strategies, and a mastery of all onsite logistics, you have come to the right place"
    },{
        img:"galas.jpg",
        title:"Galas",
        des:"From the traditional ballroom to an immersive experience, Chappelow Events will support you every step of the way. This includes the option of sponsor and auction fulfillment services."
    }]
 
    return(
        <>
        <div className="Events1">
            <h1>Our Events</h1>
        </div>

       <div className="service-list">
        {serv.map((item)=>{
            return(
                <Services key={item.title} {...item} />
            )
        })
        }
       </div>
        
        </>
    )
}
export default Events