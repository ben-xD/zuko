// For the frontend
import app from './main'
import { hc } from 'hono/client'

// Using https://github.com/m-shaka/hono-rpc-perf-tips-example/blob/main/apps/client/src/index.ts
// assign the client to a variable to calculate the type when compiling
const client = hc<typeof app>('')
export type Client = typeof client

export const hcWithType = (...args: Parameters<typeof hc>): Client => hc<typeof app>(...args)