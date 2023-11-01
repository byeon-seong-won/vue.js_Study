<h1> Blog </h1>
: Vue를 활용한 블로그 SPA 



<h2>Site Map</h2>
<img alt="image" src="[https://github.com/byeon-seong-won/vue.js_blog_project/assets/136781516/d36a1473-17c3-404b-9bba-46bd27b022e3](https://github.com/byeon-seong-won/vue.js_blog_project/assets/136781516/a31d79ae-69d0-41d7-ad3c-3eccea6e65c9)"




[개인 프로젝트: 2023.10.20 ~ 2023.10.30]
<br>
<br>

<h1> Pages </h1>
: 총 3 페이지 (Main | Post | Detail)
컴포넌트 분리 (Maincom.vue + Postcomp.vue + Detailcomp.vue + Menucomp.vue + Listcomp.vue + Filterboxcomp.vue)
<br>


🔧 Main Page (Maincom.vue)
<p>- menu</p>
<br>
<br>

🔧 Post Page (Postcomp.vue) : 포스트 리스트 전체 노출
<p>- CRUD : 추가 수정 삭제 읽기 가능</p>
<p>- v-for을 이용한 리스트 전체 노출 (List component)</p>
<p>- ++ 삭제 클릭 시 해당 포스트 리스트에서 삭제</p>
<p>- ++ 새 글 작성 클릭 시 v-if를 이용한 단계별 업로드 페이지 노출</p>
<p>- 단계별 빈 내용 check 함수 -> 비어있을 경우 alert 노출</p>
<p>- Step 1 : </p>
<p>- 1) 이미지 업로드 (v-if을 이용해 이미지 업로드 전 notfound 이미지 노출) </p>
<p>- 2) $emit을 이용한 이미지 필터 선택 (Filter component) </p>
<p>- Step 2 : </p>
<p>- 1) step1의 이미지 노출 </p>
<p>- 2) 텍스트 업로드 </p>
<br>
<br>

🔧 Detail Page (Detailcomp.vue) : 포스트 상세페이지
<p>- ++ 상세보기 클릭 시 해당 포스트 상세페이지로 이동</p>
<p>- 수정하기 클릭 시 v-if를 이용한 수정 페이지 노출</p>
<p>- 수정 이미지 업로드 (v-if을 이용해 이미지 업로드 전 notfound 이미지 노출)</p>
<p>- 이미지 업로드 미완료 및 빈 내용 check 함수</p>
<p>- $emit을 이용한 이미지 필터 선택 (Filter component)</p>
<p>- 수정완료 클릭 시 수정된 내용으로 변경되며 리스트 페이지로 이동</p>
<br>
<br>







