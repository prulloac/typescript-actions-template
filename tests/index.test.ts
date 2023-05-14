import {run} from '../src/index'

describe('Test', () => {
	it('should pass', async () => {
		await run()
		expect(true).toBe(true)
	})
})
