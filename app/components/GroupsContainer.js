import React from 'react'
import Group from './Group'
import NewGroupForm from './NewGroupForm'

export default class GroupsContainer extends React.Component {
  render() {
    let groups = []
    Object.keys(this.props.groups).forEach((key) => {
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
