import React, { useState } from 'react'
import { Tabs as StyledTabs, TabItem } from './styled'

const Tabs = ({ active, tabs, onChange }) => {
  const [activeTab, setActiveTab] = useState(active)

  const handleChange = tab => {
    onChange(tab)
    setActiveTab(tab)
  }

  const renderTabs = () => {
    return tabs.map((tab, i) => (
      <TabItem
        type="button"
        key={i}
        active={activeTab === tab ? 'active' : ''}
        onClick={() => handleChange(tab)}
      >
        {tab}
      </TabItem>
    ))
  }

  return <StyledTabs>{renderTabs()}</StyledTabs>
}

export default Tabs
