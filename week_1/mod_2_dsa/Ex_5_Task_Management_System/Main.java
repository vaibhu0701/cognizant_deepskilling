public class Main {

    static Task head = null;

    // Add Task
    public static void addTask(int id, String name, String status) {

        Task newTask = new Task(id, name, status);

        if (head == null) {
            head = newTask;
            return;
        }

        Task temp = head;

        while (temp.next != null) {
            temp = temp.next;
        }

        temp.next = newTask;
    }

    // Search Task
    public static Task searchTask(int id) {

        Task temp = head;

        while (temp != null) {

            if (temp.taskId == id) {
                return temp;
            }

            temp = temp.next;
        }

        return null;
    }

    // Traverse Tasks
    public static void displayTasks() {

        Task temp = head;

        while (temp != null) {
            System.out.println(temp);
            temp = temp.next;
        }
    }

    // Delete Task
    public static void deleteTask(int id) {

        if (head == null) {
            return;
        }

        if (head.taskId == id) {
            head = head.next;
            System.out.println("Task Deleted Successfully");
            return;
        }

        Task temp = head;

        while (temp.next != null &&
               temp.next.taskId != id) {
            temp = temp.next;
        }

        if (temp.next == null) {
            System.out.println("Task Not Found");
            return;
        }

        temp.next = temp.next.next;
        System.out.println("Task Deleted Successfully");
    }

    public static void main(String[] args) {

        addTask(101, "Design UI", "Pending");
        addTask(102, "Develop Backend", "In Progress");
        addTask(103, "Testing", "Pending");

        System.out.println("Task List:");
        displayTasks();

        System.out.println("\nSearching Task 102:");

        Task found = searchTask(102);

        if (found != null)
            System.out.println(found);
        else
            System.out.println("Task Not Found");

        System.out.println("\nDeleting Task 102:");
        deleteTask(102);

        System.out.println("\nUpdated Task List:");
        displayTasks();
    }
}