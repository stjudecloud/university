import React from "react"

const ContentsSidebarLeft = () => (
  <ul className="invisible xl:visible z-30 contents-sidebar fixed w-1/5 bg-coolGray-50 min-h-screen border-r border-coolGray-100 border-solid pt-9 pl-7 pr-3">
    <li className="title">Getting Started</li>
    <li>First Steps</li>
    <li>Accounts / Billing</li>
    <li>Requesting Data</li>
    <li>About Our Data</li>
    <li className="active">Making a Data Request</li>
    <li>Filling Out the DAA</li>
    <li>Decision Making Criteria</li>

    <li className="title">Managing Data</li>
    <li>Overview</li>
    <li>Uploading / Downloading Data</li>
    <li>Renewing Your DAA</li>

    <li className="title">Analyzing Data</li>
    <li>Command Line Interaction</li>
    <li>Running Our Workflows</li>
    <li>Create Your Own Workflow</li>

    <li className="title">Frequently Asked Questions</li>
    <li>Frequently Asked Questions</li>
  </ul>
)

export default ContentsSidebarLeft
