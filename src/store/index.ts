import { createStore, ModuleTree } from 'vuex'

// 自动引入module里所有模块
// 目前只设置一层嵌套，不管modules里层级有多深，最终导出都是扁平化直接导入到modules中，要避免同名module
const fileModules = import.meta.globEager('./modules/**/*.ts')
const modules = Object.keys(fileModules).reduce<ModuleTree<Record<string, unknown>>>((module, key) => {
  const name = key.replace(/.*\/(.*)\.ts$/, '$1')
  const value = fileModules[key].default
  module[name] = value
  return module
}, {})

export default createStore({
  state: {
    sss: 1
  },
  mutations: {},
  actions: {},
  getters: {},
  modules
})
