import dynamic from 'next/dynamic';
import {AnimatedLineChart} from "./LineChart";

const LazyLineChart = dynamic(
    () => import('./LineChart').then(mod => mod.AnimatedLineChart),
    {
        ssr: false,
        loading: () => <ChartSkeleton />
    }
);

export const ResponsiveChart = ({ data }) => (
    <ErrorBoundary fallback={<ChartError />}>
        <LazyLineChart data={data} />
    </ErrorBoundary>
);