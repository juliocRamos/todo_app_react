import React from 'react'
import IconButton from '../template/iconButton'

export default (props) => {
    const renderRows = () => {
        const list = props.list || []
        return list.map(todo => (
            <tr key={todo._id}>
                <td className={todo.done ? 'markDone' : ''}>
                    {todo.description}</td>
                <td>
                    <IconButton style='success'
                        icon='check'
                        onClick={() => props.handleMarkDone(todo)}
                        hide={todo.done} />

                    <IconButton style='warning'
                        icon='undo'
                        onClick={() => props.handleMarkAsPending(todo)}
                        hide={!todo.done} />

                    <IconButton style='danger'
                        icon='trash-o'
                        onClick={() => props.handleRemove(todo)}
                        hide={!todo.done} />
                </td>
            </tr>
        ))
    }

    return (
        <div>
            <table className='table'>
                <thead>
                    <tr>
                        <th>Descrição</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {renderRows()}
                </tbody>
            </table>
        </div>
    )
}