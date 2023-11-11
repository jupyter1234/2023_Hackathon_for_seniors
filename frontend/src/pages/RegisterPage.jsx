import { useRecoilValue } from "recoil";
import { ProgramInfo } from "../store/Info";

export default function RegisterPage() {
  const programInfo = useRecoilValue(ProgramInfo);
  console.log(programInfo);
  return (
    <div>
      <h1>Register Page</h1>
    </div>
  )
}