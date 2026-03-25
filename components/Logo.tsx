import Image from "next/image";
import Link from "next/link";

export const Logo = ({
  className,
  link = true,
}: {
  className?: string;
  link?: boolean;
}) => {
  const logoImg = (
    <Image
      src="/logo.svg"
      alt="NerstAgric Logo"
      width={212}
      height={54}
      priority
      className={className}
    />
  );

  return link ? <Link href="/">{logoImg}</Link> : logoImg;
};
