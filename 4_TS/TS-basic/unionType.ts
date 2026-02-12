type Status = "idle" | "loading" | "success" | "error";
type ApiResponse = {
    status: Status;
    data?: any;
    error?: string;
}

function handleResponse(response: ApiResponse): void {
    if (response.status === 'loading') {
        console.log('로딩 중 ..');
    } else if (response.status == 'success') {
        console.log('성공', response.data);
    } else if (response.status === 'error') {
        console.log('에러', response.error)
    } else {
        console.log('대기중..');
    }
}


handleResponse({ status: 'idle'});
handleResponse({ status: 'loading'});
handleResponse({ status: "success", data: {name: '홍길동'}});
handleResponse({ status: 'error', error: '서버 오류'});