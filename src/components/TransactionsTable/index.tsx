import { useTransactions } from "../../hooks/useTransactions";
import { Container, PriceHighLight, Form, Table } from "./styles";
import { MagnifyingGlass } from "phosphor-react";
import { formatPrice } from "../../utils/formatPrice";

export function TransactionsTable() {
  const { transactions, loadTransactions } = useTransactions();

  function handleSearchTransactions(value: string) {
    loadTransactions(value);
  }

  return (
    <Container>
      <Form>
        <input
          type="text"
          placeholder="Busque uma transação"
          onChange={(e) => handleSearchTransactions(e.target.value)}
        />
        <button>
          <MagnifyingGlass size={16} color="#00B37E" />
          Buscar
        </button>
      </Form>
      <Table>
        <tbody>
          {transactions.map((transaction) => {
            return (
              <tr key={transaction.id}>
                <td>{transaction?.description}</td>
                <td className={transaction?.type}>
                  <PriceHighLight variant={transaction?.type}>
                    {transaction?.type === "income"
                      ? formatPrice(transaction?.price)
                      : `- ${formatPrice(transaction?.price)}`}
                  </PriceHighLight>
                </td>
                <td>{transaction?.category}</td>
                <td>
                  {new Intl.DateTimeFormat("pt-BR").format(
                    new Date(transaction?.createdAt)
                  )}
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </Container>
  );
}
