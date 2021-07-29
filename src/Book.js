import React from 'react';

const Book = ({img, title, author, price}) =>{
    //attribue, eventHandler
    //onClick, onMouseOver
    const clickHandler = (e) => {
      alert('hello world');
     }
    const complexExample = (author) =>{
     alert('author')
    }
    return (
    <article className="book" onMouseOver={() =>{ console.log(title)}}>
        <img src={img} alt="cover"/>
        <h1>{title}</h1>
        <h3>{author}</h3>
        <h3>{price}</h3>
        <button type="button" onClick={clickHandler}>reference example</button>
        <button type="button" onClick={() => complexExample(author)}>more complex example</button>
        {/* () => {} 이 형태로 들어가지 않으면 클릭도 안 했는데 알림이 뜨는 상황이 발생 */}
    </article>
    )
  }

  export default Book