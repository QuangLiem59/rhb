import React, { useState, useEffect } from 'react';
import queryString from 'query-string';
import './HomePage.scss';
import ColorBox from './components/colorbox';
import TodoList from './components/todolist';
import TodoForm from './components/todoform';
import PostList from './components/postlist';
import Pagination from './components/pagination';
import PostFiltersForm from './components/postfilterform';
import Clock from './components/clock';
import Clock2 from './components/clock2';
import MagicBox from './components/magicbox';

function HomePage() {
    const [todoList, setTodoList] = useState([
        { id: 1, title: 'tttttttttttttttttttt11111' },
        { id: 2, title: 'tttttttttttttttttt2222222222' },
        { id: 3, title: 'ttttttttttttttt33333333333' }
    ]);
    const [postList, setPostList] = useState([]);
    const [pagination, setPagination] = useState({
        _page: 1,
        _limit: 10,
        _totalRows: 1
    });
    const [filter, setFilter] = useState({
        _page: 1,
        _limit: 10
    })
    useEffect(() => {
        async function fetchPostList() {
            try {
                const paramString = queryString.stringify(filter);
                const requestUrl = `http://js-post-api.herokuapp.com/api/posts?${paramString}`;
                const response = await fetch(requestUrl);
                const responseJSON = await response.json();
                console.log({ responseJSON });

                const { data, pagination } = responseJSON;
                setPostList(data);
                setPagination(pagination);
            } catch (error) {
                console.log("Message : ", error);
            }

        };
        fetchPostList();
    }, [filter]);
    function handleTodoList(todo) {
        console.log(todo);
        const index = todoList.findIndex(x => x.id === todo.id);
        if (index < 0) return;
        const newTodoList = [...todoList];
        newTodoList.splice(index, 1);
        setTodoList(newTodoList);
    };
    function handleTodoFormSubmit(fV) {
        console.log('aassssaas', fV);
        const newTodo = {
            id: Math.trunc(Math.random() * 3) + Math.trunc(Math.random() * 5) + Math.trunc(Math.random() * 7) + Math.trunc(Math.random() * 12),
            ...fV
        };
        const newTodoList = [...todoList];
        newTodoList.push(newTodo);
        setTodoList(newTodoList);
    }
    function handlePageChange(np) {
        console.log('New Page : ', np);
        setFilter({
            ...filter,
            _page: np
        });
    }
    function handleDtChange(dta) {
        console.log(dta);
        setFilter({
            ...filter,
            _page: 1,
            title_like: dta.dt
        })
    }
    const [hD, setHD] = useState(true);
    return (
        <div className="app">
            <h1> Wellllllllllll </h1>
            <MagicBox />
            {/* {hD && <Clock />}
      <Clock2 />
      <button onClick={() => setHD(false)}>Hide Clock !!!</button> */}
            {/* <TodoList todos={todoList} onTodoClick={handleTodoList} />
      <ColorBox />
      <TodoForm onSubmit={handleTodoFormSubmit} /> */}
            {/* <PostFiltersForm onSubmit={handleDtChange} />
      <PostList posts={postList} />
      <Pagination pagination={pagination} onPageChange={handlePageChange} /> */}
        </div>

    );
}

export default HomePage;
