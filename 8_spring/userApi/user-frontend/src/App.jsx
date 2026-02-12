import { useState, useEffect } from "react";

function App() {
  const [users, setUsers] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // 전체 조회
  const fetchUsers = async () => {
    const response = await fetch("http://localhost:8080/users");
    const data = await response.json();
    setUsers(data);
  };

  // 컴포넌트 마운트 시 전체 조회
  useEffect(() => {
    fetchUsers();
  }, []);

  // 회원 가입
  const handleCreate = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:8080/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, password }),
    });
    if (response.ok) {
      alert("회원 가입 성공!");
      setName("");
      setEmail("");
      setPassword("");
      fetchUsers();
    } else {
      const error = await response.text();
      alert("회원 가입 실패: " + error);
    }
  };

  // 회원 탈퇴
  const handleDelete = async (id) => {
    if (!window.confirm("정말 탈퇴하시겠습니까?")) {
      return;
    }
    const response = await fetch(`http://localhost:8080/users/${id}`, {
      method: "DELETE",
    });
    if (response.ok) {
      alert("회원 탈퇴 완료!");
      fetchUsers();
    }
  };

  return (
    <div>
      <h1>User 관리</h1>
      {/* 회원 가입 폼 */}
      <div>
        <h2>회원 가입</h2>
        <form onSubmit={handleCreate}>
          <div>
            <input
              type="text"
              placeholder="이름"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div>
            <input
              type="email"
              placeholder="이메일"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <input
              type="password"
              placeholder="비밀번호"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit">가입</button>
        </form>
      </div>
      {/* 회원 목록 */}
      <div>
        <h2>회원 목록</h2>
        {users.length === 0 ? (
          <p>등록된 회원이 없습니다.</p>
        ) : (
          <table border="1">
            <thead>
              <tr>
                <th>ID</th>
                <th>이름</th>
                <th>이메일</th>
                <th>액션</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.id}>
                  <td>{user.id}</td>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>
                    <button onClick={() => handleDelete(user.id)}>탈퇴</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}

export default App;
