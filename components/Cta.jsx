import { Button } from "./ui/button"
import Link from "next/link"

const Cta = () => {
  return (
    <section className="py-24 bg-tertiary dark:bg-secondary/40">
        <div className="container mx-auto">
            <div className="flex flex-col items-center">
                <h2 className="h2 max-w-xl text-center mb-8">Ready to bring your concepts to life? I'm here to assist you every step of the way. </h2>
            <Link href='/contacts'>
            <Button>Contant me</Button>
            </Link>
            </div>
        </div>
    </section>
  )
}

export default Cta