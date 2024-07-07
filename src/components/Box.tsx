import { ElementType, HTMLAttributes, PropsWithChildren } from "react";
import { cn } from "../utils/cn";

interface IBox extends PropsWithChildren<HTMLAttributes<HTMLDivElement>> {
    as?: ElementType;
    rounded?: boolean;
    withDropShadow?: boolean;
}

const Box = ({
    as: Component = "div",
    rounded,
    children,
    withDropShadow,
    ...props
}: IBox) => {
    return (
        <Component
            {...props}
            className={cn(
                "border-2 border-dark bg-white",
                rounded && "rounded-lg",
                withDropShadow &&
                    "drop-shadow-[0px_3px_0px_theme(colors.dark)]",
                props.className,
            )}
        >
            {children}
        </Component>
    );
};

export default Box;
