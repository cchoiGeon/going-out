exports.Love = function(a){
  return `
  <form class="validation-form" novalidate action="/profileLove_process" method="post">
    <div id="layoutSidenav_content">
      <div class="container-fluid px-4">
          <div class="row">
            <div class="col-md-8 mb-3">
              <h4 class="mb-3">연인 매칭 프로필 작성</h4>
              <label for="pref_age">선호하는 나이</label>
              <select class="custom-select d-block w-100" id="pref_age" name="older">
                <option value=""></option>
                <option value="연하">연하</option>
                <option value="동갑">동갑</option>
                <option value="연상">연상</option>
              </select>
              <div class="invalid-feedback">
                필수항목 입니다.
              </div>
          </div>
            <div class="col-md-8 mb-3">
              <label for="pref_campus">선호하는 캠퍼스</label>
              <select class="custom-select d-block w-100" id="pref_campus" name="campus">
                <option value=""></option>
                <option value="서울캠퍼스">서울캠퍼스</option>
                <option value="글로벌캠퍼스">글로벌캠퍼스</option>
                <option value="상관없음">상관없음</option>
              </select>
              <div class="invalid-feedback">
                필수항목 입니다.
              </div>
            </div>
            <div class="col-md-8 mb-3">
              <label for="ideal_type">나의 이상형</label>
              <select class="custom-select d-block w-100" id="ideal_type" name="idealtype">
                <option value=""></option>
                <option name="귀여움">귀여움</option>
                <option name="이쁨">이쁨</option>
                <option name="착함">착함</option>
                <option name="나쁨">나쁨</option>
                <option name="매력있음">매력있음</option>
              </select>
              <div class="invalid-feedback">
                선호캠퍼스를 선택해주세요.
              </div>
            </div>
            <div class="col-md-6 mb-3">
              <label for="introduce_me">선호하는 이상형</label>
              <input type="text" class="form-control" id="introduce_me" placeholder="1순위" name="fristtype" required>
              <input type="text" class="form-control" id="introduce_me" placeholder="2순위" name="secondtype" required>
              <input type="text" class="form-control" id="introduce_me" placeholder="3순위" name="thirdtype" required>
              <div class="invalid-feedback">
                필수항목 입니다.
              </div>
            </div>
            <div class="col-md-8 mb-3">
              <label for="mbti">나의 mbti</label>
              <select class="custom-select d-block w-100" id="mbti" name="mbti">
                <option value=""></option>
                <option value="infj">infj</option>
                <option value="enfj">enfj</option>
                <option>1</option>
                <option>1</option>
                <option>1</option>
                <option>1</option>
                <option>1</option>
                <option>1</option>
                <option>1</option>
                <option>1</option>
                <option>1</option>
                <option>1</option>
                <option>1</option>
                <option>1</option>
                <option>1</option>
                <option>1</option>
              </select>
              <div class="invalid-feedback">
                필수항목 입니다.
              </div>
            </div>
            <div class="col-md-6 mb-3">
              <label for="introduce_me">선호하는 mbti</label>
              <input type="text" class="form-control" id="introduce_me" placeholder="1순위" name="fristPrefermbti" required>
              <input type="text" class="form-control" id="introduce_me" placeholder="2순위" name="secondPrefermbti" required>
              <input type="text" class="form-control" id="introduce_me" placeholder="3순위" name="thirdPrefermbti" required>
              <div class="invalid-feedback">
                필수항목 입니다.
              </div>  
            </div>
          <div class="row">
            <div class="col-md-6 mb-3">
              <label for="introduce_me">'나'를 한 줄로 소개한다면?</label>
              <input type="text" class="form-control" id="introduce_me" placeholder="" value="" name="selfIntroduction" required>
              <div class="invalid-feedback">
                필수항목 입니다.
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-md-6 mb-3">
                <label for="def_outing">'만남'을 한 줄로 정의한다면?</label>
                <input type="text" class="form-control" id="def_outing" placeholder="" name="selfMeeting" value="" required>
                <div class="invalid-feedback">
                  필수항목 입니다.
                </div>
              </div>
          </div>
          <div class="row">
            <div class="col-md-6 mb-3">
                <label for="def_outing"> 영화를 볼 때 주로 보는 장르는?</label>
                <input type="text" class="form-control" id="def_outing" placeholder="" name="movie" value="" required>
                <div class="invalid-feedback">
                  필수항목 입니다.
                </div>
              </div>
          </div>
          <div class="row">
            <div class="col-md-6 mb-3">
                <label for="def_outing"> 최근 관심사는?</label>
                <input type="text" class="form-control" id="def_outing" placeholder="" name="interests" value="" required>
                <div class="invalid-feedback">
                  필수항목 입니다.
                </div>
              </div>
          </div>
          <div class="row">
            <div class="col-md-6 mb-3">
                <label for="def_outing"> 유튜브로는 주로 보는 영상은? </label>
                <input type="text" class="form-control" id="def_outing" placeholder="" name="youtube" value="" required>
                <div class="invalid-feedback">
                  필수항목 입니다.
                </div>
              </div>
          </div>
          <hr class="mb-4">
          <div class="mb-4"></div>
          <button class="btn btn-primary btn-lg btn-block" type="submit">${a}</button>
    </div>
  <div>
</form>
`
}
exports.Friend =function(a){
  return `
  <div id="layoutSidenav_content">
    <div class="container-fluid px-4">
        <form class="validation-form" novalidate action="/profileLove_process" method="post">
            <div class="row">
              <div class="col-md-8 mb-3">
                <h4 class="mb-3">친구 매칭 프로필 작성</h4>
                <label for="pref_age">선호하는 나이</label>
                <select class="custom-select d-block w-100" id="pref_age" name="older">
                  <option value=""></option>
                  <option value="연하">연하</option>
                  <option value="동갑">동갑</option>
                  <option value="연상">연상</option>
                </select>
                <div class="invalid-feedback">
                  필수항목 입니다.
                </div>
            </div>
            <div class="col-md-8 mb-3">
              <label for="pref_campus">선호하는 캠퍼스</label>
              <select class="custom-select d-block w-100" id="pref_campus" name="campus">
                <option value=""></option>
                <option value="서울캠퍼스">서울캠퍼스</option>
                <option value="글로벌캠퍼스">글로벌캠퍼스</option>
                <option value="상관없음">상관없음</option>
              </select>
              <div class="invalid-feedback">
                필수항목 입니다.
              </div>
            </div>
            <div class="col-md-8 mb-3">
              <label for="ideal_type">나의 이상형</label>
              <select class="custom-select d-block w-100" id="ideal_type" name="idealtype">
                <option value=""></option>
                <option name="귀여움">귀여움</option>
                <option name="이쁨">이쁨</option>
                <option name="착함">착함</option>
                <option name="나쁨">나쁨</option>
                <option name="매력있음">매력있음</option>
              </select>
              <div class="invalid-feedback">
                선호캠퍼스를 선택해주세요.
              </div>
            </div>
            <div class="col-md-6 mb-3">
              <label for="introduce_me">선호하는 이상형</label>
              <input type="text" class="form-control" id="introduce_me" placeholder="1순위" name="fristtype" required>
              <input type="text" class="form-control" id="introduce_me" placeholder="2순위" name="secondtype" required>
              <input type="text" class="form-control" id="introduce_me" placeholder="3순위" name="thirdtype" required>
              <div class="invalid-feedback">
                필수항목 입니다.
              </div>
            </div>
            <div class="col-md-8 mb-3">
              <label for="mbti">나의 mbti</label>
              <select class="custom-select d-block w-100" id="mbti" name="mbti">
                <option value=""></option>
                <option value="infj">infj</option>
                <option value="enfj">enfj</option>
                <option>1</option>
                <option>1</option>
                <option>1</option>
                <option>1</option>
                <option>1</option>
                <option>1</option>
                <option>1</option>
                <option>1</option>
                <option>1</option>
                <option>1</option>
                <option>1</option>
                <option>1</option>
                <option>1</option>
                <option>1</option>
              </select>
              <div class="invalid-feedback">
                필수항목 입니다.
              </div>
            </div>
            <div class="col-md-6 mb-3">
              <label for="introduce_me">선호하는 mbti</label>
              <input type="text" class="form-control" id="introduce_me" placeholder="1순위" name="fristPrefermbti" required>
              <input type="text" class="form-control" id="introduce_me" placeholder="2순위" name="secondPrefermbti" required>
              <input type="text" class="form-control" id="introduce_me" placeholder="3순위" name="thirdPrefermbti" required>
              <div class="invalid-feedback">
                필수항목 입니다.
              </div>  
            </div>
          <div class="row">
            <div class="col-md-6 mb-3">
              <label for="introduce_me">'나'를 한 줄로 소개한다면?</label>
              <input type="text" class="form-control" id="introduce_me" placeholder="" value="" name="selfIntroduction" required>
              <div class="invalid-feedback">
                필수항목 입니다.
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-md-6 mb-3">
                <label for="def_outing">'만남'을 한 줄로 정의한다면?</label>
                <input type="text" class="form-control" id="def_outing" placeholder="" name="selfMeeting" value="" required>
                <div class="invalid-feedback">
                  필수항목 입니다.
                </div>
              </div>
          </div>
          <div class="row">
            <div class="col-md-6 mb-3">
                <label for="def_outing"> 영화를 볼 때 주로 보는 장르는?</label>
                <input type="text" class="form-control" id="def_outing" placeholder="" name="movie" value="" required>
                <div class="invalid-feedback">
                  필수항목 입니다.
                </div>
              </div>
          </div>
          <div class="row">
            <div class="col-md-6 mb-3">
                <label for="def_outing"> 최근 관심사는?</label>
                <input type="text" class="form-control" id="def_outing" placeholder="" name="interests" value="" required>
                <div class="invalid-feedback">
                  필수항목 입니다.
                </div>
              </div>
          </div>
          <div class="row">
            <div class="col-md-6 mb-3">
                <label for="def_outing"> 유튜브로는 주로 보는 영상은? </label>
                <input type="text" class="form-control" id="def_outing" placeholder="" name="youtube" value="" required>
                <div class="invalid-feedback">
                  필수항목 입니다.
                </div>
              </div>
          </div>
          <div class="row">
              <div class="col-md-6 mb-3">
                  <label for="def_outing">사용자의 아이디를 입력해주세요</label>
                  <input type="text" class="form-control" id="def_outing" placeholder="" value="" name="userid" required>
                  <div class="invalid-feedback">
                    필수항목 입니다.
                  </div>
              </div>
          </div>
          <hr class="mb-4">
          <div class="mb-4"></div>
          <button class="btn btn-primary btn-lg btn-block" type="submit">${a}</button>
      </form>
    </div>
  <div>
`
}
exports.Group =function(a){
  return `
  <div id="layoutSidenav_content">
    <div class="container-fluid px-4">
        <form class="validation-form" novalidate action="/profileLove_process" method="post">
            <div class="row">
              <div class="col-md-8 mb-3">
                <h4 class="mb-3">그룹 매칭 프로필 작성</h4>
                <label for="pref_age">선호하는 나이</label>
                <select class="custom-select d-block w-100" id="pref_age" name="older">
                  <option value=""></option>
                  <option value="연하">연하</option>
                  <option value="동갑">동갑</option>
                  <option value="연상">연상</option>
                </select>
                <div class="invalid-feedback">
                  필수항목 입니다.
                </div>
            </div>
            <div class="col-md-8 mb-3">
              <label for="pref_campus">선호하는 캠퍼스</label>
              <select class="custom-select d-block w-100" id="pref_campus" name="campus">
                <option value=""></option>
                <option value="서울캠퍼스">서울캠퍼스</option>
                <option value="글로벌캠퍼스">글로벌캠퍼스</option>
                <option value="상관없음">상관없음</option>
              </select>
              <div class="invalid-feedback">
                필수항목 입니다.
              </div>
            </div>
            <div class="col-md-8 mb-3">
              <label for="ideal_type">나의 이상형</label>
              <select class="custom-select d-block w-100" id="ideal_type" name="idealtype">
                <option value=""></option>
                <option name="귀여움">귀여움</option>
                <option name="이쁨">이쁨</option>
                <option name="착함">착함</option>
                <option name="나쁨">나쁨</option>
                <option name="매력있음">매력있음</option>
              </select>
              <div class="invalid-feedback">
                선호캠퍼스를 선택해주세요.
              </div>
            </div>
            <div class="col-md-6 mb-3">
              <label for="introduce_me">선호하는 이상형</label>
              <input type="text" class="form-control" id="introduce_me" placeholder="1순위" name="fristtype" required>
              <input type="text" class="form-control" id="introduce_me" placeholder="2순위" name="secondtype" required>
              <input type="text" class="form-control" id="introduce_me" placeholder="3순위" name="thirdtype" required>
              <div class="invalid-feedback">
                필수항목 입니다.
              </div>
            </div>
            <div class="col-md-8 mb-3">
              <label for="mbti">나의 mbti</label>
              <select class="custom-select d-block w-100" id="mbti" name="mbti">
                <option value=""></option>
                <option value="infj">infj</option>
                <option value="enfj">enfj</option>
                <option>1</option>
                <option>1</option>
                <option>1</option>
                <option>1</option>
                <option>1</option>
                <option>1</option>
                <option>1</option>
                <option>1</option>
                <option>1</option>
                <option>1</option>
                <option>1</option>
                <option>1</option>
                <option>1</option>
                <option>1</option>
              </select>
              <div class="invalid-feedback">
                필수항목 입니다.
              </div>
            </div>
            <div class="col-md-6 mb-3">
              <label for="introduce_me">선호하는 mbti</label>
              <input type="text" class="form-control" id="introduce_me" placeholder="1순위" name="fristPrefermbti" required>
              <input type="text" class="form-control" id="introduce_me" placeholder="2순위" name="secondPrefermbti" required>
              <input type="text" class="form-control" id="introduce_me" placeholder="3순위" name="thirdPrefermbti" required>
              <div class="invalid-feedback">
                필수항목 입니다.
              </div>  
            </div>
          <div class="row">
            <div class="col-md-6 mb-3">
              <label for="introduce_me">'나'를 한 줄로 소개한다면?</label>
              <input type="text" class="form-control" id="introduce_me" placeholder="" value="" name="selfIntroduction" required>
              <div class="invalid-feedback">
                필수항목 입니다.
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-md-6 mb-3">
                <label for="def_outing">'만남'을 한 줄로 정의한다면?</label>
                <input type="text" class="form-control" id="def_outing" placeholder="" name="selfMeeting" value="" required>
                <div class="invalid-feedback">
                  필수항목 입니다.
                </div>
              </div>
          </div>
          <div class="row">
            <div class="col-md-6 mb-3">
                <label for="def_outing"> 영화를 볼 때 주로 보는 장르는?</label>
                <input type="text" class="form-control" id="def_outing" placeholder="" name="movie" value="" required>
                <div class="invalid-feedback">
                  필수항목 입니다.
                </div>
              </div>
          </div>
          <div class="row">
            <div class="col-md-6 mb-3">
                <label for="def_outing"> 최근 관심사는?</label>
                <input type="text" class="form-control" id="def_outing" placeholder="" name="interests" value="" required>
                <div class="invalid-feedback">
                  필수항목 입니다.
                </div>
              </div>
          </div>
          <div class="row">
            <div class="col-md-6 mb-3">
                <label for="def_outing"> 유튜브로는 주로 보는 영상은? </label>
                <input type="text" class="form-control" id="def_outing" placeholder="" name="youtube" value="" required>
                <div class="invalid-feedback">
                  필수항목 입니다.
                </div>
              </div>
          </div>
          <div class="row">
              <div class="col-md-6 mb-3">
                  <label for="def_outing">사용자의 아이디를 입력해주세요</label>
                  <input type="text" class="form-control" id="def_outing" placeholder="" value="" name="userid" required>
                  <div class="invalid-feedback">
                    필수항목 입니다.
                  </div>
              </div>
          </div>
          <hr class="mb-4">
          <div class="mb-4"></div>
          <button class="btn btn-primary btn-lg btn-block" type="submit">${a}</button>
      </form>
    </div>
  <div>
`
}