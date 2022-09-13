import { AccountsTable } from "./components/AccountsTable";
import { useFetchAccounts } from "./hooks/useFetchAccounts";

const App = () => {
  const { data: accounts, loading, error } = useFetchAccounts();
  if (error) return <div>Error loading data</div>;

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <AccountsTable accounts={accounts} loading={loading} />
    </div>
  );
};

export default App;
