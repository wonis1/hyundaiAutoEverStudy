import { useState } from "react"

// SharedCounter -> 부모 컴포넌트
export default function SharedCounter() {
    const [count, setCount] = useState(0);

    return (
        <div style={{
            padding: '20px',
            textAlign: 'center'
        }}>
            <CurrentCount count={count} />
            <div style={{
                display: 'flex',
                gap: '20px',
                justifyContent: 'center',
                marginTop: '20px'
            }}>
                <CounterButton
                    count={count}
                    setCount={setCount}
                />
                <CounterButton
                    count={count}
                    setCount={setCount}
                />
            </div>
        </div>
    )
}

function CurrentCount({ count }) {
    return (
        <div style={{
            fontSize: '3rem',
            color: count > 0 ? 'green' : (count < 0 ? 'red' : 'black')
        }}>
            {count}
        </div>
    )
}

function CounterButton({ count, setCount }) {
    return (
        <div style={{
            padding: '20px',
            border: '2px solid #ddd',
            borderRadius: '10px'
        }}>
            <button
                onClick={() => setCount(count + 1)}
                style={{
                    padding: '10px 20px',
                    margin: '5px',
                    fontSize: '1.2rem',
                    backgroundColor: '#28a745',
                    color: 'white',
                    border: 'none',
                    borderRadius: '5px',
                    cursor: 'pointer'
                }}>
                + 1
            </button>

            <button
                onClick={() => setCount(count - 1)}
                style={{
                    padding: '10px 20px',
                    margin: '5px',
                    fontSize: '1.2rem',
                    backgroundColor: '#28a745',
                    color: 'white',
                    border: 'none',
                    borderRadius: '5px',
                    cursor: 'pointer'
                }}>
                - 1
            </button>

            <button
                onClick={() => setCount(0)}
                style={{
                    padding: '10px 20px',
                    margin: '5px',
                    fontSize: '1.2rem',
                    backgroundColor: '#28a745',
                    color: 'white',
                    border: 'none',
                    borderRadius: '5px',
                    cursor: 'pointer'
                }}>
                clear
            </button>
        </div>
    )
}