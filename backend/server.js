import express from 'express';

const app = express();

app.post("/login", (req, res) => {
    const { email, password } = req.body;

    // if email in database
    // match password with bcrypt
    // send cookies
    // if fail --> send error 404
});

app.listen(8000, () => {
    console.log("Server up");
})