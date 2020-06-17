import { validateApiConfig, Loader, constructSrcUrl } from "./utils"
import { GoogleMapsSdk } from "./types";

describe('utils', () => {
    describe('validateApiConfig', () => {
        it('fails if no key found', () => {
            expect(() => validateApiConfig({ apiKey: '' })).toThrow();
            expect(() => validateApiConfig({ apiKey: null })).toThrow();
            expect(() => validateApiConfig({ apiKey: undefined })).toThrow();
        })

        it('passes when key found', () => {
            expect(() => validateApiConfig({ apiKey: 'key' })).not.toThrow();
        })
    })

    describe('Loader', () => {
        it('on set, triggers all subscribers', () => {
            const loader = Loader();

            const sub1 = jest.fn();
            const sub2 = jest.fn();
            const dummyVal = { hello: "world" } as any;

            loader.subscribe(sub1);
            expect(sub1).not.toHaveBeenCalled();

            loader.set(dummyVal);

            expect(sub1).toHaveBeenCalledWith(dummyVal);

            loader.subscribe(sub2);
            expect(sub2).toHaveBeenCalledWith(dummyVal);
        })
    })

    describe('constructSrcUrl', () => {
        it('adds default params', () => {
            const ret = constructSrcUrl({
                apiKey: 'key',
            }, 'callback');

            expect(ret).toEqual(
                'https://maps.googleapis.com/maps/api/js?key=key&callback=callback'
            )
        })

        it('adds version when provided', () => {
            const ret = constructSrcUrl({
                apiKey: 'key',
                version: 'weekly'
            }, 'callback');

            expect(ret).toEqual(
                'https://maps.googleapis.com/maps/api/js?key=key&callback=callback&v=weekly'
            )
        })
    })
})
