import './style.css'

const Card =  (props) => {
    return (
        <div className={"profile"}>
            <div style={{backgroundColor: props.BackColor }} className={"background"}>
                <div className={"picture"}>
                    <img src={"https://github.com/Raphael-Maximowski.png"} alt={"Me"}/>
                </div>
            </div>
            <div className={"info"}>
                <h2>
                    {props.worker['name']}
                </h2>

                <div className={"desc"}>
                    <p className={"position"}>{props.worker['position']} </p>
                    <p className={"stack"}> {props.worker['stack']} </p>
                </div>
            </div>


        </div>
    )
}

export default Card;