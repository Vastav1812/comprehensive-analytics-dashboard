import { Suspense } from 'react';
import { WeatherWidget } from '@/app-components/data-display/smart-cards';
import { SortableTable } from '../../../../data-display/dynamic-tables/SortableTable';
import { DashboardSkeleton } from '@/app-components/feedback-system/load-indicators';

const DashboardPage = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
            <Suspense fallback={<DashboardSkeleton />}>
                <div className="space-y-6">
                    <WeatherWidget location="London" />
                    <FinancialOverview />
                </div>

                <div className="md:col-span-2">
                    <MarketTrendsChart />
                </div>

                <div className="md:col-span-2">
                    <SortableTable
                        data={financialData}
                        columns={financialColumns}
                    />
                </div>
            </Suspense>
        </div>
    );
};

export default DashboardPage;