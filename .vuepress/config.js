module.exports = {
  "title": "LIU CHAO",
  "description": "",
  "dest": "dist",
  "head": [
    [
      "link",
      {
        "rel": "icon",
        "href": "/favicon.ico"
      }
    ],
    [
      "meta",
      {
        "name": "viewport",
        "content": "width=device-width,initial-scale=1,user-scalable=no"
      }
    ]
  ],
  "theme": "reco",
  "themeConfig": {
    // 默认值是 true 。设置为 false 来禁用所有页面的 下一篇 链接
    nextLinks: true,
    // 默认值是 true 。设置为 false 来禁用所有页面的 上一篇 链接
    prevLinks: true,
    "nav": [
      {
        "text": "主页",
        "link": "/",
        "icon": "reco-home"
      },
      {
        "text": "时间线",
        "link": "/timeline/",
        "icon": "reco-date"
      },
      {
        "text": "文档",
        "icon": "reco-message",
        "link": "/docs/theme-reco/"
      },
      {
        "text": "关于我",
        "icon": "reco-message",
        "items": [
          {
            "text": "GitHub",
            "link": "https://github.com/recoluan",
            "icon": "reco-github"
          }
        ]
      }
    ],
    "sidebar": {
      '/docs/typescript/': [
        ""
      ],
      "/docs/theme-reco/": [
        ""
      ],
      
    },
    "type": "blog",
    "blogConfig": {
      "category": {
        "location": 2,
        "text": "分类"
      },
      "tag": {
        "location": 3,
        "text": "标签"
      }
    },
    "friendLink": [
      {
        "title": "午后南杂",
        "desc": "Enjoy when you can, and endure when you must.",
        "email": "1156743527@qq.com",
        "link": "https://www.recoluan.com"
      },
      {
        "title": "vuepress-theme-reco",
        "desc": "A simple and beautiful vuepress Blog & Doc theme.",
        "avatar": "https://vuepress-theme-reco.recoluan.com/icon_vuepress_reco.png",
        "link": "https://vuepress-theme-reco.recoluan.com"
      }
    ],
    "logo": "/logo.png",
    "search": true,
    "searchMaxSuggestions": 6,
    "lastUpdated": "Last Updated",
    "author": "Liu Chao",
    "authorAvatar": "/avatar.png",
    "record": "43001",
    "startYear": "2019"
  },
  "markdown": {
    "lineNumbers": true
  },
  plugins: [
    // click fireworks
    ['cursor-effects'],
    // music player
    ['meting', {
      //metingApi: "https://meting.sigure.xyz/api/music",
      meting: {
        server: 'netease',
        type: 'playlist',
        mid: '5374198441',
        auto: "https://music.163.com/#/my/m/music/playlist?id=5374198441"
      },          
      // 不配置该项的话不会出现全局播放器
      aplayer: {
        // 吸底模式
        fixed: true,
        // 是否开启mini模式
        // mini: true,
        // 自动播放
        autoplay: true,
        // 歌曲栏折叠
        listFolded: false,
        // 颜色
        theme: '#3eaf7c',
        loop: 'all',
        listFolded: true,
        // 播放顺序为随机
        order: 'random',
        // 初始音量
        volume: 0.7,
        // 关闭歌词显示
        lrcType: 0
      },
      mobile :{
        // 手机端去掉cover图
        cover: false,
      }
    }],
    // black-cat
    ['@vuepress-reco/vuepress-plugin-kan-ban-niang', {
      theme: ['haru1'],
      clean: true
    }],
    // copy tools
    ['vuepress-plugin-nuggets-style-copy', {
      copyText: "复制代码",
      tip: {
          content: "复制成功!"
      }
    }]
  ]
}