import createClient, { Client } from "openapi-fetch";
import type { paths } from "./codegen/oak-api";

export const createOakHttpClient = (baseUrl: string) => createClient<paths>({ baseUrl });

export type OakHttpClient = Client<paths>;