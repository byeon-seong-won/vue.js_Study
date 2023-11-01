<h1> Blog </h1>
: Vue를 활용한 블로그 SPA 



<h2>Site Map</h2>
<img alt="image" src="https://github.com/byeon-seong-won/react.js_shopmall_project/assets/136781516/caf3ea01-ed87-4bdd-ade6-46ca33a6c2ef"



[개인 프로젝트: 2023.10.20 ~ 2023.10.30]
<br>
<br>

<h1> Pages </h1>
: 총 3 페이지 (Home | List | Detail)
<br>

🔧 Home Page (App.js)
<p>- Router를 이용해 페이지 나누기</p>
<p>- node.js와 mysql 연동으로 DB에 있는 데이터로 가져오기</p>
<p>- createSlice.js 파일과 컴포넌트를 분리/p>
<p>- axios get을 통해 상품 데이터 "더보기" 버튼 클릭시 보여주기(+map 반복문으로 레이아웃 구성)</p>
<p>- 상품 이미지를 클릭하면 해당 상품 Detail page로 이동</p>
<p>- useEffect와 addEventListener를 이용한 헤더 스크롤 이벤트 구현</p>
<br>
<br>

🔧 Detail Page (detail.js)
<p>- redux로 상태관리(index.js)</p>
<p>- 장바구니 담기 클릭시 이중 모달창 : 확인 모달창 노출 -> 확인 클릭시 장바구니로 이동되며 수량 +1 </p>
<p>- 장바구니 담기 버튼 클릭시 이중 모달창 : 확인 모달창 노출 -> 확인 클릭시 장바구니로 이동되며 수량 +1 </p>
<p>- 구매하기 버튼 클릭시 해당 상품 수량 +1, 장바구니 페이지 바로이동</p>
<p>- 장바구니에 중복 상품 있을 경우 수량 +1, 없을 경우 항목 추가</p>
<p>- 탭 기능 구현(+애니메이션 효과)</p>
<p>- 하단 탭메뉴1 공간, 배경색 클릭시 해당 이미지와 배경색상 노출</p>
<p>- 하단 탭메뉴2 각 텍스트 아코디언 메뉴로 노출</p>
<br>
<br>

🔧 Cart Page (cart.js)
<p>- redux로 상태관리(index.js)</p>
<p>- 수량 변경 버튼(+수량이 음수가 되지 않도록  alert 창 노출)</p>
<p>- Detail Page에서 같은 상품을 주문하면 항목추가가 아닌 수량증가가 되는 기능</p>
<p>- 장바구니 항목 삭제 버튼 클릭시 -> 확인 모달창 노출 -> 확인 클릭시 삭제</p>
<p>- 각 상품별 수량에 따른 가격변동과 총 합계 금액 계산</p>


<br>
<br>






