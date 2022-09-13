export type Account = {
  _id: string;
  id: number;
  name: string;
  default: boolean;
  funds: number;
  profitLoss: number;
  accountType: string;
  isDemo: string | boolean;
  currency: string;
};
