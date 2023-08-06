import { images } from "../constant"
import { useAppSelector } from "../redux/store"
const Summary = () => {

  return (
    <div className="">
      <h1 className="text-base md:text-3xl text-center md:text-left font-semibold mt-4">
        Summary of your account
      </h1>
      <div
        id="AnalyticsPage"
        className=" mt-8 flex flex-col md:flex md:flex-row md:justify-start  justify-center md:space-x-5 space-x-0 space-y-5 md:space-y-0"
      >
        <div className="flex flex-col space-y-2 rounded-xl px-8 py-4 shadow-md">
          <div className="flex flex-row-reverse justify-center">
            <div className="px-4">
              <h1 className=" text-sm text-gray-600">Total tests</h1>
              <h1 className="text-xl font-semibold">info</h1>
            </div>
            <div className="w-12 h-12 ">
              <img src={images.students} className="w-full" alt="students" />
            </div>
          </div>
          <h1 className=" text-sm text-gray-600 text-center pt-4">
            as on June 15, 2023/ subtite
          </h1>
        </div>
        <div className="flex  flex-col space-y-2 rounded-xl border px-8 py-4 shadow-md">
          <div className="flex flex-row-reverse justify-center">
            <div className="px-4">
              <h1 className=" text-sm text-gray-600">other info</h1>
              <h1 className="text-xl font-semibold">info</h1>
            </div>
            <div className="w-12 h-12 ">
              <img src={images.money} className="w-full" alt="students" />
            </div>
          </div>
          <h1 className=" text-sm text-gray-600 text-center pt-4">
            as on June 15, 2023/ subtite
          </h1>
        </div>
        <div className="flex  flex-col space-y-2 rounded-xl border px-8 py-4 shadow-md">
          <h1 className=" text-sm text-gray-600"> test results</h1>
          <h1 className="text-xl font-semibold">08</h1>
          <h1 className=" text-sm text-gray-600   ">subtitle</h1>
        </div>
      </div>
    </div>
  )
}

export default Summary
