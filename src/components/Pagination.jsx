import React from 'react';
import styled from 'styled-components';


const Pagination = ({total, page,setPage, LIST_PER_PAGE}) => {
    const PagesNum = Math.ceil(total/LIST_PER_PAGE) ;
        const pagesNumArray = new Array(PagesNum);
        //console.log(pagesNumArray) 
        pagesNumArray.fill('a', 5,8); //fill(): 빈 배열을 채우는 요소, 아무것도 없으면 undefined를 채워줌, 특정 시작위치와 끝 위치를 적어줄수있음 / 첫번째 문자를 value로 주기
        console.log(pagesNumArray)
    return (

        <PaginationBox>
            <PrevButton onClick={()=>{setPage(page-1)}} disabled={page === 1}> {/* page가 1이면 disabled를 비활성화시킨다 클릭하면 페이지-1*/}
                이전
            </PrevButton>
            {
                pagesNumArray.fill().map((ele,i)=>{
                return(
                    <PageNumButton key={i+1}
                    onClick={()=>{setPage(i+1)}}>
                        {i + 1}
                    </PageNumButton>
                    )
                })
            }
            <NextButton onClick={()=>{setPage(page+1)}} disabled={page === PagesNum}> {/* page가 PagesNum이면 disabled를 비활성화시킨다 */}
                이후
            </NextButton>
        </PaginationBox>
    );
};

export default Pagination;

const PaginationBox = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 1rem auto;
    width: 1000px;
`
const PrevButton = styled.button`
border-radius: 0.25rem;
padding: 0.25rem 0.375rem;
color:#000;
width: 40px;
height: 24px;
color: #fff;
background: #cda8a8;
font-size: 0.75rem;
&:hover{
    cursor: pointer;
    color: #f23;
}
&[disabled]{
    background: #e0e0e0;
    color: #fff;
}
`
const NextButton = styled(PrevButton)`
    
` 
const PageNumButton = styled(PrevButton)`
    background: none;
    color: #666;
    font-size: 1rem;
`