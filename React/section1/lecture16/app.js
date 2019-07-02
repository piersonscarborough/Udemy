
let cards = data.map((course)=>{
    return(
        <Card key={i} data = {course}/>
        )
})

ReactDOM.render(
    <div className="row">
        {cards}
    </div>,
    document.getElementById("root")
);