const { getProfile, editUpi, editProfilePic, fetchPublicProfile } = require('../models/profile')
const { changeUsername: overwriteUsername } = require('../models/user')
const { uploadToCloudinary, t1UploadToCloudinary } = require('../util/cloudinary')
const fs = require('fs/promises');


const getMyProfile = async (req, res) => {
    try {
        const result = await getProfile(req.userDetails.email);
        if (!result) {
            throw "notfound";
        }
        res.status(200).json(result);
    } catch (err) {
        console.log(err);
        res.status(500).send();
    }
}

const getPublicProfile = async (req, res) => {
    try {
        const result = await fetchPublicProfile(req.body.userId);
        if (!result) {
            throw "notfound";
        }
        res.status(200).json(result);
    } catch (err) {
        console.log(err);
        res.status(500).send();
    }
}

const changeUsername = async (req, res) => {
    try {
        const newUsername = req.body.username;
        if (newUsername === "" || newUsername.length > 20) {
            throw "invalid";
        }
        const result = await overwriteUsername(req.userDetails.email, newUsername);
        if (!result) {
            throw "notfound";
        }
        res.status(200).send();
    } catch (err) {
        console.log(err);
        res.status(500).send();
    }
}

const changeUpi = async (req, res) => {
    try {
        const newUpi = req.body.upiId;
        const result = await editUpi(req.userDetails.email, newUpi);
        if (!result) {
            throw "notfound";
        }
        res.status(200).send();
    } catch (err) {
        console.log(err);
        res.status(500).send();
    }
}


const profilePicUpload = async (req, res) => {
    try {
        console.log(req.file);
        const filename = req.file.path;
        const result = await t1UploadToCloudinary(filename, `${req.userDetails.userId}profilePic`, '500', '500', `users/${req.userDetails.userId}/profile`);
        await fs.rm(req.file.path);
        if (!result) {
            throw "failed";
        }
        const res2 = await editProfilePic(req.userDetails.email, result);
        if (!res2) {
            throw "failed";
        }
        res.status(200).json({ url: result });
    } catch (err) {
        console.log(err);
        res.status(500).send();
    }
}

const profilePicPreview = async (req, res) => {
    try {
        console.log(req.file);
        const filename = req.file.path;
        const result = await t1UploadToCloudinary(filename, `${req.userDetails.userId}profilePicPreview`, '500', '500', `temp/${req.userDetails.userId}`);
        await fs.rm(req.file.path);
        if (!result) {
            throw "failed";
        }
        res.status(200).json({ url: result });
    } catch (err) {
        console.log(err);
        res.status(500).send();
    }
}

exports.getMyProfile = getMyProfile;
exports.changeUsername = changeUsername;
exports.changeUpi = changeUpi;
exports.profilePicUpload = profilePicUpload;
exports.profilePicPreview = profilePicPreview;
exports.getPublicProfile = getPublicProfile;



