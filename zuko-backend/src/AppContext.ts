import { Db } from './db/db';
import {OakHttpClient} from './oakHttpClient';

export interface AppContext {
    // So you can set c.set("db") amd c.get("db") with typesafety
    Variables: {
      oakHttpClient: OakHttpClient
      db :Db
    };
    // For Cloudflare bindings (e.g. KV, Durable objects, R2, etc.)
    Bindings: {
      OAK_NATIONAL_ACADEMY_HTTP_URL: string
      DB_TURSO_URL: string
      DB_TURSO_AUTH_TOKEN: string
    };
  }