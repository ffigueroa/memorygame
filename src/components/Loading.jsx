import Image from 'next/image';

export default function Loading() {
  return (
    <div className="w-full h-full absolute top-0 bg-white/90 flex items-center justify-center">
      <Image src="/images/loading.svg" width="100" height="100" alt="Loading" />
    </div>
  );
}
