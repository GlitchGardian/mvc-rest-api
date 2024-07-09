const express = require("express")
const router = express.Router();
const { getAllUsers, findUserById, createNewUser, updateUserinfo, updatePartialUserinfo, userDeleteById } = require("../Controller/user");
const { get } = require("mongoose");

router.route('/')
    .get(getAllUsers)
    .post(createNewUser)

router.route('/:id')
    .get(findUserById)
    .put(updateUserinfo)
    .patch(updatePartialUserinfo)
    .delete(userDeleteById)

module.exports = router