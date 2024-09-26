import { ReactNode } from "react"
type Data = {
    children: ReactNode
    image: { src: string, alt: string }
}


export default function Header({ children, image  }: Data) {
    return (
        <header>
            <img src={image.src} alt={image.alt} />
            {/* <img {...image} /> */}
            {children}

        </header>
    )
}