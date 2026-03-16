const uploader = require("../../utilities/singleUploader");

function avatarUpload(req, res, next) {
  const upload = uploader(
    "avatars", //folder name
    ["image/jpeg", "image/jpg", "image/png"], // allowed file types
    1000000, // max file size in bytes (1MB)
    "Only .jpg, jpeg or .png format allowed!" // error message for invalid file type
  );

  // call the middleware function
  upload.any()(req, res, (err) => {
    if (err) {
      res.status(500).json({
        errors: {
          avatar: {
            msg: err.message,
          },
        },
      });
    } else {
      next();
    }
  });
}

module.exports = avatarUpload;
