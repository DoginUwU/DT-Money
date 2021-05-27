import logo from "../../assets/logo.svg";

import { Container, Content } from "./styles";

interface Props {
  onOpenNewTransactionModal: () => void;
}

export function Header({ onOpenNewTransactionModal }: Props) {
  return (
    <Container>
      <Content>
        <img src={logo} alt="dt_money" />
        <button type="button" onClick={onOpenNewTransactionModal}>
          New transaction
        </button>
      </Content>
    </Container>
  );
}
