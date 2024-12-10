//--> fetch API 예시
document.addEventListener('DOMContentLoaded', () => {

    const links = document.querySelectorAll('nav a');
    const content = document.getElementById('content') as HTMLElement;

    // 마지막으로 방문한 페이지를 로드합니다.
    const lastPage = localStorage.getItem('lastPage');
    if (lastPage) loadPage(lastPage);

    links.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            const page = (event.target as HTMLElement).getAttribute('data-page');
            if (page) {
                loadPage(page);

                // 마지막으로 방문한 페이지를 저장합니다.
                localStorage.setItem('lastPage', page);
            }
        });
    });

    function loadPage(page: string) {
        fetch(`html/${page}.html`)
            .then(response => {
                if (!response.ok)
                    throw new Error('Network response was not ok');
                return response.text();
            })
            .then(html => {
                content.innerHTML = html;
            })
            .catch(error => {
                content.innerHTML = '<p>페이지를 로드하는 중 오류가 발생했습니다.</p>';
            });
    }

    // 데이터 가져오기 예시
    function fetchData(url: string): Promise<any> {
        return fetch(url)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            });
    }

    // 데이터 보내기 예시
    function postData(url: string, data: any): Promise<any> {
        return fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            });
    }

    // 이미지 가져오기 예시
    function fetchImage(url: string): Promise<void> {
        return fetch(url)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.blob();
            })
            .then(blob => {
                const imageUrl = URL.createObjectURL(blob);
                const image = document.createElement('img');
                image.src = imageUrl;
                document.body.appendChild(image);
            })
            .catch(error => {
                console.error('Error fetching image:', error);
            });
    }
});
/*

### 설명
- **HTML 파일**: 기본적인 HTML 구조를 포함하며, `nav` 요소 내의 링크를 클릭하면 JavaScript가 실행됩니다.
- **TypeScript 파일**: `fetch`를 사용하여 데이터를 가져오고, 서버에 데이터를 보내며, 이미지를 가져오는 예시를 포함합니다.
  - `DOMContentLoaded` 이벤트를 사용하여 문서가 완전히 로드된 후에 코드를 실행합니다.
  - `loadPage` 함수는 `fetch`를 사용하여 HTML 페이지를 비동기적으로 로드하고, `content` 요소에 삽입합니다.
  - `fetchData` 함수는 주어진 URL에서 데이터를 가져오는 예시입니다.
  - `postData` 함수는 주어진 URL로 데이터를 보내는 예시입니다.
  - `fetchImage` 함수는 주어진 URL에서 이미지를 가져와서 페이지에 추가하는 예시입니다.

이 예시는 TypeScript를 사용하여 `fetch` 함수를 활용하는 방법을 보여줍니다. TypeScript의 타입 시스템을 활용하여 코드의 안전성과 가독성을 높일 수 있습니다.

Similar code found with 1 license type

*/
