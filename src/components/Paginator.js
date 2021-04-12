import { Button, Container } from 'react-bootstrap';

export default ({ currentPage, setCurrentPage, nextDisabled }) => {
    return (
        <Container className="d-flex justify-content-end">
            <Button
                onClick={() => setCurrentPage(currentPage - 1)}
                disabled={currentPage === 1}
                className="mr-3 flex-fill"
            >
                Previous
            </Button>
            <Button
                onClick={() => setCurrentPage(currentPage + 1)}
                disabled={nextDisabled}
                className="flex-fill"
            >
                Next
            </Button>
        </Container>
    );
}