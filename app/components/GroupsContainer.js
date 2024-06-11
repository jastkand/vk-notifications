import React from 'react'
import { Group } from './Group'
import NewGroupForm from './NewGroupForm'

export const GroupsContainer = ({ groups, unsubscribe, subscribe }) => {
  let groupsList = []
  const groupKeys = Object.keys(groups)
  if (groupKeys.length > 0) {
    groupsList.push(<h3>Список подписок</h3>)
  }
  groupKeys.forEach((key) => {
    let groupParams = groups[key]
    let group = <Group { ...groupParams }
                       key={ groupParams['gid'] }
                       unsubscribe={ unsubscribe } />
    groupsList.push(group)
  })

  return (
    <div>
      <NewGroupForm subscribe={ subscribe } />
      { groupsList }
    </div>
  )
}
