import { builder } from '@builder.io/react';

// Initialize Builder with your API key
builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);

// Configure Builder for your SaintSal platform
export const builderConfig = {
  apiKey: process.env.NEXT_PUBLIC_BUILDER_API_KEY!,
  models: [
    {
      name: 'page',
      kind: 'page',
    },
    {
      name: 'header',
      kind: 'component',
    },
    {
      name: 'footer', 
      kind: 'component',
    },
    {
      name: 'hero-section',
      kind: 'component',
    }
  ]
};

export default builder;
