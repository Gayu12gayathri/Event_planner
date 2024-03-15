const Services=(props)=>{


    return(
        <>
        
        <div className="service-list1">
            <img className="ser-img" src={props.img}></img>
            <div className="ser-title">{props.title}</div>
            {/* <div className="ser-des">{props.des}</div> */}
        </div>
        </>
    )
}

export default Services