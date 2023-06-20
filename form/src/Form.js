import React, { useState } from 'react';

const Form = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // フォームデータをサーバーに送信するためのAPI呼び出し
    fetch('/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, email, message }),
    })
      .then(response => response.json())
      .then(data => {
        // サーバーからの応答を処理する
        console.log(data);
      })
      .catch(error => {
        console.error('エラー:', error);
      });

    // フォームのリセット
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">名前:</label>
      <input type="text" id="name" value={name} onChange={e => setName(e.target.value)} required />

      <label htmlFor="email">メールアドレス:</label>
      <input type="email" id="email" value={email} onChange={e => setEmail(e.target.value)} required />

      <label htmlFor="message">メッセージ:</label>
      <textarea id="message" value={message} onChange={e => setMessage(e.target.value)} required />

      <input type="submit" value="送信" />
    </form>
  );
};

export default Form;
