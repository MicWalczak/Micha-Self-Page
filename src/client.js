import { createClient } from "@sanity/client";
import createImageUrlBuilder from '@sanity/image-url'

export const client = createClient({
    projectId:process.env.REACT_APP_SANITY_PROJECT_ID,
    dataset:'production',
    apiVersion:'2023-02-28',
    useCdn:true,
    token:process.env.REACT_APP_SANITY_TOKEN
})


export const urlFor=(source)=>createImageUrlBuilder(client).image(source)