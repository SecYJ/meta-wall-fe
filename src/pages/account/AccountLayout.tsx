import { Box } from "@/components";
import { cn } from "@/utils/cn";
import { NavLink, Outlet } from "react-router-dom";

const AccountLayout = () => {
    return (
        <>
            <div className="ml-4 mt-8 flex">
                <NavLink
                    to="/account/edit"
                    end
                    className={({ isActive }) =>
                        cn(
                            "grounded-tr-lg rounded-tl-lg rounded-tr-lg border-2 border-b-0 border-dark px-6 py-2",
                            isActive && "bg-dark text-white",
                        )
                    }
                >
                    暱稱修改
                </NavLink>
                <NavLink
                    to="/account/edit/password"
                    end={false}
                    className={({ isActive }) =>
                        cn(
                            "rounded-tl-lg rounded-tr-lg border-2 border-b-0 border-dark px-6 py-2",
                            isActive && "bg-dark text-white",
                        )
                    }
                >
                    重設密碼
                </NavLink>
            </div>
            <Box withDropShadow rounded className="relative py-4">
                <div className="mx-auto max-w-[323px]">
                    <Outlet />
                </div>
            </Box>
        </>
    );
};

export default AccountLayout;
