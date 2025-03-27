import Vue from 'vue';
//配置路由
import VueRouter from 'vue-router'
Vue.use(VueRouter);
    // 解决多次点击左侧菜单报错问题
    const VueRouterPush = VueRouter.prototype.push
    VueRouter.prototype.push = function push (to) {
    return VueRouterPush.call(this, to).catch(err => err)
    }
//1.创建组件
import Index from '@/views/index'
import Home from '@/views/home'
import Login from '@/views/login'
import NotFound from '@/views/404'
import UpdatePassword from '@/views/update-password'
import pay from '@/views/pay'
import register from '@/views/register'
import center from '@/views/center'
import beifen from '@/views/modules/databaseBackup/beifen'
import huanyuan from '@/views/modules/databaseBackup/huanyuan'

     import users from '@/views/modules/users/list'
    import dictionary from '@/views/modules/dictionary/list'
    import gonggao from '@/views/modules/gonggao/list'
    import shuji from '@/views/modules/shuji/list'
    import shujiCollection from '@/views/modules/shujiCollection/list'
    import shujiLiuyan from '@/views/modules/shujiLiuyan/list'
    import yonghu from '@/views/modules/yonghu/list'
    import youlanjilu from '@/views/modules/youlanjilu/list'
    import zhangjie from '@/views/modules/zhangjie/list'
    import zhangjieCollection from '@/views/modules/zhangjieCollection/list'
    import zhangjieLiuyan from '@/views/modules/zhangjieLiuyan/list'
    import config from '@/views/modules/config/list'
    import dictionaryGonggao from '@/views/modules/dictionaryGonggao/list'
    import dictionarySex from '@/views/modules/dictionarySex/list'
    import dictionaryShangxia from '@/views/modules/dictionaryShangxia/list'
    import dictionaryShuji from '@/views/modules/dictionaryShuji/list'
    import dictionaryShujiCollection from '@/views/modules/dictionaryShujiCollection/list'
    import dictionaryShujiErji from '@/views/modules/dictionaryShujiErji/list'
        import dictionaryShujiErjiAddOrUpdate from '@/views/modules/dictionaryShujiErji/add-or-update'//二级
    import dictionaryZhangjieCollection from '@/views/modules/dictionaryZhangjieCollection/list'





//2.配置路由   注意：名字
const routes = [{
    path: '/index',
    name: '首页',
    component: Index,
    children: [{
      // 这里不设置值，是把main作为默认页面
      path: '/',
      name: '首页',
      component: Home,
      meta: {icon:'', title:'center'}
    }, {
      path: '/updatePassword',
      name: '修改密码',
      component: UpdatePassword,
      meta: {icon:'', title:'updatePassword'}
    }, {
      path: '/pay',
      name: '支付',
      component: pay,
      meta: {icon:'', title:'pay'}
    }, {
      path: '/center',
      name: '个人信息',
      component: center,
      meta: {icon:'', title:'center'}
    }, {
        path: '/huanyuan',
        name: '数据还原',
        component: huanyuan
    }, {
        path: '/beifen',
        name: '数据备份',
        component: beifen
    }, {
        path: '/users',
        name: '管理信息',
        component: users
    }
    ,{
        path: '/dictionaryGonggao',
        name: '公告类型',
        component: dictionaryGonggao
    }
    ,{
        path: '/dictionarySex',
        name: '性别类型',
        component: dictionarySex
    }
    ,{
        path: '/dictionaryShangxia',
        name: '上下架',
        component: dictionaryShangxia
    }
    ,{
        path: '/dictionaryShuji',
        name: '书籍类型',
        component: dictionaryShuji
    }
    ,{
        path: '/dictionaryShujiCollection',
        name: '收藏表类型',
        component: dictionaryShujiCollection
    }
    ,{
        path: '/dictionaryShujiErji',
        name: '二级类型',
        component: dictionaryShujiErji
    }
    ,{
        path: '/dictionaryShujiErjiAddOrUpdate',
        name: '二级类型的新增修改页面',
        component: dictionaryShujiErjiAddOrUpdate
    }
    ,{
        path: '/dictionaryZhangjieCollection',
        name: '收藏表类型',
        component: dictionaryZhangjieCollection
    }
    ,{
        path: '/config',
        name: '轮播图',
        component: config
    }


    ,{
        path: '/dictionary',
        name: '字典',
        component: dictionary
      }
    ,{
        path: '/gonggao',
        name: '公告',
        component: gonggao
      }
    ,{
        path: '/shuji',
        name: '书籍',
        component: shuji
      }
    ,{
        path: '/shujiCollection',
        name: '我的书架',
        component: shujiCollection
      }
    ,{
        path: '/shujiLiuyan',
        name: '书籍评论',
        component: shujiLiuyan
      }
    ,{
        path: '/yonghu',
        name: '用户',
        component: yonghu
      }
    ,{
        path: '/youlanjilu',
        name: '游览记录',
        component: youlanjilu
      }
    ,{
        path: '/zhangjie',
        name: '章节',
        component: zhangjie
      }
    ,{
        path: '/zhangjieCollection',
        name: '章节收藏',
        component: zhangjieCollection
      }
    ,{
        path: '/zhangjieLiuyan',
        name: '章节评论',
        component: zhangjieLiuyan
      }


    ]
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: {icon:'', title:'login'}
  },
  {
    path: '/register',
    name: 'register',
    component: register,
    meta: {icon:'', title:'register'}
  },
  {
    path: '/',
    name: '首页',
    redirect: '/index'
  }, /*默认跳转路由*/
  {
    path: '*',
    component: NotFound
  }
]
//3.实例化VueRouter  注意：名字
const router = new VueRouter({
  mode: 'hash',
  /*hash模式改为history*/
  routes // （缩写）相当于 routes: routes
})

export default router;
