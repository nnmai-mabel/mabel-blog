import { Button } from "flowbite-react";

export default function CallToAction() {
  return (
    <div className="flex flex-col sm:flex-row p-3 border border-cyan-500 justify-center items-center rounded-tl-3xl rounded-br-3xl text-center">
        <div className="flex-1 justify-center flex flex-col">
            <h2 className="text-2xl">
                Want to learn more about ReactJS?
            </h2>
            <p className="text-gray-500 my-2">
                Check out these resources
            </p>
            <Button gradientMonochrome='info' className="rounded-tl-xl rounded-bl-none">
                <a href="#" target="_blank" rel="noopener noreferrer">
                    100 Projects
                </a>
            </Button>
        </div>
        <div className="p-7 flex-1">
            <img src="https://miro.medium.com/v2/resize:fit:624/1*_Z2W8urXttbKVBaryY9PfQ.png" />
        </div>
    </div>
  )
}
