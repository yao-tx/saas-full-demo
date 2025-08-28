import { Logo } from "@/components/Logo";
import Link from "next/link";

export default function Login() {
  return (
    <div className="relative container hidden flex-1 shrink-0 items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0 max-h-screen">
      <div className="text-primary relative hidden h-full flex-col p-10 lg:flex dark:border-r bg-neutral-900">
        <Link href="/" className="flex items-center gap-2">
          <Logo isDark />
        </Link>
      </div>
      <div className="flex items-center justify-center lg:h-[1000px] lg:p-8"></div>
    </div>
  );
}