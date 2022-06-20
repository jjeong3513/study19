import './App.css';
import Style from './components/Style';
import GlobalStyle from './components/GlobalStyle'; 
import Mainbanner from './components/Mainbanner';
import SubBanner from './components/SubBanner';
import CanSlider from './components/CanSlider';
import ListTotal from './components/ListTotal';
import 'swiper/css';


function App() {
  return (
    <div className="App">
      <GlobalStyle /> {/* 최상위 컴포넌트로 불러와야 하위 컴포넌트에 다 적용해줄 수 있음 */}
      <Mainbanner />
      <SubBanner />
      <CanSlider />
      <ListTotal />
      <Style />
    </div>
  );
}

export default App;

/* 
css
scss
module.css
styled components : 외부 라이브러리
css in js
*/