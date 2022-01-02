const multer = require('multer')

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads/')
    },
    filename: function (req, file, cb) {
      
      cb(null, new Date().toISOString().replace(":","_").replace(":","_") + file.originalname)
    }
})
function fileFilter (req, file, cb) {
    if(file.mimetype === "image/gif" || file.mimetype == "image/jpeg"){
        cb(null, true)
    }else{
        cb(null, false)
    }
  }
const upload = multer({ 
    storage:storage,
    limits: {
        fileSize: 2*1024*1024
    },
    fileFilter: fileFilter
})

module.exports = upload;