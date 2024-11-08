const Contest1 = () => {
    return (
      <div>
        <h2>Ai인공지능 아이디어 공모전</h2>
        <img src={`${process.env.PUBLIC_URL}/contest1.png`} width="200" height="270"  />
        <fieldset>
          <legend>공모전 개요</legend>
          <ul>
            <li>재단법인 미래와 소프트웨어에서 대학생들을 대상으로 개최한 AI 인공지능 활용 아이디어 공모전 참여</li>
            <li>AI 기술을 활용한 서비스 및 산업 분야 아이디어를 제출</li>
            <li>사회복지,보건/안전,교육,문화예술,산업분야 중 주제를 골라서 제출함</li>
          </ul>
        </fieldset>
      </div>
    );
  };
  
  export default Contest1;