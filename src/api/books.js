import axios from 'axios';
import * as constants from '../constatnts/endpoints'

export const getBooks = async ({
    page = 1,
    itemsPerPage = 20,
    filters
}) => {
    const response = await axios.post(constants.BOOKS, {
        page,
        itemsPerPage,
        filters
    })

    const nextPage = itemsPerPage * page;

    return {
        items: response.data,
        moreItems: nextPage >= response.data && response.data.count
    };
};