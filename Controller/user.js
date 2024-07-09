const { user } = require("../Model/user")

async function getAllUsers(req, res) {

    const users = await user.find()
    return res.status(200).json(users)
}

async function findUserById(req, res) {

    const fuser = await user.findById(req.params.id);
    return res.status(200).json(fuser);

}

async function createNewUser(req, res) {

    const Udata = req.body;

    const Result = await user.create({
        fn: Udata.fn,
        ln: Udata.ln,
        email: Udata.email
    })

    return res.status(201).json(Result);

}

async function updateUserinfo(req, res) {

    const Udata = req.body;
    const uid = req.params.id;

    const changes = await user.findByIdAndUpdate(uid, {
        fn: Udata.newfn,
        ln: Udata.newln,
        email: Udata.newemail,
    })

    if (changes) {
        return res.status(202).json({ "changes": "Accepted" });
    }
    else {
        return res.status(400).json({ "changes": "Not Accepted" });
    }

}

async function updatePartialUserinfo(req, res) {

    const Udata = req.body;
    const uid = req.params.id;

    if (Udata.newfn != undefined) {
        await user.findByIdAndUpdate(uid, {
            fn: Udata.newfn,
        })
        res.status(202).json({ "status": "FirstName is Accepted" })
    }

    else if (Udata.newln != undefined) {
        await user.findByIdAndUpdate(uid, {
            ln: Udata.newln,
        })
        res.status(202).json({ "status": "LastName is Accepted" })
    }

    else if (Udata.newemail != undefined) {
        await user.findByIdAndUpdate(uid, {
            email: Udata.newemail,
        })
        res.status(202).json({ "status": "Email is Accepted" })
    }

    else {
        res.send("Add any one new value")
    }

}

async function userDeleteById(req, res) {
    const uid = req.params.id;
    const Result = await user.findByIdAndDelete(uid);
    return res.status(202).json(Result)
}

module.exports = {
    getAllUsers,
    findUserById,
    createNewUser,
    updateUserinfo,
    updatePartialUserinfo,
    userDeleteById
}