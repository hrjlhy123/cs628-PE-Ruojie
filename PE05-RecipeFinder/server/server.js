import express from 'express';
import cors from 'cors';
import { MongoClient, ObjectId } from 'mongodb';
import dotenv from 'dotenv';

dotenv.config()

const app = express()
app.use(cors())
app.use(express.json())

const PORT = process.env.PORT || 4000;
const client = new MongoClient(process.env.MONGODB_URI)
let recipesCol

const start = async () => {
    await client.connect()
    const db = client.db(process.env.DB_NAME || 'recipe_finder')
    recipesCol = db.collection('recipes')

    app.get('/api/health', (req, res) => res.json({ ok: true }));

    app.get('/api/recipes', async (req, res) => {
        const items = await recipesCol.find({}).sort({ createdAt: -1 }).toArray();
        res.json(items);
    });

    app.get('/api/recipes/:id', async (req, res) => {
        try {
            const _id = new ObjectId(req.params.id);
            const doc = await recipesCol.findOne({ _id });
            if (!doc) return res.status(404).json({ error: 'Not found' });
            res.json(doc);
        } catch (e) {
            res.status(400).json({ error: 'Invalid id' });
        }
    });

    app.post('/api/recipes', async (req, res) => {
        const { name, ingredients = [], instructions = '', notes = '' } = req.body;
        if (!name) return res.status(400).json({ error: 'name is required' });
        const doc = {
            name,
            ingredients,
            instructions,
            notes,
            createdAt: new Date()
        };
        const { insertedId } = await recipesCol.insertOne(doc);
        const saved = await recipesCol.findOne({ _id: insertedId });
        res.status(201).json(saved);
    });

    app.put('/api/recipes/:id', async (req, res) => {
        try {
            const _id = new ObjectId(req.params.id);
            const { name, ingredients, instructions, notes } = req.body;
            const update = { $set: { name, ingredients, instructions, notes } };
            const result = await recipesCol.findOneAndUpdate(
                { _id },
                update,
                { returnDocument: 'after' }
            );
            if (!result) return res.status(404).json({ error: 'Not found' });
            res.json(result);
        } catch (e) {
            res.status(400).json({ error: 'Invalid id' });
        }
    });

    app.delete('/api/recipes/:id', async (req, res) => {
        try {
            const _id = new ObjectId(req.params.id);
            const { deletedCount } = await recipesCol.deleteOne({ _id });
            if (!deletedCount) return res.status(404).json({ error: 'Not found' });
            res.json({ ok: true });
        } catch (e) {
            res.status(400).json({ error: 'Invalid id' });
        }
    });

    app.listen(PORT, () => console.log(`API listening on http://localhost:${PORT}`));
}

start().catch((err) => {
    console.error(`Failed to start server: ${err}`)
    process.exit(1)
})