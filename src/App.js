import Banner from "./components/Banner";
import Form from "./components/Form";
import {useState} from "react";
import Container from "./components/Container";


function App() {

    const [workers, SetWorkers] = useState([])

    const teams = [
        { name: "DevOps", main_color : "#57C278", secondary_color : "#09F7E9" },
        { name: "FrontEnd", main_color : "#82CFFA", secondary_color : "#E8F8FF" },
        { name: "BackEnd", main_color : "#A6D157", secondary_color : "#F0F8E2" },
        { name: "QA",  main_color : "#E06869", secondary_color : "#FDE7E8" },
        { name: "Marketing", main_color : "#DB6E8F", secondary_color : "#FFF5D9" },
        { name: "TechLead",  main_color : "#FF8A29", secondary_color : "#FFEEDF" },
    ]

    const ReceiveWorker = (worker)  => {
        SetWorkers([...workers, worker])

    }

  return (
       <div className="App">
          <Banner/>
          <Form teams={teams.map(team => team.name)} WorkerSent={worker => ReceiveWorker(worker)}/>

          {teams.map((team, index) => {
              return (
                  <Container
                      key={index}
                      workers={workers.filter(worker => worker.stack === team.name )}
                      team={team}/>
              )

          })}
      </div>
  );
}

export default App;
