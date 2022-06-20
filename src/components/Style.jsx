import React from 'react';
import styled, { keyframes } from 'styled-components';


const Style = () => {
    return (
        <div>
            <Box>{/* 디자인을 하기 위한 컴포넌트 */}
                <Title fontSize="2rem" color="#d39">스타일드 컴포넌트</Title>  {/* props를 정해줌 */}
                <Title fontSize="1.5rem" color='#39630f'>CSS IN JS</Title>
                <Title color='#ee7124'>Fun and Easy</Title>
                <Btn color='#3230bb' border="1px solid #3230bb" active>normal</Btn> {/* props name은 임의로 지정해줘도 됨 */}
                <Btn color='#ddd'>disabled</Btn>
                <Btn color='#ec4545' border="1px solid #ec4545">active</Btn> {/* borderColor="red" 이런식으로 보더랑 컬러 한번에 해줄수도 있음 */}
                <Text color="#f00" fontSize="20px">2022년 6월 20일</Text>
                <Text color="#000" fontSize="16px">월요일</Text>
                <Text color="#252aad" fontSize="24px">오전 10시 13분</Text>
            </Box>
            <Box as="ul"> {/* as = "ul" 이렇게 적으면 ul태그로 바뀌어있음 */}
                <Text size="16px" color='#f59' as="li">menu1</Text>
                <Text size="16px"  color='#f59' as="li">menu2</Text>
                <Text size="16px"  color='#f59' as="li">menu3</Text>
            </Box>
            <Box>
                <AniBtn>애니메이션 버튼</AniBtn>
            </Box>
        </div>
    );
};

export default Style;

const Box = styled.div`  /*함수 안쪽에 적으면 css가 불필요하게 적용되기 때문에 함수 밖 상단이나 하단에 적어주기 */
    width: 500px;
    height: 300px;
    border: 5px solid red;
    margin: 3rem auto;
    text-align: center;
`  /* 백틱 사이에 써주면 위에 있는 함수부분에 style이 적용됨 */

//props 사용
const Title = styled.h2`
    font-size: ${(props)=>props.fontSize}; // 매개변수 props가 들어오고 props 자리에는 2rem, 1.5rem이 들어감
    color: ${(props)=>props.color};
    margin: 1rem 0;
`


const Btn = styled.button.attrs(props => ({
    type: 'button',
    className: props.active ? 'btn on' : 'btn' 
}))` //백틱의 내부에는 css만 들어올 수 있음. 
    width: 50px;
    height: 50px;
    border-radius: 3px;
    margin:  10px;
    border: ${(props)=>props.border};  //props.borderColor로 해줄수도 있음
    color: ${(props)=>props.color};
`

const Text = styled.p`
    font-size: ${(props)=>props.fontSize};
    color: ${(props)=>props.color};
    line-height: 1.5;
`
const colorChange = keyframes`
    0%{background-color:red;}
    100%{background-color:yellow;}
`

/* 컴포넌트 확장시키고 애나메이션 적용 */
const AniBtn = styled(Btn)` // 컴포넌트의 값이 확장되어 AniBtn에 들어감
    width: 400px;
    animation: ${colorChange} 1.5s alternate infinite;
`