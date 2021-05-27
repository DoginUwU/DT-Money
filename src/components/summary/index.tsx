// images
import incomeImg from "../../assets/income.svg";
import outcomeImg from "../../assets/outcome.svg";
import totalImg from "../../assets/total.svg";
// hooks
import { useTransactions } from "../../hooks/useTransactions";
// utils
import { NumberFormat } from "../../utils/formatNumber";

import { Container } from "./styles";

export function Summary() {
  const { transactions } = useTransactions();

  const summary = transactions.reduce(
    (acc, transaction) => {
      if (transaction.type === "deposit") {
        acc.income += transaction.price;
        acc.total += transaction.price;
      } else {
        acc.outcome += transaction.price;
        acc.total -= transaction.price;
      }

      return acc;
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
          <p>Incomes</p>
          <img src={incomeImg} alt="incomes" />
        </header>
        <strong>{NumberFormat(summary.income)}</strong>
      </div>
      <div>
        <header>
          <p>Outcomes</p>
          <img src={outcomeImg} alt="outcome" />
        </header>
        <strong>- {NumberFormat(summary.outcome)}</strong>
      </div>
      <div className="highlight">
        <header>
          <p>Total</p>
          <img src={totalImg} alt="total" />
        </header>
        <strong>{NumberFormat(summary.total)}</strong>
      </div>
    </Container>
  );
}
