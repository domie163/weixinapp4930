import Vue from 'vue';
//配置路由
import VueRouter from 'vue-router'
Vue.use(VueRouter);
//1.创建组件
import Index from '@/views/index'
import Home from '@/views/home'
import Login from '@/views/login'
import NotFound from '@/views/404'
import UpdatePassword from '@/views/update-password'
import pay from '@/views/pay'
import register from '@/views/register'
import center from '@/views/center'
    import news from '@/views/modules/news/list'
    import xuangoufuzhuang from '@/views/modules/xuangoufuzhuang/list'
    import xuesheng from '@/views/modules/xuesheng/list'
    import discussjunxunfuzhuang from '@/views/modules/discussjunxunfuzhuang/list'
    import storeup from '@/views/modules/storeup/list'
    import yikatongbanli from '@/views/modules/yikatongbanli/list'
    import baodaojiezhan from '@/views/modules/baodaojiezhan/list'
    import jiaofeixinxi from '@/views/modules/jiaofeixinxi/list'
    import zixunhuifu from '@/views/modules/zixunhuifu/list'
    import susheshenqing from '@/views/modules/susheshenqing/list'
    import baodaoxinxi from '@/views/modules/baodaoxinxi/list'
    import jiaotongzhiyin from '@/views/modules/jiaotongzhiyin/list'
    import sushexinxi from '@/views/modules/sushexinxi/list'
    import junxunfuzhuang from '@/views/modules/junxunfuzhuang/list'
    import zaixianzixun from '@/views/modules/zaixianzixun/list'
    import config from '@/views/modules/config/list'
    import zhiyuanzhe from '@/views/modules/zhiyuanzhe/list'


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
    }
      ,{
	path: '/news',
        name: '报道指南',
        component: news
      }
      ,{
	path: '/xuangoufuzhuang',
        name: '选购服装',
        component: xuangoufuzhuang
      }
      ,{
	path: '/xuesheng',
        name: '学生',
        component: xuesheng
      }
      ,{
	path: '/discussjunxunfuzhuang',
        name: '军训服装评论',
        component: discussjunxunfuzhuang
      }
      ,{
	path: '/storeup',
        name: '我的收藏管理',
        component: storeup
      }
      ,{
	path: '/yikatongbanli',
        name: '一卡通办理',
        component: yikatongbanli
      }
      ,{
	path: '/baodaojiezhan',
        name: '报道接站',
        component: baodaojiezhan
      }
      ,{
	path: '/jiaofeixinxi',
        name: '缴费信息',
        component: jiaofeixinxi
      }
      ,{
	path: '/zixunhuifu',
        name: '咨询回复',
        component: zixunhuifu
      }
      ,{
	path: '/susheshenqing',
        name: '宿舍申请',
        component: susheshenqing
      }
      ,{
	path: '/baodaoxinxi',
        name: '报道信息',
        component: baodaoxinxi
      }
      ,{
	path: '/jiaotongzhiyin',
        name: '交通指引',
        component: jiaotongzhiyin
      }
      ,{
	path: '/sushexinxi',
        name: '宿舍信息',
        component: sushexinxi
      }
      ,{
	path: '/junxunfuzhuang',
        name: '军训服装',
        component: junxunfuzhuang
      }
      ,{
	path: '/zaixianzixun',
        name: '在线咨询',
        component: zaixianzixun
      }
      ,{
	path: '/config',
        name: '轮播图管理',
        component: config
      }
      ,{
	path: '/zhiyuanzhe',
        name: '志愿者',
        component: zhiyuanzhe
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
