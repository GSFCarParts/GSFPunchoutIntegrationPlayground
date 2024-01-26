const express = require("express");
const app = express();
const port = 3000;
const axios = require("axios");

app.use(express.static("public"));

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/index.html");
});

app.get("/punchout", async (req, res) => {
    try {
        const url = "https://gsfapi.com/Punchout";

        //-- Replace your API key here
        const apiKey = "";

        if (!apiKey)
            return res.status(400).send({ message: "No api key found" });

        //-- Replace your customer id here.
        const customerId = "";

        if (!customerId)
            return res.status(400).send({ message: "No customer id found" });

        const response = await axios.get(url, {
            headers: {
                apikey: apiKey,
            },
            maxRedirects: 0,
            validateStatus: null,
            params: {
                customerId: customerId,
                vrm: "Av07gvk",
            },
        });

        const locationHeader = response.headers.get("Location");
        return res.send({ locationHeader });
    } catch (error) {
        console.error("Error:", error);
    }
    return res.send();
});

// Start the server
app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});
