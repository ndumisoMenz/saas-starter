import * as dotenv from "dotenv";
import path from "path";
// Execute immediately when this file is imported
dotenv.config({ path: path.resolve(process.cwd(), "../../.env") });