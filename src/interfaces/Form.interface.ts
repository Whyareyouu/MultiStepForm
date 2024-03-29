export interface IStartedForm {
    phone: string;
    email: string;
}

export interface IFormStepFirst {
    nickname: string;
    name: string;
    sername: string;
    sex: { label: string, value: string }
}

type Advantages = {
    advantages: string
}

export interface IFormStepSecond {
    advantages: Advantages[];
    radio: string,
    checkbox: number[] | string[],
}

export interface IFormStepThird{
    about: string;
}