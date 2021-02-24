import React from 'react';

const TodoItem = ({ todo, onToggle, onRemove }) => {
  return (
    <div>
      <input type="checkbox" />
      <span>텍스트</span>
      <button>삭제</button>
    </div>
  );
};

const Todos = ({
  input,
  todos,
  onChangInput,
  onInsert,
  onToggle,
  onRemove,
}) => {
  const onSumbit = e => {
    e.preventDefault();
  };

  return (
    <div>
      <form onSubmit={onSumbit}>
        <input type="text" />
        <button type="submit">등록</button>
      </form>
      <div>
        <TodoItem />
        <TodoItem />
        <TodoItem />
      </div>
    </div>
  );
};

export default Todos;
