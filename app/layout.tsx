import Link from "next/link"
import "./globals.css"
import kjflag from "../public/kjflag.png"
import localFont from "next/font/local"
import Image from "next/image"

const superBubbleFont = localFont({ src: "../public/fonts/SuperBubble.ttf" })

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${superBubbleFont.className} bg-gradient-to-b from-hotpink-300 to-hotpink-default h-dvh w-dvw`}
      >
        <div className="flex justify-center">
          <nav className="text-sky-900 flex items-center px-5 h-12 mt-5 bg-gradient-to-b from-skyBlue-300 to-skyBlue-100 shadow-sm shadow-sky-300 rounded-lg w-11/12 ">
            <div className="flex w-full justify-between">
              <Link href={"/"}>Home</Link>
              <div>
                <Link  href={"/register"}>Register</Link>
                <Link className="mx-7" href={"/addTags"}>Add Tags</Link>
                <Link href={"/addWord"}>Add New Word</Link>
              </div>
            </div>
          </nav>
        </div>
        <div className="flex justify-center items-center h-5/6">
          <Image
            src={kjflag}
            alt="Cute Japanese Flag"
            height={459}
            width={459}
            className="absolute -z-10 rounded-xl shadow-lg shadow-hotpink-50"
          />
          {children}
        </div>
      </body>
    </html>
  )
}
