import error from "../assets/404.jpg"

export default function ErrorPage() {
  return (
    <div  className="flex justify-center items-center w-full mt-14">
      <img src={error} className="bg-no-repeat bg-center bg-cover" alt="error" />
    </div>
  )
}
