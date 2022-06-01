import { mount } from '@vue/test-utils';
import CalcComponent from "../components/CalcComponent";

describe('Test calculator', () => {
    it('test operand1', ()=>{
        const wrapper = mount(CalcComponent)
        const operand1 = wrapper.find('input[name=x]')
        operand1.setValue('1')

        expect(wrapper.vm.x).toBe(1)
    })

    it('test operand2', ()=>{
        const wrapper = mount(CalcComponent)
        const operand2 = wrapper.find('input[name=n]')
        operand2.element.value = 1
        operand2.trigger('input')

        expect(wrapper.vm.n).toBe(1)
    })

    it('test sum', ()=>{
        const wrapper = mount(CalcComponent)
        const operand1 = wrapper.find('input[name=x]')
        const operand2 = wrapper.find('input[name=n]')
        operand1.setValue('1')
        operand2.setValue('2')
        const btn = wrapper.find('button[name="+"]')
        btn.trigger('click')

        expect(wrapper.vm.result).toBe(3)
    })

    it('test substract', ()=>{
        const wrapper = mount(CalcComponent)
        const operand1 = wrapper.find('input[name=x]')
        const operand2 = wrapper.find('input[name=n]')
        operand1.setValue('5')
        operand2.setValue('3')
        const btn = wrapper.find('button[name="-"]')
        btn.trigger('click')

        expect(wrapper.vm.result).toBe(2)
    })

    it('test multiply', ()=>{
        const wrapper = mount(CalcComponent)
        const operand1 = wrapper.find('input[name=x]')
        const operand2 = wrapper.find('input[name=n]')
        operand1.setValue('5')
        operand2.setValue('3')
        const btn = wrapper.find('button[name="*"]')
        btn.trigger('click')

        expect(wrapper.vm.result).toBe(15)
    })

    it('test division', ()=>{
        const wrapper = mount(CalcComponent)
        const operand1 = wrapper.find('input[name=x]')
        const operand2 = wrapper.find('input[name=n]')
        operand1.setValue('12')
        operand2.setValue('3')
        const btn = wrapper.find('button[name="/"]')
        btn.trigger('click')

        expect(wrapper.vm.result).toBe(4)
    })

    it('test exponent', ()=>{
        const wrapper = mount(CalcComponent)
        const operand1 = wrapper.find('input[name=x]')
        const operand2 = wrapper.find('input[name=n]')
        operand1.setValue('2')
        operand2.setValue('4')
        const btn = wrapper.find('button[name="^"]')
        btn.trigger('click')

        expect(wrapper.vm.result).toBe(16)
    })

    it('test mouse input any key', ()=>{
        const wrapper = mount(CalcComponent)
        const key3 = wrapper.find('button[name="3"]')
        wrapper.vm.picked = 'x'
        key3.trigger('click')

        expect(wrapper.vm.x).toBe(3)
    })

    it('test backspace operand1', ()=>{
        const wrapper = mount(CalcComponent)
        const operand1 = wrapper.find('input[name=x]')
        const bsp = wrapper.find('button[name="bsp"]')
        wrapper.vm.picked = 'x'
        operand1.setValue('56789')
        bsp.trigger('click')

        expect(wrapper.vm.x).toBe(5678)
    })

    it('test backspace operand2', ()=>{
        const wrapper = mount(CalcComponent)
        const operand2 = wrapper.find('input[name=n]')
        const bsp = wrapper.find('button[name="bsp"]')
        wrapper.vm.picked = 'n'
        operand2.setValue('12345')
        bsp.trigger('click')

        expect(wrapper.vm.n).toBe(1234)
    })
})