// * 회원가입 body
export type SingUpAPIBody = {
    email: string;
    firstname: string;
    lastname: string;
    password: string;
    birthday: string;
};

// * 로그인 body
export type LoginAPIBody = {
    email: string;
    password: string;
};

