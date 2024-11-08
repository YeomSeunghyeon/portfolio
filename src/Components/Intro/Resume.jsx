import '../CSS/Resume.css' ;

const Resume = () => {
  return (
   <div>
    <h3>인적사항</h3>
    <table >
	    <tr>
	      <td className='menuItem'>이름</td> <td className='item'>염승현</td>
	    </tr>
	    <tr>
  	 	  <td className='menuItem'>생년월일</td> <td className='item'>2000-11-29</td>
  	    </tr>
	    <tr>
	  	  <td className='menuItem' >E-mail</td>  <td className='item'>100lion67@gmail.com</td>
	    </tr>
	    <tr>
	  	  <td className='menuItem'>전화번호</td><td className='item'>010-7199-1835</td>
	    </tr>
	  	<tr>
	  	  	<td className='menuItem'>주소</td>	<td className='item'>경기도 성남시 분당구 안골로 11번길23</td>
	  	</tr>	
	  </table>
      <h3>학력사항</h3>
      <table> 
	    <tr><td className='secondMenu'>초등학교명</td> <td className='secondMenuItem'>서현 초등학교</td>
		 <td className='secondItem'>졸업</td>
	    </tr>
	    <tr><td className='secondMenu'>중학교명</td>
	  <td className='secondMenuItem'>서현 중학교</td> <td className='secondItem'>졸업</td>
	    </tr>
	    <tr><td className='secondMenu'>고등학교명</td>
	 	<td className='secondMenuItem'>이매 고등학교</td> <td className='secondItem'>졸업</td>
	    </tr>
	    <tr><td className='secondMenu'>대학교명</td>
	    <td className='secondMenuItem'>가천 대학교 </td> <td className='secondItem'>재학중</td>
	    </tr>
    </table>
    <h3> 개인능력 및 장단점</h3>
    <table>
	    <tr > 
        <td className='thirdMenu'>운전면허증</td><td className='thirdItem'>보유</td>
  	  </tr>
  	  <tr> 
        <td className='thirdMenu'>사용가능한 벡엔드 언어</td>
        <td className='thirdItem'>c,c++,c#,java,python</td>
        </tr>
        <tr> 
        <td className='thirdMenu'>사용가능한 프론트엔드 언어</td>
        <td className='thirdItem'>js(react)</td>
        </tr>
	  <tr > 
	    <td className='thirdMenu'>취미</td>	
	    <td className='thirdItem'>음악감상,영화보기</td>
      </tr>
      <tr > 
	    <td className='thirdMenu'>특기</td>	
	    <td className='thirdItem'>암기,분석하기</td>
      </tr>
    </table>

   </div>
  );
};

export default Resume;