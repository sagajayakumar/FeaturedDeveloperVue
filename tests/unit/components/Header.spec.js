import { mount } from '@vue/test-utils'
import Header  from '../../../src/components/semantics/Header.vue'


describe('Header.vue', () => {
    test('snapshot', () => {
        const wrapper = mount(Header)
        expect(wrapper).toMatchSnapshot()
    })

})