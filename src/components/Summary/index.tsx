import { useTransactions } from "../../hooks/useTransactions";

import { Container, SummaryCard } from "./styles";
import { ArrowCircleUp, ArrowCircleDown, CurrencyDollar } from "phosphor-react";
import { formatPrice } from "../../utils/formatPrice";

export function Summary() {
  const { transactions } = useTransactions();

  const { income, outcome, total } = transactions.reduce(
    (accumulator, transaction) => {
      if (transaction?.type === "income") {
        accumulator.income += transaction?.price;
        accumulator.total += transaction?.price;
      } else {
        accumulator.outcome += transaction?.price;
        accumulator.total -= transaction?.price;
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
      <SummaryCard>
        <header>
          <p>Entradas</p>
          <ArrowCircleUp size={32} color="#00b37e" />
        </header>
        <strong>{formatPrice(income)}</strong>
      </SummaryCard>
      <SummaryCard>
        <header>
          <p>Saídas</p>
          <ArrowCircleDown size={32} color="#f75a68" />
        </header>
        <strong>{formatPrice(outcome)}</strong>
      </SummaryCard>
      <SummaryCard variant="green">
        <header>
          <p>Total</p>
          <CurrencyDollar size={32} color="#FFF" />
        </header>
        <strong>{formatPrice(total)}</strong>
      </SummaryCard>
    </Container>
  );
}
