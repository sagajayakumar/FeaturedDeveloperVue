import { mount } from '@vue/test-utils'
import Footer  from '../../../src/components/semantics/Footer.vue'


describe('Footer.vue', () => {
    test('snapshot', () => {
        const wrapper = mount(Footer)
        expect(wrapper).toMatchSnapshot()
    })

})