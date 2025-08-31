//Sun Aug 31 2025 15:50:33 GMT+0000 (Coordinated Universal Time)
//Base:<url id="cv1cref6o68qmpt26ol0" type="url" status="parsed" title="GitHub - echo094/decode-js: JS混淆代码的AST分析工具 AST analysis tool for obfuscated JS code" wc="2165">https://github.com/echo094/decode-js</url>
//Modify:<url id="cv1cref6o68qmpt26olg" type="url" status="parsed" title="GitHub - smallfawn/decode_action: 世界上本来不存在加密，加密的人多了，也便成就了解密" wc="741">https://github.com/smallfawn/decode_action</url>
import { connect } from "cloudflare:sockets";
const WS_READY_STATE_OPEN = 1;
let userID = "86c50e3a-5b87-49dd-bd20-03c7f2735e40";
const cn_hostnames = [""];
let CDNIP = "www.visa.com.sg";
let IP1 = "www.visa.com";
let IP2 = "cis.visa.com";
let IP3 = "africa.visa.com";
let IP4 = "www.visa.com.sg";
let IP5 = "www.visaeurope.at";
let IP6 = "www.visa.com.mt";
let IP7 = "qa.visamiddleeast.com";
let IP8 = "usa.visa.com";
let IP9 = "myanmar.visa.com";
let IP10 = "www.visa.com.tw";
let IP11 = "www.visaeurope.ch";
let IP12 = "www.visa.com.br";
let IP13 = "www.visasoutheasteurope.com";
let PT1 = "80";
let PT2 = "8080";
let PT3 = "8880";
let PT4 = "2052";
let PT5 = "2082";
let PT6 = "2086";
let PT7 = "2095";
let PT8 = "443";
let PT9 = "8443";
let PT10 = "2053";
let PT11 = "2083";
let PT12 = "2087";
let PT13 = "2096";
export default {
  async fetch(_0x3decd2, _0x133a44, _0x3254ff) {
    try {
      userID = _0x133a44.uuid || userID;
      CDNIP = _0x133a44.cdnip || CDNIP;
      IP1 = _0x133a44.ip1 || IP1;
      IP2 = _0x133a44.ip2 || IP2;
      IP3 = _0x133a44.ip3 || IP3;
      IP4 = _0x133a44.ip4 || IP4;
      IP5 = _0x133a44.ip5 || IP5;
      IP6 = _0x133a44.ip6 || IP6;
      IP7 = _0x133a44.ip7 || IP7;
      IP8 = _0x133a44.ip8 || IP8;
      IP9 = _0x133a44.ip9 || IP9;
      IP10 = _0x133a44.ip10 || IP10;
      IP11 = _0x133a44.ip11 || IP11;
      IP12 = _0x133a44.ip12 || IP12;
      IP13 = _0x133a44.ip13 || IP13;
      PT1 = _0x133a44.pt1 || PT1;
      PT2 = _0x133a44.pt2 || PT2;
      PT3 = _0x133a44.pt3 || PT3;
      PT4 = _0x133a44.pt4 || PT4;
      PT5 = _0x133a44.pt5 || PT5;
      PT6 = _0x133a44.pt6 || PT6;
      PT7 = _0x133a44.pt7 || PT7;
      PT8 = _0x133a44.pt8 || PT8;
      PT9 = _0x133a44.pt9 || PT9;
      PT10 = _0x133a44.pt10 || PT10;
      PT11 = _0x133a44.pt11 || PT11;
      PT12 = _0x133a44.pt12 || PT12;
      PT13 = _0x133a44.pt13 || PT13;
      const _0x42cbee = _0x3decd2.headers.get("Upgrade");
      const _0x253bdb = new URL(_0x3decd2.url);
      if (!_0x42cbee || _0x42cbee !== "websocket") {
        const _0x455a02 = new URL(_0x3decd2.url);
        switch (_0x455a02.pathname) {
          case "/" + userID:
            {
              const _0x5e95c5 = getvlessConfig(userID, _0x3decd2.headers.get("Host"));
              return new Response("" + _0x5e95c5, {
                status: 200,
                headers: {
                  "Content-Type": "text/html;charset=utf-8"
                }
              });
            }
          case "/" + userID + "/ty":
            {
              const _0x4ea893 = gettyConfig(userID, _0x3decd2.headers.get("Host"));
              return new Response("" + _0x4ea893, {
                status: 200,
                headers: {
                  "Content-Type": "text/plain;charset=utf-8"
                }
              });
            }
          case "/" + userID + "/cl":
            {
              const _0x32dd90 = getclConfig(userID, _0x3decd2.headers.get("Host"));
              return new Response("" + _0x32dd90, {
                status: 200,
                headers: {
                  "Content-Type": "text/plain;charset=utf-8"
                }
              });
            }
          case "/" + userID + "/sb":
            {
              const _0x12b2ba = getsbConfig(userID, _0x3decd2.headers.get("Host"));
              return new Response("" + _0x12b2ba, {
                status: 200,
                headers: {
                  "Content-Type": "application/json;charset=utf-8"
                }
              });
            }
          case "/" + userID + "/pty":
            {
              const _0x51b428 = getptyConfig(userID, _0x3decd2.headers.get("Host"));
              return new Response("" + _0x51b428, {
                status: 200,
                headers: {
                  "Content-Type": "text/plain;charset=utf-8"
                }
              });
            }
          case "/" + userID + "/pcl":
            {
              const _0x54295e = getpclConfig(userID, _0x3decd2.headers.get("Host"));
              return new Response("" + _0x54295e, {
                status: 200,
                headers: {
                  "Content-Type": "text/plain;charset=utf-8"
                }
              });
            }
          case "/" + userID + "/psb":
            {
              const _0x4d25c6 = getpsbConfig(userID, _0x3decd2.headers.get("Host"));
              return new Response("" + _0x4d25c6, {
                status: 200,
                headers: {
                  "Content-Type": "application/json;charset=utf-8"
                }
              });
            }
          default:
            if (cn_hostnames.includes("")) {
              return new Response(JSON.stringify(_0x3decd2.cf, null, 4), {
                status: 200,
                headers: {
                  "Content-Type": "application/json;charset=utf-8"
                }
              });
            }
            const _0x1804e6 = cn_hostnames[Math.floor(Math.random() * cn_hostnames.length)];
            const _0x3e8793 = new Headers(_0x3decd2.headers);
            _0x3e8793.set("cf-connecting-ip", "1.2.3.4");
            _0x3e8793.set("x-forwarded-for", "1.2.3.4");
            _0x3e8793.set("x-real-ip", "1.2.3.4");
            _0x3e8793.set("referer", "https://www.google.com/search?q=edtunnel");
            const _0x447c78 = "https://" + _0x1804e6 + _0x455a02.pathname + _0x455a02.search;
            let _0x207c41 = new Request(_0x447c78, {
              method: _0x3decd2.method,
              headers: _0x3e8793,
              body: _0x3decd2.body,
              redirect: "manual"
            });
            const _0x140856 = await fetch(_0x207c41, {
              redirect: "manual"
            });
            if ([301, 302].includes(_0x140856.status)) {
              return new Response("Redirects to " + _0x1804e6 + " are not allowed.", {
                status: 403,
                statusText: "Forbidden"
              });
            }
            return _0x140856;
        }
      }
      return await handlevlessWebSocket(_0x3decd2);
    } catch (_0x359d28) {
      let _0x20d72d = _0x359d28;
      return new Response(_0x20d72d.toString());
    }
  }
};
async function handlevlessWebSocket(_0x245d4d) {
  const _0x52c368 = new WebSocketPair();
  const [_0x14499b, _0x183dff] = Object.values(_0x52c368);
  _0x183dff.accept();
  const _0x35c3ec = _0x245d4d.headers.get("sec-websocket-protocol") || "";
  const _0x19c19b = createWebSocketReadableStream(_0x183dff, _0x35c3ec);
  let _0x2053bd = null;
  let _0x5844e9 = null;
  let _0x387bd0 = false;
  _0x19c19b.pipeTo(new WritableStream({
    async write(_0x4222c0) {
      if (_0x387bd0 && _0x5844e9) {
        return _0x5844e9(_0x4222c0);
      }
      if (_0x2053bd) {
        const _0x3c9bbe = _0x2053bd.writable.getWriter();
        await _0x3c9bbe.write(_0x4222c0);
        _0x3c9bbe.releaseLock();
        return;
      }
      const _0x3c1ed2 = parsevlessHeader(_0x4222c0, userID);
      if (_0x3c1ed2.hasError) {
        throw new Error(_0x3c1ed2.message);
      }
      const _0x4663a2 = new Uint8Array([_0x3c1ed2.vlessVersion[0], 0]);
      const _0x1c7906 = _0x4222c0.slice(_0x3c1ed2.rawDataIndex);
      if (_0x3c1ed2.isUDP) {
        if (_0x3c1ed2.portRemote === 53) {
          _0x387bd0 = true;
          const {
            write: _0x1fd2ae
          } = await handleUDPOutBound(_0x183dff, _0x4663a2);
          _0x5844e9 = _0x1fd2ae;
          _0x5844e9(_0x1c7906);
          return;
        } else {
          throw new Error("UDP代理仅支持DNS(端口53)");
        }
      }
      async function _0x94cd60(_0x170337, _0x903cec) {
        const _0x5291ed = await connect({
          hostname: _0x170337,
          port: _0x903cec
        });
        _0x2053bd = _0x5291ed;
        const _0x3c8244 = _0x5291ed.writable.getWriter();
        await _0x3c8244.write(_0x1c7906);
        _0x3c8244.releaseLock();
        return _0x5291ed;
      }
      function _0x49a253(_0x8ac9f9) {
        const _0x2e34fe = _0x8ac9f9.split(".");
        if (_0x2e34fe.length !== 4) {
          throw new Error("无效的IPv4地址");
        }
        const _0x36e7ac = _0x2e34fe.map(_0x59615c => {
          const _0x2d53d2 = parseInt(_0x59615c, 10);
          if (_0x2d53d2 < 0 || _0x2d53d2 > 255) {
            throw new Error("无效的IPv4地址段");
          }
          return _0x2d53d2.toString(16).padStart(2, "0");
        });
        const _0x14cc1c = ["2001:67c:2960:6464::"];
        const _0x2d4600 = _0x14cc1c[Math.floor(Math.random() * _0x14cc1c.length)];
        return "[" + _0x2d4600 + _0x36e7ac[0] + _0x36e7ac[1] + ":" + _0x36e7ac[2] + _0x36e7ac[3] + "]";
      }
      async function _0x9b70e(_0x2296ff) {
        try {
          const _0x144a71 = await fetch("https://1.1.1.1/dns-query?name=" + _0x2296ff + "&type=A", {
            headers: {
              Accept: "application/dns-json"
            }
          });
          const _0xce2625 = await _0x144a71.json();
          if (_0xce2625.Answer && _0xce2625.Answer.length > 0) {
            const _0x21ae9d = _0xce2625.Answer.find(_0x31ddbe => _0x31ddbe.type === 1);
            if (_0x21ae9d) {
              const _0x43efc1 = _0x21ae9d.data;
              return _0x49a253(_0x43efc1);
            }
          }
          throw new Error("无法解析域名的IPv4地址");
        } catch (_0x16b339) {
          throw new Error("DNS解析失败: " + _0x16b339.message);
        }
      }
      async function _0x1ca8ee() {
        try {
          const _0x1e3fa4 = await _0x9b70e(_0x3c1ed2.addressRemote);
          console.log("尝试通过NAT64 IPv6地址 " + _0x1e3fa4 + " 连接...");
          const _0x2cbb0f = await connect({
            hostname: _0x1e3fa4,
            port: _0x3c1ed2.portRemote
          });
          _0x2053bd = _0x2cbb0f;
          const _0x4c9630 = _0x2cbb0f.writable.getWriter();
          await _0x4c9630.write(_0x1c7906);
          _0x4c9630.releaseLock();
          _0x2cbb0f.closed.catch(_0x325a13 => {
            console.error("NAT64 IPv6连接关闭错误:", _0x325a13);
          }).finally(() => {
            _0x183dff.readyState === WS_READY_STATE_OPEN && _0x183dff.close(1000, "连接已关闭");
          });
          pipeRemoteToWebSocket(_0x2cbb0f, _0x183dff, _0x4663a2, null);
        } catch (_0x45613e) {
          console.error("NAT64 IPv6连接失败:", _0x45613e);
          _0x183dff.close(1011, "NAT64 IPv6连接失败: " + _0x45613e.message);
        }
      }
      try {
        const _0x253a1a = await _0x94cd60(_0x3c1ed2.addressRemote, _0x3c1ed2.portRemote);
        pipeRemoteToWebSocket(_0x253a1a, _0x183dff, _0x4663a2, _0x1ca8ee);
      } catch (_0x5d2ded) {
        console.error("连接失败:", _0x5d2ded);
        _0x183dff.close(1011, "连接失败");
      }
    },
    close() {
      _0x2053bd && closeSocket(_0x2053bd);
    }
  })).catch(_0x55a731 => {
    console.error("WebSocket 错误:", _0x55a731);
    closeSocket(_0x2053bd);
    _0x183dff.close(1011, "内部错误");
  });
  return new Response(null, {
    status: 101,
    webSocket: _0x14499b
  });
}
function createWebSocketReadableStream(_0x41e2f0, _0x1a67dc) {
  return new ReadableStream({
    start(_0x3411ab) {
      _0x41e2f0.addEventListener("message", _0x466f60 => {
        _0x3411ab.enqueue(_0x466f60.data);
      });
      _0x41e2f0.addEventListener("close", () => {
        _0x3411ab.close();
      });
      _0x41e2f0.addEventListener("error", _0x464e4f => {
        _0x3411ab.error(_0x464e4f);
      });
      if (_0x1a67dc) {
        try {
          const _0x1570f0 = atob(_0x1a67dc.replace(/-/g, "+").replace(/_/g, "/"));
          const _0x2e737c = Uint8Array.from(_0x1570f0, _0x30fa58 => _0x30fa58.charCodeAt(0));
          _0x3411ab.enqueue(_0x2e737c.buffer);
        } catch (_0x2485bf) {}
      }
    }
  });
}
function parsevlessHeader(_0x16a7ca, _0x66d623) {
  if (_0x16a7ca.byteLength < 24) {
    return {
      hasError: true,
      message: "无效的头部长度"
    };
  }
  const _0x480532 = new DataView(_0x16a7ca);
  const _0x3a5506 = new Uint8Array(_0x16a7ca.slice(0, 1));
  const _0x48d197 = formatUUID(new Uint8Array(_0x16a7ca.slice(1, 17)));
  if (_0x48d197 !== _0x66d623) {
    return {
      hasError: true,
      message: "无效的用户"
    };
  }
  const _0x23cc34 = _0x480532.getUint8(17);
  const _0x3fcbf1 = _0x480532.getUint8(18 + _0x23cc34);
  let _0x4e989b = false;
  if (!(_0x3fcbf1 === 1)) {
    if (_0x3fcbf1 === 2) {
      _0x4e989b = true;
    } else {
      return {
        hasError: true,
        message: "不支持的命令，仅支持TCP(01)和UDP(02)"
      };
    }
  }
  let _0x357601 = 19 + _0x23cc34;
  const _0x72e47a = _0x480532.getUint16(_0x357601);
  _0x357601 += 2;
  const _0x869c2e = _0x480532.getUint8(_0x357601++);
  let _0x363015 = "";
  switch (_0x869c2e) {
    case 1:
      _0x363015 = Array.from(new Uint8Array(_0x16a7ca.slice(_0x357601, _0x357601 + 4))).join(".");
      _0x357601 += 4;
      break;
    case 2:
      const _0x14dea4 = _0x480532.getUint8(_0x357601++);
      _0x363015 = new TextDecoder().decode(_0x16a7ca.slice(_0x357601, _0x357601 + _0x14dea4));
      _0x357601 += _0x14dea4;
      break;
    case 3:
      const _0x778220 = [];
      for (let _0x1c026f = 0; _0x1c026f < 8; _0x1c026f++) {
        _0x778220.push(_0x480532.getUint16(_0x357601).toString(16).padStart(4, "0"));
        _0x357601 += 2;
      }
      _0x363015 = _0x778220.join(":").replace(/(^|:)0+(\w)/g, "$1$2");
      break;
    default:
      return {
        hasError: true,
        message: "不支持的地址类型"
      };
  }
  return {
    hasError: false,
    addressRemote: _0x363015,
    portRemote: _0x72e47a,
    rawDataIndex: _0x357601,
    vlessVersion: _0x3a5506,
    isUDP: _0x4e989b
  };
}
function pipeRemoteToWebSocket(_0x5d3a35, _0x107275, _0x30fd9e, _0x2dd694 = null) {
  let _0x49a9da = false;
  let _0x594d97 = false;
  _0x5d3a35.readable.pipeTo(new WritableStream({
    write(_0x347e95) {
      _0x594d97 = true;
      if (_0x107275.readyState === WS_READY_STATE_OPEN) {
        if (!_0x49a9da) {
          const _0x24075b = new Uint8Array(_0x30fd9e.byteLength + _0x347e95.byteLength);
          _0x24075b.set(new Uint8Array(_0x30fd9e), 0);
          _0x24075b.set(new Uint8Array(_0x347e95), _0x30fd9e.byteLength);
          _0x107275.send(_0x24075b.buffer);
          _0x49a9da = true;
        } else {
          _0x107275.send(_0x347e95);
        }
      }
    },
    close() {
      if (!_0x594d97 && _0x2dd694) {
        _0x2dd694();
        return;
      }
      _0x107275.readyState === WS_READY_STATE_OPEN && _0x107275.close(1000, "正常关闭");
    },
    abort() {
      closeSocket(_0x5d3a35);
    }
  })).catch(_0x24ee34 => {
    console.error("数据转发错误:", _0x24ee34);
    closeSocket(_0x5d3a35);
    _0x107275.readyState === WS_READY_STATE_OPEN && _0x107275.close(1011, "数据传输错误");
  });
}
function closeSocket(_0x4c130a) {
  if (_0x4c130a) {
    try {
      _0x4c130a.close();
    } catch (_0x2806d5) {}
  }
}
function formatUUID(_0xeb3dcb) {
  const _0x1f907e = Array.from(_0xeb3dcb, _0x5db99c => _0x5db99c.toString(16).padStart(2, "0")).join("");
  return _0x1f907e.slice(0, 8) + "-" + _0x1f907e.slice(8, 12) + "-" + _0x1f907e.slice(12, 16) + "-" + _0x1f907e.slice(16, 20) + "-" + _0x1f907e.slice(20);
}
async function handleUDPOutBound(_0x15e4d2, _0x14fe47) {
  let _0x4f624b = false;
  const _0x216959 = new TransformStream({
    start(_0x398c07) {},
    transform(_0x2b7a5e, _0x3b5076) {
      for (let _0x55337e = 0; _0x55337e < _0x2b7a5e.byteLength;) {
        const _0x446702 = _0x2b7a5e.slice(_0x55337e, _0x55337e + 2);
        const _0x163788 = new DataView(_0x446702).getUint16(0);
        const _0x39d3e8 = new Uint8Array(_0x2b7a5e.slice(_0x55337e + 2, _0x55337e + 2 + _0x163788));
        _0x55337e = _0x55337e + 2 + _0x163788;
        _0x3b5076.enqueue(_0x39d3e8);
      }
    },
    flush(_0x127e0d) {}
  });
  _0x216959.readable.pipeTo(new WritableStream({
    async write(_0x4c6288) {
      const _0x3a0f3e = await fetch("https://1.1.1.1/dns-query", {
        method: "POST",
        headers: {
          "content-type": "application/dns-message"
        },
        body: _0x4c6288
      });
      const _0x1835a7 = await _0x3a0f3e.arrayBuffer();
      const _0x1606ec = _0x1835a7.byteLength;
      const _0x418cec = new Uint8Array([_0x1606ec >> 8 & 255, _0x1606ec & 255]);
      _0x15e4d2.readyState === WS_READY_STATE_OPEN && (console.log("DNS查询成功，DNS消息长度为 " + _0x1606ec), _0x4f624b ? _0x15e4d2.send(await new Blob([_0x418cec, _0x1835a7]).arrayBuffer()) : (_0x15e4d2.send(await new Blob([_0x14fe47, _0x418cec, _0x1835a7]).arrayBuffer()), _0x4f624b = true));
    }
  })).catch(_0x355f00 => {
    console.error("DNS UDP处理错误:", _0x355f00);
  });
  const _0x38ecc5 = _0x216959.writable.getWriter();
  return {
    write(_0x3a2ff9) {
      _0x38ecc5.write(_0x3a2ff9);
    }
  };
}
function getvlessConfig(_0x3ea3b7, _0x4cd35c) {
  const _0x13a204 = "vless://" + _0x3ea3b7 + "@" + CDNIP + ":8880?encryption=none&security=none&type=ws&host=" + _0x4cd35c + "&path=%2F%3Fed%3D2560#" + _0x4cd35c;
  const _0x489318 = "vless://" + _0x3ea3b7 + "@" + CDNIP + ":8443?encryption=none&security=tls&type=ws&host=" + _0x4cd35c + "&sni=" + _0x4cd35c + "&fp=random&path=%2F%3Fed%3D2560#" + _0x4cd35c;
  const _0x4db5e7 = "甬哥博客地址：https://ygkkk.blogspot.com\n甬哥YouTube频道：https://www.youtube.com/@ygkkk\n甬哥TG电报群组：https://t.me/ygkkktg\n甬哥TG电报频道：https://t.me/ygkkktgpd\n\nProxyIP使用nat64自动生成，无需设置";
  const _0x51a883 = "https://" + _0x4cd35c + "/" + _0x3ea3b7 + "/ty";
  const _0x45caa6 = "https://" + _0x4cd35c + "/" + _0x3ea3b7 + "/cl";
  const _0x4ab7e3 = "https://" + _0x4cd35c + "/" + _0x3ea3b7 + "/sb";
  const _0x9db8c6 = "https://" + _0x4cd35c + "/" + _0x3ea3b7 + "/pty";
  const _0x560677 = "https://" + _0x4cd35c + "/" + _0x3ea3b7 + "/pcl";
  const _0x590a4d = "https://" + _0x4cd35c + "/" + _0x3ea3b7 + "/psb";
  const _0x4730ab = btoa("vless://" + _0x3ea3b7 + "@" + IP1 + ":" + PT1 + "?encryption=none&security=none&fp=randomized&type=ws&host=" + _0x4cd35c + "&path=%2F%3Fed%3D2560#CF_V1_" + IP1 + "_" + PT1 + "\nvless://" + _0x3ea3b7 + "@" + IP2 + ":" + PT2 + "?encryption=none&security=none&fp=randomized&type=ws&host=" + _0x4cd35c + "&path=%2F%3Fed%3D2560#CF_V2_" + IP2 + "_" + PT2 + "\nvless://" + _0x3ea3b7 + "@" + IP3 + ":" + PT3 + "?encryption=none&security=none&fp=randomized&type=ws&host=" + _0x4cd35c + "&path=%2F%3Fed%3D2560#CF_V3_" + IP3 + "_" + PT3 + "\nvless://" + _0x3ea3b7 + "@" + IP4 + ":" + PT4 + "?encryption=none&security=none&fp=randomized&type=ws&host=" + _0x4cd35c + "&path=%2F%3Fed%3D2560#CF_V4_" + IP4 + "_" + PT4 + "\nvless://" + _0x3ea3b7 + "@" + IP5 + ":" + PT5 + "?encryption=none&security=none&fp=randomized&type=ws&host=" + _0x4cd35c + "&path=%2F%3Fed%3D2560#CF_V5_" + IP5 + "_" + PT5 + "\nvless://" + _0x3ea3b7 + "@" + IP6 + ":" + PT6 + "?encryption=none&security=none&fp=randomized&type=ws&host=" + _0x4cd35c + "&path=%2F%3Fed%3D2560#CF_V6_" + IP6 + "_" + PT6 + "\nvless://" + _0x3ea3b7 + "@" + IP7 + ":" + PT7 + "?encryption=none&security=none&fp=randomized&type=ws&host=" + _0x4cd35c + "&path=%2F%3Fed%3D2560#CF_V7_" + IP7 + "_" + PT7 + "\nvless://" + _0x3ea3b7 + "@" + IP8 + ":" + PT8 + "?encryption=none&security=tls&sni=" + _0x4cd35c + "&fp=randomized&type=ws&host=" + _0x4cd35c + "&path=%2F%3Fed%3D2560#CF_V8_" + IP8 + "_" + PT8 + "\nvless://" + _0x3ea3b7 + "@" + IP9 + ":" + PT9 + "?encryption=none&security=tls&sni=" + _0x4cd35c + "&fp=randomized&type=ws&host=" + _0x4cd35c + "&path=%2F%3Fed%3D2560#CF_V9_" + IP9 + "_" + PT9 + "\nvless://" + _0x3ea3b7 + "@" + IP10 + ":" + PT10 + "?encryption=none&security=tls&sni=" + _0x4cd35c + "&fp=randomized&type=ws&host=" + _0x4cd35c + "&path=%2F%3Fed%3D2560#CF_V10_" + IP10 + "_" + PT10 + "\nvless://" + _0x3ea3b7 + "@" + IP11 + ":" + PT11 + "?encryption=none&security=tls&sni=" + _0x4cd35c + "&fp=randomized&type=ws&host=" + _0x4cd35c + "&path=%2F%3Fed%3D2560#CF_V11_" + IP11 + "_" + PT11 + "\nvless://" + _0x3ea3b7 + "@" + IP12 + ":" + PT12 + "?encryption=none&security=tls&sni=" + _0x4cd35c + "&fp=randomized&type=ws&host=" + _0x4cd35c + "&path=%2F%3Fed%3D2560#CF_V12_" + IP12 + "_" + PT12 + "\nvless://" + _0x3ea3b7 + "@" + IP13 + ":" + PT13 + "?encryption=none&security=tls&sni=" + _0x4cd35c + "&fp=randomized&type=ws&host=" + _0x4cd35c + "&path=%2F%3Fed%3D2560#CF_V13_" + IP13 + "_" + PT13);
  const _0xd21820 = btoa("vless://" + _0x3ea3b7 + "@" + IP8 + ":" + PT8 + "?encryption=none&security=tls&sni=" + _0x4cd35c + "&fp=randomized&type=ws&host=" + _0x4cd35c + "&path=%2F%3Fed%3D2560#CF_V8_" + IP8 + "_" + PT8 + "\nvless://" + _0x3ea3b7 + "@" + IP9 + ":" + PT9 + "?encryption=none&security=tls&sni=" + _0x4cd35c + "&fp=randomized&type=ws&host=" + _0x4cd35c + "&path=%2F%3Fed%3D2560#CF_V9_" + IP9 + "_" + PT9 + "\nvless://" + _0x3ea3b7 + "@" + IP10 + ":" + PT10 + "?encryption=none&security=tls&sni=" + _0x4cd35c + "&fp=randomized&type=ws&host=" + _0x4cd35c + "&path=%2F%3Fed%3D2560#CF_V10_" + IP10 + "_" + PT10 + "\nvless://" + _0x3ea3b7 + "@" + IP11 + ":" + PT11 + "?encryption=none&security=tls&sni=" + _0x4cd35c + "&fp=randomized&type=ws&host=" + _0x4cd35c + "&path=%2F%3Fed%3D2560#CF_V11_" + IP11 + "_" + PT11 + "\nvless://" + _0x3ea3b7 + "@" + IP12 + ":" + PT12 + "?encryption=none&security=tls&sni=" + _0x4cd35c + "&fp=randomized&type=ws&host=" + _0x4cd35c + "&path=%2F%3Fed%3D2560#CF_V12_" + IP12 + "_" + PT12 + "\nvless://" + _0x3ea3b7 + "@" + IP13 + ":" + PT13 + "?encryption=none&security=tls&sni=" + _0x4cd35c + "&fp=randomized&type=ws&host=" + _0x4cd35c + "&path=%2F%3Fed%3D2560#CF_V13_" + IP13 + "_" + PT13);
  const _0x2b9425 = _0x4db5e7.replace(/\n/g, "<br>");
  const _0x1b9105 = "\n<head>\n<meta charset=\"UTF-8\">\n<meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n<link href=\"https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css\" rel=\"stylesheet\" integrity=\"sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH\" crossorigin=\"anonymous\">\n<script src=\"https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js\" integrity=\"sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz\" crossorigin=\"anonymous\"></script>\n<style>\n.limited-width {\n    max-width: 200px;\n    overflow: auto;\n    word-wrap: break-word;\n}\n</style>\n</head>\n<script>\nfunction copyToClipboard(text) {\n  const input = document.createElement('textarea');\n  input.style.position = 'fixed';\n  input.style.opacity = 0;\n  input.value = text;\n  document.body.appendChild(input);\n  input.select();\n  document.execCommand('Copy');\n  document.body.removeChild(input);\n  alert('已复制到剪贴板');\n}\n</script>\n";
  return _0x4cd35c.includes("workers.dev") ? "\n<br>\n<br>\n" + _0x1b9105 + "\n<body>\n<div class=\"container\">\n    <div class=\"row\">\n        <div class=\"col-md-12\">\n            <h1>Cloudflare-workers/pages-vless代理脚本 V25.5.27</h1>\n\t    <hr>\n            <p>" + _0x2b9425 + "</p>\n            <hr>\n\t    <hr>\n\t    <hr>\n            <br>\n            <br>\n            <h3>1：CF-workers-vless+ws节点</h3>\n\t\t\t<table class=\"table\">\n\t\t\t\t<thead>\n\t\t\t\t\t<tr>\n\t\t\t\t\t\t<th>节点特色：</th>\n\t\t\t\t\t\t<th>单节点链接如下：</th>\n\t\t\t\t\t</tr>\n\t\t\t\t</thead>\n\t\t\t\t<tbody>\n\t\t\t\t\t<tr>\n\t\t\t\t\t\t<td class=\"limited-width\">关闭了TLS加密，无视域名阻断</td>\n\t\t\t\t\t\t<td class=\"limited-width\">" + _0x13a204 + "</td>\n\t\t\t\t\t\t<td><button class=\"btn btn-primary\" onclick=\"copyToClipboard('" + _0x13a204 + "')\">点击复制链接</button></td>\n\t\t\t\t\t</tr>\n\t\t\t\t</tbody>\n\t\t\t</table>\n            <h5>客户端参数如下：</h5>\n            <ul>\n                <li>客户端地址(address)：自定义的域名 或者 优选域名 或者 优选IP 或者 反代IP</li>\n                <li>端口(port)：7个http端口可任意选择(80、8080、8880、2052、2082、2086、2095)，或反代IP对应端口</li>\n                <li>用户ID(uuid)：" + _0x3ea3b7 + "</li>\n                <li>传输协议(network)：ws 或者 websocket</li>\n                <li>伪装域名(host)：" + _0x4cd35c + "</li>\n                <li>路径(path)：/?ed=2560</li>\n\t\t<li>传输安全(TLS)：关闭</li>\n            </ul>\n            <hr>\n\t\t\t<hr>\n\t\t\t<hr>\n            <br>\n            <br>\n            <h3>2：CF-workers-vless+ws+tls节点</h3>\n\t\t\t<table class=\"table\">\n\t\t\t\t<thead>\n\t\t\t\t\t<tr>\n\t\t\t\t\t\t<th>节点特色：</th>\n\t\t\t\t\t\t<th>单节点链接如下：</th>\n\t\t\t\t\t</tr>\n\t\t\t\t</thead>\n\t\t\t\t<tbody>\n\t\t\t\t\t<tr>\n\t\t\t\t\t\t<td class=\"limited-width\">启用了TLS加密，<br>如果客户端支持分片(Fragment)功能，建议开启，防止域名阻断</td>\n\t\t\t\t\t\t<td class=\"limited-width\">" + _0x489318 + "</td>\t\n\t\t\t\t\t\t<td><button class=\"btn btn-primary\" onclick=\"copyToClipboard('" + _0x489318 + "')\">点击复制链接</button></td>\n\t\t\t\t\t</tr>\n\t\t\t\t</tbody>\n\t\t\t</table>\n            <h5>客户端参数如下：</h5>\n            <ul>\n                <li>客户端地址(address)：自定义的域名 或者 优选域名 或者 优选IP 或者 反代IP</li>\n                <li>端口(port)：6个https端口可任意选择(443、8443、2053、2083、2087、2096)，或反代IP对应端口</li>\n                <li>用户ID(uuid)：" + _0x3ea3b7 + "</li>\n                <li>传输协议(network)：ws 或者 websocket</li>\n                <li>伪装域名(host)：" + _0x4cd35c + "</li>\n                <li>路径(path)：/?ed=2560</li>\n                <li>传输安全(TLS)：开启</li>\n                <li>跳过证书验证(allowlnsecure)：false</li>\n\t\t\t</ul>\n\t\t\t<hr>\n\t\t\t<hr>\n\t\t\t<hr>\n\t\t\t<br>\t\n\t\t\t<br>\n\t\t\t<h3>3：聚合通用、Clash-meta、Sing-box订阅链接如下：</h3>\n\t\t\t<hr>\n\t\t\t<p>注意：<br>1、默认每个订阅链接包含TLS+非TLS共13个端口节点<br>2、当前workers域名作为订阅链接，需通过代理进行订阅更新<br>3、如使用的客户端不支持分片功能，则TLS节点不可用</p>\n\t\t\t<hr>\n\n\n\t\t\t<table class=\"table\">\n\t\t\t\t\t<thead>\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<th>聚合通用分享链接 (可直接导入客户端)：</th>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t</thead>\n\t\t\t\t\t<tbody>\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<td><button class=\"btn btn-primary\" onclick=\"copyToClipboard('" + _0x4730ab + "')\">点击复制链接</button></td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t</tbody>\n\t\t\t\t</table>\n\n\n   \n\t\t\t<table class=\"table\">\n\t\t\t\t\t<thead>\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<th>聚合通用订阅链接：</th>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t</thead>\n\t\t\t\t\t<tbody>\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<td class=\"limited-width\">" + _0x51a883 + "</td>\t\n\t\t\t\t\t\t\t<td><button class=\"btn btn-primary\" onclick=\"copyToClipboard('" + _0x51a883 + "')\">点击复制链接</button></td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t</tbody>\n\t\t\t\t</table>\t\n\n\t\t\t\t<table class=\"table\">\n\t\t\t\t\t\t<thead>\n\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t<th>Clash-meta订阅链接：</th>\n\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t</thead>\n\t\t\t\t\t\t<tbody>\n\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t<td class=\"limited-width\">" + _0x45caa6 + "</td>\t\n\t\t\t\t\t\t\t\t<td><button class=\"btn btn-primary\" onclick=\"copyToClipboard('" + _0x45caa6 + "')\">点击复制链接</button></td>\n\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t</tbody>\n\t\t\t\t\t</table>\n\n\t\t\t\t\t<table class=\"table\">\n\t\t\t\t\t<thead>\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<th>Sing-box订阅链接：</th>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t</thead>\n\t\t\t\t\t<tbody>\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<td class=\"limited-width\">" + _0x4ab7e3 + "</td>\t\n\t\t\t\t\t\t\t<td><button class=\"btn btn-primary\" onclick=\"copyToClipboard('" + _0x4ab7e3 + "')\">点击复制链接</button></td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t</tbody>\n\t\t\t\t</table>\n\t\t\t\t<br>\n\t\t\t\t<br>\n        </div>\n    </div>\n</div>\n</body>\n" : "\n<br>\n<br>\n" + _0x1b9105 + "\n<body>\n<div class=\"container\">\n    <div class=\"row\">\n        <div class=\"col-md-12\">\n            <h1>Cloudflare-workers/pages-vless代理脚本 V25.5.27</h1>\n\t\t\t<hr>\n            <p>" + _0x2b9425 + "</p>\n            <hr>\n\t\t\t<hr>\n\t\t\t<hr>\n            <br>\n            <br>\n            <h3>1：CF-pages/workers/自定义域-vless+ws+tls节点</h3>\n\t\t\t<table class=\"table\">\n\t\t\t\t<thead>\n\t\t\t\t\t<tr>\n\t\t\t\t\t\t<th>节点特色：</th>\n\t\t\t\t\t\t<th>单节点链接如下：</th>\n\t\t\t\t\t</tr>\n\t\t\t\t</thead>\n\t\t\t\t<tbody>\n\t\t\t\t\t<tr>\n\t\t\t\t\t\t<td class=\"limited-width\">启用了TLS加密，<br>如果客户端支持分片(Fragment)功能，可开启，防止域名阻断</td>\n\t\t\t\t\t\t<td class=\"limited-width\">" + _0x489318 + "</td>\n\t\t\t\t\t\t<td><button class=\"btn btn-primary\" onclick=\"copyToClipboard('" + _0x489318 + "')\">点击复制链接</button></td>\n\t\t\t\t\t</tr>\n\t\t\t\t</tbody>\n\t\t\t</table>\n            <h5>客户端参数如下：</h5>\n            <ul>\n                <li>客户端地址(address)：自定义的域名 或者 优选域名 或者 优选IP 或者 反代IP</li>\n                <li>端口(port)：6个https端口可任意选择(443、8443、2053、2083、2087、2096)，或反代IP对应端口</li>\n                <li>用户ID(uuid)：" + _0x3ea3b7 + "</li>\n                <li>传输协议(network)：ws 或者 websocket</li>\n                <li>伪装域名(host)：" + _0x4cd35c + "</li>\n                <li>路径(path)：/?ed=2560</li>\n                <li>传输安全(TLS)：开启</li>\n                <li>跳过证书验证(allowlnsecure)：false</li>\n\t\t\t</ul>\n            <hr>\n\t\t\t<hr>\n\t\t\t<hr>\n            <br>\n            <br>\n\t\t\t<h3>2：聚合通用、Clash-meta、Sing-box订阅链接如下：</h3>\n\t\t\t<hr>\n\t\t\t<p>注意：以下订阅链接仅6个TLS端口节点</p>\n\t\t\t<hr>\n\n\n\t\t\t<table class=\"table\">\n\t\t\t\t\t<thead>\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<th>聚合通用分享链接 (可直接导入客户端)：</th>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t</thead>\n\t\t\t\t\t<tbody>\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<td><button class=\"btn btn-primary\" onclick=\"copyToClipboard('" + _0xd21820 + "')\">点击复制链接</button></td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t</tbody>\n\t\t\t\t</table>\n\n\n\n\t\t\t<table class=\"table\">\n\t\t\t\t\t<thead>\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<th>聚合通用订阅链接：</th>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t</thead>\n\t\t\t\t\t<tbody>\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<td class=\"limited-width\">" + _0x9db8c6 + "</td>\t\n\t\t\t\t\t\t\t<td><button class=\"btn btn-primary\" onclick=\"copyToClipboard('" + _0x9db8c6 + "')\">点击复制链接</button></td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t</tbody>\n\t\t\t\t</table>\t\n\n\t\t\t\t<table class=\"table\">\n\t\t\t\t\t\t<thead>\n\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t<th>Clash-meta订阅链接：</th>\n\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t</thead>\n\t\t\t\t\t\t<tbody>\n\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t<td class=\"limited-width\">" + _0x560677 + "</td>\t\n\t\t\t\t\t\t\t\t<td><button class=\"btn btn-primary\" onclick=\"copyToClipboard('" + _0x560677 + "')\">点击复制链接</button></td>\n\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t</tbody>\n\t\t\t\t\t</table>\n\n\t\t\t\t\t<table class=\"table\">\n\t\t\t\t\t<thead>\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<th>Sing-box订阅链接：</th>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t</thead>\n\t\t\t\t\t<tbody>\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<td class=\"limited-width\">" + _0x590a4d + "</td>\t\n\t\t\t\t\t\t\t<td><button class=\"btn btn-primary\" onclick=\"copyToClipboard('" + _0x590a4d + "')\">点击复制链接</button></td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t</tbody>\n\t\t\t\t</table>\n\t\t\t\t<br>\n\t\t\t\t<br>\n        </div>\n    </div>\n</div>\n</body>\n";
}
function gettyConfig(_0x422311, _0x1f099e) {
  const _0x3bc371 = btoa("vless://" + _0x422311 + "@" + IP1 + ":" + PT1 + "?encryption=none&security=none&fp=randomized&type=ws&host=" + _0x1f099e + "&path=%2F%3Fed%3D2560#CF_V1_" + IP1 + "_" + PT1 + "\nvless://" + _0x422311 + "@" + IP2 + ":" + PT2 + "?encryption=none&security=none&fp=randomized&type=ws&host=" + _0x1f099e + "&path=%2F%3Fed%3D2560#CF_V2_" + IP2 + "_" + PT2 + "\nvless://" + _0x422311 + "@" + IP3 + ":" + PT3 + "?encryption=none&security=none&fp=randomized&type=ws&host=" + _0x1f099e + "&path=%2F%3Fed%3D2560#CF_V3_" + IP3 + "_" + PT3 + "\nvless://" + _0x422311 + "@" + IP4 + ":" + PT4 + "?encryption=none&security=none&fp=randomized&type=ws&host=" + _0x1f099e + "&path=%2F%3Fed%3D2560#CF_V4_" + IP4 + "_" + PT4 + "\nvless://" + _0x422311 + "@" + IP5 + ":" + PT5 + "?encryption=none&security=none&fp=randomized&type=ws&host=" + _0x1f099e + "&path=%2F%3Fed%3D2560#CF_V5_" + IP5 + "_" + PT5 + "\nvless://" + _0x422311 + "@" + IP6 + ":" + PT6 + "?encryption=none&security=none&fp=randomized&type=ws&host=" + _0x1f099e + "&path=%2F%3Fed%3D2560#CF_V6_" + IP6 + "_" + PT6 + "\nvless://" + _0x422311 + "@" + IP7 + ":" + PT7 + "?encryption=none&security=none&fp=randomized&type=ws&host=" + _0x1f099e + "&path=%2F%3Fed%3D2560#CF_V7_" + IP7 + "_" + PT7 + "\nvless://" + _0x422311 + "@" + IP8 + ":" + PT8 + "?encryption=none&security=tls&sni=" + _0x1f099e + "&fp=randomized&type=ws&host=" + _0x1f099e + "&path=%2F%3Fed%3D2560#CF_V8_" + IP8 + "_" + PT8 + "\nvless://" + _0x422311 + "@" + IP9 + ":" + PT9 + "?encryption=none&security=tls&sni=" + _0x1f099e + "&fp=randomized&type=ws&host=" + _0x1f099e + "&path=%2F%3Fed%3D2560#CF_V9_" + IP9 + "_" + PT9 + "\nvless://" + _0x422311 + "@" + IP10 + ":" + PT10 + "?encryption=none&security=tls&sni=" + _0x1f099e + "&fp=randomized&type=ws&host=" + _0x1f099e + "&path=%2F%3Fed%3D2560#CF_V10_" + IP10 + "_" + PT10 + "\nvless://" + _0x422311 + "@" + IP11 + ":" + PT11 + "?encryption=none&security=tls&sni=" + _0x1f099e + "&fp=randomized&type=ws&host=" + _0x1f099e + "&path=%2F%3Fed%3D2560#CF_V11_" + IP11 + "_" + PT11 + "\nvless://" + _0x422311 + "@" + IP12 + ":" + PT12 + "?encryption=none&security=tls&sni=" + _0x1f099e + "&fp=randomized&type=ws&host=" + _0x1f099e + "&path=%2F%3Fed%3D2560#CF_V12_" + IP12 + "_" + PT12 + "\nvless://" + _0x422311 + "@" + IP13 + ":" + PT13 + "?encryption=none&security=tls&sni=" + _0x1f099e + "&fp=randomized&type=ws&host=" + _0x1f099e + "&path=%2F%3Fed%3D2560#CF_V13_" + IP13 + "_" + PT13);
  return "" + _0x3bc371;
}
function getclConfig(_0x3068e0, _0x1e0b8c) {
  return "\nport: 7890\nallow-lan: true\nmode: rule\nlog-level: info\nunified-delay: true\nglobal-client-fingerprint: chrome\ndns:\n  enable: false\n  listen: :53\n  ipv6: true\n  enhanced-mode: fake-ip\n  fake-ip-range: 198.18.0.1/16\n  default-nameserver: \n    - 223.5.5.5\n    - 114.114.114.114\n    - 8.8.8.8\n  nameserver:\n    - https://dns.alidns.com/dns-query\n    - https://doh.pub/dns-query\n  fallback:\n    - https://1.0.0.1/dns-query\n    - tls://dns.google\n  fallback-filter:\n    geoip: true\n    geoip-code: CN\n    ipcidr:\n      - 240.0.0.0/4\n\nproxies:\n- name: CF_V1_" + IP1 + "_" + PT1 + "\n  type: vless\n  server: " + IP1.replace(/[\[\]]/g, "") + "\n  port: " + PT1 + "\n  uuid: " + _0x3068e0 + "\n  udp: false\n  tls: false\n  network: ws\n  ws-opts:\n    path: \"/?ed=2560\"\n    headers:\n      Host: " + _0x1e0b8c + "\n\n- name: CF_V2_" + IP2 + "_" + PT2 + "\n  type: vless\n  server: " + IP2.replace(/[\[\]]/g, "") + "\n  port: " + PT2 + "\n  uuid: " + _0x3068e0 + "\n  udp: false\n  tls: false\n  network: ws\n  ws-opts:\n    path: \"/?ed=2560\"\n    headers:\n      Host: " + _0x1e0b8c + "\n\n- name: CF_V3_" + IP3 + "_" + PT3 + "\n  type: vless\n  server: " + IP3.replace(/[\[\]]/g, "") + "\n  port: " + PT3 + "\n  uuid: " + _0x3068e0 + "\n  udp: false\n  tls: false\n  network: ws\n  ws-opts:\n    path: \"/?ed=2560\"\n    headers:\n      Host: " + _0x1e0b8c + "\n\n- name: CF_V4_" + IP4 + "_" + PT4 + "\n  type: vless\n  server: " + IP4.replace(/[\[\]]/g, "") + "\n  port: " + PT4 + "\n  uuid: " + _0x3068e0 + "\n  udp: false\n  tls: false\n  network: ws\n  ws-opts:\n    path: \"/?ed=2560\"\n    headers:\n      Host: " + _0x1e0b8c + "\n\n- name: CF_V5_" + IP5 + "_" + PT5 + "\n  type: vless\n  server: " + IP5.replace(/[\[\]]/g, "") + "\n  port: " + PT5 + "\n  uuid: " + _0x3068e0 + "\n  udp: false\n  tls: false\n  network: ws\n  ws-opts:\n    path: \"/?ed=2560\"\n    headers:\n      Host: " + _0x1e0b8c + "\n\n- name: CF_V6_" + IP6 + "_" + PT6 + "\n  type: vless\n  server: " + IP6.replace(/[\[\]]/g, "") + "\n  port: " + PT6 + "\n  uuid: " + _0x3068e0 + "\n  udp: false\n  tls: false\n  network: ws\n  ws-opts:\n    path: \"/?ed=2560\"\n    headers:\n      Host: " + _0x1e0b8c + "\n\n- name: CF_V7_" + IP7 + "_" + PT7 + "\n  type: vless\n  server: " + IP7.replace(/[\[\]]/g, "") + "\n  port: " + PT7 + "\n  uuid: " + _0x3068e0 + "\n  udp: false\n  tls: false\n  network: ws\n  servername: " + _0x1e0b8c + "\n  ws-opts:\n    path: \"/?ed=2560\"\n    headers:\n      Host: " + _0x1e0b8c + "\n\n- name: CF_V8_" + IP8 + "_" + PT8 + "\n  type: vless\n  server: " + IP8.replace(/[\[\]]/g, "") + "\n  port: " + PT8 + "\n  uuid: " + _0x3068e0 + "\n  udp: false\n  tls: true\n  network: ws\n  servername: " + _0x1e0b8c + "\n  ws-opts:\n    path: \"/?ed=2560\"\n    headers:\n      Host: " + _0x1e0b8c + "\n\n- name: CF_V9_" + IP9 + "_" + PT9 + "\n  type: vless\n  server: " + IP9.replace(/[\[\]]/g, "") + "\n  port: " + PT9 + "\n  uuid: " + _0x3068e0 + "\n  udp: false\n  tls: true\n  network: ws\n  servername: " + _0x1e0b8c + "\n  ws-opts:\n    path: \"/?ed=2560\"\n    headers:\n      Host: " + _0x1e0b8c + "\n\n- name: CF_V10_" + IP10 + "_" + PT10 + "\n  type: vless\n  server: " + IP10.replace(/[\[\]]/g, "") + "\n  port: " + PT10 + "\n  uuid: " + _0x3068e0 + "\n  udp: false\n  tls: true\n  network: ws\n  servername: " + _0x1e0b8c + "\n  ws-opts:\n    path: \"/?ed=2560\"\n    headers:\n      Host: " + _0x1e0b8c + "\n\n- name: CF_V11_" + IP11 + "_" + PT11 + "\n  type: vless\n  server: " + IP11.replace(/[\[\]]/g, "") + "\n  port: " + PT11 + "\n  uuid: " + _0x3068e0 + "\n  udp: false\n  tls: true\n  network: ws\n  servername: " + _0x1e0b8c + "\n  ws-opts:\n    path: \"/?ed=2560\"\n    headers:\n      Host: " + _0x1e0b8c + "\n\n- name: CF_V12_" + IP12 + "_" + PT12 + "\n  type: vless\n  server: " + IP12.replace(/[\[\]]/g, "") + "\n  port: " + PT12 + "\n  uuid: " + _0x3068e0 + "\n  udp: false\n  tls: true\n  network: ws\n  servername: " + _0x1e0b8c + "\n  ws-opts:\n    path: \"/?ed=2560\"\n    headers:\n      Host: " + _0x1e0b8c + "\n\n- name: CF_V13_" + IP13 + "_" + PT13 + "\n  type: vless\n  server: " + IP13.replace(/[\[\]]/g, "") + "\n  port: " + PT13 + "\n  uuid: " + _0x3068e0 + "\n  udp: false\n  tls: true\n  network: ws\n  servername: " + _0x1e0b8c + "\n  ws-opts:\n    path: \"/?ed=2560\"\n    headers:\n      Host: " + _0x1e0b8c + "\n\nproxy-groups:\n- name: 负载均衡\n  type: load-balance\n  url: http://www.gstatic.com/generate_204\n  interval: 300\n  proxies:\n    - CF_V1_" + IP1 + "_" + PT1 + "\n    - CF_V2_" + IP2 + "_" + PT2 + "\n    - CF_V3_" + IP3 + "_" + PT3 + "\n    - CF_V4_" + IP4 + "_" + PT4 + "\n    - CF_V5_" + IP5 + "_" + PT5 + "\n    - CF_V6_" + IP6 + "_" + PT6 + "\n    - CF_V7_" + IP7 + "_" + PT7 + "\n    - CF_V8_" + IP8 + "_" + PT8 + "\n    - CF_V9_" + IP9 + "_" + PT9 + "\n    - CF_V10_" + IP10 + "_" + PT10 + "\n    - CF_V11_" + IP11 + "_" + PT11 + "\n    - CF_V12_" + IP12 + "_" + PT12 + "\n    - CF_V13_" + IP13 + "_" + PT13 + "\n\n- name: 自动选择\n  type: url-test\n  url: http://www.gstatic.com/generate_204\n  interval: 300\n  tolerance: 50\n  proxies:\n    - CF_V1_" + IP1 + "_" + PT1 + "\n    - CF_V2_" + IP2 + "_" + PT2 + "\n    - CF_V3_" + IP3 + "_" + PT3 + "\n    - CF_V4_" + IP4 + "_" + PT4 + "\n    - CF_V5_" + IP5 + "_" + PT5 + "\n    - CF_V6_" + IP6 + "_" + PT6 + "\n    - CF_V7_" + IP7 + "_" + PT7 + "\n    - CF_V8_" + IP8 + "_" + PT8 + "\n    - CF_V9_" + IP9 + "_" + PT9 + "\n    - CF_V10_" + IP10 + "_" + PT10 + "\n    - CF_V11_" + IP11 + "_" + PT11 + "\n    - CF_V12_" + IP12 + "_" + PT12 + "\n    - CF_V13_" + IP13 + "_" + PT13 + "\n\n- name: 🌍选择代理\n  type: select\n  proxies:\n    - 负载均衡\n    - 自动选择\n    - DIRECT\n    - CF_V1_" + IP1 + "_" + PT1 + "\n    - CF_V2_" + IP2 + "_" + PT2 + "\n    - CF_V3_" + IP3 + "_" + PT3 + "\n    - CF_V4_" + IP4 + "_" + PT4 + "\n    - CF_V5_" + IP5 + "_" + PT5 + "\n    - CF_V6_" + IP6 + "_" + PT6 + "\n    - CF_V7_" + IP7 + "_" + PT7 + "\n    - CF_V8_" + IP8 + "_" + PT8 + "\n    - CF_V9_" + IP9 + "_" + PT9 + "\n    - CF_V10_" + IP10 + "_" + PT10 + "\n    - CF_V11_" + IP11 + "_" + PT11 + "\n    - CF_V12_" + IP12 + "_" + PT12 + "\n    - CF_V13_" + IP13 + "_" + PT13 + "\n\nrules:\n  - GEOIP,LAN,DIRECT\n  - GEOIP,CN,DIRECT\n  - MATCH,🌍选择代理";
}
function getsbConfig(_0x997037, _0x220a42) {
  return "{\n\t  \"log\": {\n\t\t\"disabled\": false,\n\t\t\"level\": \"info\",\n\t\t\"timestamp\": true\n\t  },\n\t  \"experimental\": {\n\t\t\"clash_api\": {\n\t\t  \"external_controller\": \"127.0.0.1:9090\",\n\t\t  \"external_ui\": \"ui\",\n\t\t  \"external_ui_download_url\": \"\",\n\t\t  \"external_ui_download_detour\": \"\",\n\t\t  \"secret\": \"\",\n\t\t  \"default_mode\": \"Rule\"\n\t\t},\n\t\t\"cache_file\": {\n\t\t  \"enabled\": true,\n\t\t  \"path\": \"cache.db\",\n\t\t  \"store_fakeip\": true\n\t\t}\n\t  },\n\t  \"dns\": {\n\t\t\"servers\": [\n\t\t  {\n\t\t\t\"tag\": \"proxydns\",\n\t\t\t\"address\": \"tls://8.8.8.8/dns-query\",\n\t\t\t\"detour\": \"select\"\n\t\t  },\n\t\t  {\n\t\t\t\"tag\": \"localdns\",\n\t\t\t\"address\": \"h3://223.5.5.5/dns-query\",\n\t\t\t\"detour\": \"direct\"\n\t\t  },\n\t\t  {\n\t\t\t\"tag\": \"dns_fakeip\",\n\t\t\t\"address\": \"fakeip\"\n\t\t  }\n\t\t],\n\t\t\"rules\": [\n\t\t  {\n\t\t\t\"outbound\": \"any\",\n\t\t\t\"server\": \"localdns\",\n\t\t\t\"disable_cache\": true\n\t\t  },\n\t\t  {\n\t\t\t\"clash_mode\": \"Global\",\n\t\t\t\"server\": \"proxydns\"\n\t\t  },\n\t\t  {\n\t\t\t\"clash_mode\": \"Direct\",\n\t\t\t\"server\": \"localdns\"\n\t\t  },\n\t\t  {\n\t\t\t\"rule_set\": \"geosite-cn\",\n\t\t\t\"server\": \"localdns\"\n\t\t  },\n\t\t  {\n\t\t\t\"rule_set\": \"geosite-geolocation-!cn\",\n\t\t\t\"server\": \"proxydns\"\n\t\t  },\n\t\t  {\n\t\t\t\"rule_set\": \"geosite-geolocation-!cn\",\n\t\t\t\"query_type\": [\n\t\t\t  \"A\",\n\t\t\t  \"AAAA\"\n\t\t\t],\n\t\t\t\"server\": \"dns_fakeip\"\n\t\t  }\n\t\t],\n\t\t\"fakeip\": {\n\t\t  \"enabled\": true,\n\t\t  \"inet4_range\": \"198.18.0.0/15\",\n\t\t  \"inet6_range\": \"fc00::/18\"\n\t\t},\n\t\t\"independent_cache\": true,\n\t\t\"final\": \"proxydns\"\n\t  },\n\t  \"inbounds\": [\n\t\t{\n\t\t  \"type\": \"tun\",\n                  \"tag\": \"tun-in\",\n\t\t  \"address\": [\n                    \"172.19.0.1/30\",\n\t\t    \"fd00::1/126\"\n      ],\n\t\t  \"auto_route\": true,\n\t\t  \"strict_route\": true,\n\t\t  \"sniff\": true,\n\t\t  \"sniff_override_destination\": true,\n\t\t  \"domain_strategy\": \"prefer_ipv4\"\n\t\t}\n\t  ],\n\t  \"outbounds\": [\n\t\t{\n\t\t  \"tag\": \"select\",\n\t\t  \"type\": \"selector\",\n\t\t  \"default\": \"auto\",\n\t\t  \"outbounds\": [\n\t\t\t\"auto\",\n\t\t\t\"CF_V1_" + IP1 + "_" + PT1 + "\",\n\t\t\t\"CF_V2_" + IP2 + "_" + PT2 + "\",\n\t\t\t\"CF_V3_" + IP3 + "_" + PT3 + "\",\n\t\t\t\"CF_V4_" + IP4 + "_" + PT4 + "\",\n\t\t\t\"CF_V5_" + IP5 + "_" + PT5 + "\",\n\t\t\t\"CF_V6_" + IP6 + "_" + PT6 + "\",\n\t\t\t\"CF_V7_" + IP7 + "_" + PT7 + "\",\n\t\t\t\"CF_V8_" + IP8 + "_" + PT8 + "\",\n\t\t\t\"CF_V9_" + IP9 + "_" + PT9 + "\",\n\t\t\t\"CF_V10_" + IP10 + "_" + PT10 + "\",\n\t\t\t\"CF_V11_" + IP11 + "_" + PT11 + "\",\n\t\t\t\"CF_V12_" + IP12 + "_" + PT12 + "\",\n\t\t\t\"CF_V13_" + IP13 + "_" + PT13 + "\"\n\t\t  ]\n\t\t},\n\t\t{\n\t\t  \"server\": \"" + IP1 + "\",\n\t\t  \"server_port\": " + PT1 + ",\n\t\t  \"tag\": \"CF_V1_" + IP1 + "_" + PT1 + "\",\n\t\t  \"packet_encoding\": \"packetaddr\",\n\t\t  \"transport\": {\n\t\t\t\"headers\": {\n\t\t\t  \"Host\": [\n\t\t\t\t\"" + _0x220a42 + "\"\n\t\t\t  ]\n\t\t\t},\n\t\t\t\"path\": \"/?ed=2560\",\n\t\t\t\"type\": \"ws\"\n\t\t  },\n\t\t  \"type\": \"vless\",\n\t\t  \"uuid\": \"" + _0x997037 + "\"\n\t\t},\n\t\t{\n\t\t  \"server\": \"" + IP2 + "\",\n\t\t  \"server_port\": " + PT2 + ",\n\t\t  \"tag\": \"CF_V2_" + IP2 + "_" + PT2 + "\",\n\t\t  \"packet_encoding\": \"packetaddr\",\n\t\t  \"transport\": {\n\t\t\t\"headers\": {\n\t\t\t  \"Host\": [\n\t\t\t\t\"" + _0x220a42 + "\"\n\t\t\t  ]\n\t\t\t},\n\t\t\t\"path\": \"/?ed=2560\",\n\t\t\t\"type\": \"ws\"\n\t\t  },\n\t\t  \"type\": \"vless\",\n\t\t  \"uuid\": \"" + _0x997037 + "\"\n\t\t},\n\t\t{\n\t\t  \"server\": \"" + IP3 + "\",\n\t\t  \"server_port\": " + PT3 + ",\n\t\t  \"tag\": \"CF_V3_" + IP3 + "_" + PT3 + "\",\n\t\t  \"packet_encoding\": \"packetaddr\",\n\t\t  \"transport\": {\n\t\t\t\"headers\": {\n\t\t\t  \"Host\": [\n\t\t\t\t\"" + _0x220a42 + "\"\n\t\t\t  ]\n\t\t\t},\n\t\t\t\"path\": \"/?ed=2560\",\n\t\t\t\"type\": \"ws\"\n\t\t  },\n\t\t  \"type\": \"vless\",\n\t\t  \"uuid\": \"" + _0x997037 + "\"\n\t\t},\n\t\t{\n\t\t  \"server\": \"" + IP4 + "\",\n\t\t  \"server_port\": " + PT4 + ",\n\t\t  \"tag\": \"CF_V4_" + IP4 + "_" + PT4 + "\",\n\t\t  \"packet_encoding\": \"packetaddr\",\n\t\t  \"transport\": {\n\t\t\t\"headers\": {\n\t\t\t  \"Host\": [\n\t\t\t\t\"" + _0x220a42 + "\"\n\t\t\t  ]\n\t\t\t},\n\t\t\t\"path\": \"/?ed=2560\",\n\t\t\t\"type\": \"ws\"\n\t\t  },\n\t\t  \"type\": \"vless\",\n\t\t  \"uuid\": \"" + _0x997037 + "\"\n\t\t},\n\t\t{\n\t\t  \"server\": \"" + IP5 + "\",\n\t\t  \"server_port\": " + PT5 + ",\n\t\t  \"tag\": \"CF_V5_" + IP5 + "_" + PT5 + "\",\n\t\t  \"packet_encoding\": \"packetaddr\",\n\t\t  \"transport\": {\n\t\t\t\"headers\": {\n\t\t\t  \"Host\": [\n\t\t\t\t\"" + _0x220a42 + "\"\n\t\t\t  ]\n\t\t\t},\n\t\t\t\"path\": \"/?ed=2560\",\n\t\t\t\"type\": \"ws\"\n\t\t  },\n\t\t  \"type\": \"vless\",\n\t\t  \"uuid\": \"" + _0x997037 + "\"\n\t\t},\n\t\t{\n\t\t  \"server\": \"" + IP6 + "\",\n\t\t  \"server_port\": " + PT6 + ",\n\t\t  \"tag\": \"CF_V6_" + IP6 + "_" + PT6 + "\",\n\t\t  \"packet_encoding\": \"packetaddr\",\n\t\t  \"transport\": {\n\t\t\t\"headers\": {\n\t\t\t  \"Host\": [\n\t\t\t\t\"" + _0x220a42 + "\"\n\t\t\t  ]\n\t\t\t},\n\t\t\t\"path\": \"/?ed=2560\",\n\t\t\t\"type\": \"ws\"\n\t\t  },\n\t\t  \"type\": \"vless\",\n\t\t  \"uuid\": \"" + _0x997037 + "\"\n\t\t},\n\t\t{\n\t\t  \"server\": \"" + IP7 + "\",\n\t\t  \"server_port\": " + PT7 + ",\n\t\t  \"tag\": \"CF_V7_" + IP7 + "_" + PT7 + "\",\n\t\t  \"packet_encoding\": \"packetaddr\",\n\t\t  \"transport\": {\n\t\t\t\"headers\": {\n\t\t\t  \"Host\": [\n\t\t\t\t\"" + _0x220a42 + "\"\n\t\t\t  ]\n\t\t\t},\n\t\t\t\"path\": \"/?ed=2560\",\n\t\t\t\"type\": \"ws\"\n\t\t  },\n\t\t  \"type\": \"vless\",\n\t\t  \"uuid\": \"" + _0x997037 + "\"\n\t\t},\n\t\t{     \n\t\t  \"server\": \"" + IP8 + "\",\n\t\t  \"server_port\": " + PT8 + ",\n\t\t  \"tag\": \"CF_V8_" + IP8 + "_" + PT8 + "\",\n\t\t  \"tls\": {\n\t\t\t\"enabled\": true,\n\t\t\t\"server_name\": \"" + _0x220a42 + "\",\n\t\t\t\"insecure\": false,\n\t\t\t\"utls\": {\n\t\t\t  \"enabled\": true,\n\t\t\t  \"fingerprint\": \"chrome\"\n\t\t\t}\n\t\t  },\n\t\t  \"packet_encoding\": \"packetaddr\",\n\t\t  \"transport\": {\n\t\t\t\"headers\": {\n\t\t\t  \"Host\": [\n\t\t\t\t\"" + _0x220a42 + "\"\n\t\t\t  ]\n\t\t\t},\n\t\t\t\"path\": \"/?ed=2560\",\n\t\t\t\"type\": \"ws\"\n\t\t  },\n\t\t  \"type\": \"vless\",\n\t\t  \"uuid\": \"" + _0x997037 + "\"\n\t\t},\n\t\t{\n\t\t  \"server\": \"" + IP9 + "\",\n\t\t  \"server_port\": " + PT9 + ",\n\t\t  \"tag\": \"CF_V9_" + IP9 + "_" + PT9 + "\",\n\t\t  \"tls\": {\n\t\t\t\"enabled\": true,\n\t\t\t\"server_name\": \"" + _0x220a42 + "\",\n\t\t\t\"insecure\": false,\n\t\t\t\"utls\": {\n\t\t\t  \"enabled\": true,\n\t\t\t  \"fingerprint\": \"chrome\"\n\t\t\t}\n\t\t  },\n\t\t  \"packet_encoding\": \"packetaddr\",\n\t\t  \"transport\": {\n\t\t\t\"headers\": {\n\t\t\t  \"Host\": [\n\t\t\t\t\"" + _0x220a42 + "\"\n\t\t\t  ]\n\t\t\t},\n\t\t\t\"path\": \"/?ed=2560\",\n\t\t\t\"type\": \"ws\"\n\t\t  },\n\t\t  \"type\": \"vless\",\n\t\t  \"uuid\": \"" + _0x997037 + "\"\n\t\t},\n\t\t{\n\t\t  \"server\": \"" + IP10 + "\",\n\t\t  \"server_port\": " + PT10 + ",\n\t\t  \"tag\": \"CF_V10_" + IP10 + "_" + PT10 + "\",\n\t\t  \"tls\": {\n\t\t\t\"enabled\": true,\n\t\t\t\"server_name\": \"" + _0x220a42 + "\",\n\t\t\t\"insecure\": false,\n\t\t\t\"utls\": {\n\t\t\t  \"enabled\": true,\n\t\t\t  \"fingerprint\": \"chrome\"\n\t\t\t}\n\t\t  },\n\t\t  \"packet_encoding\": \"packetaddr\",\n\t\t  \"transport\": {\n\t\t\t\"headers\": {\n\t\t\t  \"Host\": [\n\t\t\t\t\"" + _0x220a42 + "\"\n\t\t\t  ]\n\t\t\t},\n\t\t\t\"path\": \"/?ed=2560\",\n\t\t\t\"type\": \"ws\"\n\t\t  },\n\t\t  \"type\": \"vless\",\n\t\t  \"uuid\": \"" + _0x997037 + "\"\n\t\t},\n\t\t{\n\t\t  \"server\": \"" + IP11 + "\",\n\t\t  \"server_port\": " + PT11 + ",\n\t\t  \"tag\": \"CF_V11_" + IP11 + "_" + PT11 + "\",\n\t\t  \"tls\": {\n\t\t\t\"enabled\": true,\n\t\t\t\"server_name\": \"" + _0x220a42 + "\",\n\t\t\t\"insecure\": false,\n\t\t\t\"utls\": {\n\t\t\t  \"enabled\": true,\n\t\t\t  \"fingerprint\": \"chrome\"\n\t\t\t}\n\t\t  },\n\t\t  \"packet_encoding\": \"packetaddr\",\n\t\t  \"transport\": {\n\t\t\t\"headers\": {\n\t\t\t  \"Host\": [\n\t\t\t\t\"" + _0x220a42 + "\"\n\t\t\t  ]\n\t\t\t},\n\t\t\t\"path\": \"/?ed=2560\",\n\t\t\t\"type\": \"ws\"\n\t\t  },\n\t\t  \"type\": \"vless\",\n\t\t  \"uuid\": \"" + _0x997037 + "\"\n\t\t},\n\t\t{\n\t\t  \"server\": \"" + IP12 + "\",\n\t\t  \"server_port\": " + PT12 + ",\n\t\t  \"tag\": \"CF_V12_" + IP12 + "_" + PT12 + "\",\n\t\t  \"tls\": {\n\t\t\t\"enabled\": true,\n\t\t\t\"server_name\": \"" + _0x220a42 + "\",\n\t\t\t\"insecure\": false,\n\t\t\t\"utls\": {\n\t\t\t  \"enabled\": true,\n\t\t\t  \"fingerprint\": \"chrome\"\n\t\t\t}\n\t\t  },\n\t\t  \"packet_encoding\": \"packetaddr\",\n\t\t  \"transport\": {\n\t\t\t\"headers\": {\n\t\t\t  \"Host\": [\n\t\t\t\t\"" + _0x220a42 + "\"\n\t\t\t  ]\n\t\t\t},\n\t\t\t\"path\": \"/?ed=2560\",\n\t\t\t\"type\": \"ws\"\n\t\t  },\n\t\t  \"type\": \"vless\",\n\t\t  \"uuid\": \"" + _0x997037 + "\"\n\t\t},\n\t\t{\n\t\t  \"server\": \"" + IP13 + "\",\n\t\t  \"server_port\": " + PT13 + ",\n\t\t  \"tag\": \"CF_V13_" + IP13 + "_" + PT13 + "\",\n\t\t  \"tls\": {\n\t\t\t\"enabled\": true,\n\t\t\t\"server_name\": \"" + _0x220a42 + "\",\n\t\t\t\"insecure\": false,\n\t\t\t\"utls\": {\n\t\t\t  \"enabled\": true,\n\t\t\t  \"fingerprint\": \"chrome\"\n\t\t\t}\n\t\t  },\n\t\t  \"packet_encoding\": \"packetaddr\",\n\t\t  \"transport\": {\n\t\t\t\"headers\": {\n\t\t\t  \"Host\": [\n\t\t\t\t\"" + _0x220a42 + "\"\n\t\t\t  ]\n\t\t\t},\n\t\t\t\"path\": \"/?ed=2560\",\n\t\t\t\"type\": \"ws\"\n\t\t  },\n\t\t  \"type\": \"vless\",\n\t\t  \"uuid\": \"" + _0x997037 + "\"\n\t\t},\n\t\t{\n\t\t  \"tag\": \"direct\",\n\t\t  \"type\": \"direct\"\n\t\t},\n\t\t{\n\t\t  \"tag\": \"auto\",\n\t\t  \"type\": \"urltest\",\n\t\t  \"outbounds\": [\n\t\t\t\"CF_V1_" + IP1 + "_" + PT1 + "\",\n\t\t\t\"CF_V2_" + IP2 + "_" + PT2 + "\",\n\t\t\t\"CF_V3_" + IP3 + "_" + PT3 + "\",\n\t\t\t\"CF_V4_" + IP4 + "_" + PT4 + "\",\n\t\t\t\"CF_V5_" + IP5 + "_" + PT5 + "\",\n\t\t\t\"CF_V6_" + IP6 + "_" + PT6 + "\",\n\t\t\t\"CF_V7_" + IP7 + "_" + PT7 + "\",\n\t\t\t\"CF_V8_" + IP8 + "_" + PT8 + "\",\n\t\t\t\"CF_V9_" + IP9 + "_" + PT9 + "\",\n\t\t\t\"CF_V10_" + IP10 + "_" + PT10 + "\",\n\t\t\t\"CF_V11_" + IP11 + "_" + PT11 + "\",\n\t\t\t\"CF_V12_" + IP12 + "_" + PT12 + "\",\n\t\t\t\"CF_V13_" + IP13 + "_" + PT13 + "\"\n\t\t  ],\n\t\t  \"url\": \"https://www.gstatic.com/generate_204\",\n\t\t  \"interval\": \"1m\",\n\t\t  \"tolerance\": 50,\n\t\t  \"interrupt_exist_connections\": false\n\t\t}\n\t  ],\n\t  \"route\": {\n\t\t\"rule_set\": [\n\t\t  {\n\t\t\t\"tag\": \"geosite-geolocation-!cn\",\n\t\t\t\"type\": \"remote\",\n\t\t\t\"format\": \"binary\",\n\t\t\t\"url\": \"https://cdn.jsdelivr.net/gh/MetaCubeX/meta-rules-dat@sing/geo/geosite/geolocation-!cn.srs\",\n\t\t\t\"download_detour\": \"select\",\n\t\t\t\"update_interval\": \"1d\"\n\t\t  },\n\t\t  {\n\t\t\t\"tag\": \"geosite-cn\",\n\t\t\t\"type\": \"remote\",\n\t\t\t\"format\": \"binary\",\n\t\t\t\"url\": \"https://cdn.jsdelivr.net/gh/MetaCubeX/meta-rules-dat@sing/geo/geosite/geolocation-cn.srs\",\n\t\t\t\"download_detour\": \"select\",\n\t\t\t\"update_interval\": \"1d\"\n\t\t  },\n\t\t  {\n\t\t\t\"tag\": \"geoip-cn\",\n\t\t\t\"type\": \"remote\",\n\t\t\t\"format\": \"binary\",\n\t\t\t\"url\": \"https://cdn.jsdelivr.net/gh/MetaCubeX/meta-rules-dat@sing/geo/geoip/cn.srs\",\n\t\t\t\"download_detour\": \"select\",\n\t\t\t\"update_interval\": \"1d\"\n\t\t  }\n\t\t],\n\t\t\"auto_detect_interface\": true,\n\t\t\"final\": \"select\",\n\t\t\"rules\": [\n                         {\n                        \"inbound\": \"tun-in\",\n                        \"action\": \"sniff\"\n                         },\n                          {\n                        \"protocol\": \"dns\",\n                           \"action\": \"hijack-dns\"\n                         },\n                        {\n                        \"port\": 443,\n                        \"network\": \"udp\",\n                        \"action\": \"reject\"\n                         },\n\t\t  {\n\t\t\t\"clash_mode\": \"Direct\",\n\t\t\t\"outbound\": \"direct\"\n\t\t  },\n\t\t  {\n\t\t\t\"clash_mode\": \"Global\",\n\t\t\t\"outbound\": \"select\"\n\t\t  },\n\t\t  {\n\t\t\t\"rule_set\": \"geoip-cn\",\n\t\t\t\"outbound\": \"direct\"\n\t\t  },\n\t\t  {\n\t\t\t\"rule_set\": \"geosite-cn\",\n\t\t\t\"outbound\": \"direct\"\n\t\t  },\n\t\t  {\n\t\t\t\"ip_is_private\": true,\n\t\t\t\"outbound\": \"direct\"\n\t\t  },\n\t\t  {\n\t\t\t\"rule_set\": \"geosite-geolocation-!cn\",\n\t\t\t\"outbound\": \"select\"\n\t\t  }\n\t\t]\n\t  },\n\t  \"ntp\": {\n\t\t\"enabled\": true,\n\t\t\"server\": \"time.apple.com\",\n\t\t\"server_port\": 123,\n\t\t\"interval\": \"30m\",\n\t\t\"detour\": \"direct\"\n\t  }\n\t}";
}
function getptyConfig(_0x4b0db7, _0x5272a8) {
  const _0x3b5cb9 = btoa("vless://" + _0x4b0db7 + "@" + IP8 + ":" + PT8 + "?encryption=none&security=tls&sni=" + _0x5272a8 + "&fp=randomized&type=ws&host=" + _0x5272a8 + "&path=%2F%3Fed%3D2560#CF_V8_" + IP8 + "_" + PT8 + "\nvless://" + _0x4b0db7 + "@" + IP9 + ":" + PT9 + "?encryption=none&security=tls&sni=" + _0x5272a8 + "&fp=randomized&type=ws&host=" + _0x5272a8 + "&path=%2F%3Fed%3D2560#CF_V9_" + IP9 + "_" + PT9 + "\nvless://" + _0x4b0db7 + "@" + IP10 + ":" + PT10 + "?encryption=none&security=tls&sni=" + _0x5272a8 + "&fp=randomized&type=ws&host=" + _0x5272a8 + "&path=%2F%3Fed%3D2560#CF_V10_" + IP10 + "_" + PT10 + "\nvless://" + _0x4b0db7 + "@" + IP11 + ":" + PT11 + "?encryption=none&security=tls&sni=" + _0x5272a8 + "&fp=randomized&type=ws&host=" + _0x5272a8 + "&path=%2F%3Fed%3D2560#CF_V11_" + IP11 + "_" + PT11 + "\nvless://" + _0x4b0db7 + "@" + IP12 + ":" + PT12 + "?encryption=none&security=tls&sni=" + _0x5272a8 + "&fp=randomized&type=ws&host=" + _0x5272a8 + "&path=%2F%3Fed%3D2560#CF_V12_" + IP12 + "_" + PT12 + "\nvless://" + _0x4b0db7 + "@" + IP13 + ":" + PT13 + "?encryption=none&security=tls&sni=" + _0x5272a8 + "&fp=randomized&type=ws&host=" + _0x5272a8 + "&path=%2F%3Fed%3D2560#CF_V13_" + IP13 + "_" + PT13);
  return "" + _0x3b5cb9;
}
function getpclConfig(_0x57ca23, _0x540d50) {
  return "\nport: 7890\nallow-lan: true\nmode: rule\nlog-level: info\nunified-delay: true\nglobal-client-fingerprint: chrome\ndns:\n  enable: false\n  listen: :53\n  ipv6: true\n  enhanced-mode: fake-ip\n  fake-ip-range: 198.18.0.1/16\n  default-nameserver: \n    - 223.5.5.5\n    - 114.114.114.114\n    - 8.8.8.8\n  nameserver:\n    - https://dns.alidns.com/dns-query\n    - https://doh.pub/dns-query\n  fallback:\n    - https://1.0.0.1/dns-query\n    - tls://dns.google\n  fallback-filter:\n    geoip: true\n    geoip-code: CN\n    ipcidr:\n      - 240.0.0.0/4\n\nproxies:\n- name: CF_V8_" + IP8 + "_" + PT8 + "\n  type: vless\n  server: " + IP8.replace(/[\[\]]/g, "") + "\n  port: " + PT8 + "\n  uuid: " + _0x57ca23 + "\n  udp: false\n  tls: true\n  network: ws\n  servername: " + _0x540d50 + "\n  ws-opts:\n    path: \"/?ed=2560\"\n    headers:\n      Host: " + _0x540d50 + "\n\n- name: CF_V9_" + IP9 + "_" + PT9 + "\n  type: vless\n  server: " + IP9.replace(/[\[\]]/g, "") + "\n  port: " + PT9 + "\n  uuid: " + _0x57ca23 + "\n  udp: false\n  tls: true\n  network: ws\n  servername: " + _0x540d50 + "\n  ws-opts:\n    path: \"/?ed=2560\"\n    headers:\n      Host: " + _0x540d50 + "\n\n- name: CF_V10_" + IP10 + "_" + PT10 + "\n  type: vless\n  server: " + IP10.replace(/[\[\]]/g, "") + "\n  port: " + PT10 + "\n  uuid: " + _0x57ca23 + "\n  udp: false\n  tls: true\n  network: ws\n  servername: " + _0x540d50 + "\n  ws-opts:\n    path: \"/?ed=2560\"\n    headers:\n      Host: " + _0x540d50 + "\n\n- name: CF_V11_" + IP11 + "_" + PT11 + "\n  type: vless\n  server: " + IP11.replace(/[\[\]]/g, "") + "\n  port: " + PT11 + "\n  uuid: " + _0x57ca23 + "\n  udp: false\n  tls: true\n  network: ws\n  servername: " + _0x540d50 + "\n  ws-opts:\n    path: \"/?ed=2560\"\n    headers:\n      Host: " + _0x540d50 + "\n\n- name: CF_V12_" + IP12 + "_" + PT12 + "\n  type: vless\n  server: " + IP12.replace(/[\[\]]/g, "") + "\n  port: " + PT12 + "\n  uuid: " + _0x57ca23 + "\n  udp: false\n  tls: true\n  network: ws\n  servername: " + _0x540d50 + "\n  ws-opts:\n    path: \"/?ed=2560\"\n    headers:\n      Host: " + _0x540d50 + "\n\n- name: CF_V13_" + IP13 + "_" + PT13 + "\n  type: vless\n  server: " + IP13.replace(/[\[\]]/g, "") + "\n  port: " + PT13 + "\n  uuid: " + _0x57ca23 + "\n  udp: false\n  tls: true\n  network: ws\n  servername: " + _0x540d50 + "\n  ws-opts:\n    path: \"/?ed=2560\"\n    headers:\n      Host: " + _0x540d50 + "\n\nproxy-groups:\n- name: 负载均衡\n  type: load-balance\n  url: http://www.gstatic.com/generate_204\n  interval: 300\n  proxies:\n    - CF_V8_" + IP8 + "_" + PT8 + "\n    - CF_V9_" + IP9 + "_" + PT9 + "\n    - CF_V10_" + IP10 + "_" + PT10 + "\n    - CF_V11_" + IP11 + "_" + PT11 + "\n    - CF_V12_" + IP12 + "_" + PT12 + "\n    - CF_V13_" + IP13 + "_" + PT13 + "\n\n- name: 自动选择\n  type: url-test\n  url: http://www.gstatic.com/generate_204\n  interval: 300\n  tolerance: 50\n  proxies:\n    - CF_V8_" + IP8 + "_" + PT8 + "\n    - CF_V9_" + IP9 + "_" + PT9 + "\n    - CF_V10_" + IP10 + "_" + PT10 + "\n    - CF_V11_" + IP11 + "_" + PT11 + "\n    - CF_V12_" + IP12 + "_" + PT12 + "\n    - CF_V13_" + IP13 + "_" + PT13 + "\n\n- name: 🌍选择代理\n  type: select\n  proxies:\n    - 负载均衡\n    - 自动选择\n    - DIRECT\n    - CF_V8_" + IP8 + "_" + PT8 + "\n    - CF_V9_" + IP9 + "_" + PT9 + "\n    - CF_V10_" + IP10 + "_" + PT10 + "\n    - CF_V11_" + IP11 + "_" + PT11 + "\n    - CF_V12_" + IP12 + "_" + PT12 + "\n    - CF_V13_" + IP13 + "_" + PT13 + "\n\nrules:\n  - GEOIP,LAN,DIRECT\n  - GEOIP,CN,DIRECT\n  - MATCH,🌍选择代理";
}
function getpsbConfig(_0x2e2c17, _0x550dfd) {
  return "{\n\t\t  \"log\": {\n\t\t\t\"disabled\": false,\n\t\t\t\"level\": \"info\",\n\t\t\t\"timestamp\": true\n\t\t  },\n\t\t  \"experimental\": {\n\t\t\t\"clash_api\": {\n\t\t\t  \"external_controller\": \"127.0.0.1:9090\",\n\t\t\t  \"external_ui\": \"ui\",\n\t\t\t  \"external_ui_download_url\": \"\",\n\t\t\t  \"external_ui_download_detour\": \"\",\n\t\t\t  \"secret\": \"\",\n\t\t\t  \"default_mode\": \"Rule\"\n\t\t\t},\n\t\t\t\"cache_file\": {\n\t\t\t  \"enabled\": true,\n\t\t\t  \"path\": \"cache.db\",\n\t\t\t  \"store_fakeip\": true\n\t\t\t}\n\t\t  },\n\t\t  \"dns\": {\n\t\t\t\"servers\": [\n\t\t\t  {\n\t\t\t\t\"tag\": \"proxydns\",\n\t\t\t\t\"address\": \"tls://8.8.8.8/dns-query\",\n\t\t\t\t\"detour\": \"select\"\n\t\t\t  },\n\t\t\t  {\n\t\t\t\t\"tag\": \"localdns\",\n\t\t\t\t\"address\": \"h3://223.5.5.5/dns-query\",\n\t\t\t\t\"detour\": \"direct\"\n\t\t\t  },\n\t\t\t  {\n\t\t\t\t\"tag\": \"dns_fakeip\",\n\t\t\t\t\"address\": \"fakeip\"\n\t\t\t  }\n\t\t\t],\n\t\t\t\"rules\": [\n\t\t\t  {\n\t\t\t\t\"outbound\": \"any\",\n\t\t\t\t\"server\": \"localdns\",\n\t\t\t\t\"disable_cache\": true\n\t\t\t  },\n\t\t\t  {\n\t\t\t\t\"clash_mode\": \"Global\",\n\t\t\t\t\"server\": \"proxydns\"\n\t\t\t  },\n\t\t\t  {\n\t\t\t\t\"clash_mode\": \"Direct\",\n\t\t\t\t\"server\": \"localdns\"\n\t\t\t  },\n\t\t\t  {\n\t\t\t\t\"rule_set\": \"geosite-cn\",\n\t\t\t\t\"server\": \"localdns\"\n\t\t\t  },\n\t\t\t  {\n\t\t\t\t\"rule_set\": \"geosite-geolocation-!cn\",\n\t\t\t\t\"server\": \"proxydns\"\n\t\t\t  },\n\t\t\t  {\n\t\t\t\t\"rule_set\": \"geosite-geolocation-!cn\",\n\t\t\t\t\"query_type\": [\n\t\t\t\t  \"A\",\n\t\t\t\t  \"AAAA\"\n\t\t\t\t],\n\t\t\t\t\"server\": \"dns_fakeip\"\n\t\t\t  }\n\t\t\t],\n\t\t\t\"fakeip\": {\n\t\t\t  \"enabled\": true,\n\t\t\t  \"inet4_range\": \"198.18.0.0/15\",\n\t\t\t  \"inet6_range\": \"fc00::/18\"\n\t\t\t},\n\t\t\t\"independent_cache\": true,\n\t\t\t\"final\": \"proxydns\"\n\t\t  },\n\t\t  \"inbounds\": [\n\t\t\t{\n\t\t\t  \"type\": \"tun\",\n                        \"tag\": \"tun-in\",\n\t\t  \"address\": [\n                    \"172.19.0.1/30\",\n\t\t    \"fd00::1/126\"\n      ],\n\t\t\t  \"auto_route\": true,\n\t\t\t  \"strict_route\": true,\n\t\t\t  \"sniff\": true,\n\t\t\t  \"sniff_override_destination\": true,\n\t\t\t  \"domain_strategy\": \"prefer_ipv4\"\n\t\t\t}\n\t\t  ],\n\t\t  \"outbounds\": [\n\t\t\t{\n\t\t\t  \"tag\": \"select\",\n\t\t\t  \"type\": \"selector\",\n\t\t\t  \"default\": \"auto\",\n\t\t\t  \"outbounds\": [\n\t\t\t\t\"auto\",\n\t\t\t\t\"CF_V8_" + IP8 + "_" + PT8 + "\",\n\t\t\t\t\"CF_V9_" + IP9 + "_" + PT9 + "\",\n\t\t\t\t\"CF_V10_" + IP10 + "_" + PT10 + "\",\n\t\t\t\t\"CF_V11_" + IP11 + "_" + PT11 + "\",\n\t\t\t\t\"CF_V12_" + IP12 + "_" + PT12 + "\",\n\t\t\t\t\"CF_V13_" + IP13 + "_" + PT13 + "\"\n\t\t\t  ]\n\t\t\t},\n\t\t\t{\n\t\t\t  \"server\": \"" + IP8 + "\",\n\t\t\t  \"server_port\": " + PT8 + ",\n\t\t\t  \"tag\": \"CF_V8_" + IP8 + "_" + PT8 + "\",\n\t\t\t  \"tls\": {\n\t\t\t\t\"enabled\": true,\n\t\t\t\t\"server_name\": \"" + _0x550dfd + "\",\n\t\t\t\t\"insecure\": false,\n\t\t\t\t\"utls\": {\n\t\t\t\t  \"enabled\": true,\n\t\t\t\t  \"fingerprint\": \"chrome\"\n\t\t\t\t}\n\t\t\t  },\n\t\t\t  \"packet_encoding\": \"packetaddr\",\n\t\t\t  \"transport\": {\n\t\t\t\t\"headers\": {\n\t\t\t\t  \"Host\": [\n\t\t\t\t\t\"" + _0x550dfd + "\"\n\t\t\t\t  ]\n\t\t\t\t},\n\t\t\t\t\"path\": \"/?ed=2560\",\n\t\t\t\t\"type\": \"ws\"\n\t\t\t  },\n\t\t\t  \"type\": \"vless\",\n\t\t\t  \"uuid\": \"" + _0x2e2c17 + "\"\n\t\t\t},\n\t\t\t{\n\t\t\t  \"server\": \"" + IP9 + "\",\n\t\t\t  \"server_port\": " + PT9 + ",\n\t\t\t  \"tag\": \"CF_V9_" + IP9 + "_" + PT9 + "\",\n\t\t\t  \"tls\": {\n\t\t\t\t\"enabled\": true,\n\t\t\t\t\"server_name\": \"" + _0x550dfd + "\",\n\t\t\t\t\"insecure\": false,\n\t\t\t\t\"utls\": {\n\t\t\t\t  \"enabled\": true,\n\t\t\t\t  \"fingerprint\": \"chrome\"\n\t\t\t\t}\n\t\t\t  },\n\t\t\t  \"packet_encoding\": \"packetaddr\",\n\t\t\t  \"transport\": {\n\t\t\t\t\"headers\": {\n\t\t\t\t  \"Host\": [\n\t\t\t\t\t\"" + _0x550dfd + "\"\n\t\t\t\t  ]\n\t\t\t\t},\n\t\t\t\t\"path\": \"/?ed=2560\",\n\t\t\t\t\"type\": \"ws\"\n\t\t\t  },\n\t\t\t  \"type\": \"vless\",\n\t\t\t  \"uuid\": \"" + _0x2e2c17 + "\"\n\t\t\t},\n\t\t\t{\n\t\t\t  \"server\": \"" + IP10 + "\",\n\t\t\t  \"server_port\": " + PT10 + ",\n\t\t\t  \"tag\": \"CF_V10_" + IP10 + "_" + PT10 + "\",\n\t\t\t  \"tls\": {\n\t\t\t\t\"enabled\": true,\n\t\t\t\t\"server_name\": \"" + _0x550dfd + "\",\n\t\t\t\t\"insecure\": false,\n\t\t\t\t\"utls\": {\n\t\t\t\t  \"enabled\": true,\n\t\t\t\t  \"fingerprint\": \"chrome\"\n\t\t\t\t}\n\t\t\t  },\n\t\t\t  \"packet_encoding\": \"packetaddr\",\n\t\t\t  \"transport\": {\n\t\t\t\t\"headers\": {\n\t\t\t\t  \"Host\": [\n\t\t\t\t\t\"" + _0x550dfd + "\"\n\t\t\t\t  ]\n\t\t\t\t},\n\t\t\t\t\"path\": \"/?ed=2560\",\n\t\t\t\t\"type\": \"ws\"\n\t\t\t  },\n\t\t\t  \"type\": \"vless\",\n\t\t\t  \"uuid\": \"" + _0x2e2c17 + "\"\n\t\t\t},\n\t\t\t{\n\t\t\t  \"server\": \"" + IP11 + "\",\n\t\t\t  \"server_port\": " + PT11 + ",\n\t\t\t  \"tag\": \"CF_V11_" + IP11 + "_" + PT11 + "\",\n\t\t\t  \"tls\": {\n\t\t\t\t\"enabled\": true,\n\t\t\t\t\"server_name\": \"" + _0x550dfd + "\",\n\t\t\t\t\"insecure\": false,\n\t\t\t\t\"utls\": {\n\t\t\t\t  \"enabled\": true,\n\t\t\t\t  \"fingerprint\": \"chrome\"\n\t\t\t\t}\n\t\t\t  },\n\t\t\t  \"packet_encoding\": \"packetaddr\",\n\t\t\t  \"transport\": {\n\t\t\t\t\"headers\": {\n\t\t\t\t  \"Host\": [\n\t\t\t\t\t\"" + _0x550dfd + "\"\n\t\t\t\t  ]\n\t\t\t\t},\n\t\t\t\t\"path\": \"/?ed=2560\",\n\t\t\t\t\"type\": \"ws\"\n\t\t\t  },\n\t\t\t  \"type\": \"vless\",\n\t\t\t  \"uuid\": \"" + _0x2e2c17 + "\"\n\t\t\t},\n\t\t\t{\n\t\t\t  \"server\": \"" + IP12 + "\",\n\t\t\t  \"server_port\": " + PT12 + ",\n\t\t\t  \"tag\": \"CF_V12_" + IP12 + "_" + PT12 + "\",\n\t\t\t  \"tls\": {\n\t\t\t\t\"enabled\": true,\n\t\t\t\t\"server_name\": \"" + _0x550dfd + "\",\n\t\t\t\t\"insecure\": false,\n\t\t\t\t\"utls\": {\n\t\t\t\t  \"enabled\": true,\n\t\t\t\t  \"fingerprint\": \"chrome\"\n\t\t\t\t}\n\t\t\t  },\n\t\t\t  \"packet_encoding\": \"packetaddr\",\n\t\t\t  \"transport\": {\n\t\t\t\t\"headers\": {\n\t\t\t\t  \"Host\": [\n\t\t\t\t\t\"" + _0x550dfd + "\"\n\t\t\t\t  ]\n\t\t\t\t},\n\t\t\t\t\"path\": \"/?ed=2560\",\n\t\t\t\t\"type\": \"ws\"\n\t\t\t  },\n\t\t\t  \"type\": \"vless\",\n\t\t\t  \"uuid\": \"" + _0x2e2c17 + "\"\n\t\t\t},\n\t\t\t{\n\t\t\t  \"server\": \"" + IP13 + "\",\n\t\t\t  \"server_port\": " + PT13 + ",\n\t\t\t  \"tag\": \"CF_V13_" + IP13 + "_" + PT13 + "\",\n\t\t\t  \"tls\": {\n\t\t\t\t\"enabled\": true,\n\t\t\t\t\"server_name\": \"" + _0x550dfd + "\",\n\t\t\t\t\"insecure\": false,\n\t\t\t\t\"utls\": {\n\t\t\t\t  \"enabled\": true,\n\t\t\t\t  \"fingerprint\": \"chrome\"\n\t\t\t\t}\n\t\t\t  },\n\t\t\t  \"packet_encoding\": \"packetaddr\",\n\t\t\t  \"transport\": {\n\t\t\t\t\"headers\": {\n\t\t\t\t  \"Host\": [\n\t\t\t\t\t\"" + _0x550dfd + "\"\n\t\t\t\t  ]\n\t\t\t\t},\n\t\t\t\t\"path\": \"/?ed=2560\",\n\t\t\t\t\"type\": \"ws\"\n\t\t\t  },\n\t\t\t  \"type\": \"vless\",\n\t\t\t  \"uuid\": \"" + _0x2e2c17 + "\"\n\t\t\t},\n\t\t\t{\n\t\t\t  \"tag\": \"direct\",\n\t\t\t  \"type\": \"direct\"\n\t\t\t},\n\t\t\t{\n\t\t\t  \"tag\": \"auto\",\n\t\t\t  \"type\": \"urltest\",\n\t\t\t  \"outbounds\": [\n\t\t\t\t\"CF_V8_" + IP8 + "_" + PT8 + "\",\n\t\t\t\t\"CF_V9_" + IP9 + "_" + PT9 + "\",\n\t\t\t\t\"CF_V10_" + IP10 + "_" + PT10 + "\",\n\t\t\t\t\"CF_V11_" + IP11 + "_" + PT11 + "\",\n\t\t\t\t\"CF_V12_" + IP12 + "_" + PT12 + "\",\n\t\t\t\t\"CF_V13_" + IP13 + "_" + PT13 + "\"\n\t\t\t  ],\n\t\t\t  \"url\": \"https://www.gstatic.com/generate_204\",\n\t\t\t  \"interval\": \"1m\",\n\t\t\t  \"tolerance\": 50,\n\t\t\t  \"interrupt_exist_connections\": false\n\t\t\t}\n\t\t  ],\n\t\t  \"route\": {\n\t\t\t\"rule_set\": [\n\t\t\t  {\n\t\t\t\t\"tag\": \"geosite-geolocation-!cn\",\n\t\t\t\t\"type\": \"remote\",\n\t\t\t\t\"format\": \"binary\",\n\t\t\t\t\"url\": \"https://cdn.jsdelivr.net/gh/MetaCubeX/meta-rules-dat@sing/geo/geosite/geolocation-!cn.srs\",\n\t\t\t\t\"download_detour\": \"select\",\n\t\t\t\t\"update_interval\": \"1d\"\n\t\t\t  },\n\t\t\t  {\n\t\t\t\t\"tag\": \"geosite-cn\",\n\t\t\t\t\"type\": \"remote\",\n\t\t\t\t\"format\": \"binary\",\n\t\t\t\t\"url\": \"https://cdn.jsdelivr.net/gh/MetaCubeX/meta-rules-dat@sing/geo/geosite/geolocation-cn.srs\",\n\t\t\t\t\"download_detour\": \"select\",\n\t\t\t\t\"update_interval\": \"1d\"\n\t\t\t  },\n\t\t\t  {\n\t\t\t\t\"tag\": \"geoip-cn\",\n\t\t\t\t\"type\": \"remote\",\n\t\t\t\t\"format\": \"binary\",\n\t\t\t\t\"url\": \"https://cdn.jsdelivr.net/gh/MetaCubeX/meta-rules-dat@sing/geo/geoip/cn.srs\",\n\t\t\t\t\"download_detour\": \"select\",\n\t\t\t\t\"update_interval\": \"1d\"\n\t\t\t  }\n\t\t\t],\n\t\t\t\"auto_detect_interface\": true,\n\t\t\t\"final\": \"select\",\n\t\t\t\"rules\": [\n                          {\n                         \"inbound\": \"tun-in\",\n                          \"action\": \"sniff\"\n                          },\n                          {\n                          \"protocol\": \"dns\",\n                          \"action\": \"hijack-dns\"\n                           },\n                          {\n                           \"port\": 443,\n                          \"network\": \"udp\",\n                          \"action\": \"reject\"\n                          },\n\t\t\t  {\n\t\t\t\t\"clash_mode\": \"Direct\",\n\t\t\t\t\"outbound\": \"direct\"\n\t\t\t  },\n\t\t\t  {\n\t\t\t\t\"clash_mode\": \"Global\",\n\t\t\t\t\"outbound\": \"select\"\n\t\t\t  },\n\t\t\t  {\n\t\t\t\t\"rule_set\": \"geoip-cn\",\n\t\t\t\t\"outbound\": \"direct\"\n\t\t\t  },\n\t\t\t  {\n\t\t\t\t\"rule_set\": \"geosite-cn\",\n\t\t\t\t\"outbound\": \"direct\"\n\t\t\t  },\n\t\t\t  {\n\t\t\t\t\"ip_is_private\": true,\n\t\t\t\t\"outbound\": \"direct\"\n\t\t\t  },\n\t\t\t  {\n\t\t\t\t\"rule_set\": \"geosite-geolocation-!cn\",\n\t\t\t\t\"outbound\": \"select\"\n\t\t\t  }\n\t\t\t]\n\t\t  },\n\t\t  \"ntp\": {\n\t\t\t\"enabled\": true,\n\t\t\t\"server\": \"time.apple.com\",\n\t\t\t\"server_port\": 123,\n\t\t\t\"interval\": \"30m\",\n\t\t\t\"detour\": \"direct\"\n\t\t  }\n\t\t}";
}