import { Elements } from "@stripe/react-stripe-js";
import PaymentStatus from "./PaymentStatus";
import { loadStripe } from "@stripe/stripe-js";
const stripePromise = loadStripe(import.meta.env.VITE_PUBLISHABLE_KEY);
const PaymentStatusPage = () => {
  return (
    <Elements stripe={stripePromise}>
      <PaymentStatus />
    </Elements>
  );
};

export default PaymentStatusPage;
