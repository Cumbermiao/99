// ==UserScript==
// @name              99Life
// @namespace         https://github.com/syhyz1990/baiduyun
// @version           0.0.1
// @author            YouXiaoHou
// @icon              https://www.baiduyun.wiki/48x48.png
// @icon64            https://www.baiduyun.wiki/64x64.png
// @description       【网盘直链下载助手】是一款免费开源获取网盘文件真实下载地址的油猴插件，基于开放API，支持Windows，Mac，Linux等多平台，可使用IDM，Xdown等多线程加速工具加速下载，支持RPC协议远程下载。5.0版本支持更换皮肤。
// @license           AGPL
// @match             *://web991.jiujiupingou.com/*
// @require           https://cdn.jsdelivr.net/npm/jquery@3.2.1/dist/jquery.min.js
// @connect           jiujiupingou.com
// @connect           localhost
// @run-at            document-start
// @grant             unsafeWindow
// @grant             GM_xmlhttpRequest
// @grant             GM_setClipboard
// @grant             GM_setValue
// @grant             GM_getValue
// @grant             GM_openInTab
// @grant             GM_info
// @grant             GM_registerMenuCommand
// @grant             GM_cookie
// ==/UserScript==

(function () {
  'use strict';
  const css = `
    <style>
    .mk-panel{
        position: fixed;
        left: 0;
        top: 0;
        padding: 20px;
        background-color: #fff;
    }
    .mk-logs {
      height: 400px;
      width: 300px;
      overflow: auto;
    }
    .mk-logs-item {
      font-size: 14px;
      margin: 6px;
    }
    </style>
    `

  const log = (desc) => {
    console.log('系统日志：', desc)
    const template = `<li class='mk-logs-item'>系统日志： ${desc}</li>`
    $('#mk-logs').append(template)
  }

  function go(hash) {
    // window.history.pushState({}, '', hash)
    // window.location.reload()

    setTimeout(() => {
      location.href = `//web991.jiujiupingou.com/${hash}`
    }, 200)
  }

  const shopPage = {
    getStartBtn($item) {
      return $item.find('.active')
    },

    startIfOrderExists() {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          const $item = $('.shop-item:first')
          if ($item.length) {
            resolve()
            const $btn = this.getStartBtn($item)
            $btn.click()
          }
          reject('找不到订单')
        }, 10000)
      })
    },

    start() {
      log('准备开始任务')
      if (/^#\/newTeam\/myShop/.test(location.hash)) {
        log('路由正确，10s后查找订单')
        console.log(this)
        shopPage.startIfOrderExists()
          .then(() => {
            log('订单已找到，点击做任务')
          })
          .catch(err => {
            alert(err)
          })
      } else {
        log('路由不对，重定向')
        go('#/newTeam/myShop?type=0&title=%E5%BE%85%E5%AE%8C%E6%88%90&areaId=2')
      }
    }


  }

  const gamePage = {
    start() {
      log('点击抽奖')
    }
  }


  const whiteList = [
    /^#\/newTeam\/myShop/,
    /^#\/game/
  ]


  function initPanel() {
    const template = `
      <div class='mk-panel'>
          <b id='mk-start'>开始</b>
          <ul id='mk-logs'></ul>
      </div>
    `
    $('body').append(template)
    $('head').append(css)
  }

  function init() {
    initPanel()
    $('#mk-start').on('click', shopPage.start)

    unsafeWindow.addEventListener('hashchange', e => {
      console.log('hashchange', e)
      if (whiteList[0].test(location.hash)) {
        shopPage.start()
      }
      if (location.hash.match(/^#\/newTeam\/video/)) {
        setTimeout(() => {
          log('1s 后执行 start')
          gamePage.start()
        }, 1000)
        // go('#/game')
      }
    })

    unsafeWindow.addEventListener('popstate', e => {
      console.log('popstate', e)
    })

    unsafeWindow.onerror = function (message, source, line, column, error) {
      console.log('onerror', message, source, line, column, error)
    }
    unsafeWindow.addEventListener("unhandledrejection", e => {
      console.log('unhandledrejection', e)
    })


  }

  window.onload = function () {
    init()
  }
})();