// Warning: use `import type`, rather than `import` to avoid accidentally importing backend packages that are transitively imported. This would cause the application to fail to start.
import { hcWithType } from 'zuko-backend/httpClient'
import { env } from './env'

export const client = hcWithType(env.backendHttpUrl);
