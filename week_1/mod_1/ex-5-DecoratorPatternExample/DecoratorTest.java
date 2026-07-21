public class DecoratorTest {

    public static void main(String[] args) {

 EmailNotifier email = new EmailNotifier();

SMSNotifierDecorator sms =
        new SMSNotifierDecorator(email);

SlackNotifierDecorator slack =
        new SlackNotifierDecorator(sms);

Notifier notifier = slack;
        notifier.send("Server Down!");
    }
}