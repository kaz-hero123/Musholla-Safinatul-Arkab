import { cn } from "@/lib/utils";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto auto-rows-min",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  icon,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "row-span-1 rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-none p-4 bg-bg-secondary border border-white/10 justify-between flex flex-col space-y-4 relative overflow-hidden",
        className
      )}
    >
      {header}
      <div className="group-hover/bento:translate-x-2 transition duration-200 z-10 relative">
        {icon}
        <div className="font-display font-bold text-text-primary mb-2 mt-2">
          {title}
        </div>
        <div className="font-sans font-normal text-text-secondary text-sm">
          {description}
        </div>
      </div>
    </div>
  );
};
