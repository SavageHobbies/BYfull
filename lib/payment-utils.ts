export function formatAmount(amount: number): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(amount);
}

export function parseAmount(amountString: string): number {
  // Remove currency symbols and other non-numeric characters except decimal point
  const cleanAmount = amountString.replace(/[^0-9.]/g, '');
  return parseFloat(cleanAmount);
}

export function validatePaymentAmount(amount: number): boolean {
  return amount > 0 && amount <= 999999.99; // Maximum amount Stripe allows
}

export function getErrorMessage(error: any): string {
  if (typeof error === 'string') return error;
  if (error.message) return error.message;
  return 'An unexpected error occurred';
}

export const CURRENCY = 'usd';
export const MIN_AMOUNT = 1;
export const MAX_AMOUNT = 999999.99;
