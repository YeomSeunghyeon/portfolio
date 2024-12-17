import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const MyPage=()=>{
    const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
return(
    <div>
    {!isAuthenticated && <Navigate to="/login" />}
    <h1 className="MyPageText">나의 정보</h1>
    <div className="MyPageAll">
 <div className="MyPageNameAll"><div className="MyPageName">이름</div> 
  <div className="MyPageNameItem">염승현</div></div> 
 <div className="MyPageNumAll"> <div className="MyPageNum"> 학번</div>
 <div className="MyPageNumItem">201935292</div></div>  
  <div className="MyPageAddressAll">  <div className="MyPageAddress"> 주소</div> 
    <div className="MyPageAddressItem"> 성남시 분당구 서현동</div></div>
    </div></div>
)
};
export default MyPage;