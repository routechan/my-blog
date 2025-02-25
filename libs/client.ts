import { createClient } from "microcms-js-sdk";

export const client = createClient({
    serviceDomain: 'route-blog',
    apiKey: process?.env.API_KEY ?? ''
});