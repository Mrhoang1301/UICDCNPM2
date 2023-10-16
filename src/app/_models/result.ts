import { Pagination } from "./pagination";

export interface Result<T> {
    content: T[],
    pageble: Pagination
}