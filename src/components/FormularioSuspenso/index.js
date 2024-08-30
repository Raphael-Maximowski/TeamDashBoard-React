import './style.css';

const FormularioSuspenso = (props) => {

    const choosing = (event) =>  {
        props.changeState(event.target.value)
    }
    return (
        <div>
            <label>{props.label}</label>

            <select value={props.value} onChange={choosing} required={props.required}>
                {props.teams.map((team, index) => { return <option key={index}>{team}</option>})}
            </select>
        </div>

    );
}

export default FormularioSuspenso;