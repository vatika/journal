import { getCollection } from 'astro:content';

export async function getAllBooks() {
  const books = await getCollection('books');
  return books.sort((a, b) => b.data.finished.localeCompare(a.data.finished));
}

export async function getBooksByYear(year: number) {
  const all = await getAllBooks();
  const prefix = `${year}-`;
  return all.filter((b) => b.data.finished.startsWith(prefix));
}
