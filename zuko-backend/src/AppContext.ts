import { Db } from './db/db';
import {OakHttpClient} from './oakHttpClient';
import {Ai} from '@cloudflare/workers-types';


export interface AppContext {
    // So you can set c.set("db") amd c.get("db") with typesafety
    Variables: {
      oakHttpClient: OakHttpClient
      db :Db
    };
    // For Cloudflare bindings (e.g. KV, Durable objects, R2, etc.)
    Bindings: {
      AI: Ai,
      OAK_NATIONAL_ACADEMY_HTTP_URL: string
      DB_TURSO_URL: string
      DB_TURSO_AUTH_TOKEN: string
    };
  }