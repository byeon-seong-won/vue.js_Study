<h1> Blog </h1>
: Vue를 활용한 일상 블로그 SPA 
<br>
[개인 프로젝트: 2023.10.20 ~ 2023.10.30]
<br>
<img alt="image" src="https://github.com/user-attachments/assets/665194dd-2edd-487c-8c56-895ae37b5305" style="width:200px;"/>
<img alt="image" src="https://github.com/user-attachments/assets/4aaba3ec-3049-41ff-a997-b04bb265e577" style="width:200px;"/>
<img alt="image" src="https://github.com/user-attachments/assets/c25f47e1-1856-44b3-ba97-344ead14c30f" style="width:200px;"/>


<br>
<br>

<h1> Pages </h1>
: 총 3 페이지 (Main | Post | Detail) <br>
컴포넌트 분리 (Maincom.vue + Postcomp.vue + Detailcomp.vue + Menucomp.vue + Listcomp.vue + Filterboxcomp.vue)
<br>
<br>


🔧 Main Page (Maincom.vue)
<p>- menu 클릭 시 /post 블로그 리스트로 이동</p>
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







