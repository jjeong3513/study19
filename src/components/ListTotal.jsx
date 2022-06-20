import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Pagination from './Pagination';


const ListTotal = () => {
    const [lists, setLists] = useState([]);
    const LIST_PER_PAGE = 10; // 한 장에 보여질 리스트 수
    const [page, setPage] = useState(1); //페이지
    const startNum = (page-1)* LIST_PER_PAGE; // 페이지가 1페이지면 스타트는 0, 페이지가 2면 스타트는 10, 페이지가 3이면 스타트는 20 / 0-10 10-20 20-30 30-40
    const endNum = startNum + LIST_PER_PAGE; //10 20 30 40

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then((res)=> res.json()) // res는 response 줄임말임(응답받은 결과)
        .then((data)=> setLists(data))
    },[])
    console.log(lists)

    return (
        <div>
            <Title>게시물 목록</Title>
            <Ul>
                {
                    [...lists].reverse().slice(startNum, endNum).map(({id, title, body})=>{  // reverse()는 배열을 반대로 돌리는 것. 근데 그냥 돌려버리면 데이터 자체가 반대가 되니까 [...lists]로 새로운 배열로 받아온다.
                        return(
                            <Li>
                                <span className="idName">{id}</span>
                                <span className="listBody">{body}</span>
                            </Li>
                        )

                    })
                }
            </Ul>
            <Pagination 
                total={lists.length} /* 토탈은 전체 데이터의 길이에서 가져온 것 */
                page={page}
                setPage={setPage}
                LIST_PER_PAGE={LIST_PER_PAGE}
            />
        </div>
    );
};
export default ListTotal;

const Title = styled.h1`
    font-size: 1.5rem;
    margin-top: 2rem;
    color: #b66666;
    text-align: center;
`
const Ul= styled.ul`
    font-size: 0.875rem;
    margin: 3rem auto;
    width: 1000px;
`

const Li = styled.li`
    padding: 0.5rem 1rem;
    border-bottom: 1px solid #ccc;
    display: flex;
    &>.idName {
        width: 3rem;
        color: #333;
    }
    &>.listBody{
        width: 50rem;
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
        color: #666;
        text-align: left;
        margin-left: 1.5rem;
    }
    &>.listBody:hover{
        color: #000;
    }
    &:hover{
        background-color: rgba(0,0,0,.1);
        cursor: pointer;
    }
`
