import React, { useEffect, useState } from 'react';
import { Form, Button, FormControl, InputGroup } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

export const SearchBox = ({ buttonDisabled, handleSubmit, onInputChange }) => {

  return (
    <Form
      className="bg-white mt-2 mx-n2"
      onSubmit={(e) => handleSubmit(e)}
    >
      <InputGroup className=''>
        <FormControl
          type="search"
          placeholder="Search"
          className="bg-transparent"
          onChange={(e) =>
            onInputChange(e.target.value)
          }
        />

        <InputGroup.Prepend className="text-white">
          <Button
            className="border-right-0"
            type="submit"
            disabled={buttonDisabled}>

            <FontAwesomeIcon
              icon={faSearch}
              color="white" size="1x" />
          </Button>
        </InputGroup.Prepend>
      </InputGroup>
    </Form>
  );
};