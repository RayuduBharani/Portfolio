import { LeetcodeProfileInfo, LeetcodeRecentSubmissions } from "@/app/actions/action"
import AboutInfo from "./info"


export async function AboutPage() {
  const leetcodeProfile = await LeetcodeProfileInfo("RayuduBharani")
  const recentSubmissions = await LeetcodeRecentSubmissions("RayuduBharani")
  return (
    <div className="container mx-auto px-4 max-w-4xl py-10">
      <AboutInfo leetcodeProfileInfo={leetcodeProfile} recentSubmissions={recentSubmissions} />
    </div>
  )
}