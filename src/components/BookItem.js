import { Card } from 'react-bootstrap';

export default ({ book }) => {
    return (
        <Card border="primary" bg="primary" className="w-100 h-100 text-white">
            <Card.Body>
                <Card.Title>{book.book_title}</Card.Title>
                <Card.Text>
                    Book author:{' '}
                    {book.book_author.map((bookAuthor) => bookAuthor)}
                </Card.Text>
                <Card.Text>Book pages: {book.book_pages}</Card.Text>
                <Card.Text>
                    Publication year: {book.book_publication_year}
                </Card.Text>
                <Card.Text>
                    Publication country: {book.book_publication_country}
                </Card.Text>
                <Card.Text>
                    Publication city: {book.book_publication_city}
                </Card.Text>
            </Card.Body>
        </Card>
    )
}