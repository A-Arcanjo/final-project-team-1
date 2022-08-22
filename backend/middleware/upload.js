// set up the multer to store uploaded files

import multer from "multer";

const storage = multer.diskStorage({
    // files destination
    destination: (req, file, callback) => {
        callback(null, `/products`)
    },

    // extension
    filename: (req, file, callback) => {
        callback(null, file.originalname + Date.now())
    }
})

const upload = multer({ storage: storage });

export default upload;