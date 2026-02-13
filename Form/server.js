import express from "express";   // Handle HTTP requests (GET, POST, etc.)
import { appendFile } from "fs"; // file system  
// appendFile means:
// Add data at the end of a file
// If file doesn’t exist → it creates it

const app = express();
// This creates your server application
// app is used to:
// Define routes
// Start the server

app.use(express.json());  // read json data

app.post("/push", (req, res) => {
    const { name, phone, email, college } = req.body;  // Extracting data from request

    // same as above line
    //   const name = req.body.name;
    // const phone = req.body.phone;
    // const email = req.body.email;
    // const college = req.body.college;

    if (!name || !phone || !email || !college) {
        return res.status(400).send("All fields required");  // This is about validation
    }
    const row = `\n${phone},${name},${email},${college}`;

    appendFile("data2.csv", row, (err) => {
        if (err) {
            res.status(500).send("Error writing CSV");
        } else {
            res.send("CSV Data Pushed Successfully");
        }
    });

});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});
