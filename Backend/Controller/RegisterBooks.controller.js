import BookModel from "../Models/RegisteredBooks.model.js";

export const registerBooks = async (req, res) => {
    try {
        const { title, author, publication, description } = req.body;
        const LibraryId = req.distributor._id;
        const City = req.distributor.City;
        const LibraryName = req.distributor.LibraryName;
        const Address = req.distributor.Address;
        if (!title || !author || !publication) {
            return res.status(400).json({ msg: "Please enter all fields...." });
        }

        // Checking whether the same books are available or tnot in the database
        const booktitle = await BookModel.findOne({ title });
        const bookauthor = await BookModel.findOne({ author });
        const bookpublisher = await BookModel.findOne({ publication });
        const bookLibrary = await BookModel.findOne({ LibraryId });

        if (!booktitle || !bookauthor || !bookpublisher || !bookLibrary) {
            const newBook = new BookModel({
                title,
                author,
                publication,
                description,
                LibraryId,
                City: City.toLowerCase(),
                LibraryName,
                Address
            })
            if (newBook) {
                // Saving Book Data to the Database
                await newBook.save();

                res.status(201).json({ newBook });
            }
        }
        else {
            res.status(409).send('Books already available...');
        }


    } catch (error) {
        console.log("Error in Register Book Controller : ", error.message)
        res.status(500).json({ error: "Internal Server Error..... " });
    }
}

export const getBooks = async (req, res) => {
    try {
        const LibraryId = req.distributor._id;
        const books = await BookModel.find({ LibraryId }).sort({ createdAt: -1 });

        if (!books) {
            return res.status(200).json([], { msg: "No Books Found!...." });
        }

        res.status(200).json(books);
    } catch (error) {
        console.log("Error in getBooks Controller : ", error.message);
        res.status(500).json({ error: "Internal Server Error....." });
    }

}

export const getBooksForReader = async (req, res) => {
    try {
        const { id: LibrarytoGet } = req.params;
        const LibraryBooks = await BookModel.find({ LibraryId: LibrarytoGet }, []).sort({ createdAt: -1 });

        // if there are no registered books in the library
        if (!LibraryBooks) return res.status(200).json([]);

        const Books = LibraryBooks
        res.status(200).json(Books);
    } catch (error) {
        console.log("Error in getBooksforReader Controller : ", error.message);
        res.status(500).json({ error: "Internal Server Error" });
    }
}

export const getBooksbyCityReader = async (req, res) => {
    try {
        const BookCity = req.Reader.City;
        const Books = await BookModel.find({ City: BookCity }).sort({ LibraryName: 1 });

        if (!Books) {
            return res.status(200).json([], { message: "No Books found in your City" });
        }
        res.status(200).json(Books);
    }
    catch (error) {
        console.log("Error in getBooksbyCityReader Controller : ", error.message);
        res.status(500).json({ error: "Internal Server Error....." });
    }
}

export const getBooksbyCityDistributor = async (req, res) => {
    try {
        const BookCity = req.distributor.City;
        // const loggedinUser = req.distributor._id;
        const Books = await BookModel.find({ City: BookCity }).sort({ LibraryName: 1 });

        if (!Books) {
            return res.status(200).json([], { message: "No Books found in your City" });
        }
        res.status(200).json(Books);
    }
    catch (error) {
        console.log("Error in getBooksforDistributor Controller : ", error.message);
        res.status(500).json({ error: "Internal Server Error....." });
    }
}

