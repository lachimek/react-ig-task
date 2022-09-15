import { useQuery } from "react-query";
import { Account } from "../types/Account";
import { AccountType } from "../types/AccountType";

const ACC_URL = "https://recruitmentdb-508d.restdb.io/rest/accounts";
const ACC_TYPES_URL = "https://recruitmentdb-508d.restdb.io/rest/accounttypes";

const fetchOptions = {
  headers: {
    "x-apikey": import.meta.env.VITE_API_KEY,
  },
};

const fetchAccounts = async () => {
  const res = await fetch(ACC_URL, fetchOptions);
  return res.json();
};
const fetchAccountTypes = async () => {
  const res = await fetch(ACC_TYPES_URL, fetchOptions);
  return res.json();
};

export const useFetchAccounts = () => {
  const {
    data: accountsResponse,
    isSuccess: accountsIsSuccess,
    isLoading: accountsIsLoading,
    isError: accountsIsError,
  } = useQuery<Account[]>("accounts", fetchAccounts);
  const {
    data: accountTypesResponse,
    isSuccess: accountTypesIsSuccess,
    isLoading: accountTypesIsLoading,
    isError: accountTypesIsError,
  } = useQuery<AccountType[]>("accountTypes", fetchAccountTypes);

  let data: Account[] = [];

  if (accountsResponse && accountTypesResponse) {
    data = accountsResponse.map((account) => ({
      ...account,
      accountType:
        accountTypesResponse.find((t) => t.id === account.accountType)?.title ||
        "Type not found",
    }));
  }

  const loading = accountsIsLoading || accountTypesIsLoading;
  const success = accountsIsSuccess || accountTypesIsSuccess;
  const error = accountsIsError || accountTypesIsError;

  return { data, loading, success, error };
};
