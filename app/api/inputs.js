import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
  const filePath = path.join(process.cwd(), 'app/api/test_cases.txt');
  const data = fs.readFileSync(filePath, 'utf8');
  const inputs = data.split('\n').map(line => line.trim()).filter(line => line);
  
  res.status(200).json({ inputs });
}