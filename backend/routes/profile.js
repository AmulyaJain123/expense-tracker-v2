const express = require('express');
const router = express.Router();
const { changeUsername, getMyProfile, changeUpi, profilePicUpload, profilePicPreview, getPublicProfile } = require('../controllers/profile');
const { upload } = require('../util/multer');

router.get('/myprofile', getMyProfile);

router.post('/viewprofile', getPublicProfile);

router.post('/changeusername', changeUsername);

router.post('/changeupi', changeUpi);

router.post('/profilepicupload', upload.single('profilePic'), profilePicUpload);

router.post('/profilepicpreview', upload.single('profilePic'), profilePicPreview);







exports.profileRouter = router