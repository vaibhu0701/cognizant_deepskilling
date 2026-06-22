public class ObserverTest {

    public static void main(String[] args) {

        StockMarket stockMarket = new StockMarket();

        Observer mobileApp = new MobileApp();
        Observer webApp = new WebApp();

        stockMarket.registerObserver(mobileApp);
        stockMarket.registerObserver(webApp);

        stockMarket.setStock("TCS", 4200.50);

        System.out.println();

        stockMarket.setStock("INFY", 1800.75);
    }
}