import { createSlice } from '@reduxjs/toolkit';

interface WeatherState {
    data: WeatherData | null;
    loading: boolean;
    error: string | null;
}

const initialState: WeatherState = {
    data: null,
    loading: false,
    error: null
};

export const weatherSlice = createSlice({
    name: 'weather',
    initialState,
    reducers: {
        setWeatherData: (state, action) => {
            state.data = action.payload;
            state.loading = false;
        }
    }
});

export const { setWeatherData } = weatherSlice.actions;
export default weatherSlice.reducer;