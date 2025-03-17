interface DataCardProps {
    title: string;
    value: string;
    trend: 'up' | 'down';
}

function TrendIndicator(props: { trend: "up" | "down" }) {
    return null;
}

export const DataCard = ({ title, value, trend }: DataCardProps) => (
    <div className="group bg-card-bg p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
    <div className="flex justify-between items-center mb-4">
    <h3 className="text-lg font-medium text-primary-text">{title}</h3>
        <TrendIndicator trend={trend} />
</div>
<p className="text-3xl font-bold text-data-positive">{value}</p>
    <div className="absolute inset-0 border-2 border-transparent group-hover:border-primary-light rounded-xl transition-all" />
    </div>
);