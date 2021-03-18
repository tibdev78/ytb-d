import { args } from "../src/service/toolService";
import ytbD from '..'

describe('fonctional test of librairie', () => {
    it('arg test', () => {
        const flgs = args('https://test.com', {
            noWarnings: true,
            noCallHome: true,
            noCheckCertificate: true,
        })

        expect(flgs).toEqual(
            [
                'https://test.com',
                '--no-warnings',
                '--no-call-home',
                '--no-check-certificate'
            ]
        )
    })

    test('Parsing json', async () => {
        const resp = await ytbD({
            url: 'https://youtu.be/kXYiU_JCYtU',
            flags: {
                dumpJson: true
            }
        })
        expect(typeof resp == 'object')
    }),

    test('Information format', async () => {
        const resp = await ytbD({
            url: 'https://youtu.be/kXYiU_JCYtU',
            flags: {
                listFormats: true,
                noWarnings: true,
                noCallHome: true,
                noCheckCertificate: true
            }
        })
        expect(typeof resp == 'string')
    })
})