import React from "react";
import { describe, expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import { AccountsTable } from "../components/AccountsTable";
import { Account } from "../types/Accounts";

const CORRECT_TABLE_DATA: Account[] = [
  {
    _id: "5d9ddef4915161280000853b",
    id: 1,
    name: "Spread bet",
    default: true,
    funds: 10000,
    profitLoss: 0.23,
    accountType: "Spread bet account",
    isDemo: false,
    currency: "$",
  },
  {
    _id: "5d9ddef4915161280000853c",
    id: 2,
    name: "New Spread bet",
    default: false,
    funds: 1000,
    profitLoss: -679,
    accountType: "Spread bet account",
    isDemo: false,
    currency: "$",
  },
  {
    _id: "5d9ddef4915161280000853d",
    id: 3,
    name: "Spread bet - demo",
    default: false,
    funds: 20000000,
    profitLoss: 16.211,
    accountType: "Spread bet account",
    isDemo: true,
    currency: "$",
  },
  {
    _id: "5d9ddef4915161280000853e",
    id: 4,
    name: "CFD - demo",
    default: false,
    funds: 20000000,
    profitLoss: 16679,
    accountType: "CFD account",
    isDemo: true,
    currency: "€",
  },
  {
    _id: "5d9ddef49151612800008540",
    id: 6,
    name: "Stockbroking - DEMO",
    default: true,
    funds: 0,
    profitLoss: 200045,
    accountType: "Share dealing account",
    isDemo: true,
    currency: "$",
  },
  {
    _id: "5d9ddef49151612800008541",
    id: 7,
    name: "Stockbroking",
    default: true,
    funds: 0,
    profitLoss: 200045,
    accountType: "Share dealing account",
    isDemo: false,
    currency: "€",
  },
  {
    _id: "5d9ddef4915161280000853f",
    id: 5,
    name: "My CFD",
    default: false,
    profitLoss: -10,
    accountType: "CFD account",
    isDemo: "",
    currency: "$",
    funds: 10,
  },
  {
    _id: "631f5b2dfa10b946000689e9",
    id: 90,
    name: "Forex Acccount",
    default: false,
    funds: 1200,
    profitLoss: 10,
    accountType: "Forex account",
    isDemo: "true",
    currency: "$",
  },
];

describe("AccountsTable component tests", () => {
  test("Table should render correctly when done loading and data is correct", () => {
    render(<AccountsTable accounts={CORRECT_TABLE_DATA} loading={false} />);
    expect(screen.getByText(CORRECT_TABLE_DATA[0].name)).toBeDefined();
    expect(
      screen.getByText(CORRECT_TABLE_DATA[CORRECT_TABLE_DATA.length - 1].name)
    ).toBeDefined();
  });

  test("Headers should render even if table is loading data", () => {
    render(<AccountsTable accounts={CORRECT_TABLE_DATA} loading={true} />);
    expect(screen.getByText("Profit & Loss")).toBeDefined();
  });

  test("Table should render skeleton elements when loading", () => {
    const { container } = render(
      <AccountsTable accounts={CORRECT_TABLE_DATA} loading={true} />
    );
    expect(
      container.getElementsByClassName("react-loading-skeleton")
    ).toBeDefined();
  });

  test("No data received text should appear when done loading and data is empty", () => {
    render(<AccountsTable accounts={[]} loading={false} />);
    expect(screen.getByText("No data received")).toBeDefined();
  });
});
