import multer from "multer";
import crypto from "crypto";
import path from "path";


const imageStorage = multer.diskStorage({
  destination: function (req, file, cb) {
    console.log("hello");
    cb(null, './public/images/profiles')
  },
  filename: function (req, file, cb) {
    crypto.randomBytes(12, function (err, buffer) {
        if (err) {
            console.log(err);
        } else {
            console.log(buffer.toString("hex"));
            const fn = buffer.toString("hex") + path.extname(file.originalname);
            cb(null, fn);
        }
    });
  }
})

        

const imageupload = multer({ storage: imageStorage })
export default imageupload
























