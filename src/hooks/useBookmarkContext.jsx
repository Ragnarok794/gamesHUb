import { useContext } from "react";
import { BookmarksContext } from "../context/BookmarksContext";



export const useBookmarks = ()=> {
    return useContext(BookmarksContext)
}