export type CardInfo = {
  brand: string;
  cardholderName: string;
  cvc: string;
  expiryMonth: number;
  expiryYear: number;
  last4: string;
};

export type TransactionsInfo = {
  amount: number;
  currency: string;
  cardholder: string;
  status: string;
  created: string;
};
