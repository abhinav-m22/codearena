import assert from "assert";
import { Problem } from "../types/problem";

const starterCodeContainer = `function maxArea(height) {
    // Your code here
}`;

const handleContainer = (fn: any) => {
    try {
        const testCases = [
            {
                height: [1, 8, 6, 2, 5, 4, 8, 3, 7],
                expected: 49,
            },
            {
                height: [1, 1],
                expected: 1,
            },
            // Add more test cases here if needed
        ];

        for (const testCase of testCases) {
            const result = fn(testCase.height);
            assert.strictEqual(result, testCase.expected);
        }

        return true;
    } catch (error: any) {
        console.log("Container handler error:");
        throw new Error(error);
    }
}

export const containerWithMostWater: Problem = {
    id: "container-with-most-water",
    title: "Container With Most Water",
    problemStatement: `<p class='mt-3'>
    You are given an integer array <code>height</code> of length <code>n</code>. There are <code>n</code> vertical lines drawn
    such that the two endpoints of the ith line are (i, 0) and (i, height[i]).
    </p>
    <p class='mt-3'>
    Find two lines that together with the x-axis form a container, such that the container contains the most water.
    </p>
    <p class='mt-3'>
    Return the maximum amount of water the container can store.
    </p>
    <p class='mt-3'>
    Notice that you may not slant the container.
    </p>`,
    examples: [
        {
            id: 1,
            inputText: "height = [1,8,6,2,5,4,8,3,7]",
            outputText: "49",
            explanation: "The max area of water the container can contain is 49.",
        },
        {
            id: 2,
            inputText: "height = [1,1]",
            outputText: "1",
            explanation: "The max area of water the container can contain is 1.",
        },
    ],
    constraints: `<li class='mt-2'>
    <code>2 ≤ height.length ≤ 10^5</code>
    </li>
    <li class='mt-2'>
    <code>0 ≤ height[i] ≤ 10^4</code>
    </li>`,
    handlerFunction: handleContainer,
    starterCode: starterCodeContainer,
    order: 2,
    starterFunctionName: "function maxArea(",
};
