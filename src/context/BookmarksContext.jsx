import React, { createContext, useEffect, useReducer } from 'react'
import reducerBookmarks from '../reducer/BookmarksReducer/reducerBookmarks';
import initialStatebookmark from '../reducer/BookmarksReducer/initialStatebookmark';
import { useLocalStorage } from '../hooks/useLocalStorage';


export const BookmarksContext = createContext();

export const BookmarksProvider = ({children}) => {
  const [bookmarks, setBookmarks] = useLocalStorage('bookmarks',initialStatebookmark);
  const [stateContext, dispatchContext]=useReducer(reducerBookmarks,initialStatebookmark)
useEffect(()=>{
  console.log(stateContext)
setBookmarks(stateContext)
},[stateContext])
  
    return <BookmarksContext.Provider value={{stateContext:bookmarks, dispatchContext:dispatchContext}}>{children}</BookmarksContext.Provider>
  
}

