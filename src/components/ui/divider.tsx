interface DividerProps {
    className?: string;
}

const Divider: React.FC<DividerProps> = ({
    className = "mb-12 lg:mb-14 xl:mb-16 pb-0.5 lg:pb-1 xl:pb-0",
}) => {
    return (
        <div
            className={`border-t border-gray-300 dark:border-gray-800/40  transition-ease-effect ${className}`}
        />
    );
};

export default Divider;
