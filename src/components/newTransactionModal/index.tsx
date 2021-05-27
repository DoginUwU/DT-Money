// react
import { FormEvent, useState } from "react";
import Modal from "react-modal";
// images
import closeImg from "../../assets/close.svg";
import incomeImg from "../../assets/income.svg";
import outcomeImg from "../../assets/outcome.svg";
// hooks
import { useTransactions } from "../../hooks/useTransactions";
// styles
import { Container, TransactionTypeContainer, RadioButton } from "./styles";

interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

Modal.setAppElement("#root");

export function NewTransactionModal({
  isOpen,
  onRequestClose,
}: NewTransactionModalProps) {
  const { createTransaction } = useTransactions();

  const [title, setTitle] = useState("");
  const [price, setPrice] = useState(0);
  const [type, setType] = useState("deposit");
  const [category, setCategory] = useState("");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const data = { title, price, type, category };
    await createTransaction(data);

    setTitle("");
    setPrice(0);
    setType("deposit");
    setCategory("");
    onRequestClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button
        type="button"
        onClick={onRequestClose}
        className="react-modal-close"
      >
        <img src={closeImg} alt="Close modal" />
      </button>
      <Container onSubmit={handleSubmit}>
        <h2>Create new transaction</h2>

        <input
          value={title}
          onChange={(event) => setTitle(event.target.value)}
          type="text"
          placeholder="Title"
          required
        />
        <input
          value={price}
          onChange={(event) => setPrice(Number(event.target.value))}
          type="number"
          placeholder="Price"
          required
        />

        <TransactionTypeContainer>
          <RadioButton
            type="button"
            active={type === "deposit"}
            activeColor="green"
            onClick={() => setType("deposit")}
          >
            <img src={incomeImg} alt="Income" />
            <span>Income</span>
          </RadioButton>
          <RadioButton
            type="button"
            active={type === "withdraw"}
            activeColor="red"
            onClick={() => setType("withdraw")}
          >
            <img src={outcomeImg} alt="Outcome" />
            <span>Outcome</span>
          </RadioButton>
        </TransactionTypeContainer>

        <input
          value={category}
          onChange={(event) => setCategory(event.target.value)}
          type="text"
          placeholder="Category"
          required
        />
        <button type="submit">Create</button>
      </Container>
    </Modal>
  );
}
