
import { metaConfig } from '../config/meta';

export const updateDocumentTitle = (title?: string) => {
  document.title = title || metaConfig.title;
};

export const setMetaDescription = (description: string) => {
  let meta = document.querySelector('meta[name="description"]');
  if (!meta) {
    meta = document.createElement('meta');
    meta.setAttribute('name', 'description');
    document.head.appendChild(meta);
  }
  meta.setAttribute('content', description);
};
