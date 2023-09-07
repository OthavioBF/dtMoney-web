import { FormEvent, useState } from "react";
import Modal from "react-modal";
import Close from "../../assets/close.svg";
import { useTransactions } from "../../hooks/useTransactions";

import { Container, TransactionTypeContainer, RadioBox } from "./styles";
import { ArrowCircleDown, ArrowCircleUp } from "phosphor-react";

interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewTransactionModal({
  isOpen,
  onRequestClose,
}: NewTransactionModalProps) {
  const { createTransaction } = useTransactions();

  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(0);
  const [category, setCategory] = useState("");
  const [type, setType] = useState<"income" | "outcome">("income");

  async function handleCreateNewTransaction(e: FormEvent) {
    e.preventDefault();

    await createTransaction({
      description,
      price,
      category,
      type,
    });

    setDescription("");
    setPrice(0);
    setCategory("");
    onRequestClose();
  }

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
        <img src={Close} alt="Fechar Modal" />
      </button>
      <Container onSubmit={handleCreateNewTransaction}>
        <h2>Cadastrar transação</h2>

        <input
          placeholder="Descrição"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <input
          type="number"
          placeholder="Preço"
          value={price}
          onChange={(e) => setPrice(Number(e.target.value))}
        />

        <input
          placeholder="Categoria"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />

        <TransactionTypeContainer>
          <RadioBox
            type="button"
            isActive={type === "income"}
            activeColor="green"
            onClick={() => {
              setType("income");
            }}
          >
            <ArrowCircleUp size={24} />
            <span>Entrada</span>
          </RadioBox>

          <RadioBox
            type="button"
            isActive={type === "outcome"}
            activeColor="red"
            onClick={() => {
              setType("outcome");
            }}
          >
            <ArrowCircleDown size={24} />
            <span>Saída</span>
          </RadioBox>
        </TransactionTypeContainer>

        <button type="submit">Cadastrar</button>
      </Container>
    </Modal>
  );
}
