import './style.css'
import Card from "../Card";

const WorkerContainer = ({name, main_color, workers}) => {
    return (
            <div className={"main"}>
                <div  className={"boxworker"}>
                    <div className={"titleworker"}>
                        <h2>
                            {name}
                        </h2>
                    </div>
                    <div style={{backgroundColor: main_color }} className={"line2"}></div>
                </div>
                <div className={"MainContainer"}>
                    <div className={"containercards"}>
                        {workers.map((worker, index) => {return <Card key={index} worker={worker} BackColor={main_color} />})}
                    </div>
                </div>

            </div>

    );
}

export default WorkerContainer