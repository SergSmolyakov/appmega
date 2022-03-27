import {formatTimeString} from '..//utils/formatTimeString';

describe('formatTimeString test', () => {
    it('returns None if no opening hours passed', () => {
        const expected = 'None';
        const received = formatTimeString([]);

        expect(received).toEqual(expected);
    });
});