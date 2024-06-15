#!/usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.yellowBright.bgMagentaBright.bold("\n\t........Welcome to Quiz App designed by Fariha........\n\t"));
const quiz = await inquirer.prompt([
    {
        name: "question_1",
        type: "list",
        message: "Q1. What is the primary purpose of TypeScript?",
        choices: [
            "A. To style web pages",
            "B. To add interactivity to web pages",
            "C. To provide static typing for JavaScript",
            "D. To manage databases"
        ]
    },
    {
        name: "question_2",
        type: "list",
        message: "Q2. How do you define a variable in TypeScript?",
        choices: [
            "A. var variableName: type = value;",
            "B. let variableName: type = value;",
            "C. const variableName: type = value;",
            "D. All of the above"
        ]
    },
    {
        name: "question_3",
        type: "list",
        message: "Q3. Which of the following is a valid TypeScript type?",
        choices: [
            "A. number",
            "B. boolean",
            "C. string",
            "D. All of the above"
        ]
    },
    {
        name: "question_4",
        type: "list",
        message: "Q4. What is the file extension for TypeScript files?",
        choices: [
            "A. .js",
            "B. .ts",
            "C. .tsx",
            "D. .tss"
        ]
    },
    {
        name: "question_5",
        type: "list",
        message: "Q5. Which command is used to compile TypeScript code into JavaScript?",
        choices: [
            "A. tsc",
            "B. tsc compile",
            "C. typescript compile",
            "D. ts compile"
        ]
    }
]);
let score = 0;
switch (quiz.question_1) {
    case "C. To provide static typing for JavaScript":
        console.log(chalk.magenta("1. Correct!"));
        ++score;
        break;
    default:
        console.log(chalk.black.bgGreenBright("1. Incorrect!"));
}
switch (quiz.question_2) {
    case "D. All of the above":
        console.log(chalk.magenta("2. Correct!"));
        ++score;
        break;
    default:
        console.log(chalk.black.bgGreenBright("2. Incorrect!"));
}
switch (quiz.question_3) {
    case "D. All of the above":
        console.log(chalk.blackBright.bgBlue("3. Correct!"));
        ++score;
        break;
    default:
        console.log(chalk.red.bgYellowBright("3. Incorrect!"));
}
switch (quiz.question_4) {
    case "B. .ts":
        console.log(chalk.magenta("4. Correct!"));
        ++score;
        break;
    default:
        console.log(chalk.bgRedBright.bgGreenBright("4. Incorrect!"));
}
switch (quiz.question_5) {
    case "A. tsc":
        console.log(chalk.yellow.bgBlue("5. Correct!"));
        ++score;
        break;
    default:
        console.log(chalk.red.bgWhite("5. Incorrect!"));
}
console.log(chalk.magentaBright.bgWhite(`Score: ${score}`));
