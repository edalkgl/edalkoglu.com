const CDN = 'https://cdn.jsdelivr.net/gh/edalkgl/cdn@latest/';

export const cdnHelper = (asset: string): string => {
  return CDN + asset;
};
