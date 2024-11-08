
const Project2 = () => {
  return (
    <div>
      <h2>리엑트를 이용한 쇼핑몰 제작</h2>
      <img src={`${process.env.PUBLIC_URL}/project2.png`} width="500" height="250" />
      <fieldset>
        <legend>프로젝트 개요</legend>
        <ul>
          <li>직관적인 인터페이스를 통해 검색,장바구니 추가 구매 등 기능</li>
          <li>node를 이용해 벡엔드를 만들어 데이터 전달 및 crud 기능</li>
          <li>리엑트를 이용한 프론트엔드 페이지 생성</li>
        </ul>
      </fieldset>
    </div>
  );
};

export default Project2;
