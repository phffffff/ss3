import React, { Component } from 'react'
import { ThemeProvider } from 'styled-components'
import { connect } from 'react-redux'

import { actionCreater, actionCreaterWithPayload } from './Redux/actions/actions'

import { Container, Dropdown, Heading, TextField, Button, StyledTable } from './StylesComponents'

const mapStateToProps = (state) => {
    return {
        currentTheme: state.stateThemes.currentTheme,
        themes: state.stateThemes.themes,
        taskTodo: state.stateTodo.todoList,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleOnChangeTheme: (id) => {
            dispatch(actionCreaterWithPayload("CHANGE_THEME", id))
        },
        handleOnClickAddTodo: (value) => {
            dispatch(actionCreaterWithPayload("ADD_TODO", value));
        },
        handleOnClickDelTodo: (id) => {
            dispatch(actionCreaterWithPayload("DEL_TODO", id));
        },
        handleOnClickCheckTodo: (id) => {
            dispatch(actionCreaterWithPayload("CHECK_TODO", id));
        },
        handleOnClickEditTodo: ({ id, name }) => {
            dispatch(actionCreaterWithPayload("EDIT_TODO", { id, name }));
        },
    }
}

class TodoListStyledTheme extends Component {
    state = {
        currentTodo: {
            id: '',
            name: '',
        },
    }

    renderTaskTodo = (done) => {
        const { taskTodo } = this.props;
        const newTodo = taskTodo && taskTodo.length &&
            taskTodo.filter((task) => task.done === done)

        return newTodo && newTodo.length && newTodo.map((task) => {
            return (
                <StyledTable.Tr key={task.id}>
                    <StyledTable.Th style={{ verticalAlign: 'middle' }}>
                        {task.name}
                    </StyledTable.Th>
                    <StyledTable.Th className='text-right'>
                        {
                            done
                                ? ''
                                : <>
                                    <Button className='mr-1'
                                        onClick={() => {
                                            const { id, name } = task;
                                            this.setState({
                                                currentTodo: {
                                                    name,
                                                    id
                                                }
                                            })
                                        }}
                                    ><i className="fa fa-edit" aria-hidden="true"></i></Button>
                                    <Button className='mr-1'
                                        onClick={() => this.props.handleOnClickCheckTodo(task.id)}
                                    ><i className="fa fa-check" aria-hidden="true"></i></Button>
                                </>
                        }
                        <Button className='mr-1'
                            onClick={() => this.props.handleOnClickDelTodo(task.id)}
                        ><i className="fa fa-trash" aria-hidden="true"></i></Button>
                    </StyledTable.Th>
                </StyledTable.Tr >
            )
        })
    }

    renderoptionThemes = (themes) => {
        return themes && themes.length &&
            themes.map((theme) => <option key={theme.id} value={theme.id}>{theme.name}</option>)
    }

    render() {
        const { themes, handleOnChangeTheme, currentTheme, handleOnClickAddTodo, handleOnClickEditTodo } = this.props

        return (
            <ThemeProvider theme={currentTheme}>
                <Container className='w-50'>

                    <Dropdown
                        onChange={(e) => {
                            const { value } = e.target;
                            handleOnChangeTheme(value);
                        }}
                    >
                        {this.renderoptionThemes(themes)}
                    </Dropdown>

                    <Heading.Heading1 className='text-center mt-2'>
                        Todo List
                    </Heading.Heading1>

                    <TextField label={'Task name'} className='mt-2 w-50' classNameLabel='mt-2 d-block'
                        value={this.state.currentTodo.name}
                        onChange={(e) => {
                            this.setState({
                                ...this.state,
                                currentTodo: {
                                    ...this.state.currentTodo,
                                    name: e.target.value
                                }
                            })
                        }}
                    />
                    <span className='ml-3'>
                        <Button className='mr-1'
                            onClick={() => {
                                const { name } = this.state.currentTodo
                                this.setState({
                                    currentTodo: { name: '', id: '' }
                                }, () => { handleOnClickAddTodo(name) })

                            }}
                        >
                            <i className="fa fa-plus" aria-hidden="true"></i> Add Task
                        </Button>
                        <Button
                            onClick={() => {
                                const { id, name } = this.state.currentTodo;
                                this.setState({
                                    currentTodo: {
                                        name: '',
                                        id: '',
                                    }
                                }, () => handleOnClickEditTodo({ id, name }))

                            }}
                        >
                            <i className="fa fa-cog" aria-hidden="true"></i> Update Task
                        </Button>
                    </span>

                    <Heading.Heading3 className='text-center mt-3'>Task Todo</Heading.Heading3>
                    <StyledTable.Table >
                        <StyledTable.Thead>
                            {this.renderTaskTodo(false) || <StyledTable.Tr></StyledTable.Tr>}
                        </StyledTable.Thead>
                    </StyledTable.Table>

                    <Heading.Heading3 className='text-center mt-3'>Task Complete</Heading.Heading3>
                    <StyledTable.Table >
                        <StyledTable.Thead>
                            {this.renderTaskTodo(true) || <StyledTable.Tr></StyledTable.Tr>}
                        </StyledTable.Thead>
                    </StyledTable.Table>

                </Container>
            </ThemeProvider >
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoListStyledTheme);
