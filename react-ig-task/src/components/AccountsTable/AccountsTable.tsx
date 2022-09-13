import { Account } from "../../types/Accounts";
import styles from "./Table.module.css";
import { createSkeletonRows } from "./utils";

export interface TableData {
  accounts: Account[];
  loading: boolean;
}

const EXPECTED_TABLE_ROWS = 8;

const HEADERS = [
  { id: 0, content: "Name" },
  { id: 1, content: "Profit & Loss" },
  { id: 2, content: "Account Type" },
];

const AccountsTable = ({ accounts, loading }: TableData) => {
  if (!loading && (!accounts || accounts.length === 0))
    return <div>No data received</div>;

  const createTableRows = () => {
    return accounts.map(({ id, name, currency, profitLoss, accountType }) => (
      <tr key={id} className={styles.table__row}>
        <td>{name}</td>
        <td>
          {currency} {profitLoss}
        </td>
        <td>{accountType}</td>
      </tr>
    ));
  };

  return (
    <table className={styles.table__container}>
      <thead>
        <tr className={styles.table__header}>
          {HEADERS.map(({ id, content }) => (
            <th key={id}>{content}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {loading ? createSkeletonRows(EXPECTED_TABLE_ROWS) : createTableRows()}
      </tbody>
    </table>
  );
};
export default AccountsTable;
