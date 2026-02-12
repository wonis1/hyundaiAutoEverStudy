interface User {
    id: number;
    username: string;
    email: string;
    age?: number;
    isActive: boolean;
}

const user1: User = {
    id:1,
    username: 'jeong',
    email: 'jaewon@naver.com',
    isActive: true
}

const user2: User = {
    id: 2,
    username: 'wang',
    email: 'wawawag@com',
    age: 30,
    isActive: false
}

const users: User[] = [user1, user2];
console.log(users, '123123')

function printUser(user: User): void {
    console.log(`ID: ${user.id}`);
    console.log(`Username: ${user.username}`);
    console.log(`Email: ${user.email}`);
    console.log(`Age: ${user.age || '미정'}`);
    console.log(`Active: ${user.isActive ? '활성' : '비활성'}`)
}

users.forEach(printUser);