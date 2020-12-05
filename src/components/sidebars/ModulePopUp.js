import React, { useState } from "react"
import { Transition } from "@headlessui/react"
import StJudeCloudPecanLogo from "../../icons/stjudecloud-pecan-logo.svg"
import StJudeCloudGenomicsPlatformLogo from "../../icons/stjudecloud-genomics-platform-logo.svg"
import StJudeCloudVisualizationCommunityLogo from "../../icons/stjudecloud-visualization-community-logo.svg"

const ModulePopUp = ({ show }) => {
  const [isInPopup, setIsInPopup] = useState(false)

  return (
    <div
      className="absolute inset-0"
      style={{ transform: "translate(100%)" }}
      onMouseEnter={() => {
        setIsInPopup(true)
      }}
      onMouseLeave={() => setIsInPopup(false)}
    >
      <Transition
        className="m-4 p-2 border border-coolGray-100 rounded-lg bg-white w-full whitespace-nowrap shadow-md"
        show={isInPopup || show}
        enter="transition-opacity duration-75"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity duration-150"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <div className="flex flex-col w-full h-full">
          <div className="flex justify-left items-center px-4 py-2 hover:bg-coolGray-100">
            <StJudeCloudGenomicsPlatformLogo
              width="40"
              height="40"
              className="mr-4"
            />
            <div>Genomics Platform</div>
          </div>
          <div className="flex justify-left items-center px-4 py-2 hover:bg-coolGray-100">
            <StJudeCloudPecanLogo width="40" height="40" className="mr-4" />
            <div>PeCan</div>
          </div>
          <div className="flex justify-left items-center px-4 py-2 hover:bg-coolGray-100">
            <StJudeCloudVisualizationCommunityLogo
              width="40"
              height="40"
              className="mr-4"
            />
            <div>Visualization Community</div>
          </div>
        </div>
      </Transition>
    </div>
  )
}

export default ModulePopUp
