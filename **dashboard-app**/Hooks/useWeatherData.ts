import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setWeatherData } from '../data-management/Redux slices/weatherSlice';

export const useWeatherData = (location: string) => {
    const dispatch = useDispatch();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`/api/weather?location=${location}`);
                const data = await response.json();
                dispatch(setWeatherData(data));
            } catch (error) {
                console.error('Weather data fetch failed:', error);
            }
        };

        fetchData();
    }, [location, dispatch]);
};