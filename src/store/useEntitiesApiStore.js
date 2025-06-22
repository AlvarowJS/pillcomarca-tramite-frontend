import { create } from 'zustand';
import bdAdmin from '../api/bdAdmin';
import { getAuthHeaders } from '../utility/auth/auth';

export const useEntitiesApiStore = create((set) => ({
  // Estado para /entities
  entitiesData: null,
  entitiesLoading: false,
  entitiesError: null,
  
  typesData: null,
  typesLoading: false,
  typesError: null,

  fetchEntities: async () => {
    set({ entitiesLoading: true, entitiesError: null });
    try {
      const response = await bdAdmin.get('/entities');
      set({ entitiesData: response.data, entitiesLoading: false });
    } catch (error) {
      set({ entitiesError: error, entitiesLoading: false });
      console.error("Error fetching entities:", error);
    }
  },

  fetchEntityTypes: async () => {
    set({ typesLoading: true, typesError: null });
    try {
      const response = await bdAdmin.get('/entity-types', getAuthHeaders());
      set({ typesData: response.data, typesLoading: false });
    } catch (error) {
      set({ typesError: error, typesLoading: false });
      console.error("Error fetching entity types:", error);
    }
  }
}));