import "./CSS/index.css"

const index=()=>{
    return(
        <div>
        <div className="mainText" >가천대학교 컴퓨터 공학과 19학번 염승현의 portfolio</div>
        <div>
        <img src={`${process.env.PUBLIC_URL}/main.jpg`} className="mainImage" />
      </div>
      </div>
    );
    };
    export default index;