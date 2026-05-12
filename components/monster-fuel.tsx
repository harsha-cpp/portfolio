"use client"

import Image from "next/image"

export default function MonsterFuel() {
  return (
    <div className="relative w-[220px] md:w-[260px] select-none">
      <div
        aria-hidden
        className="absolute inset-0 -z-10 scale-150 blur-3xl opacity-20"
        style={{
          background:
            "radial-gradient(closest-side, hsl(172 50% 45%), transparent 70%)",
        }}
      />
      <Image
        src="/monster_ultra.png"
        alt="Monster Energy Ultra White"
        width={1024}
        height={1024}
        className="w-full h-auto"
        priority={false}
      />
    </div>
  )
}
