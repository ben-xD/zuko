import { drizzle } from 'drizzle-orm/libsql';

export const createDb = ({url, authToken}: {url: string, authToken: string}) => {
    return drizzle({ connection: {
        url, 
        authToken 
      }});
}

export type Db = ReturnType<typeof createDb>