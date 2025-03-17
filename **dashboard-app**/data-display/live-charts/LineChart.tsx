import { useSpring, animated } from '@react-spring/web';

export const AnimatedLineChart = ({ data }) => {
    const { width } = useSpring({
        from: { width: 0 },
        to: { width: 100 },
        config: { tension: 120, friction: 14 }
    });

    return (
        <div className="h-64 p-4 bg-card rounded-xl">
            <animated.div
                className="h-1 bg-primary-light"
                style={{ width: width.to(w => `${w}%`) }}
            />
        </div>
    );
};