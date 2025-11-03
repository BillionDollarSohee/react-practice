import React from 'react';

const Test2 = () => {
    const isLoggedId = true;

    return (
        <div>
            {isLoggedId ? <p>환영합니다!</p> : <p>로그인이 필요합니다.</p>}
        </div>
    );
};

export default Test2;