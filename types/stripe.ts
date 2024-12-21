export interface PaymentIntentResponse {
  clientSecret: string;
  error?: string;
}

export interface PaymentStatusResponse {
  status: string;
  metadata?: {
    productName?: string;
    [key: string]: string | undefined;
  };
  error?: string;
}

export interface StripeProduct {
  name: string;
  amount: number;
  currency: string;
  metadata?: {
    [key: string]: string;
  };
}
