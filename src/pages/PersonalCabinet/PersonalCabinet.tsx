import { useState } from "react"
import PersonalCabinetTrainings from "./PersonalCabinetTrainings"
import UserInfo from "./UserInfo"
import EditUserProfile from "./EditUserProfile"

const PersonalCabinet = () => {

  const [isEditMode, setisEditMode] = useState(false)

  return (
    <div className="w-full flex flex-col gap-4 overflow-x-scroll md:flex-row">
      <UserInfo isEditMode={isEditMode} setEditMode={setisEditMode} />
      {
        isEditMode
          ? <EditUserProfile />
          : <PersonalCabinetTrainings />
      }
    </div>
  )
}

export default PersonalCabinet