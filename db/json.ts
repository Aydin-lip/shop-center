import * as fs from 'node:fs/promises';
import path from "node:path";

const ConnectionJSON = async (connection: string, change?) => {
  if (change) {
    const filePath = path.join(process.cwd(), 'data', `${connection}.json`)
    await fs.writeFile(filePath, JSON.stringify(change))
  } else {
    const filePath = path.join(process.cwd(), 'data', `${connection}.json`)
    const jsonData = await fs.readFile(filePath)
    const data = JSON.parse(String(jsonData))
    return data
  }
}

export default ConnectionJSON