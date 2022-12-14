import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

const contactSlice = createSlice({
    name: 'contacts',
    initialState: [],
    reducers: {
        addContact(state, action) {
            state.push({
                
                name: action.payload.name,
                number: action.payload.number,
                id: nanoid(),
            });
        },
        deleteContact(state, action) {
            return state.filter(contact => contact.id !== action.payload);
        }
    }
});

const contactFilter = createSlice({
    name: 'filter',
    initialState: '',
    reducers: {
        valueContactFilter(_, action) {
            return action.payload;
        }
    }
});

export const { addContact, deleteContact } = contactSlice.actions;
export const { valueContactFilter } = contactFilter.actions;

export const contactReducer = contactSlice.reducer;
export const filterReducer = contactFilter.reducer;