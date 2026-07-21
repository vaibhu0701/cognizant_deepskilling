public class ProxyTest {

    public static void main(String[] args) {

        Image image = new ProxyImage("photo.jpg");

        System.out.println("Image object created");

        System.out.println();

        image.display();

        System.out.println();

        image.display();
    }
}