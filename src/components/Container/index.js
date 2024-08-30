import './style.css'
import WorkerContainer from "../WorkerContainer";
import Card from "../Card";
const Container = (props) => {
    return (


        (props.workers.length > 0) ? <div className={"main"}>
            <div  className={"boxworker"}>
                <div className={"titleworker"}>
                    <h2>
                        {props.team.name}
                    </h2>
                </div>
                <div style={{backgroundColor: props.team['main_color'] }} className={"line2"}></div>
            </div>
            <div className={"MainContainer"}>
                <div className={"containercards"}>
                    {props.workers.map((worker, index) => {return <Card key={index} BackColor={props.team['main_color']} worker={worker}/>})}
                </div>
            </div>
        </div> : ''

    );
}

export default Container;