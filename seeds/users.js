const db = require("../db");
const User = require("../models/user");
const Bear = require("../models/bear");

const createUser = async () => {
    const bears = await Bear.findOne({ color: "panda" });
    const newUser = [
    {
        username: "beeboop12",
        email: "beeb@email.com",
        bear: bears._id
    },
    {
        username: "derpherder31",
        email: "derp31@email.com",
        bear: bears._id
    },
    {
        username: "herrderr543",
        email: "heer543@email.com",
        bear: bears._id
    }
]

await User.insertMany(newUser)
};

const main = async () => {
    await createUser();
    db.close()
}

main();