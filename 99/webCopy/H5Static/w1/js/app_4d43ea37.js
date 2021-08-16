(function (e) {
  function t(t) {
    for (
      var a, r, s = t[0], c = t[1], d = t[2], u = 0, l = [];
      u < s.length;
      u++
    )
      (r = s[u]),
        Object.prototype.hasOwnProperty.call(i, r) && i[r] && l.push(i[r][0]),
        (i[r] = 0);
    for (a in c) Object.prototype.hasOwnProperty.call(c, a) && (e[a] = c[a]);
    m && m(t);
    while (l.length) l.shift()();
    return o.push.apply(o, d || []), n();
  }
  function n() {
    for (var e, t = 0; t < o.length; t++) {
      for (var n = o[t], a = !0, r = 1; r < n.length; r++) {
        var s = n[r];
        0 !== i[s] && (a = !1);
      }
      a && (o.splice(t--, 1), (e = c((c.s = n[0]))));
    }
    return e;
  }
  var a = {},
    r = { app: 0 },
    i = { app: 0 },
    o = [];
  function s(e) {
    return (
      c.p +
      "js/" +
      ({
        GoPay: "GoPay",
        ManyPGOrderList: "ManyPGOrderList",
        "QRcode~cashing~iframeZhifu~orderQrcode":
          "QRcode~cashing~iframeZhifu~orderQrcode",
        QRcode: "QRcode",
        cashing: "cashing",
        iframeZhifu: "iframeZhifu",
        orderQrcode: "orderQrcode",
        Xuanzedizhi: "Xuanzedizhi",
        aboutjiujiu: "aboutjiujiu",
        accountAdmin: "accountAdmin",
        "addandeditaddress~address~gaddress~newAddress~returnAddress":
          "addandeditaddress~address~gaddress~newAddress~returnAddress",
        addandeditaddress: "addandeditaddress",
        address: "address",
        gaddress: "gaddress",
        newAddress: "newAddress",
        returnAddress: "returnAddress",
        addressmanagement: "addressmanagement",
        advertisement: "advertisement",
        againPsd: "againPsd",
        balance: "balance",
        bnewWithdrawal: "bnewWithdrawal",
        broadcast: "broadcast",
        buyCard: "buyCard",
        card: "card",
        cardDetail: "cardDetail",
        commodittypepreviewDeatils: "commodittypepreviewDeatils",
        commodittypepreviewDeatilsNew: "commodittypepreviewDeatilsNew",
        commoditypreview: "commoditypreview",
        commoditypreviewNew: "commoditypreviewNew",
        complaint: "complaint",
        complaintList: "complaintList",
        confirm: "confirm",
        confirmOrder: "confirmOrder",
        consumptionJIn: "consumptionJIn",
        details: "details",
        editBuyPassword: "editBuyPassword",
        editpassword: "editpassword",
        elife: "elife",
        exchangerecord: "exchangerecord",
        exchangerecordOrder: "exchangerecordOrder",
        exchangerule: "exchangerule",
        focas: "focas",
        focasNine: "focasNine",
        fugouDetails: "fugouDetails",
        fugouList: "fugouList",
        fugoupay: "fugoupay",
        game: "game",
        goodsDetail: "goodsDetail",
        goplayPintuan: "goplayPintuan",
        groupworkdetails: "groupworkdetails",
        login: "login",
        manyPGOrderListDetails: "manyPGOrderListDetails",
        myShop: "myShop",
        myfightforfriends: "myfightforfriends",
        newAccount: "newAccount",
        newSelectNow: "newSelectNow",
        newTeam: "newTeam",
        newTeamGoPay: "newTeamGoPay",
        newTeamOrderList: "newTeamOrderList",
        newWithdrawal: "newWithdrawal",
        newXuanzedizhi: "newXuanzedizhi",
        newpeopletask: "newpeopletask",
        noteVerify: "noteVerify",
        noticelist: "noticelist",
        noticelistdetails: "noticelistdetails",
        "operation~userDetails": "operation~userDetails",
        operation: "operation",
        userDetails: "userDetails",
        orderDetail: "orderDetail",
        orderList: "orderList",
        orderListDetails: "orderListDetails",
        orderListFugou: "orderListFugou",
        paysuccess: "paysuccess",
        principalReturn: "principalReturn",
        productdetails: "productdetails",
        realname: "realname",
        recordReturn: "recordReturn",
        register: "register",
        registerAgreement: "registerAgreement",
        registerCode: "registerCode",
        repetitionShop: "repetitionShop",
        repurchase: "repurchase",
        returnSelectNow: "returnSelectNow",
        returnXuanzedizhi: "returnXuanzedizhi",
        scanCode: "scanCode",
        search: "search",
        searchdetails: "searchdetails",
        selectNow: "selectNow",
        service: "service",
        setPassword: "setPassword",
        shopIndex: "shopIndex",
        shopList: "shopList",
        shopdetails: "shopdetails",
        shopintegral: "shopintegral",
        usagedetails: "usagedetails",
        user: "user",
        video: "video",
        wanPayment: "wanPayment",
        wangjiPassword: "wangjiPassword",
        welfareSociety: "welfareSociety",
        winningBack: "winningBack",
        withdrawal: "withdrawal",
        xuanzedizhi: "xuanzedizhi",
        xuanzeshop: "xuanzeshop",
        yinsizhengce: "yinsizhengce",
        zhucexieyi: "zhucexieyi",
      }[e] || e) +
      "." +
      {
        GoPay: "6fe00ea0",
        ManyPGOrderList: "08e86cee",
        "QRcode~cashing~iframeZhifu~orderQrcode": "e03de933",
        QRcode: "eb5d4e86",
        cashing: "602fc993",
        iframeZhifu: "9cc58dbc",
        orderQrcode: "ba90e72c",
        Xuanzedizhi: "c9e99df2",
        aboutjiujiu: "f74acf82",
        accountAdmin: "1ab60576",
        "addandeditaddress~address~gaddress~newAddress~returnAddress":
          "4bd96428",
        addandeditaddress: "6843e91b",
        address: "384a7878",
        gaddress: "36a0b6ea",
        newAddress: "b1088134",
        returnAddress: "ced829b7",
        addressmanagement: "d7e0db69",
        advertisement: "7f6d5ef4",
        againPsd: "1101808b",
        balance: "9bda46eb",
        bnewWithdrawal: "0ab50efb",
        broadcast: "7d17b528",
        buyCard: "19cb0cec",
        card: "0b721586",
        cardDetail: "b861a676",
        commodittypepreviewDeatils: "a8822b81",
        commodittypepreviewDeatilsNew: "3b4160d2",
        commoditypreview: "124a83db",
        commoditypreviewNew: "59e6f797",
        complaint: "c11f10c2",
        complaintList: "bcc2eea8",
        confirm: "cd5a92d0",
        confirmOrder: "687ec837",
        consumptionJIn: "3cd16aee",
        details: "1ff17110",
        editBuyPassword: "a7e78200",
        editpassword: "b51976fa",
        elife: "a53d4602",
        exchangerecord: "a8c19938",
        exchangerecordOrder: "677c1a8e",
        exchangerule: "1ab13358",
        focas: "dff38cf6",
        focasNine: "807b1fd4",
        fugouDetails: "e6def802",
        fugouList: "69174995",
        fugoupay: "7d220167",
        game: "b1357615",
        goodsDetail: "4e022525",
        goplayPintuan: "bd2ccc83",
        groupworkdetails: "7b56cce3",
        login: "abc29d89",
        manyPGOrderListDetails: "edb96b7d",
        myShop: "cbb1ebb9",
        myfightforfriends: "1ad5aa74",
        newAccount: "62704b1c",
        newSelectNow: "95f155dd",
        newTeam: "f64f1ea1",
        newTeamGoPay: "7a0eb5fd",
        newTeamOrderList: "62e411a8",
        newWithdrawal: "008ff6ff",
        newXuanzedizhi: "9e8c65f1",
        newpeopletask: "e491efda",
        noteVerify: "823ae69a",
        noticelist: "098432b0",
        noticelistdetails: "b282ece9",
        "operation~userDetails": "1956e545",
        operation: "f5d01555",
        userDetails: "b1f2e39c",
        orderDetail: "006d5324",
        orderList: "6690f05d",
        orderListDetails: "ef9eb34c",
        orderListFugou: "5b60878b",
        paysuccess: "f577da6f",
        principalReturn: "5af8192c",
        productdetails: "1e9425fa",
        realname: "8410b1de",
        recordReturn: "c6138433",
        register: "e64977f9",
        registerAgreement: "bb8576b4",
        registerCode: "327142f3",
        repetitionShop: "d0c71411",
        repurchase: "13a7033f",
        returnSelectNow: "f574560c",
        returnXuanzedizhi: "c75a47cb",
        scanCode: "83473ab6",
        search: "1cb5e861",
        searchdetails: "a9c4cda1",
        selectNow: "90c85a39",
        service: "110a9190",
        setPassword: "4bf07d2c",
        shopIndex: "12f501e6",
        shopList: "ae8e8ebf",
        shopdetails: "de26d643",
        shopintegral: "f85b6d88",
        usagedetails: "ece86fa0",
        user: "897956e9",
        video: "7cfa816a",
        wanPayment: "b4e3d419",
        wangjiPassword: "2e6ffd99",
        welfareSociety: "8dc3afbf",
        winningBack: "22d34247",
        withdrawal: "7b27b82e",
        xuanzedizhi: "7e011fb8",
        xuanzeshop: "7325f90c",
        yinsizhengce: "3ef8e410",
        zhucexieyi: "dba5f5cd",
      }[e] +
      ".js"
    );
  }
  function c(t) {
    if (a[t]) return a[t].exports;
    var n = (a[t] = { i: t, l: !1, exports: {} });
    return e[t].call(n.exports, n, n.exports, c), (n.l = !0), n.exports;
  }
  (c.e = function (e) {
    var t = [],
      n = {
        GoPay: 1,
        ManyPGOrderList: 1,
        QRcode: 1,
        cashing: 1,
        Xuanzedizhi: 1,
        aboutjiujiu: 1,
        accountAdmin: 1,
        "addandeditaddress~address~gaddress~newAddress~returnAddress": 1,
        addandeditaddress: 1,
        address: 1,
        gaddress: 1,
        newAddress: 1,
        returnAddress: 1,
        addressmanagement: 1,
        againPsd: 1,
        balance: 1,
        bnewWithdrawal: 1,
        broadcast: 1,
        buyCard: 1,
        card: 1,
        cardDetail: 1,
        commodittypepreviewDeatils: 1,
        commodittypepreviewDeatilsNew: 1,
        commoditypreview: 1,
        commoditypreviewNew: 1,
        complaint: 1,
        complaintList: 1,
        confirm: 1,
        confirmOrder: 1,
        consumptionJIn: 1,
        details: 1,
        editBuyPassword: 1,
        editpassword: 1,
        elife: 1,
        exchangerecord: 1,
        exchangerecordOrder: 1,
        exchangerule: 1,
        focas: 1,
        focasNine: 1,
        fugouDetails: 1,
        fugouList: 1,
        fugoupay: 1,
        game: 1,
        goodsDetail: 1,
        goplayPintuan: 1,
        groupworkdetails: 1,
        login: 1,
        manyPGOrderListDetails: 1,
        myShop: 1,
        myfightforfriends: 1,
        newAccount: 1,
        newSelectNow: 1,
        newTeam: 1,
        newTeamGoPay: 1,
        newTeamOrderList: 1,
        newWithdrawal: 1,
        newXuanzedizhi: 1,
        newpeopletask: 1,
        noteVerify: 1,
        noticelist: 1,
        noticelistdetails: 1,
        operation: 1,
        userDetails: 1,
        orderDetail: 1,
        orderList: 1,
        orderListDetails: 1,
        orderListFugou: 1,
        paysuccess: 1,
        principalReturn: 1,
        productdetails: 1,
        realname: 1,
        recordReturn: 1,
        register: 1,
        registerAgreement: 1,
        registerCode: 1,
        repetitionShop: 1,
        repurchase: 1,
        returnSelectNow: 1,
        returnXuanzedizhi: 1,
        scanCode: 1,
        search: 1,
        searchdetails: 1,
        selectNow: 1,
        service: 1,
        setPassword: 1,
        shopIndex: 1,
        shopList: 1,
        shopdetails: 1,
        shopintegral: 1,
        usagedetails: 1,
        user: 1,
        video: 1,
        wanPayment: 1,
        wangjiPassword: 1,
        winningBack: 1,
        withdrawal: 1,
        xuanzedizhi: 1,
        xuanzeshop: 1,
        yinsizhengce: 1,
        zhucexieyi: 1,
      };
    r[e]
      ? t.push(r[e])
      : 0 !== r[e] &&
        n[e] &&
        t.push(
          (r[e] = new Promise(function (t, n) {
            for (
              var a =
                  "css/" +
                  ({
                    GoPay: "GoPay",
                    ManyPGOrderList: "ManyPGOrderList",
                    "QRcode~cashing~iframeZhifu~orderQrcode":
                      "QRcode~cashing~iframeZhifu~orderQrcode",
                    QRcode: "QRcode",
                    cashing: "cashing",
                    iframeZhifu: "iframeZhifu",
                    orderQrcode: "orderQrcode",
                    Xuanzedizhi: "Xuanzedizhi",
                    aboutjiujiu: "aboutjiujiu",
                    accountAdmin: "accountAdmin",
                    "addandeditaddress~address~gaddress~newAddress~returnAddress":
                      "addandeditaddress~address~gaddress~newAddress~returnAddress",
                    addandeditaddress: "addandeditaddress",
                    address: "address",
                    gaddress: "gaddress",
                    newAddress: "newAddress",
                    returnAddress: "returnAddress",
                    addressmanagement: "addressmanagement",
                    advertisement: "advertisement",
                    againPsd: "againPsd",
                    balance: "balance",
                    bnewWithdrawal: "bnewWithdrawal",
                    broadcast: "broadcast",
                    buyCard: "buyCard",
                    card: "card",
                    cardDetail: "cardDetail",
                    commodittypepreviewDeatils: "commodittypepreviewDeatils",
                    commodittypepreviewDeatilsNew:
                      "commodittypepreviewDeatilsNew",
                    commoditypreview: "commoditypreview",
                    commoditypreviewNew: "commoditypreviewNew",
                    complaint: "complaint",
                    complaintList: "complaintList",
                    confirm: "confirm",
                    confirmOrder: "confirmOrder",
                    consumptionJIn: "consumptionJIn",
                    details: "details",
                    editBuyPassword: "editBuyPassword",
                    editpassword: "editpassword",
                    elife: "elife",
                    exchangerecord: "exchangerecord",
                    exchangerecordOrder: "exchangerecordOrder",
                    exchangerule: "exchangerule",
                    focas: "focas",
                    focasNine: "focasNine",
                    fugouDetails: "fugouDetails",
                    fugouList: "fugouList",
                    fugoupay: "fugoupay",
                    game: "game",
                    goodsDetail: "goodsDetail",
                    goplayPintuan: "goplayPintuan",
                    groupworkdetails: "groupworkdetails",
                    login: "login",
                    manyPGOrderListDetails: "manyPGOrderListDetails",
                    myShop: "myShop",
                    myfightforfriends: "myfightforfriends",
                    newAccount: "newAccount",
                    newSelectNow: "newSelectNow",
                    newTeam: "newTeam",
                    newTeamGoPay: "newTeamGoPay",
                    newTeamOrderList: "newTeamOrderList",
                    newWithdrawal: "newWithdrawal",
                    newXuanzedizhi: "newXuanzedizhi",
                    newpeopletask: "newpeopletask",
                    noteVerify: "noteVerify",
                    noticelist: "noticelist",
                    noticelistdetails: "noticelistdetails",
                    "operation~userDetails": "operation~userDetails",
                    operation: "operation",
                    userDetails: "userDetails",
                    orderDetail: "orderDetail",
                    orderList: "orderList",
                    orderListDetails: "orderListDetails",
                    orderListFugou: "orderListFugou",
                    paysuccess: "paysuccess",
                    principalReturn: "principalReturn",
                    productdetails: "productdetails",
                    realname: "realname",
                    recordReturn: "recordReturn",
                    register: "register",
                    registerAgreement: "registerAgreement",
                    registerCode: "registerCode",
                    repetitionShop: "repetitionShop",
                    repurchase: "repurchase",
                    returnSelectNow: "returnSelectNow",
                    returnXuanzedizhi: "returnXuanzedizhi",
                    scanCode: "scanCode",
                    search: "search",
                    searchdetails: "searchdetails",
                    selectNow: "selectNow",
                    service: "service",
                    setPassword: "setPassword",
                    shopIndex: "shopIndex",
                    shopList: "shopList",
                    shopdetails: "shopdetails",
                    shopintegral: "shopintegral",
                    usagedetails: "usagedetails",
                    user: "user",
                    video: "video",
                    wanPayment: "wanPayment",
                    wangjiPassword: "wangjiPassword",
                    welfareSociety: "welfareSociety",
                    winningBack: "winningBack",
                    withdrawal: "withdrawal",
                    xuanzedizhi: "xuanzedizhi",
                    xuanzeshop: "xuanzeshop",
                    yinsizhengce: "yinsizhengce",
                    zhucexieyi: "zhucexieyi",
                  }[e] || e) +
                  "." +
                  {
                    GoPay: "e40df836",
                    ManyPGOrderList: "a79d1c63",
                    "QRcode~cashing~iframeZhifu~orderQrcode": "31d6cfe0",
                    QRcode: "a68faa21",
                    cashing: "1a34f835",
                    iframeZhifu: "31d6cfe0",
                    orderQrcode: "31d6cfe0",
                    Xuanzedizhi: "2960234b",
                    aboutjiujiu: "439d2e87",
                    accountAdmin: "bf292666",
                    "addandeditaddress~address~gaddress~newAddress~returnAddress":
                      "462b4a1a",
                    addandeditaddress: "389575c5",
                    address: "260b5fe4",
                    gaddress: "7724ef0a",
                    newAddress: "fda5da7f",
                    returnAddress: "3e492469",
                    addressmanagement: "08d58158",
                    advertisement: "31d6cfe0",
                    againPsd: "e28600f9",
                    balance: "7b5b308f",
                    bnewWithdrawal: "3ab241e6",
                    broadcast: "2f762c3f",
                    buyCard: "e2743190",
                    card: "12c39c48",
                    cardDetail: "b652c90a",
                    commodittypepreviewDeatils: "5221543f",
                    commodittypepreviewDeatilsNew: "5221543f",
                    commoditypreview: "3cfbe046",
                    commoditypreviewNew: "cd279614",
                    complaint: "85ba6ee7",
                    complaintList: "6f16bd8f",
                    confirm: "5430a90a",
                    confirmOrder: "897101d8",
                    consumptionJIn: "7adc5ec2",
                    details: "8081f923",
                    editBuyPassword: "850508d6",
                    editpassword: "d37b0767",
                    elife: "17c0ba50",
                    exchangerecord: "b7285c20",
                    exchangerecordOrder: "5b9c5c39",
                    exchangerule: "3f44efbb",
                    focas: "d10185e2",
                    focasNine: "dce4eba7",
                    fugouDetails: "1093e09b",
                    fugouList: "25d78a4d",
                    fugoupay: "ecea8677",
                    game: "da31b3a3",
                    goodsDetail: "7799a7fd",
                    goplayPintuan: "09e7e776",
                    groupworkdetails: "215b149f",
                    login: "c902a711",
                    manyPGOrderListDetails: "b2f70383",
                    myShop: "88425c5e",
                    myfightforfriends: "3b611ab2",
                    newAccount: "73fb97c1",
                    newSelectNow: "dfc55be3",
                    newTeam: "fe0080a0",
                    newTeamGoPay: "bb74ab82",
                    newTeamOrderList: "c3986e73",
                    newWithdrawal: "bcd0e860",
                    newXuanzedizhi: "d86cdc0c",
                    newpeopletask: "7c5eed2a",
                    noteVerify: "40a9c1ad",
                    noticelist: "66c77fa7",
                    noticelistdetails: "b6730e92",
                    "operation~userDetails": "31d6cfe0",
                    operation: "ef868c6c",
                    userDetails: "32b81153",
                    orderDetail: "c1c453de",
                    orderList: "dbf6a38b",
                    orderListDetails: "a94edbbf",
                    orderListFugou: "efef2d4d",
                    paysuccess: "1a2e66cb",
                    principalReturn: "70ef1af6",
                    productdetails: "81bf4316",
                    realname: "f8a5c185",
                    recordReturn: "656911c9",
                    register: "4ee00a54",
                    registerAgreement: "8e6898ee",
                    registerCode: "9b06180f",
                    repetitionShop: "81e2f6e3",
                    repurchase: "331d7cee",
                    returnSelectNow: "72717f28",
                    returnXuanzedizhi: "f497f240",
                    scanCode: "120ecbe7",
                    search: "f7a1fae6",
                    searchdetails: "19094fa6",
                    selectNow: "15eb7514",
                    service: "a10bb57f",
                    setPassword: "ef31a44b",
                    shopIndex: "97ec9a34",
                    shopList: "e03d9453",
                    shopdetails: "e057481e",
                    shopintegral: "d72d557d",
                    usagedetails: "5e874c5d",
                    user: "17628580",
                    video: "5b225aca",
                    wanPayment: "4dc36647",
                    wangjiPassword: "185fe6b1",
                    welfareSociety: "31d6cfe0",
                    winningBack: "f6364290",
                    withdrawal: "7cf6cd0d",
                    xuanzedizhi: "88498803",
                    xuanzeshop: "660a7a08",
                    yinsizhengce: "a25d3770",
                    zhucexieyi: "a25d3770",
                  }[e] +
                  ".css",
                i = c.p + a,
                o = document.getElementsByTagName("link"),
                s = 0;
              s < o.length;
              s++
            ) {
              var d = o[s],
                u = d.getAttribute("data-href") || d.getAttribute("href");
              if ("stylesheet" === d.rel && (u === a || u === i)) return t();
            }
            var l = document.getElementsByTagName("style");
            for (s = 0; s < l.length; s++) {
              (d = l[s]), (u = d.getAttribute("data-href"));
              if (u === a || u === i) return t();
            }
            var m = document.createElement("link");
            (m.rel = "stylesheet"),
              (m.type = "text/css"),
              (m.onload = t),
              (m.onerror = function (t) {
                var a = (t && t.target && t.target.src) || i,
                  o = new Error(
                    "Loading CSS chunk " + e + " failed.\n(" + a + ")"
                  );
                (o.code = "CSS_CHUNK_LOAD_FAILED"),
                  (o.request = a),
                  delete r[e],
                  m.parentNode.removeChild(m),
                  n(o);
              }),
              (m.href = i);
            var p = document.getElementsByTagName("head")[0];
            p.appendChild(m);
          }).then(function () {
            r[e] = 0;
          }))
        );
    var a = i[e];
    if (0 !== a)
      if (a) t.push(a[2]);
      else {
        var o = new Promise(function (t, n) {
          a = i[e] = [t, n];
        });
        t.push((a[2] = o));
        var d,
          u = document.createElement("script");
        (u.charset = "utf-8"),
          (u.timeout = 120),
          c.nc && u.setAttribute("nonce", c.nc),
          (u.src = s(e));
        var l = new Error();
        d = function (t) {
          (u.onerror = u.onload = null), clearTimeout(m);
          var n = i[e];
          if (0 !== n) {
            if (n) {
              var a = t && ("load" === t.type ? "missing" : t.type),
                r = t && t.target && t.target.src;
              (l.message =
                "Loading chunk " + e + " failed.\n(" + a + ": " + r + ")"),
                (l.name = "ChunkLoadError"),
                (l.type = a),
                (l.request = r),
                n[1](l);
            }
            i[e] = void 0;
          }
        };
        var m = setTimeout(function () {
          d({ type: "timeout", target: u });
        }, 12e4);
        (u.onerror = u.onload = d), document.head.appendChild(u);
      }
    return Promise.all(t);
  }),
    (c.m = e),
    (c.c = a),
    (c.d = function (e, t, n) {
      c.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: n });
    }),
    (c.r = function (e) {
      "undefined" !== typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (c.t = function (e, t) {
      if ((1 & t && (e = c(e)), 8 & t)) return e;
      if (4 & t && "object" === typeof e && e && e.__esModule) return e;
      var n = Object.create(null);
      if (
        (c.r(n),
        Object.defineProperty(n, "default", { enumerable: !0, value: e }),
        2 & t && "string" != typeof e)
      )
        for (var a in e)
          c.d(
            n,
            a,
            function (t) {
              return e[t];
            }.bind(null, a)
          );
      return n;
    }),
    (c.n = function (e) {
      var t =
        e && e.__esModule
          ? function () {
              return e["default"];
            }
          : function () {
              return e;
            };
      return c.d(t, "a", t), t;
    }),
    (c.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (c.p = "https://static.jiujiupingou.com/H5Static/w1/"),
    (c.oe = function (e) {
      throw (console.error(e), e);
    });
  var d = (window["webpackJsonp"] = window["webpackJsonp"] || []),
    u = d.push.bind(d);
  (d.push = t), (d = d.slice());
  for (var l = 0; l < d.length; l++) t(d[l]);
  var m = u;
  o.push([0, "chunk-vendors"]), n();
})({
  0: function (e, t, n) {
    e.exports = n("56d7");
  },
  1: function (e, t) {},
  2395: function (e, t, n) {},
  "365c": function (e, t, n) {
    "use strict";
    n("d81d"), n("4e82"), n("b64b"), n("d3b7"), n("a9e3");
    var a = n("bc3a"),
      r = n.n(a),
      i = n("a18c"),
      o = n("4328"),
      s = n.n(o),
      c = n("d399"),
      d = n("2241"),
      u = n("dbe4"),
      l = n("da71"),
      m = n("58b7"),
      p = n.n(m);
    function h(e) {
      c["a"].clear(),
        d["a"]
          .confirm({
            title: "提示",
            message: e.data.msg,
            confirmButtonText: "重新登录",
          })
          .then(function () {
            Object(u["i"])(),
              Object(u["g"])(),
              Object(u["h"])(),
              Object(u["f"])(),
              i["a"].push("/login");
          })
          .catch(function () {});
    }
    var f = r.a.create({ baseURL: "", timeout: 3e4 }),
      g = "";
    f.interceptors.request.use(
      function (e) {
        e.custom.loading &&
          c["a"].loading({
            duration: 0,
            message: "加载中...",
            forbidClick: !0,
          }),
          "99" === e.custom.url
            ? Array.isArray(l["b"])
              ? ("" == g && (g = Math.random() > 0.5 ? l["b"][0] : l["b"][1]),
                (e.baseURL = g))
              : (e.baseURL = l["b"])
            : (e.baseURL = l["a"]);
        var t = "";
        if (e.data) {
          var n = {};
          for (var a in (Object.keys(e.data)
            .sort()
            .map(function (t) {
              n[t] = e.data[t];
            }),
          n))
            t += n[a];
        }
        return (
          (e.headers = {
            "Content-Type": "application/x-www-form-urlencoded",
            appId: "androidapp",
            appSecret: "PG99PG",
            nonce: e.custom.nonce,
            timestamp: e.custom.timestamp,
            signature: p()(
              "androidappPG99PG" + e.custom.nonce + e.custom.timestamp + t
            ).toUpperCase(),
            userCode: Object(u["c"])() || "",
            userToken: Object(u["b"])() || "",
            appVersion: "2003.001",
          }),
          (e.transformRequest = [
            function (e) {
              return s.a.stringify(e, { arrayFormat: "repeat" });
            },
          ]),
          e
        );
      },
      function (e) {
        return Promise.reject(e);
      }
    ),
      f.interceptors.response.use(
        function (e) {
          if ("支付" !== e.config.custom.codePay && 0 === e.data.code)
            return (
              Object(c["a"])({
                duration: 2e3,
                forbidClick: !0,
                message: e.data.msg,
                icon: "none",
              }),
              e
            );
          if (1001 !== e.data.code)
            if (1002 !== e.data.code)
              if (1003 !== e.data.code)
                if (1004 !== e.data.code)
                  if (2001 !== e.data.code)
                    if (2003 !== e.data.code)
                      if (2004 !== Number(e.data.code)) {
                        if (3004 !== Number(e.data.code))
                          return 4001 === Number(e.data.code)
                            ? (Object(c["a"])("请完善信息"),
                              void i["a"].push({
                                path: "/user/details",
                                replace: !0,
                              }))
                            : (3001 === e.data.code &&
                                d["a"]
                                  .confirm({
                                    title: "提示",
                                    message: "观看广告",
                                    messageAlign: !0,
                                    confirmButtonText: "去观看",
                                  })
                                  .then(function () {
                                    i["a"].push("/advertisement/advertisement");
                                  }),
                              1 !== e.data.code &&
                                Object(c["a"])({
                                  duration: 2e3,
                                  forbidClick: !0,
                                  message: e.data.msg,
                                  icon: "none",
                                }),
                              e);
                        h(e);
                      } else h(e);
                    else h(e);
                  else h(e);
                else Object(c["a"])(e.data.msg);
              else h(e);
            else h(e);
          else h(e);
        },
        function (e) {
          return (
            Object(c["a"])("服务器繁忙，稍等重试"),
            401 == e.statusCode &&
              (localStorage.clear(),
              i["a"].push({ path: "/home/index", replace: !0 })),
            Promise.resolve(e)
          );
        }
      ),
      (t["a"] = f);
  },
  "413d": function (e, t, n) {
    "use strict";
    n("b0fd");
  },
  "56d7": function (e, t, n) {
    "use strict";
    n.r(t);
    n("e260"), n("e6cf"), n("cca6"), n("a79d"), n("ac1f"), n("1276");
    var a = n("2b0e"),
      r = function () {
        var e = this,
          t = e.$createElement,
          n = e._self._c || t;
        return n(
          "div",
          { attrs: { id: "app" } },
          [
            e.topKey
              ? n(
                  "div",
                  { staticClass: "app-top" },
                  [
                    e.backtKey
                      ? n("icon", {
                          attrs: { name: "arrow-left icons" },
                          on: { click: e.back },
                        })
                      : e._e(),
                    n("span", [e._v(e._s(e.title))]),
                    e.rightKey
                      ? n(
                          "div",
                          { staticClass: "right", on: { click: e.toUrl } },
                          [e._v(e._s(e.backtTitle))]
                        )
                      : e._e(),
                  ],
                  1
                )
              : e._e(),
            n("router-view"),
          ],
          1
        );
      },
      i = [],
      o = n("ad06"),
      s = {
        components: { Icon: o["a"] },
        computed: {
          backtTitle: function () {
            return this.$route.meta.rightTitle || "跳转";
          },
          title: function () {
            return this.$store.state.navTop.title;
          },
          topKey: function () {
            return this.$route.meta.heartKey || !1;
          },
          rightKey: function () {
            return this.$route.meta.rightKey || !1;
          },
          backtKey: function () {
            return !this.$route.meta.backKey;
          },
        },
        watch: {
          $route: {
            handler: function () {
              this.$route.meta.title &&
                this.$store.commit("navTop/setTitle", {
                  title: this.$route.meta.title,
                });
            },
          },
        },
        methods: {
          back: function () {
            "/cashing" === this.$route.path
              ? this.$router.go(-2)
              : "/orderList" === this.$route.path
              ? this.$router.push({ path: "/home/index", replace: !0 })
              : this.$router.go(-1);
          },
          toUrl: function () {
            this.$router.push(this.$store.state.navTop.rightUrl);
          },
        },
      },
      c = s,
      d = (n("7c55"), n("2877")),
      u = Object(d["a"])(c, r, i, !1, null, null, null),
      l = u.exports,
      m = n("9483");
    Object(m["a"])(
      "".concat(
        "https://static.jiujiupingou.com/H5Static/w1/",
        "service-worker.js"
      ),
      {
        ready: function () {
          console.log(
            "App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB"
          );
        },
        registered: function () {
          console.log("Service worker has been registered.");
        },
        cached: function () {
          console.log("Content has been cached for offline use.");
        },
        updatefound: function () {
          console.log("New content is downloading.");
        },
        updated: function () {
          console.log("New content is available; please refresh.");
        },
        offline: function () {
          console.log(
            "No internet connection found. App is running in offline mode."
          );
        },
        error: function (e) {
          console.error("Error during service worker registration:", e);
        },
      }
    );
    var p = n("a18c"),
      h = n("2f62"),
      f = {
        state: { getToken: !0, teamObj: {}, ManyPGMainImage: "" },
        mutations: {
          setTeamObj: function (e, t) {
            e.teamObj = t;
          },
          setManyPGMainImage: function (e, t) {
            e.ManyPGMainImage = t;
          },
          setToken: function (e, t) {
            e.getToken = t;
          },
        },
        actions: {
          setTeamObj: function (e, t) {
            var n = e.commit;
            n("setTeamObj", t);
          },
          setManyPGMainImage: function (e, t) {
            var n = e.commit;
            n("setManyPGMainImage", t);
          },
        },
        getters: {
          teamObj: function (e) {
            return e.teamObj;
          },
          ManyPGMainImage: function (e) {
            return e.ManyPGMainImage;
          },
        },
        namespaced: !0,
      },
      g = {
        state: { addressIs: {}, addressXuanze: !1 },
        mutations: {
          setAddressIs: function (e, t) {
            e.addressIs = t;
          },
          setAddressXuanze: function (e, t) {
            e.addressXuanze = t;
          },
        },
        actions: {
          setAddressIs: function (e, t) {
            var n = e.commit;
            n("setAddressIs", t);
          },
          setAddressXuanze: function (e, t) {
            var n = e.commit;
            n("setAddressXuanze", t);
          },
        },
        getters: {
          addressIs: function (e) {
            return e.addressIs;
          },
          addressXuanze: function (e) {
            return e.addressXuanze;
          },
        },
        namespaced: !0,
      },
      w = {
        state: { title: "", backKey: !1, rightTitle: "", rightUrl: "" },
        mutations: {
          setHeart: function (e, t) {
            ({
              title: t.title || "",
              backKey: t.backKey || !1,
              rightTitle: t.rightTitle || "",
              rightUrl: t.rightUrl || "",
            });
          },
          setTitle: function (e, t) {
            e.title = t.title || "";
          },
          setRightUrl: function (e, t) {
            e.rightUrl = t.rightUrl || "";
          },
          setBackKey: function (e, t) {
            e.backKey = t.backKey || "";
          },
        },
        actions: {},
        getters: {},
        namespaced: !0,
      },
      b = {
        state: {
          list: [],
          gameDate: 0,
          taskToken: "",
          priceAreaId: "",
          price: "",
          reKey: !1,
        },
        mutations: {
          setList: function (e, t) {
            e.list = t;
          },
          setGameDate: function (e, t) {
            e.gameDate = t;
          },
          setTaskToken: function (e, t) {
            e.taskToken = t;
          },
          setPriceAreaId: function (e, t) {
            e.priceAreaId = t;
          },
          setPrice: function (e, t) {
            e.price = t;
          },
          setReKey: function (e, t) {
            e.reKey = t;
          },
        },
        actions: {
          setList: function (e, t) {
            var n = e.commit;
            n("setList", t);
          },
          setGameDate: function (e, t) {
            var n = e.commit;
            n("setGameDate", t);
          },
          setTaskToken: function (e, t) {
            var n = e.commit;
            n("setTaskToken", t);
          },
          setPriceAreaId: function (e, t) {
            var n = e.commit;
            n("setPriceAreaId", t);
          },
          setPrice: function (e, t) {
            var n = e.commit;
            n("setPrice", t);
          },
          setReKey: function (e, t) {
            var n = e.commit;
            n("setReKey", t);
          },
        },
        getters: {
          list: function (e) {
            return e.list;
          },
          gameDate: function (e) {
            return e.gameDate;
          },
          taskToken: function (e) {
            return e.taskToken;
          },
          priceAreaId: function (e) {
            return e.priceAreaId;
          },
          price: function (e) {
            return e.price;
          },
          reKey: function (e) {
            return e.reKey;
          },
        },
        namespaced: !0,
      };
    a["a"].use(h["a"]);
    var y = new h["a"].Store({
        modules: { common: f, address: g, navTop: w, newGroup: b },
      }),
      v = n("365c"),
      P = n("fbbe"),
      k = n.n(P);
    n("157a");
    if (
      ((a["a"].prototype.$text = k.a),
      (a["a"].prototype.$http = v["a"]),
      (a["a"].config.productionTip = !1),
      -1 == window.location.host.indexOf("localhost"))
    ) {
      var x = window.location.host.split(".")[
        window.location.host.split(".").length - 2
      ];
      document.domain = "".concat(x, ".com");
    }
    new a["a"]({
      router: p["a"],
      store: y,
      render: function (e) {
        return e(l);
      },
    }).$mount("#app");
  },
  "7c55": function (e, t, n) {
    "use strict";
    n("2395");
  },
  "85be": function (e, t, n) {},
  a18c: function (e, t, n) {
    "use strict";
    n("d3b7"), n("3ca3"), n("ddb0");
    var a = n("2b0e"),
      r = n("8c4f"),
      i = function () {
        var e = this,
          t = e.$createElement,
          n = e._self._c || t;
        return n("div", { staticClass: "home" }, [
          n(
            "div",
            { staticClass: "center", style: e.centerStyle },
            [n("router-view")],
            1
          ),
          n("div", { staticClass: "foot", style: e.footStyle }, [
            n(
              "div",
              {
                staticClass: "item",
                class: { active: "/home/index" === e.routerUrl },
                on: {
                  click: function (t) {
                    return e.toNav("/home/index");
                  },
                },
              },
              [
                "/home/index" !== e.routerUrl
                  ? n("img", {
                      attrs: {
                        src: e.imgSrc("index.png"),
                        alt: "",
                        srcset: "",
                      },
                    })
                  : n("img", {
                      attrs: {
                        src: e.imgSrc("index-a.png"),
                        alt: "",
                        srcset: "",
                      },
                    }),
                n("div", [e._v("首页")]),
              ]
            ),
            n(
              "div",
              {
                staticClass: "item",
                class: { active: "/home/newTeam" === e.routerUrl },
                on: {
                  click: function (t) {
                    return e.toNav("/home/newTeam");
                  },
                },
              },
              [
                "/home/newTeam" !== e.routerUrl
                  ? n("img", {
                      attrs: { src: e.imgSrc("team.png"), alt: "", srcset: "" },
                    })
                  : n("img", {
                      attrs: {
                        src: e.imgSrc("team-a.png"),
                        alt: "",
                        srcset: "",
                      },
                    }),
                n("div", [e._v("30人")]),
              ]
            ),
            n(
              "div",
              {
                staticClass: "item item-center",
                on: {
                  click: function (t) {
                    return e.toTask();
                  },
                },
              },
              [n("div", [n("div", { style: e.itemCenterStyle })])]
            ),
            n(
              "div",
              {
                staticClass: "item",
                class: { active: "/home/elife" === e.routerUrl },
                on: {
                  click: function (t) {
                    return e.toNav("/home/elife");
                  },
                },
              },
              [
                "/home/elife" !== e.routerUrl
                  ? n("img", {
                      attrs: {
                        src: e.imgSrc("welfareSociety.png"),
                        alt: "",
                        srcset: "",
                      },
                    })
                  : n("img", {
                      attrs: {
                        src: e.imgSrc("welfareSociety-a.png"),
                        alt: "",
                        srcset: "",
                      },
                    }),
                n("div", [e._v("e生活")]),
              ]
            ),
            n(
              "div",
              {
                staticClass: "item",
                class: { active: "/home/user" === e.routerUrl },
                on: {
                  click: function (t) {
                    return e.toNav("/home/user");
                  },
                },
              },
              [
                "/home/user" !== e.routerUrl
                  ? n("img", {
                      attrs: { src: e.imgSrc("user.png"), alt: "", srcset: "" },
                    })
                  : n("img", {
                      attrs: {
                        src: e.imgSrc("user-a.png"),
                        alt: "",
                        srcset: "",
                      },
                    }),
                n("div", [e._v("我的")]),
              ]
            ),
          ]),
        ]);
      },
      o = [],
      s = n("1da1"),
      c = (n("96cf"), n("99af"), n("da71")),
      d = n("c97a"),
      u = n("dbe4"),
      l = {
        name: "Home",
        data: function () {
          return {
            title: "",
            path: "",
            itemCenterStyle: {
              backgroundImage: "url(" + c["d"] + "tab_ic_rwxt_sel.png)",
            },
          };
        },
        computed: {
          showKey: function () {
            return "18888888888" === Object(u["a"])();
          },
          imgSrc: function () {
            return function (e) {
              return c["d"] + e;
            };
          },
          centerStyle: function () {
            var e = 100,
              t = navigator.userAgent,
              n = new MobileDetect(t),
              a = n.os();
            return (
              "iOS" == a && (e = 97),
              this.$route.meta.heartKey
                ? { height: "calc(".concat(e, "vh - 94px)") }
                : { height: "calc(".concat(e, "vh - 50px)") }
            );
          },
          footStyle: function () {
            var e = 0;
            return { bottom: e + "px" };
          },
          routerUrl: function () {
            return this.path || this.$router.currentRoute.path;
          },
        },
        methods: {
          toTask: function () {
            var e = this;
            return Object(s["a"])(
              regeneratorRuntime.mark(function t() {
                var n;
                return regeneratorRuntime.wrap(function (t) {
                  while (1)
                    switch ((t.prev = t.next)) {
                      case 0:
                        return (
                          (t.next = 2),
                          e.$http.post(
                            "/api/v1/UserAuth/GetAuthCert",
                            {},
                            {
                              custom: {
                                nonce: Object(d["a"])(),
                                timestamp: Object(d["b"])(),
                              },
                            }
                          )
                        );
                      case 2:
                        (n = t.sent),
                          n &&
                            1 === n.data.code &&
                            ((e.TokenCert = n.data.data.cert),
                            (e.userId = n.data.data.UserId),
                            (window.location.href = ""
                              .concat(c["e"], "?UserId=")
                              .concat(e.userId, "&TokenCert=")
                              .concat(encodeURIComponent(e.TokenCert))),
                            Object(u["l"])(JSON.stringify(n.data.data.UserId)));
                      case 4:
                      case "end":
                        return t.stop();
                    }
                }, t);
              })
            )();
          },
          toNav: function (e) {
            (this.path = e), this.$router.push(e);
          },
          save: function () {
            (this.title = "广告"),
              nuandouAndroid.onItemClick(
                JSON.stringify({ advId: 2, mchId: 2, name: "飞鸟", type: 0 })
              );
          },
          pay: function () {
            (this.title = "支付宝"),
              nuandouAndroid.paymentAlipay(
                "https://payment.5upay.com/receipt/index/5f5300ad4e5e4e639347a28635476ef5"
              );
          },
        },
      },
      m = l,
      p = (n("c819"), n("2877")),
      h = Object(p["a"])(m, i, o, !1, null, "770995d6", null),
      f = h.exports,
      g = function () {
        var e = this,
          t = e.$createElement,
          n = e._self._c || t;
        return n(
          "div",
          { staticClass: "indexBox" },
          [
            n("div", { staticClass: "head_bg" }, [
              n("img", {
                attrs: { src: e.imgSrc("backgroundImg.png"), mode: "widthFix" },
              }),
            ]),
            n(
              "div",
              { staticClass: "main-box" },
              [
                n("div", { staticClass: "searchBox" }, [
                  n("div", { staticClass: "searchInput item" }, [
                    n("div", { staticClass: "input-box" }, [
                      n("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: e.searchCommodity,
                            expression: "searchCommodity",
                          },
                        ],
                        staticStyle: {
                          "font-size": ".875rem",
                          color: "#9E9E9E",
                        },
                        attrs: {
                          type: "span",
                          "adjust-position": !0,
                          placeholder: e.defaultKeyword,
                          "placeholder-class": "placeholder-class",
                          "confirm-type": "search",
                        },
                        domProps: { value: e.searchCommodity },
                        on: {
                          input: [
                            function (t) {
                              t.target.composing ||
                                (e.searchCommodity = t.target.value);
                            },
                            e.inputChange,
                          ],
                          confirm: function (t) {
                            return e.doSearch();
                          },
                        },
                      }),
                      n(
                        "div",
                        {
                          staticClass: "search-btn",
                          on: {
                            click: function (t) {
                              return e.doSearch(!1);
                            },
                          },
                        },
                        [e._v("搜索")]
                      ),
                    ]),
                  ]),
                  n(
                    "div",
                    {
                      attrs: { "hover-class": "none" },
                      on: {
                        click: function (t) {
                          return e.toUrl("/QRcode");
                        },
                      },
                    },
                    [
                      n("div", { staticClass: "codeBox item" }, [
                        n("img", {
                          attrs: {
                            src: e.imgSrc("code.png"),
                            mode: "widthFix",
                          },
                        }),
                      ]),
                    ]
                  ),
                ]),
                n("carousel", {
                  attrs: { "img-list": e.imgList, "url-key": "url" },
                  on: { selected: e.selectedBanner },
                }),
              ],
              1
            ),
            n("div", { staticClass: "notice-content" }, [
              n("div", { staticClass: "notice-min" }, [
                n("img", {
                  attrs: { src: e.imgSrc("notice.png"), mode: "widthFix" },
                }),
                n("div", { staticClass: "notice-span" }, [
                  n("span", [
                    e._v(
                      "九九生活，一起" +
                        e._s(e.$text.groupText.singleGroupBuying) +
                        "一起赚"
                    ),
                  ]),
                ]),
              ]),
            ]),
            n("div", { staticClass: "specialZoneBox" }, [
              n("div", { staticClass: "specialZone" }, [
                n(
                  "div",
                  { staticClass: "bookshelf-content" },
                  e._l(e.specialZoneList, function (t, a) {
                    return n("div", { key: a }, [
                      n(
                        "div",
                        {
                          staticClass: "item",
                          on: {
                            click: function (n) {
                              return e.specialZone(a, t);
                            },
                          },
                        },
                        [
                          t.icon
                            ? n("img", {
                                attrs: { src: t.icon, mode: "widthFix" },
                              })
                            : e._e(),
                          n("div", {}, [
                            n(
                              "span",
                              {
                                class:
                                  e.specialZoneAv === a ? "specialZoneAv" : "",
                              },
                              [e._v(e._s(t.price) + "专区")]
                            ),
                          ]),
                        ]
                      ),
                    ]);
                  }),
                  0
                ),
              ]),
            ]),
            n("div", { staticClass: "commodity" }, [
              n("div", { staticClass: "commodityHead" }, [
                n("img", {
                  attrs: { src: e.imgSrc("rectangle.png"), mode: "widthFix" },
                }),
                n("span", [e._v("五人团")]),
              ]),
            ]),
            e._l(e.commodityList, function (t, a) {
              return n("div", { key: a, staticClass: "commodityBox" }, [
                n(
                  "div",
                  {
                    on: {
                      click: function (n) {
                        return e.toUrl("/productdetails?pid=" + t.ProductId);
                      },
                    },
                  },
                  [
                    n("div", { staticClass: "commodityDetails" }, [
                      n("div", { staticClass: "commFl" }, [
                        n("img", { attrs: { src: t.MainImage, mode: "" } }),
                      ]),
                      n("div", { staticClass: "commFr" }, [
                        n("div", { staticClass: "title" }, [
                          e._v(" " + e._s(t.Title) + " "),
                        ]),
                        n("div", { staticClass: "deduction" }, [
                          t.EnergyTicketNumber > 0
                            ? n("span", [
                                e._v("￥ " + e._s(t.EnergyTicketPrice)),
                              ])
                            : e._e(),
                          t.EnergyTicketNumber > 0
                            ? n("span", [
                                e._v(
                                  "使用" +
                                    e._s(t.EnergyTicketNumber) +
                                    "张能量券抵扣"
                                ),
                              ])
                            : e._e(),
                        ]),
                        n("div", { staticClass: "price" }, [
                          n("span", [e._v("￥ " + e._s(t.Price))]),
                          n(
                            "span",
                            {
                              staticStyle: {
                                "span-decoration": "line-through",
                              },
                            },
                            [e._v("￥" + e._s(t.OldPrice))]
                          ),
                        ]),
                        n("div", { staticClass: "sold" }, [
                          n("div", {}, [
                            e._v(" 已团" + e._s(t.SaleNumber) + "件 "),
                          ]),
                          n(
                            "div",
                            {},
                            e._l(e.getRandomInt(1, 5), function (e, t) {
                              return n("img", {
                                key: t,
                                staticStyle: { width: "1.25rem" },
                                attrs: {
                                  src:
                                    "http://web991-oss.jiujiupingou.com/img/001.png",
                                  mode: "widthFix",
                                },
                              });
                            }),
                            0
                          ),
                        ]),
                      ]),
                    ]),
                  ]
                ),
              ]);
            }),
            0 === e.commodityList.length
              ? n("div", { staticClass: "commodityBox" }, [
                  n("span", [e._v("暂无商品")]),
                ])
              : e._e(),
            0 === e.commodityList.length
              ? n("div", {
                  directives: [
                    {
                      name: "show",
                      rawName: "v-show",
                      value: e.isLoadMore,
                      expression: "isLoadMore",
                    },
                  ],
                })
              : e._e(),
            e.bulletFrame
              ? n(
                  "div",
                  {
                    staticClass: "newPeopleBox",
                    on: {
                      click: function (t) {
                        e.bulletFrame = !1;
                      },
                    },
                  },
                  [
                    n("img", {
                      attrs: { src: e.imgSrc("cancel.png"), mode: "widthFix" },
                      on: { click: e.clickImgCancel },
                    }),
                    n("img", {
                      attrs: {
                        src: e.imgSrc("newpeople.png"),
                        mode: "widthFix",
                      },
                    }),
                    n("img", {
                      attrs: { src: e.imgSrc("getinto.png"), mode: "widthFix" },
                      on: { click: e.getIntoPeople },
                    }),
                  ]
                )
              : e._e(),
          ],
          2
        );
      },
      w = [],
      b = n("d399"),
      y = function () {
        var e = this,
          t = e.$createElement,
          n = e._self._c || t;
        return n(
          "swipe",
          {
            staticClass: "my-swipe img-container",
            attrs: {
              "lazy-render": !0,
              "show-indicators": !1,
              width: e.widthPhone,
              autoplay: 3e3,
              "indicator-color": "white",
            },
            on: { change: e.swiperChange },
          },
          e._l(e.imgList, function (t, a) {
            return n(
              "swipe-item",
              {
                key: a,
                class: e.currentIndex == a ? "swiper-item" : "swiper-item-side",
              },
              [
                n("div", { staticClass: "img" }, [
                  n("img", {
                    class: e.currentIndex == a ? "item-img" : "item-img-side",
                    style: e.dontFirstAnimation ? "animation: none;" : "",
                    attrs: { src: t, mode: "aspectFill" },
                    on: {
                      click: function (n) {
                        return e.clickImg(t);
                      },
                    },
                  }),
                ]),
              ]
            );
          }),
          1
        );
      },
      v = [],
      P = n("5596"),
      k = n("2bb1"),
      x = {
        components: { Swipe: P["a"], SwipeItem: k["a"] },
        name: "vearCarousel",
        props: {
          imgList: {
            type: Array,
            default: function () {
              return [];
            },
          },
          urlKey: {
            type: String,
            default: function () {
              return "";
            },
          },
        },
        data: function () {
          return {
            currentIndex: 0,
            dontFirstAnimation: !0,
            interval: 3e3,
            duration: 200,
          };
        },
        computed: {
          widthPhone: function () {
            return (315 * window.innerWidth) / 375;
          },
        },
        methods: {
          swiperChange: function (e) {
            (this.dontFirstAnimation = !1), (this.currentIndex = e);
          },
          clickImg: function (e) {
            this.$emit("selected", e, this.currentIndex);
          },
        },
      },
      L = x,
      S = (n("fe45"), Object(p["a"])(L, y, v, !1, null, "a3ef2d72", null)),
      A = S.exports,
      K = {
        components: { carousel: A },
        data: function () {
          return {
            imgList: [],
            bulletFrame: !1,
            specialZoneList: [],
            specialZoneAv: 0,
            pageIndex: 1,
            pageSize: 10,
            commodityList: [],
            loadStatus: "loading",
            isLoadMore: !1,
            priceAreaId: null,
            searchCommodity: "",
            defaultKeyword: "搜索商品",
            totalCount: 0,
          };
        },
        computed: {
          imgSrc: function () {
            return function (e) {
              return c["d"] + e;
            };
          },
          taskKey: function () {
            return "18888888888" === Object(u["a"])();
          },
        },
        mounted: function () {
          this.$store.commit("common/setToken", !0),
            (this.commodityList = []),
            (this.specialZoneAv = 0),
            this.getBanner(),
            this.getSpecialZone();
        },
        methods: {
          getRandomInt: function (e, t) {
            return Math.floor(Math.random() * (t - e + 1)) + e;
          },
          getBanner: function () {
            var e = this;
            return Object(s["a"])(
              regeneratorRuntime.mark(function t() {
                var n, a;
                return regeneratorRuntime.wrap(function (t) {
                  while (1)
                    switch ((t.prev = t.next)) {
                      case 0:
                        return (
                          (t.next = 2),
                          e.$http.post(
                            "/api/v1/setting/getbanner",
                            {},
                            {
                              custom: {
                                url: "99",
                                nonce: Object(d["a"])(),
                                timestamp: Object(d["b"])(),
                              },
                            }
                          )
                        );
                      case 2:
                        (n = t.sent),
                          n &&
                            ((a = n.data),
                            a && 1 === a.code && (e.imgList = a.data));
                      case 4:
                      case "end":
                        return t.stop();
                    }
                }, t);
              })
            )();
          },
          getSpecialZone: function () {
            var e = this;
            return Object(s["a"])(
              regeneratorRuntime.mark(function t() {
                var n, a;
                return regeneratorRuntime.wrap(function (t) {
                  while (1)
                    switch ((t.prev = t.next)) {
                      case 0:
                        return (
                          (t.next = 2),
                          e.$http.post(
                            "/api/v1/PriceArea/List",
                            { type: 1 },
                            {
                              custom: {
                                url: "99",
                                nonce: Object(d["a"])(),
                                timestamp: Object(d["b"])(),
                              },
                            }
                          )
                        );
                      case 2:
                        (n = t.sent),
                          n &&
                            ((a = n.data),
                            a &&
                              1 === a.code &&
                              ((e.specialZoneList = a.data),
                              e.getList(e.specialZoneList[0].priceAreaId),
                              (e.priceAreaId =
                                e.specialZoneList[0].priceAreaId)));
                      case 4:
                      case "end":
                        return t.stop();
                    }
                }, t);
              })
            )();
          },
          getList: function (e) {
            var t = this;
            return Object(s["a"])(
              regeneratorRuntime.mark(function n() {
                var a, r;
                return regeneratorRuntime.wrap(function (n) {
                  while (1)
                    switch ((n.prev = n.next)) {
                      case 0:
                        return (
                          b["a"].loading({
                            duration: 0,
                            message: "加载中...",
                            forbidClick: !0,
                          }),
                          (n.next = 3),
                          t.$http.post(
                            "/api/v1/Product/GetProductList",
                            { priceAreaId: e, title: t.searchCommodity },
                            {
                              custom: {
                                url: "99",
                                nonce: Object(d["a"])(),
                                timestamp: Object(d["b"])(),
                              },
                            }
                          )
                        );
                      case 3:
                        (a = n.sent),
                          b["a"].clear(),
                          (r = a.data),
                          1 === r.code && (t.commodityList = r.data);
                      case 7:
                      case "end":
                        return n.stop();
                    }
                }, n);
              })
            )();
          },
          specialZone: function (e, t) {
            1 === t.openStatus
              ? ((this.specialZoneAv = e),
                (this.pageIndex = 1),
                (this.commodityList = []),
                this.getList(t.priceAreaId),
                (this.priceAreaId = t.priceAreaId))
              : this.$message("待开放");
          },
          inputChange: function () {},
          doSearch: function () {
            (this.pageIndex = 1),
              (this.commodityList = []),
              this.getList(this.priceAreaId);
          },
          selectedBanner: function () {},
          clickImgCancel: function () {
            this.bulletFrame = !1;
          },
          getIntoPeople: function () {
            this.$router.push("/newpeopletask");
          },
          toUrl: function (e) {
            this.$router.push(e);
          },
        },
      },
      z = K,
      O = (n("413d"), Object(p["a"])(z, g, w, !1, null, null, null)),
      C = O.exports;
    a["a"].use(r["a"]);
    var D = [
        {
          path: "/",
          name: "Home",
          component: f,
          redirect: "/home/index",
          children: [
            { path: "/home/index", name: "Index", component: C },
            {
              path: "/home/newTeam",
              name: "newTeam",
              component: function () {
                return n.e("newTeam").then(n.bind(null, "837d"));
              },
            },
            {
              path: "/home/elife",
              name: "elife",
              component: function () {
                return n.e("elife").then(n.bind(null, "1ef0"));
              },
            },
            {
              path: "/home/broadcast",
              name: "Broadcast",
              meta: { heartKey: !0, title: "直播广场", backKey: !0 },
              component: function () {
                return n.e("broadcast").then(n.bind(null, "59d0"));
              },
            },
            {
              path: "/home/user",
              name: "User",
              component: function () {
                return n.e("user").then(n.bind(null, "bda1"));
              },
            },
          ],
        },
        {
          path: "/login",
          name: "Login",
          component: function () {
            return n.e("login").then(n.bind(null, "dc3f"));
          },
        },
        {
          path: "/productdetails",
          name: "Productdetails",
          component: function () {
            return n.e("productdetails").then(n.bind(null, "6fa1"));
          },
        },
        {
          path: "/confirmOrder",
          name: "ConfirmOrder",
          meta: { heartKey: !0, title: "确认订单" },
          component: function () {
            return n.e("confirmOrder").then(n.bind(null, "f934"));
          },
        },
        {
          path: "/confirmOrder/xuanzedizhi",
          name: "Xuanzedizhi",
          meta: {
            heartKey: !0,
            title: "选择地址",
            rightTitle: "新增地址",
            rightKey: !0,
          },
          component: function () {
            return n.e("Xuanzedizhi").then(n.bind(null, "808f"));
          },
        },
        {
          path: "/confirmOrder/GoPay",
          name: "GoPay",
          meta: { heartKey: !0, title: "去支付" },
          component: function () {
            return n.e("GoPay").then(n.bind(null, "282d"));
          },
        },
        {
          path: "/confirmOrder/address",
          name: "address",
          meta: { heartKey: !0, title: "新增地址" },
          component: function () {
            return Promise.all([
              n.e(
                "addandeditaddress~address~gaddress~newAddress~returnAddress"
              ),
              n.e("address"),
            ]).then(n.bind(null, "d2dd"));
          },
        },
        {
          path: "/confirmOrder/orderQrcode",
          name: "orderQrcode",
          meta: { heartKey: !0, title: "请用【支付宝】扫码支付" },
          component: function () {
            return Promise.all([
              n.e("QRcode~cashing~iframeZhifu~orderQrcode"),
              n.e("orderQrcode"),
            ]).then(n.bind(null, "d9be"));
          },
        },
        {
          path: "/confirmOrder/wanPayment",
          name: "wanPayment",
          meta: { heartKey: !0, title: "成功" },
          component: function () {
            return n.e("wanPayment").then(n.bind(null, "d13e"));
          },
        },
        {
          path: "/QRcode",
          name: "QRcode",
          component: function () {
            return Promise.all([
              n.e("QRcode~cashing~iframeZhifu~orderQrcode"),
              n.e("QRcode"),
            ]).then(n.bind(null, "49d5"));
          },
        },
        {
          path: "/ManyPGOrderList",
          name: "ManyPGOrderList",
          meta: { heartKey: !0, title: "" },
          component: function () {
            return n.e("ManyPGOrderList").then(n.bind(null, "084c"));
          },
        },
        {
          path: "/ManyPGOrderList/manyPGOrderListDetails",
          name: "manyPGOrderListDetails",
          meta: { heartKey: !0, title: "" },
          component: function () {
            return n.e("manyPGOrderListDetails").then(n.bind(null, "75a9"));
          },
        },
        {
          path: "/groupworkdetails",
          name: "groupworkdetails",
          meta: {
            heartKey: !0,
            title: "",
            rightTitle: "返还记录",
            rightKey: !0,
          },
          component: function () {
            return n.e("groupworkdetails").then(n.bind(null, "4e01"));
          },
        },
        {
          path: "/groupworkdetails/confirm",
          name: "confirm",
          meta: { heartKey: !0, title: "确认拼购" },
          component: function () {
            return n.e("confirm").then(n.bind(null, "9ac7"));
          },
        },
        {
          path: "/groupworkdetails/goplayPintuan",
          name: "goplayPintuan",
          meta: { heartKey: !0, title: "去支付" },
          component: function () {
            return n.e("goplayPintuan").then(n.bind(null, "c9b3"));
          },
        },
        {
          path: "/groupworkdetails/address",
          name: "gaddress",
          meta: { heartKey: !0, title: "新增地址" },
          component: function () {
            return Promise.all([
              n.e(
                "addandeditaddress~address~gaddress~newAddress~returnAddress"
              ),
              n.e("gaddress"),
            ]).then(n.bind(null, "06b3"));
          },
        },
        {
          path: "/groupworkdetails/commodittypepreviewDeatils",
          name: "commodittypepreviewDeatils",
          meta: { heartKey: !0, title: "商品详情" },
          component: function () {
            return n.e("commodittypepreviewDeatils").then(n.bind(null, "cf6c"));
          },
        },
        {
          path: "/groupworkdetails/commodittypepreviewDeatilsNew",
          name: "commodittypepreviewDeatilsNew",
          meta: { heartKey: !0, title: "商品详情" },
          component: function () {
            return n
              .e("commodittypepreviewDeatilsNew")
              .then(n.bind(null, "266e"));
          },
        },
        {
          path: "/groupworkdetails/commoditypreview",
          name: "commoditypreview",
          meta: { heartKey: !0, title: "商品预览" },
          component: function () {
            return n.e("commoditypreview").then(n.bind(null, "3e18"));
          },
        },
        {
          path: "/groupworkdetails/commoditypreviewNew",
          name: "commoditypreviewNew",
          meta: { heartKey: !0, title: "商品预览" },
          component: function () {
            return n.e("commoditypreviewNew").then(n.bind(null, "48a3"));
          },
        },
        {
          path: "/groupworkdetails/fugouDetails",
          name: "fugouDetails",
          meta: { heartKey: !0, title: "复购专区-商品详情" },
          component: function () {
            return n.e("fugouDetails").then(n.bind(null, "ecf4"));
          },
        },
        {
          path: "/groupworkdetails/fugouList",
          name: "fugouList",
          meta: { heartKey: !0, title: "复购专区" },
          component: function () {
            return n.e("fugouList").then(n.bind(null, "f970"));
          },
        },
        {
          path: "/groupworkdetails/fugoupay",
          name: "fugoupay",
          meta: { heartKey: !0, title: "支付" },
          component: function () {
            return n.e("fugoupay").then(n.bind(null, "95d2"));
          },
        },
        {
          path: "/groupworkdetails/newAddress",
          name: "newAddress",
          meta: { heartKey: !0, title: "新增地址" },
          component: function () {
            return Promise.all([
              n.e(
                "addandeditaddress~address~gaddress~newAddress~returnAddress"
              ),
              n.e("newAddress"),
            ]).then(n.bind(null, "d7a0"));
          },
        },
        {
          path: "/groupworkdetails/newSelectNow",
          name: "newSelectNow",
          meta: { heartKey: !0, title: "确认订单" },
          component: function () {
            return n.e("newSelectNow").then(n.bind(null, "66c3"));
          },
        },
        {
          path: "/groupworkdetails/newWithdrawal",
          name: "newWithdrawal",
          meta: { heartKey: !0, title: "提现" },
          component: function () {
            return n.e("newWithdrawal").then(n.bind(null, "8709"));
          },
        },
        {
          path: "/groupworkdetails/newXuanzedizhi",
          name: "newXuanzedizhi",
          meta: {
            heartKey: !0,
            title: "选择地址",
            rightTitle: "新增地址",
            rightKey: !0,
          },
          component: function () {
            return n.e("newXuanzedizhi").then(n.bind(null, "a3bd"));
          },
        },
        {
          path: "/groupworkdetails/paysuccess",
          name: "paysuccess",
          meta: { heartKey: !0, title: "支付成功" },
          component: function () {
            return n.e("paysuccess").then(n.bind(null, "7050"));
          },
        },
        {
          path: "/groupworkdetails/principalReturn",
          name: "principalReturn",
          meta: { heartKey: !0, title: "本金返还" },
          component: function () {
            return n.e("principalReturn").then(n.bind(null, "b586"));
          },
        },
        {
          path: "/groupworkdetails/recordReturn",
          name: "recordReturn",
          meta: { heartKey: !0, title: "返还记录" },
          component: function () {
            return n.e("recordReturn").then(n.bind(null, "a4c8"));
          },
        },
        {
          path: "/groupworkdetails/returnAddress",
          name: "returnAddress",
          meta: { heartKey: !0, title: "新增地址" },
          component: function () {
            return Promise.all([
              n.e(
                "addandeditaddress~address~gaddress~newAddress~returnAddress"
              ),
              n.e("returnAddress"),
            ]).then(n.bind(null, "6ad9"));
          },
        },
        {
          path: "/groupworkdetails/returnSelectNow",
          name: "returnSelectNow",
          meta: { heartKey: !0, title: "确认订单" },
          component: function () {
            return n.e("returnSelectNow").then(n.bind(null, "60e3"));
          },
        },
        {
          path: "/groupworkdetails/returnXuanzedizhi",
          name: "returnXuanzedizhi",
          meta: { heartKey: !0, title: "选择地址" },
          component: function () {
            return n.e("returnXuanzedizhi").then(n.bind(null, "50b7"));
          },
        },
        {
          path: "/groupworkdetails/selectNow",
          name: "selectNow",
          meta: { heartKey: !0, title: "确认订单" },
          component: function () {
            return n.e("selectNow").then(n.bind(null, "f40f"));
          },
        },
        {
          path: "/groupworkdetails/xuanzedizhi",
          name: "xuanzedizhi",
          meta: {
            heartKey: !0,
            title: "选择地址",
            rightTitle: "新增地址",
            rightKey: !0,
          },
          component: function () {
            return n.e("xuanzedizhi").then(n.bind(null, "39da"));
          },
        },
        {
          path: "/groupworkdetails/xuanzeshop",
          name: "xuanzeshop",
          meta: { heartKey: !0, title: "商品预览" },
          component: function () {
            return n.e("xuanzeshop").then(n.bind(null, "ead1"));
          },
        },
        {
          path: "/confirmOrder/iframeZhifu",
          name: "iframeZhifu",
          meta: { heartKey: !0, title: "支付中" },
          component: function () {
            return Promise.all([
              n.e("QRcode~cashing~iframeZhifu~orderQrcode"),
              n.e("iframeZhifu"),
            ]).then(n.bind(null, "c5e8"));
          },
        },
        {
          path: "/orderList",
          name: "orderList",
          meta: { heartKey: !0, title: "" },
          component: function () {
            return n.e("orderList").then(n.bind(null, "f104"));
          },
        },
        {
          path: "/orderList/orderListDetails",
          name: "orderListDetails",
          meta: { heartKey: !0, title: "" },
          component: function () {
            return n.e("orderListDetails").then(n.bind(null, "ae39"));
          },
        },
        {
          path: "/operation",
          name: "operation",
          component: function () {
            return Promise.all([
              n.e("operation~userDetails"),
              n.e("operation"),
            ]).then(n.bind(null, "a66c"));
          },
        },
        {
          path: "/complaint",
          name: "complaint",
          meta: {
            heartKey: !0,
            title: "我要投诉",
            rightTitle: "投诉记录",
            rightKey: !0,
          },
          component: function () {
            return n.e("complaint").then(n.bind(null, "fda8"));
          },
        },
        {
          path: "/complaint/complaintList",
          name: "complaintList",
          meta: { heartKey: !0, title: "投诉中心" },
          component: function () {
            return n.e("complaintList").then(n.bind(null, "de9a"));
          },
        },
        {
          path: "/complaint/details",
          name: "details",
          meta: { heartKey: !0, title: "意见与建议" },
          component: function () {
            return n.e("details").then(n.bind(null, "382e"));
          },
        },
        {
          path: "/addressmanagement",
          name: "addressmanagement",
          meta: {
            heartKey: !0,
            title: "地址管理",
            rightTitle: "新增地址",
            rightKey: !0,
          },
          component: function () {
            return n.e("addressmanagement").then(n.bind(null, "2361"));
          },
        },
        {
          path: "/addressmanagement/addandeditaddress",
          name: "addandeditaddress",
          meta: { heartKey: !0, title: "编辑地址" },
          component: function () {
            return Promise.all([
              n.e(
                "addandeditaddress~address~gaddress~newAddress~returnAddress"
              ),
              n.e("addandeditaddress"),
            ]).then(n.bind(null, "6bba"));
          },
        },
        {
          path: "/myfightforfriends",
          name: "myfightforfriends",
          meta: { heartKey: !0, title: "我的团友" },
          component: function () {
            return n.e("myfightforfriends").then(n.bind(null, "ab09"));
          },
        },
        {
          path: "/focas",
          name: "focas",
          meta: { heartKey: !0, title: "我的福卡" },
          component: function () {
            return n.e("focas").then(n.bind(null, "ef8b"));
          },
        },
        {
          path: "/focas/focasNine",
          name: "focasNine",
          meta: {
            heartKey: !0,
            title: "九九福卡",
            rightTitle: "我的福卡",
            rightKey: !0,
          },
          component: function () {
            return n.e("focasNine").then(n.bind(null, "ae43"));
          },
        },
        {
          path: "/focas/cardDetail",
          name: "cardDetail",
          meta: { heartKey: !0, title: "" },
          component: function () {
            return n.e("cardDetail").then(n.bind(null, "6179"));
          },
        },
        {
          path: "/focas/buyCard",
          name: "buyCard",
          meta: { heartKey: !0, title: "" },
          component: function () {
            return n.e("buyCard").then(n.bind(null, "4cbf"));
          },
        },
        {
          path: "/balance",
          name: "balance",
          component: function () {
            return n.e("balance").then(n.bind(null, "658b"));
          },
        },
        {
          path: "/balance/accountAdmin",
          name: "accountAdmin",
          meta: {
            heartKey: !0,
            title: "账户管理",
            rightTitle: "新增账户",
            rightKey: !0,
          },
          component: function () {
            return n.e("accountAdmin").then(n.bind(null, "1683"));
          },
        },
        {
          path: "/balance/newAccount",
          name: "newAccount",
          meta: { heartKey: !0, title: "添加新账户" },
          component: function () {
            return n.e("newAccount").then(n.bind(null, "680d"));
          },
        },
        {
          path: "/balance/newWithdrawal",
          name: "bnewWithdrawal",
          meta: { heartKey: !0, title: "选择账户" },
          component: function () {
            return n.e("bnewWithdrawal").then(n.bind(null, "e2ff"));
          },
        },
        {
          path: "/balance/withdrawal",
          name: "withdrawal",
          meta: {
            heartKey: !0,
            title: "提现到",
            rightTitle: "账号管理",
            rightKey: !0,
          },
          component: function () {
            return n.e("withdrawal").then(n.bind(null, "fc63"));
          },
        },
        {
          path: "/shopdetails",
          name: "shopdetails",
          meta: { heartKey: !0, title: "兑换商品详情" },
          component: function () {
            return n.e("shopdetails").then(n.bind(null, "fd07"));
          },
        },
        {
          path: "/shopintegral",
          name: "shopintegral",
          meta: { heartKey: !0, title: "购物积分" },
          component: function () {
            return n.e("shopintegral").then(n.bind(null, "551e"));
          },
        },
        {
          path: "/consumptionJIn",
          name: "consumptionJIn",
          meta: { heartKey: !0, title: "消费金" },
          component: function () {
            return n.e("consumptionJIn").then(n.bind(null, "7143"));
          },
        },
        {
          path: "/realname",
          name: "realname",
          meta: { heartKey: !0, title: "实名认证" },
          component: function () {
            return n.e("realname").then(n.bind(null, "06cc"));
          },
        },
        {
          path: "/aboutjiujiu",
          name: "aboutjiujiu",
          meta: { heartKey: !0, title: "关于九九生活" },
          component: function () {
            return n.e("aboutjiujiu").then(n.bind(null, "3b2c"));
          },
        },
        {
          path: "/aboutjiujiu/yinsizhengce",
          name: "yinsizhengce",
          meta: { heartKey: !0, title: "九九生活隐私政策" },
          component: function () {
            return n.e("yinsizhengce").then(n.bind(null, "e4da"));
          },
        },
        {
          path: "/aboutjiujiu/zhucexieyi",
          name: "zhucexieyi",
          meta: { heartKey: !0, title: "九九生活注册服务协议" },
          component: function () {
            return n.e("zhucexieyi").then(n.bind(null, "6944"));
          },
        },
        {
          path: "/editpassword",
          name: "editpassword",
          meta: { heartKey: !0, title: "修改密码" },
          component: function () {
            return n.e("editpassword").then(n.bind(null, "5da3"));
          },
        },
        {
          path: "/editBuyPassword",
          name: "editBuyPassword",
          meta: { heartKey: !0, title: "验证支付密码" },
          component: function () {
            return n.e("editBuyPassword").then(n.bind(null, "d26d"));
          },
        },
        {
          path: "/editBuyPassword/againPsd",
          name: "againPsd",
          meta: { heartKey: !0, title: "修改支付密码" },
          component: function () {
            return n.e("againPsd").then(n.bind(null, "f405"));
          },
        },
        {
          path: "/editBuyPassword/noteVerify",
          name: "noteVerify",
          meta: { heartKey: !0, title: "身份校验" },
          component: function () {
            return n.e("noteVerify").then(n.bind(null, "23bb"));
          },
        },
        {
          path: "/advertisement",
          name: "advertisement",
          meta: { heartKey: !0, title: "观看广告" },
          component: function () {
            return n.e("advertisement").then(n.bind(null, "35c6"));
          },
        },
        {
          path: "/agreement/registerAgreement",
          name: "registerAgreement",
          meta: { heartKey: !0, title: "九九生活注册服务协议" },
          component: function () {
            return n.e("registerAgreement").then(n.bind(null, "337f"));
          },
        },
        {
          path: "/exchangerecord",
          name: "exchangerecord",
          meta: { heartKey: !0, title: "兑换记录" },
          component: function () {
            return n.e("exchangerecord").then(n.bind(null, "63e9"));
          },
        },
        {
          path: "/exchangerecord/exchangerecordOrder",
          name: "exchangerecordOrder",
          meta: { heartKey: !0, title: "兑换详情" },
          component: function () {
            return n.e("exchangerecordOrder").then(n.bind(null, "e8b2"));
          },
        },
        {
          path: "/exchangerule",
          name: "exchangerule",
          meta: { heartKey: !0, title: "兑换规则" },
          component: function () {
            return n.e("exchangerule").then(n.bind(null, "5cdd"));
          },
        },
        {
          path: "/newpeopletask",
          name: "newpeopletask",
          meta: { heartKey: !0, title: "新人任务" },
          component: function () {
            return n.e("newpeopletask").then(n.bind(null, "b422"));
          },
        },
        {
          path: "/noticelist",
          name: "noticelist",
          meta: { heartKey: !0, title: "公告列表" },
          component: function () {
            return n.e("noticelist").then(n.bind(null, "01ca"));
          },
        },
        {
          path: "/noticelist/noticelistdetails",
          name: "noticelistdetails",
          meta: { heartKey: !0, title: "公告详情" },
          component: function () {
            return n.e("noticelistdetails").then(n.bind(null, "e18d"));
          },
        },
        {
          path: "/register",
          name: "register",
          meta: { heartKey: !0, title: "" },
          component: function () {
            return n.e("register").then(n.bind(null, "0c99"));
          },
        },
        {
          path: "/repurchase",
          name: "repurchase",
          meta: { heartKey: !0, title: "百万品牌排行榜" },
          component: function () {
            return n.e("repurchase").then(n.bind(null, "6f4e"));
          },
        },
        {
          path: "/scanCode",
          name: "scanCode",
          component: function () {
            return n.e("scanCode").then(n.bind(null, "32cd"));
          },
        },
        {
          path: "/scanCode/registerCode",
          name: "registerCode",
          component: function () {
            return n.e("registerCode").then(n.bind(null, "480c"));
          },
        },
        {
          path: "/search",
          name: "search",
          meta: { heartKey: !0, title: "搜索" },
          component: function () {
            return n.e("search").then(n.bind(null, "1ef7"));
          },
        },
        {
          path: "/search/searchdetails",
          name: "searchdetails",
          component: function () {
            return n.e("searchdetails").then(n.bind(null, "07d6"));
          },
        },
        {
          path: "/setPassword",
          name: "setPassword",
          meta: { heartKey: !0, title: "设置密码" },
          component: function () {
            return n.e("setPassword").then(n.bind(null, "973c"));
          },
        },
        {
          path: "/shopIndex",
          name: "shopIndex",
          component: function () {
            return n.e("shopIndex").then(n.bind(null, "f6fe"));
          },
        },
        {
          path: "/usagedetails",
          name: "usagedetails",
          meta: { heartKey: !0, title: "使用明细" },
          component: function () {
            return n.e("usagedetails").then(n.bind(null, "8904"));
          },
        },
        {
          path: "/wangjiPassword",
          name: "wangjiPassword",
          meta: { heartKey: !0, title: "忘记密码" },
          component: function () {
            return n.e("wangjiPassword").then(n.bind(null, "a817"));
          },
        },
        {
          path: "/welfareSociety",
          name: "WelfareSociety",
          meta: { heartKey: !0, title: "福利社" },
          component: function () {
            return n.e("welfareSociety").then(n.bind(null, "a1b5"));
          },
        },
        {
          path: "/cashing",
          name: "cashing",
          meta: { heartKey: !0, title: "银联/云闪付" },
          component: function () {
            return Promise.all([
              n.e("QRcode~cashing~iframeZhifu~orderQrcode"),
              n.e("cashing"),
            ]).then(n.bind(null, "26ad"));
          },
        },
        {
          path: "/user/details",
          name: "userDetails",
          meta: { heartKey: !0, title: "个人信息" },
          component: function () {
            return Promise.all([
              n.e("operation~userDetails"),
              n.e("userDetails"),
            ]).then(n.bind(null, "4892"));
          },
        },
        {
          path: "/newTeam/shopList",
          name: "shopList",
          component: function () {
            return n.e("shopList").then(n.bind(null, "5dd1"));
          },
        },
        {
          path: "/newTeam/repetitionShop",
          name: "repetitionShop",
          meta: { heartKey: !0, title: "复购专区" },
          component: function () {
            return n.e("repetitionShop").then(n.bind(null, "aa74"));
          },
        },
        {
          path: "/newTeam/orderList",
          name: "newTeamOrderList",
          component: function () {
            return n.e("newTeamOrderList").then(n.bind(null, "85ec"));
          },
        },
        {
          path: "/newTeam/goPay",
          name: "newTeamGoPay",
          meta: { heartKey: !0, title: "去支付" },
          component: function () {
            return n.e("newTeamGoPay").then(n.bind(null, "cb37"));
          },
        },
        {
          path: "/newTeam/myShop",
          name: "myShop",
          component: function () {
            return n.e("myShop").then(n.bind(null, "f03c"));
          },
        },
        {
          path: "/newTeam/orderDetail",
          name: "orderDetail",
          meta: { heartKey: !0, title: "订单详情" },
          component: function () {
            return n.e("orderDetail").then(n.bind(null, "cb51"));
          },
        },
        {
          path: "/newTeam/winningBack",
          name: "winningBack",
          meta: { heartKey: !0, title: "中奖返还" },
          component: function () {
            return n.e("winningBack").then(n.bind(null, "2ddb"));
          },
        },
        {
          path: "/newTeam/card",
          name: "card",
          meta: { heartKey: !0, title: "返还到" },
          component: function () {
            return n.e("card").then(n.bind(null, "bc98"));
          },
        },
        {
          path: "/newTeam/goodsDetail",
          name: "goodsDetail",
          component: function () {
            return n.e("goodsDetail").then(n.bind(null, "2118"));
          },
        },
        {
          path: "/game",
          name: "game",
          component: function () {
            return n.e("game").then(n.bind(null, "3b6a"));
          },
        },
        {
          path: "/newTeam/video",
          name: "video",
          component: function () {
            return n.e("video").then(n.bind(null, "0e26"));
          },
        },
        {
          path: "/user/service",
          name: "service",
          component: function () {
            return n.e("service").then(n.bind(null, "bed4"));
          },
        },
        {
          path: "/newTeam/orderListFugou",
          name: "orderListFugou",
          component: function () {
            return n.e("orderListFugou").then(n.bind(null, "5753"));
          },
        },
      ],
      T = new r["a"]({
        mode: "hash",
        base: "https://static.jiujiupingou.com/H5Static/w1/",
        routes: D,
      });
    T.afterEach(function () {
      window.scrollTo(0, 0);
    });
    t["a"] = T;
  },
  b0fd: function (e, t, n) {},
  c819: function (e, t, n) {
    "use strict";
    n("cd69");
  },
  c97a: function (e, t, n) {
    "use strict";
    n.d(t, "a", function () {
      return a;
    }),
      n.d(t, "b", function () {
        return r;
      });
    n("d3b7"), n("25f0");
    function a() {
      for (var e = "", t = 0; t < 7; t++) e += Math.floor(10 * Math.random());
      return e;
    }
    function r() {
      var e = Date.parse(new Date()).toString();
      return (e = e.substr(0, 10)), e;
    }
  },
  cd69: function (e, t, n) {},
  da71: function (e, t, n) {
    "use strict";
    n.d(t, "a", function () {
      return a;
    }),
      n.d(t, "b", function () {
        return r;
      }),
      n.d(t, "d", function () {
        return i;
      }),
      n.d(t, "e", function () {
        return o;
      }),
      n.d(t, "c", function () {
        return s;
      });
    var a = "https://web991-phpapi.jiujiupingou.com",
      r = [
        "https://web911-api.jiujiupingou.com/",
        "https://web911-api.991ict.com/",
      ],
      i = "https://static.jiujiupingou.com/H5Static/images/",
      o = "https://webtask.991ict.com",
      s = "http://apiwxauth.jiujiupingou.com";
  },
  dbe4: function (e, t, n) {
    "use strict";
    n.d(t, "n", function () {
      return d;
    }),
      n.d(t, "l", function () {
        return u;
      }),
      n.d(t, "o", function () {
        return l;
      }),
      n.d(t, "m", function () {
        return m;
      }),
      n.d(t, "p", function () {
        return p;
      }),
      n.d(t, "b", function () {
        return h;
      }),
      n.d(t, "d", function () {
        return f;
      }),
      n.d(t, "c", function () {
        return g;
      }),
      n.d(t, "a", function () {
        return w;
      }),
      n.d(t, "e", function () {
        return b;
      }),
      n.d(t, "i", function () {
        return y;
      }),
      n.d(t, "h", function () {
        return v;
      }),
      n.d(t, "g", function () {
        return P;
      }),
      n.d(t, "f", function () {
        return k;
      }),
      n.d(t, "j", function () {
        return x;
      }),
      n.d(t, "k", function () {
        return L;
      });
    var a = "token",
      r = "userId",
      i = "userCode",
      o = "phone",
      s = "user_string",
      c = "is_anchor";
    function d(e) {
      return localStorage.setItem(a, e);
    }
    function u(e) {
      return localStorage.setItem(r, e);
    }
    function l(e) {
      return localStorage.setItem(i, e);
    }
    function m(e) {
      return localStorage.setItem(o, e);
    }
    function p(e) {
      return localStorage.setItem(s, e);
    }
    function h() {
      return localStorage.getItem(a);
    }
    function f() {
      return localStorage.getItem(r);
    }
    function g() {
      return localStorage.getItem(i);
    }
    function w() {
      return localStorage.getItem(o);
    }
    function b() {
      return localStorage.getItem(c);
    }
    function y() {
      return localStorage.removeItem(r);
    }
    function v() {
      return localStorage.removeItem(i);
    }
    function P() {
      return localStorage.removeItem(a);
    }
    function k() {
      return localStorage.removeItem(o);
    }
    function x() {
      return localStorage.removeItem(s);
    }
    function L() {
      return localStorage.removeItem(c);
    }
  },
  fbbe: function (e, t) {
    var n = { groupBuying: "团购", singleGroupBuying: "团" };
    e.exports = { groupText: n };
  },
  fe45: function (e, t, n) {
    "use strict";
    n("85be");
  },
});
//# sourceMappingURL=app_4d43ea37.js.map
