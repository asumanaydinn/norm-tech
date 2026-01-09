import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

// Sanity client yapılandırması
export const client = createClient({
  projectId: process.env.REACT_APP_SANITY_PROJECT_ID || 'your-project-id',
  dataset: process.env.REACT_APP_SANITY_DATASET || 'production',
  useCdn: true, // Production için `true`, development için `false`
  apiVersion: '2024-01-01', // Güncel API versiyonu
  token: process.env.REACT_APP_SANITY_TOKEN, // Sadece write işlemleri için gerekli
});

// Image URL builder
const builder = imageUrlBuilder(client);

export function urlFor(source: any) {
  return builder.image(source);
}
