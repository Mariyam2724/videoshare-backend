const multer = require('multer');
const router = require('express').Router();

const myStorage = multer.diskStorage({

    destination: ( req, file,cb ) => {

        cb(null, './uploads');
    },
    filename: (req,file, cb)=> {
        cb(null, file.originalname)
    }
})

const upload = multer ({ storage : myStorage})

router.post('/addfile', upload.single('file'), (req,res) => {
    res.json({message: 'File Upload Success'});

})

module.exports = router;