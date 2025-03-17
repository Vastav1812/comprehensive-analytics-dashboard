import { useWeatherData } from '../../../Hooks/useWeatherData';

export const WeatherWidget = ({ location }) => {
    const { data, isLoading, error } = useWeatherData(location);

    if (error) return <ErrorFallback message="Weather data unavailable" />;
    if (isLoading) return <WeatherSkeleton />;

    return (
        <div className="bg-card p-6 rounded-xl">
            <div className="flex items-center justify-between">
                <h3 className="text-xl font-semibold">{data.location}</h3>
                <WeatherIcon condition={data.condition} />
            </div>
            <div className="mt-4">
                <p className="text-4xl font-bold">{data.temp}°C</p>
                <p className="text-sm text-gray-500 mt-2">
                    Humidity: {data.humidity}% | Wind: {data.windSpeed} km/h
                </p>
            </div>
        </div>
    );
};