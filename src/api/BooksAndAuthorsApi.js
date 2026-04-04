import axios from "axios";

const BASE_URL = import.meta.env.VITE_BOOKS_AND_AUTHORS_API;

export const booksAndAuthorsApi = axios.create({
    baseURL: BASE_URL,
})
