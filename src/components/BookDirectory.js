import React, { useCallback, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import {
    Container,
    Row,
    Col,
    Spinner
} from 'react-bootstrap';
import { getBooks } from '../api/books';
import { EmptyResult } from './EmptyResult';
import { SearchBox } from './SearchBox';
import BookItem from './BookItem';
import Paginator from './Paginator';

export const BookDirectory = () => {
    const history = useHistory();
    const rootPath = window.location.pathname;
    const pageNumber = parseInt(new URLSearchParams().get('page')) || 1;

    const [data, setData] = useState('');
    const [loaded, setLoaded] = useState(false);
    const [currentPage, setCurrentPage] = useState(pageNumber);
    const [searchPhrase, setSearchPhrase] = useState('');
    const [searchClicked, setSearchClicked] = useState(false);

    useEffect(() => {
        history.push(`${rootPath}?page=${currentPage}`);
    }, []);

    useEffect(() => {
        setLoaded(false);

        getBooks({
            page: currentPage,
            itemsPerPage: 20,
            filters: [{ type: 'all', values: [searchPhrase] }]
        }).then(res => {
            setLoaded(true);
            setSearchClicked(false);
            return setData(res);
        });
    }, [currentPage, searchClicked]);

    useEffect(() => {
        if (currentPage > 0) {
            history.push(`${rootPath}?page=${currentPage}`);
        }
    }, [currentPage, history, rootPath]);

    const handleSearchInputChange = useCallback(searchTermValue => {
        setSearchPhrase(searchTermValue);
    }, []);

    const handleSearchSubmit = useCallback(event => {
        event.preventDefault();
        setCurrentPage(1);
        setSearchClicked(true);
    }, []);

    return (
        <Container>
            <Row className="text-white text-center py-1 px-4 my-3 bg-primary">
                <Col xs="8" sm="8">
                    <h1 className="h1 text-center">Bookshop</h1>
                </Col>
                <Col className="bg-white mr-n3">
                    <SearchBox
                        buttonDisabled={!searchPhrase}
                        handleSubmit={e => handleSearchSubmit(e)}
                        onInputChange={(value) => handleSearchInputChange(value)}
                    />
                </Col>
            </Row>

            <Row className="mt-4">
                {data && loaded ? (
                    data && data.items && data.items.books && data.items.books.map(book => (
                        <Col xs="12" lg="6" className="mb-4">
                            <BookItem book={book} />
                        </Col>
                    ))
                ) : (
                        <Col
                            className="d-flex justify-content-center align-items-center flex-column"
                            style={{ minHeight: '50vh' }}
                        >
                            <Spinner animation="border" variant="primary" />
                        </Col>
                    )}
                {loaded && data && !(data.items && data.items.books && data.items.books.length) && <EmptyResult />}
            </Row>

            { loaded && data && data.items && data.items.books.length &&
                < Row className="mb-5 justify-content-center">
                    <Col xs="12" sm="6">
                        <Paginator currentPage={currentPage} setCurrentPage={setCurrentPage} nextDisabled={data ? data.moreItems : false} />
                    </Col>
                </Row>
            }
        </Container>
    )
}