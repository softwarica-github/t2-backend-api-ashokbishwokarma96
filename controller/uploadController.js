const multer = require("multer");

var storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./public/images");       //destination to save uploaded image.
  },
  filename: (req, file, cb) => {
    var filetype = "";
    if (file.mimetype === "image/gif") {
      filetype = "gif";
    }
    if (file.mimetype === "image/png") {
      filetype = "png";
    }
    if (file.mimetype === "image/jpeg") {
      filetype = "jpg";
    }
    cb(null, Date.now() + file.originalname);
  }
});

const fileFilter = (req, file, cb) => {
  if (!file.originalname.match(/\.(JPG|JPEG|PNG|GIF|jpg|jpeg|png|gif)$/)) {
    return cb(new Error("Please upload only image files!"), false);
  }
  cb(null, true);
};

var upload = multer({ storage: storage, fileFilter: fileFilter });

module.exports = upload.single("image");


