// let str = `
// 010-1234-5678
// thesecon@gmail.com
// https://www.omdbapi.com/?apikey=7035c60c&s=frozen
// The quick brown fox jumps over the lazy dog.
// abbcccdddd
// http://localhost:1234
// d
// hxyp
// 동해물과_백두산이 마르고 닳도록`

// // // const regexp = new RegExp('the','gi') // 생성자 방식
// // // const regexp = /the/gi // 리터럴 방식
// // // console.log(str.match(regexp))

// // // const regexp = /HEROPY/gi
// // // console.log(regexp.test(str))

// // // const regexp = /fox/gi
// // // console.log(str.replace(regexp, 'AAA'))
// // // console.log(str) // 원본 손상 없음

// // // str = str.replace(regexp, 'AAA') // 재할당
// // // console.log(str)



// // console.log(str.match(/\.$/gim))
// // // 이스케이프 문자 : \(백슬래시) 기호를 통해 본래의 기능에서 벗어나 상태가 바뀌는 문자
// // // g 전체 영역, m 줄바꿈마다 해석


// // console.log(
// // 	str.match(/^T/gm)
// // )

// // console.log(
// // 	str.match(/h..p/g)
// // )
// // console.log(
// // 	str.match(/fox|dog/) // | 또는, g플래그 없을 시 먼저 찾아지는 것이 반환
// // )
// // console.log(
// // 	str.match(/https?/g) // ?앞의 s는 있을수도 있고 없을 수도 있다
// // )

// // console.log(
// // 	str.match(/d{2,3}/g)
// // )
// // console.log(
// // 	str.match(/\b\w{2,3}\b/g) // \w 숫자를 포함한 모든 알파벳 \b 경계를 분리해줌
// // )

// // console.log(
// // 	str.match(/[0-9]{1,}/g)
// // )
// // console.log(
// // 	str.match(/[가-힣]{1,}/g)
// // )

// // console.log(
// // 	str.match(/\w/g)
// // )
// // console.log(
// // 	str.match(/\bf\w{1,}\b/g) // 소문자 f로 시작하는 모든 단어
// // )
// // console.log(
// // 	str.match(/\d{1,}/g)
// // )

// // const h = `  the hello  world  !

// // `
// // console.log(
// // 	h.replace(/\s/g, '')
// // )


const str = `hello
010-1234-5678
thesecon@gmail.com
https://www.omdbapi.com/?apikey=7035c60c&s=frozen
The quick brown fox jumps over the lazy dog.
abbcccdddd
`

console.log(
	str.match(/.{1,}(?=@)/g) // @는 정규표현식에서 특별한 기능이 없어서 \ 안 붙여도 되고 붙여도 됨
)
console.log(
	str.match(/(?<=@).{1,}/g)
)