//侧边栏
// const autosidebar = require('vuepress-auto-sidebar-doumjun')
const {getChildren} = require("vuepress-sidebar-atuo")

module.exports = {
    '/views/': [
        {
            title: 'pso2',
            collapsable: true,
            children: getChildren('./docs/views/pso2')
        }
    ]

}
