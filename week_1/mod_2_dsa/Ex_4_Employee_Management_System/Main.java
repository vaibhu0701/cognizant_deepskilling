public class Main {

    static Employee[] employees = new Employee[10];
    static int count = 0;

    // Add Employee
    public static void addEmployee(Employee employee) {

        if (count < employees.length) {
            employees[count] = employee;
            count++;
            System.out.println("Employee Added Successfully");
        } else {
            System.out.println("Array Full");
        }
    }

    // Search Employee
    public static Employee searchEmployee(int id) {

        for (int i = 0; i < count; i++) {

            if (employees[i].employeeId == id) {
                return employees[i];
            }
        }

        return null;
    }

    // Traverse Employees
    public static void displayEmployees() {

        for (int i = 0; i < count; i++) {
            System.out.println(employees[i]);
        }
    }

    // Delete Employee
    public static void deleteEmployee(int id) {

        int index = -1;

        for (int i = 0; i < count; i++) {

            if (employees[i].employeeId == id) {
                index = i;
                break;
            }
        }

        if (index == -1) {
            System.out.println("Employee Not Found");
            return;
        }

        for (int i = index; i < count - 1; i++) {
            employees[i] = employees[i + 1];
        }

        employees[count - 1] = null;
        count--;

        System.out.println("Employee Deleted Successfully");
    }

    public static void main(String[] args) {

        addEmployee(new Employee(101, "Vaibhavi", "Developer", 50000));
        addEmployee(new Employee(102, "Anjali", "Tester", 40000));
        addEmployee(new Employee(103, "Priya", "Manager", 70000));

        System.out.println("\nEmployee Records:");
        displayEmployees();

        System.out.println("\nSearching Employee ID 102:");
        Employee emp = searchEmployee(102);

        if (emp != null)
            System.out.println(emp);
        else
            System.out.println("Employee Not Found");

        deleteEmployee(102);

        System.out.println("\nUpdated Employee Records:");
        displayEmployees();
    }
}