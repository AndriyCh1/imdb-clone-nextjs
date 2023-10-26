import Image from "next/image";

export default function Loading() {
  return (
    <div className="flex justify-center">
      <Image className="h-80" src="spinner.svg" alt="loading..." fill={true} />
    </div>
  );
}
