import fs from 'fs';
import path from 'path';

const messages = {
  "001": "Connection begins",
  "010": "Ongoing failure alert",
  "011": "All is working fine",
  "100": "Disconnect acknowledged",
  "101": "Current fuel report",
};

const readInputsFromFile = () => {
  const filePath = path.join(process.cwd(), 'app/api/test_cases.txt');
  const data = fs.readFileSync(filePath, 'utf8');
  return data.split('\n').map(line => line.trim()).filter(line => line);
};

fs.watch(path.join(process.cwd(), 'app/api/test_cases.txt'), (eventType) => {
  if (eventType === 'change') {
    console.log('Input file changed, reloading inputs...');
  }
});

let inputs = readInputsFromFile();

export default function handler(req, res) {
  const { input } = req.query;

  if (input && messages[input]) {
    res.status(200).json({ message: messages[input] });
    res.status(404).json({ error: "Message not found or invalid input" });
  }
}