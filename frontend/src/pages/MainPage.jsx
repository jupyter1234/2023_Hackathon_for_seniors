import MealSchedule from "../components/MealSchedule"
import LectureSchedule from "../components/LectureSchedule"

export default function MainPage() {
  return (
    <div>
      <h1>Main Page</h1>
      <LectureSchedule/>
      <MealSchedule/>
    </div>
  )
}