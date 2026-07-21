public class Main {

    // Linear Search
    public static Book linearSearch(Book[] books, String targetTitle) {

        int comparisons = 0;

        for (Book book : books) {

            comparisons++;

            if (book.title.equalsIgnoreCase(targetTitle)) {
                System.out.println("Linear Search Comparisons: " + comparisons);
                return book;
            }
        }

        System.out.println("Linear Search Comparisons: " + comparisons);
        return null;
    }

    // Binary Search
    public static Book binarySearch(Book[] books, String targetTitle) {

        int low = 0;
        int high = books.length - 1;
        int comparisons = 0;

        while (low <= high) {

            comparisons++;

            int mid = (low + high) / 2;

            int result =
                    books[mid].title.compareToIgnoreCase(targetTitle);

            if (result == 0) {
                System.out.println("Binary Search Comparisons: " + comparisons);
                return books[mid];
            }

            if (result < 0) {
                low = mid + 1;
            } else {
                high = mid - 1;
            }
        }

        System.out.println("Binary Search Comparisons: " + comparisons);
        return null;
    }

    public static void main(String[] args) {

        Book[] books = {
            new Book(101, "C++", "Bjarne Stroustrup"),
            new Book(102, "DBMS", "Korth"),
            new Book(103, "Java", "Herbert Schildt"),
            new Book(104, "Python", "Guido Van Rossum")
        };

        System.out.println("Linear Search Result:");

        Book book1 = linearSearch(books, "Java");

        if (book1 != null)
            System.out.println(book1);
        else
            System.out.println("Book Not Found");

        System.out.println();

        System.out.println("Binary Search Result:");

        Book book2 = binarySearch(books, "Java");

        if (book2 != null)
            System.out.println(book2);
        else
            System.out.println("Book Not Found");
    }
}