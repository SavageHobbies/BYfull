import { loadStripe } from '@stripe/stripe-js';

export const stripePromise = loadStripe('pk_test_51QYXln01wUkRlsbB8Nl65ddhrZGUoZxKslBv2dkpJztR04vkRw3NBKQUVmqY87jnOKXLEptdp2g6PrHykXmtumnc009CCL10rK');

export const appearance = {
  theme: 'night',
  variables: {
    colorPrimary: '#0ea5e9',
    colorBackground: '#1e293b',
    colorText: '#f8fafc',
    colorDanger: '#ef4444',
    fontFamily: 'ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif',
    spacingUnit: '4px',
    borderRadius: '8px',
  },
  rules: {
    '.Input': {
      border: '1px solid #334155',
      boxShadow: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
    },
    '.Input:focus': {
      border: '1px solid #0ea5e9',
      boxShadow: '0 0 0 1px #0ea5e9',
    },
  },
};
