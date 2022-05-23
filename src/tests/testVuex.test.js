import { shallowMount, createLocalVue} from "@vue/test-utils";
import TestVuexComponent from "../components/testVuexComponent";
import Vuex from "vuex";

const LocalVue = createLocalVue()
LocalVue.use(Vuex)

describe('Test Vuex', ()=>{
    let actions
    let store
    beforeEach(()=>{
        actions= {
            addData: jest.fn()
        }
        store = new Vuex.Store({
            actions,
            state: {
                data: ''
            }
        })
    })

    it('run action onSave', ()=>{
        const wrapper = shallowMount(TestVuexComponent, {
            store,
            LocalVue
        })
        const input = wrapper.find('input')

        input.setValue('test')
        expect(wrapper.vm.value).toBe('test')

        const btn = wrapper.find('button')
        btn.trigger('click')

        expect(actions.addData).toHaveBeenCalled()
    })

})