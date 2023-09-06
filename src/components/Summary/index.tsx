import { useContext } from "react";
import Income from "../../assets/income.svg";
import Outcome from "../../assets/outcome.svg";
import Total from "../../assets/total.svg";
import { useTransactions } from "../../hooks/useTransactions";

import { Container } from "./styles";

export function Summary() {
  const { transactions } = useTransactions();

  const summary = transactions.reduce(
    (accumulator, transaction) => {
      if (transaction.type === "income") {
        accumulator.income += transaction.amount;
        accumulator.total += transaction.amount;
      } else {
        accumulator.outcome += transaction.amount;
        accumulator.total -= transaction.amount;
      }

      return accumulator;
    },
    {
      income: 0,
      outcome: 0,
      total: 0,
    }
  );

  return (
    <Container>
      <div>
        <header>
          <p>Entradas</p>
          <img src={Income} alt="Entradas" />
        </header>
        <strong>{summary.income}</strong>
      </div>
      <div>
        <header>
          <p>Saídas</p>
          <img src={Outcome} alt="Saídas" />
        </header>
        <strong>{summary.outcome}</strong>
      </div>
      <div>
        <header>
          <p>Total</p>
          <img src={Total} alt="Total" />
        </header>
        <strong>{summary.total}</strong>
      </div>
    </Container>
  );
}
