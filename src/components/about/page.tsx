import { LeetcodeProfileInfo, LeetcodeRecentSubmissions } from "@/app/actions/action"
import AboutInfo from "./info"


export async function AboutPage() {
  const leetcodeProfile = await LeetcodeProfileInfo("RayuduBharani")
  const recentSubmissions = await LeetcodeRecentSubmissions("RayuduBharani")
  return (
    <div className="container mx-auto sm:px-4 sm:max-w-4xl py-10 overflow-x-hidden">
      <AboutInfo leetcodeProfileInfo={leetcodeProfile} recentSubmissions={recentSubmissions} />
    </div>
  )
}