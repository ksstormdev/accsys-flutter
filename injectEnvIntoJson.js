const fs = require('fs');
const dotenv = require('dotenv');

// Load environment variables from .env file
dotenv.config();

// Specify the path to your JSON file
const jsonFilePath = './path/to/your/file.json';
// Read the file
const fileContent = fs.readFileSync(jsonFilePath, 'utf8');
// Parse JSON content
let jsonContent = JSON.parse(fileContent);

// Placeholder value to look for
const placeholder = "NX_CLOUD_ACCESS_TOKEN";

// Check if the current value is the placeholder and replace it
if (jsonContent.nxCloudAccessToken === placeholder) {
    jsonContent.nxCloudAccessToken = process.env.NX_CLOUD_ACCESS_TOKEN || 'default_value_if_not_set';
} else {
    console.log('Placeholder not found or already replaced.');
}

// Write the modified object back to the file
fs.writeFileSync(jsonFilePath, JSON.stringify(jsonContent, null, 2), 'utf8');

console.log('Environment variables have been injected into the JSON file.');
