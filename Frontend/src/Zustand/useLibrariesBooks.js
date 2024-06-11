import {create} from 'zustand';

const useLibrariesBooks = create((set) => ({
    selectedLibrary: null,
    setSelectedLibrary : (selectedLibrary) => set({selectedLibrary}),
    Books : [],
    setBooks : (Books) => set({Books})
}));
export default useLibrariesBooks;