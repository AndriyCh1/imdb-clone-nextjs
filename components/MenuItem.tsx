import Link from "next/link";

type Props = {
  title: string;
  address: string;
};

export default function MenuItem({ title, address }: Props) {
  return (
    <div className="mr-4">
      <Link href={address} className="mr-4 hover:text-amber-600">
        {title}
      </Link>
    </div>
  );
}
