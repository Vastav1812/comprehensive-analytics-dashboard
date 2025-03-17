import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navItems = [
    { name: 'Dashboard', path: '/dashboard' },
    { name: 'Weather', path: '/weather' },
    { name: 'Finance', path: '/finance' },
    { name: 'News', path: '/news' }
];

export const SidebarNavigation = () => {
    const pathname = usePathname();

    return (
        <nav className="w-64 border-r bg-card-bg p-4">
            <div className="space-y-2">
                {navItems.map((item) => (
                    <Link
                        key={item.path}
                        href={item.path}
                        className={`flex items-center px-4 py-2 rounded-lg transition-colors ${
                            pathname === item.path
                                ? 'bg-primary text-white'
                                : 'hover:bg-accent/10'
                        }`}
                    >
                        {item.name}
                    </Link>
                ))}
            </div>
        </nav>
    );
};