import { Container } from "../../components/Container";
import { CounterDown } from "../../components/CountDown";
import { MainForm } from "../../components/MainForm";

import { MainTemplate } from "../../templates/MainTemplates";

export function Home() {
  return (
    <MainTemplate>
      <Container>
        <CounterDown />
      </Container>

      <Container>
        <MainForm />
      </Container>
    </MainTemplate>
  );
}
