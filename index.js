import express from "express";

import cors from "cors";
import { pool } from "./db.js";

const app = express();

app.use(cors());
app.use(express.json());

app.get("/prueba", async (req, res) => {
    try {
        const datos = await pool.query("SELECT * FROM prueba");
        res.json(datos.rows);
        console.log(datos.rows);
    }catch (error) {
        res.status(500).json({ message: "Error occurred :" + error.message });
    }


})

app.listen(3000, () => {
  console.log("Server is running on port 3000");
})



