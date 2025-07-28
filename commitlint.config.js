module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [
      2,
      'always',
      [
        'feat', // 새로운 기능
        'fix', // 버그 수정
        'docs', // 문서 수정
        'style', // 코드 스타일 변경
        'refactor', // 리팩토링
        'test', // 테스트 추가/수정
        'chore', // 빌드 과정 또는 보조 기능 수정
        'perf', // 성능 개선
      ],
    ],
  },
}
