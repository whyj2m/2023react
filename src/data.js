const vData = [
    {
        id: 1,
        title:"title1",
        content: "content1",
        img:"img01.png"
    },
    {
        id: 2,
        title:"title2",
        content: "content2",
        img:"img02.png"
    },
    {
        id: 3,
        title:"title3",
        content: "content3",
        img:"img03.png"
    },
    {
        id: 4,
        title:"title4",
        content: "content4",
        img:"img04.png" 
    },
]
const vData1 = [
    {
        id: 5,
        title:"vtitle1",
        content: "content1",
        img:"img05.png"
    },
    {
        id: 6,
        title:"vtitle2",
        content: "content2",
        img:"img06.png"
    },
    {
        id: 7,
        title:"vtitle3",
        content: "content3",
        img:"img07.png"
    },
    {
        id: 8,
        title:"vtitle4",
        content: "content4",
        img:"img08.png" 
    },
]

export {vData, vData1}; 
//  앞에 붙히든 뒤에 붙히든 vData 로 export 하면 앞에 const vData 없어도 가능 (export)

// export {vData, vData1} ;  이렇게하면 2배열의 값들을 가져올수있다. 단일이 아닐경우