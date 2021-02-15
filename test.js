/**
 * Написать ф-ию findMaximumAbsoluteDifference
 * Ф-ия должна найти максимальную разность 2х чисел по модулю
 *
 * Н-р:
 * [-10, 5, 9, 4, 3, 2, 1, 6, 8] => 19
 * | -10 - 9 | = 19
 */
const findMaximumAbsoluteDifference = (arr) => {
    let min = arr[0];
    let max;
    arr.forEach(element => {
        if (min < element) {
            max = element
        } else {
            min = element
        }
    });
    console.log(min - max)
};

findMaximumAbsoluteDifference([-10, 5, 9, 4, 0, 3, -2, 1, 6, 8]);












/**
 * Написать ф-ию summ
 *
 * Которая должна возвращать следующие значения:
 * sum(3)() => 3
 * sum(3)(5)() => 8
 * sum(2)(0)(3)(4)() => 9
 */

const sum = () => {

};

const ss = sum(2);

ss()












/**
 * Что будет выведено в консоль
 */

console.log("1");

new Promise((res) => {
    console.log("2");
}).then(() => {
    console.log("3");
});

setTimeout(() => {
    console.log("4");
}, 0);

new Promise((res) => {
    console.log("5");

    res();

    console.log("6");
}).then(() => {
    console.log("7");
});

Promise.resolve().then(() => {
    console.log("8");
});

console.log("9");












/**
 * Что будет выведено в консоль
 */

const shape = {
    radius: 10,
    diameter() {
        return this.radius * 2;
    },
    perimeter: () => 2 + Math.PI + this.radius
};

const diameter = shape.diameter();

console.log("diameter", diameter);

const perimeter = shape.perimeter();

console.log("perimeter", perimeter);

















/**
 * Что будет выведено в консоль
 */

for (var i = 0; i < 10; i++) {
    setTimeout(function() {
        console.log(i);
    }, 0);
}


















/**
 * Написать ф-ию shouldComponentUpdate из React
 */

const shouldComponentUpdate = (nextProps) => {
    for (key in nextProps) {
        if (this.props[key] === nextProps[key]) {
            return false
        } else {
            return true
        }
    }
};















interface ModalProps {
    title: string;
    visible: boolean;
    onVisibilityChange: () => void;
    fullWidth: boolean;
}

/**
 * Написать интерфейс, в котором должны находиться только
 * visible и title (необходимо использовать ModalProps)
 */

interface MyModalProps {}

















/**
 * Написать тип ExtractWords<T>, который изменит значение
 * по каждому ключу на string
 */

const words = {
    person: {
        ru: "Человек",
        en: "Person"
    },
    age: {
        ru: "Возраст",
        en: "Age"
    },
    keyboard: {
        ru: "Клавиатура",
        en: "Keyboard"
    }
};

type ExtractWords < T > = {};

type translate = < T > (T: any) => ExtractWords < T > ;

// т.е translations.person === 'string'