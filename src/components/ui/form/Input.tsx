import Box from "@/components/Box";
import { cn } from "@/utils/cn";
import { InputHTMLAttributes } from "react";
import { Control, FieldValues, Path, useController } from "react-hook-form";

interface Props<T extends FieldValues>
    extends InputHTMLAttributes<HTMLInputElement> {
    control: Control<T>;
    name: Path<T>;
}

const Input = <T extends FieldValues>({
    control,
    name,
    ...props
}: Props<T>) => {
    const { field, fieldState } = useController({ control, name });

    return (
        <div className="space-y-1">
            <Box>
                <input
                    className={cn(
                        "w-full px-6 py-4 placeholder:text-shadow",
                        props.className,
                    )}
                    {...props}
                    {...field}
                />
            </Box>
            <p className="text-sm text-danger">{fieldState.error?.message}</p>
        </div>
    );
};

export default Input;
