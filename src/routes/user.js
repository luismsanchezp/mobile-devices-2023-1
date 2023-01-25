const EXPRESS = require("express");
const USER_SCHEMA = require("../models/user");
const USER_ROUTES = EXPRESS.Router();

USER_ROUTES.post("/user", (req, res) => {
    const NEW_USER = new USER_SCHEMA(req.body);
    NEW_USER.save()
        .then(
            (data) => res.json(data)
        )
        .catch(
            (err) => res.json(
                    {
                        message: err
                    }
                )
        );
});

USER_ROUTES.get("/", (req, res) => {
    USER_SCHEMA.find()
        .then(
            (data) => res.json(data)
        )
        .catch(
            (err) => res.json(
                    {
                        message: err
                    }
                )
        );
});

USER_ROUTES.get("/:user_id", (req, res) => {
    const user_id = req.params.user_id;
    USER_SCHEMA.findById(user_id)
        .then(
            (data) => res.json(data)
        )
        .catch(
            (err) => res.json(
                    {
                        message: err
                    }
                )
        );
});

USER_ROUTES.put("/:user_id", (req, res) => {
    const user_id = req.params.user_id;
    const { user_name, age, email, address } = req.body;
    
    var dict = {};
    if (user_name !== undefined) dict.user_name = user_name;
    if (age !== undefined) dict.age = age;
    if (email !== undefined) dict.email = email;
    if (address !== undefined) dict.address = address;

    USER_SCHEMA.updateOne(
        { _id : user_id },
        dict
    )
    .then((data) => res.json(data))
    .catch((err) => res.json({ message: err }));
});

USER_ROUTES.delete("/:user_id", (req, res) => {
    const user_id = req.params.user_id;
    USER_SCHEMA.findOneAndRemove(user_id)
    .then((data) => res.json(data))
    .catch((err) => res.json({ message: err}));
});

module.exports = USER_ROUTES;