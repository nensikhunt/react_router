function Location() {
    const date=new Date();
    const day=['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']
    return ( 
        <>
            <h1>Your Location</h1>
            <div className="location-div">
            <span>Date : {date.toLocaleDateString()}</span><br />
            <span>Time : {date.toLocaleTimeString()}</span><br />
            <span>Day Of Week : {day[date.getDay()]}</span><br />
            <span>UnixTime : {date.getTime()}</span><br />
            </div>
        </>
     );
}

export default Location;