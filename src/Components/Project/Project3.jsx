
const Project3 = () => {
  return (
    <div>
      <h2>리엑트를 이용한 날씨 사이트</h2>
      <img src={`${process.env.PUBLIC_URL}/project3.png`} width="500" height="270"  />
      <fieldset>
        <legend>프로젝트 개요</legend>
        <ul>
          <li>사용자는 자신 위치 기반으로 날씨를 볼 수 있다</li>
          <li>다른 도시를 선택해 날씨 확인 할 수 있다</li>
          <li>open Weather 사이트에서 Api를 받아서 제작</li>
          <li>리엑트를 이용한 사이트 제작</li>
        </ul>
      </fieldset>
    </div>
  );
};

export default Project3;
