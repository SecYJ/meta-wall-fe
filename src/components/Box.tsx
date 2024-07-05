import { ElementType, HTMLAttributes, PropsWithChildren } from "react";
import { cn } from "../utils/cn";

interface IBox extends PropsWithChildren<HTMLAttributes<HTMLDivElement>> {
    as?: ElementType;
    rounded?: boolean;
}

const Box = ({ as: Component = "div", rounded, children, ...props }: IBox) => {
    return (
        <Component
            {...props}
            className={cn(
                "border-dark border-2",
                rounded && "rounded-lg",
                props.className,
            )}
        >
            {children}
        </Component>
    );
};

export default Box;
