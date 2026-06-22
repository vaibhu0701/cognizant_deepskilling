public class AdapterTest {

    public static void main(String[] args) {

        PaymentProcessor paypal =
                new PayPalAdapter(new PayPalGateway());

        paypal.processPayment(5000);

        PaymentProcessor stripe =
                new StripeAdapter(new StripeGateway());

        stripe.processPayment(10000);
        
    }
}