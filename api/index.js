import { readFile } from 'fs/promises';
import { join } from 'path';

export default async function handler(req, res) {
    try {
        const filePath = join(process.cwd(), 'api/db.json'); // Ruta correcta del archivo db.json
        const data = await readFile(filePath, 'utf8'); // Leer el archivo
        res.status(200).json(JSON.parse(data)); // Devolver el contenido como JSON
    } catch (error) {
        res.status(500).json({ error: 'Error al leer el archivo.' });
    }
}
