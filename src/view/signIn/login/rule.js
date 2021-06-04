import { maker } from '@form-create/iview'

export default [
  maker.radio('选择角色', 'account').validate([ { required: true, message: '请选择角色' } ]),
]
