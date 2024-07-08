import { HTMLAttributes, PropsWithChildren } from "react";
import Box from "./Box";
import { cn } from "@/utils/cn";

interface Props extends HTMLAttributes<HTMLHeadingElement> {}

const PageTitle = ({
    children,
    className,
    ...props
}: PropsWithChildren<Props>) => {
    return (
        <Box
            className={cn(
                "relative bg-white py-4 text-center text-xl",
                className,
            )}
            {...props}
            as="h1"
        >
            <span>{children}</span>
            <Box
                className="absolute inset-0 -z-[1] -translate-x-1.5 translate-y-1.5"
                aria-hidden
            />
        </Box>
    );
};

export default PageTitle;
