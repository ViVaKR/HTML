// C 언어의 표준 입출력 라이브러리 포함
#include <stdio.h>

//--> (2-2) 문자열을 출력하는 함수 1
//          변수 i 를 사용하지 않고 메모리 주소를 직접 무식하게 적어서  어셈블리 코드를 사용하여 문자열을 출력하는 방식)
void PrintCharacter(const char *text)
{
    // 16 진수로 표현된 메모리 주소 초기값 설정(0x9000000)
    unsigned long address = 0x9000000; // 변수 i 와 동일한 주소 값 설정
    unsigned long counter = 0;         // 문자열 카운터 초기값 설정(0)
    char ch = *text;                   // 문자열의 첫 번째 문자를 가져와서 변수 ch에 저장
    while (ch != '\0') {               // 문자열의 끝(\0)이 아닐 때까지 반복
        address += counter;            // 기본 주소에 카운터 값을 더해 새로운 주소 계산

// ARM64 어셈블리 코드 사용 (플랫폼 호환성, 다른 아키텍처(x86) 에서 컴파일할 때 문제발생 여지 방지)
#if 0
        asm volatile(
            "MOV X10, %[address];" // X10 레지스터에 address 값 저장, ARM64 전용 어셈블리 코드
            "MOV W9, %w[ch];"     // W9 레지스터에 ch 값 저장
            "STRB W9, [X10];"     // W9 레지스터에 저장된 값을 X10 레지스터가 가리키는 메모리 주소에 저장
            :[address]"+r"(address), [ch]"+r"(ch) // 컴파일러에게 참조된 변수의 주소를 전달
        );
#endif
        // 문자열을 출력하는 함수 호출
        printf("ch:%3d %c address:%lX counter:%lX\n", ch, ch, address, counter);
        // 카운터 값 증가
        ++counter;
        // 문자열의 다음 문자를 가져와서 변수 ch에 저장
        ch = *(text + counter);
    }
}

//--> (2-1) 문자열을 출력하는 함수 2
//          일반적인 방식 변수 i를 이용하여 메모리주소를 대체하는 직관적, 이쁘게 모냥 내기방식
void PrintCharacter2(const char *text)
{
    // 문자열의 각 문자를 순회하며 출력
    for (int i = 0; text[i] != '\0'; i++) {
        printf("문자: %c (ASCII: %d)\n", text[i], text[i]);
    }
}

void RecursiveFunction(int n)
{
    if (n < 1) return;
    RecursiveFunction(n / 2);

    printf("%d 의 나머지 는 %d\n", n, n % 2);
}

//--> (1) 메인 함수
int main()
{
    PrintCharacter("Hello, World!");  // 무식하게 메모리 주소를 직접 적어서 문자열을 출력하는 방식
    PrintCharacter2("Hello, World!"); // 일반적인 방식 변수 i를 이용하여 메모리주소를 대체하는 직관적인 효과 내기

    RecursiveFunction(9);
    return 0;
}
