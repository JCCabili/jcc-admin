import fs from "fs";

export async function readJSONFile(path) {
    let data = await fs.readFileSync(path);
    try {
        return JSON.parse(data);
    } catch (error) {
        
    } 
    return undefined;
}