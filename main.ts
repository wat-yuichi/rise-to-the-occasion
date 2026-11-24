import { writeFile } from "node:fs/promises";

const joke = "My bakery hired an optimist. Every morning he tells the dough, 'You can rise to the occasion.'";

await writeFile("/output/entry.txt", joke, "utf8");
