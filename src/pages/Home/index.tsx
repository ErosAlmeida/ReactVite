import { Container } from "../../components/Container";
import { CounterDown } from "../../components/CountDown";
import { MainForm } from "../../components/MainForm";
import { TaskStateModel } from "../../models/TaskStateModel";
import { MainTemplate } from "../../templates/MainTemplates";

export type HomeProps = {
  state: TaskStateModel;
  setState: React.Dispatch<React.SetStateAction<TaskStateModel>>;
};

export function Home(props: HomeProps) {
  return (
    <MainTemplate>
      <Container>
        <CounterDown {...props} />
      </Container>

      <Container>
        <MainForm {...props} />
      </Container>
    </MainTemplate>
  );
}
