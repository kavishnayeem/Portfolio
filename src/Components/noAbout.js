

export default function noAbout(){
    function click(){
        alert("Switch to desktop to view this ")
    }
    return (
            <div className="noAboutDiv conatiner">
            <button className="noAbout"   onClick={click}>About-Me</button>
</div>
        
    )
}