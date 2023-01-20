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
    user_id = req.params.user_id;
    USER_SCHEMA.findById({_id: user_id})
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

USER_ROUTES.put("/:user_id", (req, res) => {});
USER_ROUTES.delete("/:user_id", (req, res) => {});

module.exports = USER_ROUTES;