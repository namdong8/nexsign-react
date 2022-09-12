import React from 'react';

  // ✅ Props 기본값
UserInfo.defaultProps = {
    test: ''
  }

function UserInfo({
    onUpdateName, onUpdateBirthday, onUpdatePhone,
    user
}) {

  // ✅ View 
  return (
    <>
    <div>
        이름: <input type="text" onChange={onUpdateName} value={user.name}/>
        생년월일: <input type="text" onChange={onUpdateBirthday} value={user.birthday}/>
        휴대폰번호: <input type="text" onChange={onUpdatePhone} value={user.phone}/>
    </div>
    </>
  );
};

export default UserInfo