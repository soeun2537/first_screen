import "./css/App.css";
import "./css/Greeting.css";
import Button from "./components/Button";
import Quote from "./components/Quote";
import Clock from "./components/Clock";

function App() {
  return (
    <div>
      <div className="greeting">
        <h2>Welcome, 소은님</h2>
      </div>
      <div>
        <Clock />
      </div>
      <div className="main">
        <Button
          url="https://portal.uos.ac.kr/user/login.face"
          imgUrl="iconImg/uos.png"
          title="서울시립대학교 포털"
        />
        <Button
          url="https://www.youtube.com/"
          imgUrl="iconImg/youtube.png"
          title="유튜브"
        />
        <Button
          url="https://search.naver.com/search.naver?sm=tab_hty.top&where=nexearch&query=%EB%A7%9E%EC%B6%A4%EB%B2%95+%EA%B2%80%EC%82%AC%EA%B8%B0&oquery=%EB%A7%9E%EC%B6%A4%EB%B2%95%EA%B2%80%EC%82%AC%EA%B8%B0&tqi=itS%2Ffsp0J1sssdIzUYGsssssszd-138875"
          imgUrl="iconImg/naver.jpg"
          title="맞춤법 검사기"
        />
        <Button
          url="https://www.google.com/search?q=%EA%B5%AC%EA%B8%80%EB%B2%88%EC%97%AD%EA%B8%B0&oq=%EA%B5%AC%EA%B8%80%EB%B2%88%EC%97%AD%EA%B8%B0&aqs=chrome..69i57j0i131i433i512j46i131i199i433i465i512j0i131i433i512l2j46i199i465i512j46i131i199i433i465i512j46i199i465i512j0i512j0i131i433i512.1430j0j15&sourceid=chrome&ie=UTF-8"
          imgUrl="iconImg/google.png"
          title="구글번역기"
        />
        <Button
          url="https://chat.openai.com/"
          imgUrl="iconImg/chatGPT.png"
          title="chatGPT"
        />
        <Button
          url="https://nomadcoders.co/"
          imgUrl="iconImg/nomadcoders.png"
          title="노마드코더"
        />
        <Button
          url="https://opentutorials.org/course/1"
          imgUrl="iconImg/생활코딩.png"
          title="생활코딩"
        />
        <Button
          url="https://maplestory.nexon.com/Home/Main"
          imgUrl="iconImg/maple.jpg"
          title="메이플스토리"
        />
      </div>
      <div className="quote">
        <Quote />
      </div>
    </div>
  );
}

export default App;
