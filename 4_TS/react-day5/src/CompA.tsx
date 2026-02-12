import useLocalStorage from "./useLocalStorage";

export default function CompA() {
    const [value, setValue] = useLocalStorage('keyA', '');
    return (
        <>
            <p>{value}</p>
            <input 
                value={value}
                onChange={(e) => setValue(e.target.value)}
            />
        </>
    )
}