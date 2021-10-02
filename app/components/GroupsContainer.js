import React from 'react'
import Group from './Group'
import NewGroupForm from './NewGroupForm'

export default class GroupsContainer extends React.Component {
  render() {
    let groups = []
    const groupKeys = Object.keys(this.props.groups)
    if (groupKeys.length > 0) {
      groups.push(<h3>Список подписок</h3>)
    }
    groupKeys.forEach((key) => {
      let groupParams = this.props.groups[key]
      let group = <Group { ...groupParams }
                         key={ groupParams['gid'] }
                         unsubscribe={ this.props.unsubscribe } />
      groups.push(group)
    })

    return (
      <div>
        <NewGroupForm subscribe={ this.props.subscribe } />
        { groups }
      </div>
    )
  }
}
