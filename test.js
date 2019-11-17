const { continuousArray } = require('./dist/index')

test('interpolation works', () => {
	const array = [1, 2, 4]
	const continuous = continuousArray(array)

	expect(continuous[0]).toBe(1)
	expect(continuous[0.5]).toBe(1.5)
	expect(continuous[1.5]).toBe(3)
	expect(continuous[2]).toBe(4)

	expect(continuous[2.5]).toBeUndefined()
	expect(continuous[-1]).toBeUndefined()
})

test('array properties preserved', () => {
	const array = [1, 2, 4]
	const continuous = continuousArray(array)

	expect(continuous).toEqual([1, 2, 4])
	expect(continuous.length).toBe(3)

	continuous.push(0)

	expect(continuous).toEqual([1, 2, 4, 0])
	expect(continuous.length).toBe(4)

	expect([...continuous]).toEqual(continuous)

	const sliced = continuous.slice(1)
	expect(sliced).toEqual([2, 4, 0])

	continuous.sort()
	expect(continuous).toEqual([0, 1, 2, 4])
})
