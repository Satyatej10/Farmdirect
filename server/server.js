const express = require('express');
const app = express();
const mongoose = require('mongoose');
const multer = require('multer');
const cors = require('cors');
const { CloudinaryStorage } = require('multer-storage-cloudinary');
const cloudinary = require('cloudinary').v2;
const Images = require('./model');


app.use(cors());
app.use(express.json());

app.listen(4000, () => {
    console.log("Server started on port 4000");
});

mongoose.connect("mongodb+srv://322103312083:951509290@cluster0.8iess.mongodb.net/movie")
    .then(() => {
        console.log("MongoDB connected");
    })
    .catch((err) => {
        console.error("Error connecting to database:", err);
    });


cloudinary.config({
    cloud_name: "dthh2uenu", 
    api_key: "184761731987834",
    api_secret: "3BY0vtJkpgH7vJ527uMEsJ58tHs",
});

const storage = new CloudinaryStorage({
    cloudinary: cloudinary,
    params: {
        folder: 'uploads',
        allowed_formats: ['jpg', 'jpeg', 'png'],
    },
});

const upload = multer({ storage: storage });

// Endpoint to upload an image with additional fields
app.post('/uploadimage', upload.single('image'), async (req, res) => {
    const imageUrl = req.file.path; // Cloudinary returns the file URL in 'path'
    const { name, price, grams } = req.body;

    try {
        await Images.create({
            image: imageUrl,
            name: name,
            price: price,
            grams: grams
        });
        res.json({ status: "ok" });
    } catch (error) {
        console.error("Error uploading image:", error);
        res.status(500).send("Error uploading image: " + error.message);
    }
});

app.get('/getimage', async (req, res) => {
    try {
        const data = await Images.find({});
        res.json({ status: "ok", data: data });
    } catch (error) {
        console.error("Error fetching images:", error);
        res.status(500).json({ status: "error", message: "Error fetching images" });
    }
});

