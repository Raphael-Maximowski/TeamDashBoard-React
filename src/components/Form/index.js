import './style.css'
import Input from "../Input";
import Button from "../Button";
import FormularioSuspenso from "../FormularioSuspenso";
import {useEffect, useState} from "react";
const Form =(props) => {

    const [name, SetName] = useState('')
    const [position, SetPosition] = useState('')
    const [img, SetImg] = useState('')
    const [stack, SetStack] = useState('')

    const saved = (event) => {
        event.preventDefault()
        props.WorkerSent({
            'name' : name,
            'position' : position,
            'img' : img,
            'stack' : stack
        })

    }


    return (
        <div className={"form"}>
            <div className={"Contentform"}>
                <h1>Preencha os Dados para Criar o Card do Colaborador</h1>
                <form onSubmit={saved}>
                    <div className={"Contentinput"}>
                        <Input
                            required={true}
                            label={"Nome"}
                            placeholder={"Insira seu Nome"}
                            value = {name}
                            changeState = {value => SetName(value)}
                        />

                        <Input
                            required={true}
                            label={"Cargo"}
                            placeholder={"Insira seu Cargo"}
                            value = {position}
                            changeState = {value => SetPosition(value)}
                        />
                        <Input
                            label={"Imagem"}
                            placeholder={"Insira o caminho da sua Imagem"}
                            value = {img}
                            changeState = {value => SetImg(value)}
                        />
                        <FormularioSuspenso
                            required={true}
                            label={"Insira o Cargo"}
                            teams={props.teams}
                            value = {stack}
                            changeState = {value => SetStack(value)}

                        />
                    </div>

                    <div onClick={saved}><Button  text={"Cadastrar"}/></div>
                </form>

            </div>


        </div>


    );
}

export default Form;