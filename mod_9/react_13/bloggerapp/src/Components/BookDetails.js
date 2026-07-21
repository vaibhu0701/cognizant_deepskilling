import React from "react";

function BookDetails() {

    const books = [

        { id:1, name:"Java Programming", price:650 },
        { id:2, name:"Python Basics", price:550 },
        { id:3, name:"React Guide", price:700 }

    ];

    return (

        <div>

            <h2>Book Details</h2>

            <ul>

                {books.map(book =>

                    <li key={book.id}>

                        {book.name} - ₹{book.price}

                    </li>

                )}

            </ul>

        </div>

    );

}

export default BookDetails;
