import { useAppSelector, useAppDispatch } from "../redux/store"
import { TestOptions } from "@/helper/testEnvOptions"
import {
  MainInput,
  ClauseInput,
  TuningInput,
} from "@/components/MainTestOptions"
import { Summary, AccountSidebar, TestingSidebar } from "@/components"

const Dashboard = () => {
  const dispatch = useAppDispatch()
  const testOption: string = useAppSelector(
    (state) => state.testOption.testOption
  )


  return (
    <div className="font-mada">
      <div className="flex">
        <AccountSidebar />
        <div className="max-w-7xl w-full mx-auto">
          <Summary />
        </div>
      </div>
      <div className="mx-auto  w-full h-16 border bg-slate-100 flex justify-center items-center">
        <h1 className="font-semibold font-mada text-2xl ">Test Environment</h1>
      </div>

      <div className="hidden lg:flex">
        <TestingSidebar />
        <div className="min-h-screen max-w-7xl w-full mx-auto">
          {testOption == TestOptions.Clause_Input && <ClauseInput />}
          {testOption == TestOptions.Main_Input && <MainInput />}
          {testOption == TestOptions.Tuning_Input && <TuningInput />}
        </div>
      </div>
      <div className="block lg:hidden"></div>
    </div>
  )
}

export default Dashboard
