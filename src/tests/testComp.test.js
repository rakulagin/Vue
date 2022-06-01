import {mount} from '@vue/test-utils'
import TestComp from "../components/TestComp";

describe ('Test Component', () => {
    test('Test Content Component', () => {
        const wrapper = mount(TestComp, {
            propsData: {
                message: "Hello from test"
            }
        })
        expect(wrapper.text()).toEqual('The message is: Hello from test')
    })
})