export function img(path) {
  const base = import.meta.env.BASE_URL || '/';
  return `${base}images/${path}`;
}
