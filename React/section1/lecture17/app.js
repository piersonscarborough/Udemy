
let cards = data.map((course)=>{
    return(
        <Card data = {course}/>
        )
})

ReactDOM.render(
    <div className="row">
        {cards}
    </div>,
    document.getElementById("root")
);