import { site } from "@/data/site"

export function BookNow() {
  return (
    <a
      href={`tel:${site.phoneTel}`}
      className="call-btn fixed bottom-[30px] left-2.5 z-[2] flex h-[60px] w-[60px] bg-[url('/img/call.webp')] bg-cover bg-center bg-no-repeat max-[600px]:bottom-0 max-[600px]:left-0 max-[600px]:right-0 max-[600px]:h-[50px] max-[600px]:w-screen max-[600px]:items-center max-[600px]:justify-center max-[600px]:bg-green-600 max-[600px]:[background-image:none]"
      aria-label={`Call ${site.phoneDisplay}`}
    >
      <span className="hidden text-center text-xl text-white max-[600px]:block">Book Now</span>
    </a>
  )
}
