# YAML

## 기본 문법

- 들여쓰기 : 2칸(추천) 또는 4칸

```yaml

person:
  name: ViVaKR
  job: Developer
  skills:
    - docker
    - kubernetes

```

- 데이터 정의 : 데이터는 `key: value` 형식으로 정의함

```yaml

apiVersion: v1
kind: Pod
metadata:
  name: echo
  labels:
    type: app

```

```json

{
    "apiVersion": "v1",
    "kind": "Pod",
    "metadata": {
        "name": "echo",
        "labels": {
            "type": "app"
        }
}

```

- 배열 (array) : 배열은 `-` 로 표시함

```yaml

person:
  name: ViVaKR
  job: Developer
  skills:
    - docker
    - kubernetes

```

```json

  "person" : {
    "name": "ViVaKR",
    "job": "Developer",
    "skills": [
        "docker", "kubernetes"
    ]
  }

```

- 주석 : `#` 으로 표시

- true / false, yes / no

```yaml

study: yes
is_run: no
good: true
bad: false
```

- 숫자 : 정수 또는 실수를 따옴표 없이 사용

```yaml

# number
version: 1.2

# string
version: "3.5"

```

`---` : 문서의 시작, 선택사항  
`...` : 문서의 끝, 선택사항  
`key: value` 로 표현하며 `:` 다음에는 공백문자가 와야함

- 자료형 : int, string, boolean 

- object

```yaml

key:
    key: value
    key: value
```
