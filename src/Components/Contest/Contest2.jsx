const Contest2 = () => {
    return (
      <div>
        <h2>가천대학교 창의적 종합설계 아이디어 공모전</h2>
        <img src={`${process.env.PUBLIC_URL}/contest2.png`} width="500" height="500"  />
        <fieldset>
          <legend>공모전 개요</legend>
          <ul>
            <li>창의적 종합설계 경진대회 </li>
            <li>우수 성과물 대상 사업화 또는 창업에 필요한 멘토링 및 컨설팅</li>
            <li>기업에서 요청한 기술 또는 관심 주제를 사용하여 문제해결과제를 팀단위 수행 및 작품제작</li>

          </ul>
        </fieldset>
      </div>
    );
  };
  
  export default Contest2;