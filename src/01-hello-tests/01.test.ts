import { expect, test } from 'vitest'
import {sum} from "./01";

test('summ should be correct', () => {
    // data
    const a = 1
    const b = 2
    const c = 3

    // action

    const result = sum(a, b)

    //expect result
    expect(result).toBe(3)
})