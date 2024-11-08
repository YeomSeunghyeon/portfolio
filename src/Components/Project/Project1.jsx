
const Project1 = () => {
  return (
    <div>
      <h2>AI를 이용한 자격증대비 사이트 제작(졸업프로젝트)</h2>
      <img src={`${process.env.PUBLIC_URL}/project1.png`} width="200" height="270"  />
      <fieldset>
        <legend>프로젝트 개요</legend>
        <ul>
          <li>사용자가 문제를 풀고 AI를 통해 문제점을 분석</li>
          <li>분석한 데이터를 토대로 맞춤형문제 생성</li>
          <li>모바일과 컴퓨터 환경둘다 사용가능하게 제작</li>
          <li>파트는 백,프론트,Ai 가 협력해 프로젝트 진행</li>
          <li>리엑트를 이용한 프론트엔드 파트 담당</li>
        </ul>
      </fieldset>
    </div>
  );
};

export default Project1;
