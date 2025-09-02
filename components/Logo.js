import Image from 'next/image'
import Link from 'next/link'

export default function Logo() {
  return (
    <Link href="/">
      <div className="relative w-48 h-16">
        <Image
          src="/logo.webp"
          alt="Blondie"
          fill
          className="object-contain"
          priority
        />
      </div>
    </Link>
  )
} 