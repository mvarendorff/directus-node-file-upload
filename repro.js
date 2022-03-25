import {Directus} from "@directus/sdk";
import FormData from "form-data";
import fs from "fs";

const directus = new Directus("http://localhost:8055");

await directus.auth.login({email: 'admin@example.com', password: '123456'});

const file = fs.createReadStream('./asset.png');
const form = new FormData();
form.append('file', file);

await directus.files.createOne(form);
