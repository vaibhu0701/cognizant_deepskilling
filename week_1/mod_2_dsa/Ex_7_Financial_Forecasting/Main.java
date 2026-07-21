public class Main {

    // Recursive method for forecasting
    public static double forecast(double currentValue,
                                  double growthRate,
                                  int years) {

        // Base Case
        if (years == 0) {
            return currentValue;
        }

        // Recursive Case
        return forecast(currentValue,
                        growthRate,
                        years - 1)
                        * (1 + growthRate);
    }

    public static void main(String[] args) {

        double currentValue = 10000;
        double growthRate = 0.10; // 10%
        int years = 5;

        double futureValue =
                forecast(currentValue,
                         growthRate,
                         years);

        System.out.println("Current Value : Rs." + currentValue);
        System.out.println("Growth Rate   : " +
                           (growthRate * 100) + "%");
        System.out.println("Years         : " + years);
        System.out.println("Future Value  : Rs." +
                           futureValue);
    }
}