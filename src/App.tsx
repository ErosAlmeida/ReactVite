import "./styles/theme.css";
import "./styles/global.css";

import { Container } from "./components/Container";
import { Logo } from "./components/Logo";
import { Menu } from "./components/Menu";
import { CounterDown } from "./components/CountDown";
import { DefaultInput } from "./components/DefaultInput";
import { Cycles } from "./components/Cycles";
import { DefaultButton } from "./components/DefaultButton";
import { PlayCircleIcon } from "lucide-react";
import { Footer } from "./components/Footer";
import { Heading } from "./components/Heading";
import { useState } from "react";

export function App() {

  const [numero , configurarNumero] = useState(0);

  function HandleClick(){
   configurarNumero(numero + 1);
  }

  return <>

  <Heading>Numero:{numero}</Heading>
  <button onClick={HandleClick}>Aumenta</button>


    <Container>
      <Logo />
    </Container>

    <Container>
      <Menu />
    </Container>

    <Container>
      <CounterDown />
    </Container>

    <Container>
      <form className='form' action=''>
        <div className="formRow">
          <DefaultInput labelText={numero.toString()} id='meuInput' type="text" title="NICEEE" placeholder="Digite Algo" />
        </div>

        <div className="formRow">
          <p>Lorem ipsum dolor sit amet.</p>
        </div>

        <div className="formRow">
          <Cycles />
        </div>

        <div className="formRow">
          <DefaultButton icon={<PlayCircleIcon />} />

        </div>
      </form>
    </Container>

    <Container>
      <Footer/>
    </Container>
  </>;
}

