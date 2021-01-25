// const nav =require('./config/nav.js') ;
const sidebar =require('./config/sidebar.js');
module.exports = {
    title: '海原の炼铜工坊',
    description: '炼铜潜力无穷尽，亩产多少在人为',
    host: '0.0.0.0',
    port: '8080',
    theme: 'reco',
    themeConfig: {
        // nav,
        sidebar,
        sidebarDepth: 2,
        // docsRepo: 'MaLunan/press',
        // 假如文档不是放在仓库的根目录下：
        // docsDir: 'docs',
        // 假如文档放在一个特定的分支下：
        // docsBranch: 'dev-mln',
        author: '海原',
        type: 'blog',
        mode: 'light',
        modePicker: false,
        authorAvatar: '/avatar.jpg',
        // 博客配置
        blogConfig: {
            category: {
                location: 2,     // 在导航栏菜单中所占的位置，默认2
                text: '分类' // 默认文案 “分类”
            },
            tag: {
                location: 3,     // 在导航栏菜单中所占的位置，默认3
                text: 'Tag'      // 默认文案 “标签”
            },
            socialLinks: [     // 信息栏展示社交信息
                { icon: 'reco-github', link: 'https://github.com/haiyuan233' },
                { icon: 'reco-mayun', link: 'https://gitee.com/haiyuan233' },
                { icon: 'reco-bilibili', link: 'https://space.bilibili.com/3054742' },
                { icon: 'reco-twitter', link: 'https://twitter.com/zhy64445032' }
            ]
        }
    }
}
