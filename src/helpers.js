import moment from "moment";
import {Storage} from 'aws-amplify'
import Book from "./components/Book/Book";
const formatListBooks = async (data) => {
    const result = await Promise.all(data.map(async book => {
        const signedUrl = await Storage.get(book.picture_key);
        return new Book(book.id, 
            book.name, 
            book.description, 
            signedUrl, 
            book.category,
            moment(book.createdAt).fromNow(),
            {
                id: book.ownerId,
                name: book.ownerName
            },
            book.target.label
        )
    }));
    return result
}

/**
 * const signedUrl = await Storage.get(book.picture_key);
        books.push(new Book(book.id, 
            book.name, 
            book.description, 
            signedUrl, 
            book.category,
            moment(book.createdAt).fromNow(),
            {
                id: book.ownerId,
                name: book.ownerName
            },
            book.target.label
        ))
 */

export default formatListBooks
